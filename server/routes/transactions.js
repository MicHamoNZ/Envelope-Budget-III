const express = require('express');
const router = express.Router();

router.use(express.json());

const {
    getTransactions,
    getTransactionById,
    getTransactionsByDate,
    updateTransactions,
} = require('../controllers/transactions');

router.get('/transactions/', getTransactions);

router.get('/transactions/:id', getTransactionById);

router.get('/transactions/[date]', getTransactionsByDate);

router.put('/transactions/:id', updateTransactions);

module.exports = router;