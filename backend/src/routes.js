const express = require('express');

const TicketController = require('./controllers/TicketsController');

const routes = express.Router();

routes.post('/tickets', TicketController.create);
routes.get('/tickets', TicketController.getTickets);
routes.get('/tickets/:id', TicketController.getTicketsById);
routes.delete('/tickets/:id', TicketController.removeTicket);

module.exports = routes;