const { db } = require('../config/index');

// @desc        Get all transactions
// @route       GET /api/v1/transactions
exports.getTransactions = async (req, res) => {
  const query = `SELECT *
        FROM transactions;`;
  try {
    const transactions = await db.query(query);
    if (transactions.rowCount < 1) {
      return res.status(404).send({
        message: 'Records not found.',
      });
    }
    res.status(200).send({
      status: 'Success',
      message: 'Transaction information retrieved.',
      data: transactions.rows,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
};

// @desc        GET a transaction by id
// @route       GET /api/v1/transactions/:id
exports.getTransactionById = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * 
        FROM transactions
        WHERE id = $1;`;
  try {
    const transaction = await db.query(query, [id]);
    if (transaction.rowCount < 1) {
      return res.status(404).send({
        message: 'No transaction information found.',
      });
    }
    res.status(200).send({
      status: 'Success',
      message: 'Transaction information retrieved.',
      data: transaction.rows[0],
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
};

// @desc        Update a transaction
// @route       PUT /api/v1/transactions/:id
exports.updateTransactions = async (req, res) => {
  const { id } = req.params;
  const { description, amount, transaction_dt } = req.body;

  const transactionQuery = `
    SELECT *
    FROM transactions
    WHERE id = $1;
  `;

  const previousAmountQuery = `
    SELECT amount
    FROM transactions
    WHERE id = $1;
  `;

  const updateTransactionQuery = `
    UPDATE transactions
    SET description = $1,
      amount = $2,
      transaction_dt = $3
    WHERE id = $4
    RETURNING *;
  `;

  const updateEnvelopeBudgetQuery = `
    UPDATE envelopes
    SET budget = (budget + CAST($1 AS money) - CAST($2 AS money))
    WHERE id = (
      SELECT envelope_id
      FROM transactions
      WHERE id = $3
    );
  `;

  try {
    // SQL TRANSACTION
    await db.query('BEGIN');
    const transaction = await db.query(transactionQuery, [id]);
    if (transaction.rowCount < 1) {
      return resizeTo.status(404).send({
        message: 'No transaction information found.',
      });
    }

    const prevAmount = await db.query(previousAmountQuery, [id]);

    const updatedTransaction = await db.query(updateTransactionQuery, [
      description,
      amount,
      transaction_dt,
      id,
    ]);

    await db.query(updateEnvelopeBudgetQuery, [
      prevAmount.rows[0].amount,
      amount,
      id,
    ]);

    await db.query('COMMIT');

    res.status(201).send({
      status: 'Success',
      message: 'Transaction has been updated.',
      data: updatedTransaction.rows[0],
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

// @desc        Delete a transaction
// @route       DELETE /api/v1/transactions/:id
exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  const updateEnvBudgetQuery = `
      UPDATE envelopes
      SET budget = budget + $1
      WHERE id IN 
        (
          SELECT envelope_id
          FROM transactions
          WHERE id = $2;
        );
  `;
  const transactionQuery = `
      SELECT *
      FROM transactions
      WHERE id = $1;
  `;
  const transactionAmountQuery = `
      SELECT amount
      FROM transactions
      WHERE id = $1;
  `;
  const deleteTransaction = `
      DELETE FROM transactions
      WHERE id = $1;
  `;

  try {
    // SQL TRANSACTION
    await db.query('BEGIN');
    const transaction = await db.query(transactionQuery, [id]);
    if (transaction.rowCount < 1) {
      return res.status(404).send({
        message: 'No transaction information found.',
      });
    }
    const transactionAmount = await db.query(transactionAmountQuery, [id]);
    await db.query(updateEnvBudgetQuery, [
      transactionAmount.rows[0].amount,
      id,
    ]);
    await db.query(deleteTransaction, [id]);
    await db.query('COMMIT');
    res.status(204).send({
      status: 'Success',
      message: 'Transaction has been deleted.',
    });
  } catch (error) {
    await db.query('ROLLBACK');
    return res.status(500).send({
      error: error.message,
    });
  }
};

/*
// @desc        GET a transactions by date
// @route       GET /api/v1/transactions?date
exports.getTransactionsByDate = async (req, res) => {
  const { date } = Date.parse(req.params.date);
  const query = `SELECT *
        FROM transactions
        WHERE transaction_dt = $1;`;
  try {
    const transactions = await db.query(query, [date]);
    if (transactions.rowCount < 1) {
      return res.status(404).send({
        message: 'No transaction information found.',
      });
    }
    res.status(200).send({
      status: 'Success',
      message: 'Transaction information retrieved.',
      data: transactions.rows[0],
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
};
*/
