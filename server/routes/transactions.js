const express = require('express');
const router = express.Router();

router.use(express.json());

const {
  getTransactions,
  getTransactionById,
  //getTransactionsByDate,
  updateTransactions,
  deleteTransaction,
} = require('../controllers/transactions');

/**
 * @swagger
 * /api/v1/transactions:
 *  get:
 *    summary: Get all transactions
 *    produces:
 *      - application/json
 *    tags:
 *      - Transactions
 *    responses:
 *      "200":
 *        description: Returns all transactions
 */
router.get('/', getTransactions);

/**
 * @swagger
 * /api/v1/transactions/{id}:
 *  get:
 *    summary: Get a transaction by Id
 *    produces:
 *      - application/json
 *    tags:
 *      - Transactions
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Transaction id
 *        type: integer
 *        required: true
 *        example: 1
 *    responses:
 *      "200":
 *        description: Returns a transaction
 *      "404":
 *        description: Transaction not found
 *      "500":
 *        description: Internal server error
 */
router.get('/:id', getTransactionById);

//router.get('/transactions/[date]', getTransactionsByDate);

/**
 * @swagger
 * /api/v1/transactions/{id}:
 *  put:
 *    summary: Update an existing transaction
 *    produces:
 *      - application/json
 *    tags:
 *      - Transactions
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Transaction id
 *        type: integer
 *        required: true
 *        example: 1
 *    requestBody:
 *      description: Data for updating transaction
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *              amount:
 *                type: money
 *              transaction_dt:
 *                type: date
 *            example:
 *              description: Pizza
 *              amount: 15
 *              transaction_dt: 2024-06-24
 *    responses:
 *      "200":
 *        description: Transaction updated
 *      "404":
 *        description: Transaction not found
 *      "500":
 *        description: Internal server error
 */
router.put('/:id', updateTransactions);

/**
 * @swagger
 * /api/v1/transactions/{id}:
 *  delete:
 *    summary: Delete a transaction
 *    produces:
 *      - application/json
 *    tags:
 *      - Transactions
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Transaction Id to delete
 *        type: integer
 *        required: true
 *        example: 1
 *    responses:
 *      "204":
 *        description: Transaction deleted
 *      "404":
 *        description: Transaction not found
 *      "500":
 *        description: Internal server error
 *
 */
router.delete('/:id', deleteTransaction);

module.exports = router;
