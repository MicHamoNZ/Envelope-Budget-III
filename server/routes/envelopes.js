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
 * @swagger
 * /api/v1/envelopes:
 *    get:
 *      summary: Get all envelopes
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      responses:
 *        "200":
 *          description: Returns a list of all envelopes
 *
 */
router.get('/', getEnvelopes);

/**
 * @swagger
 * /api/v1/envelopes/{id}:
 *    get:
 *      summary: Get an envelope by ID
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: envelope id
 *          type: integer
 *          required: true
 *          example: 1
 *      responses:
 *        "200":
 *          description: Returns a an envelope along with its data
 *        "404":
 *          description: Envelope not found
 *        "500":
 *          description: Internal server error
 */
router.get('/:id', getEnvelopeById);

router.post('/', addEnvelope);

router.put('/:id', updateEnvelope);

router.delete('/:id', deleteEnvelope);

router.get('/:id/transactions', getEnvelopeTransactions);

router.post('/:id/transactions', addEnvelopeTransaction);

module.exports = router;
