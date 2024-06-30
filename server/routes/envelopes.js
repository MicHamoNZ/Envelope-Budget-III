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

/**
 * @swagger
 * /api/v1/envelopes:
 *    post:
 *      summary: Creates a new envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      requestBody:
 *        description: Data for new envelope
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                envelope_name:
 *                  type: string
 *                budget:
 *                  type: money
 *              example:
 *                envelope_name: Clothing
 *                budget: 500
 *      responses:
 *        "201":
 *          description: Returns created envelope.
 *        "500":
 *          description: Internal server error.
 *
 */
router.post('/', addEnvelope);

/**
 * @swagger
 * /api/v1/envelopes/{id}:
 *    put:
 *      summary: Updates an existing envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Envelope Id
 *          type: integer
 *          required: true
 *          example: 1
 *      requestBody:
 *        description: Data for new envelope
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                envelope_name:
 *                  type: string
 *                budget:
 *                  type: money
 *              example:
 *                envelope_name: Clothing
 *                budget: 500
 *      responses:
 *        "201":
 *          description: Returns created envelope.
 *        "404":
 *          description: Envelope not found.
 *        "500":
 *          description: Internal server error.
 *
 */
router.put('/:id', updateEnvelope);

/**
 * @swagger
 * /api/v1/envelopes:
 *    delete:
 *      summary: Creates a new envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Envelope Id to delete
 *          type: integer
 *          required: true
 *          example: 1
 *      responses:
 *        "204":
 *          description: Envelope deleted
 *        "404":
 *          description: Envelope not found
 *        "500":
 *          description: Internal server error
 *
 */
router.delete('/:id', deleteEnvelope);

/**
 * @swagger
 * /api/v1/envelopes/{id}/transactions:
 *    get:
 *      summary: Get an envelope transactions by envelope Id
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: envelope Id
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
router.get('/:id/transactions', getEnvelopeTransactions);

/**
 * @swagger
 * /api/v1/envelopes/{id}/transactions:
 *    post:
 *      summary: Creates a new envelope transaction
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Envelope id
 *          type: integer
 *          required: true
 *          example: 1
 *      requestBody:
 *        description: Data for new envelope transaction
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                amount:
 *                  type: money
 *              example:
 *                description: Pizza
 *                amount: 15
 *      responses:
 *        "201":
 *          description: Returns created envelope
 *        "500":
 *          description: Internal server error
 */
router.post('/:id/transactions', addEnvelopeTransaction);

module.exports = router;
