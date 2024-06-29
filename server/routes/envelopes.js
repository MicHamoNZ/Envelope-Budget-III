const express = require('express');
const router = express.Router();

router.use(express.json());

const {
  getEnvelopes,
  getEnvelopeById,
  getEnvelopeTransactions,
  addEnvelope,
  deleteEnvelope,
  updateEnvelope,
  addEnvelopeTransaction,
} = require('../controllers/envelopes');

/**
 *  @swagger
 *  /api/v1/envelopes:
 *      get:
 *          summary: Get all envelopes
 *          produces:
 *              - application/json
 *          tags:
 *              - Envelopes
 *          responses:
 *              "200":
 *                  description: Returns a list of all envelopes
 *
 */
router.get('/', getEnvelopes);

/**
 *
 */
router.get('/:id', getEnvelopeById);

router.post('/', addEnvelope);

router.put('/:id', updateEnvelope);

router.delete('/:id', deleteEnvelope);

router.get('/:id/transactions', getEnvelopeTransactions);

router.post('/:id/transactions', addEnvelopeTransaction);

module.exports = router;
