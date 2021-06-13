const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        const { name, subject, description } = request.body;

        await connection('tickets').insert({
            name,
            subject,
            description,
        });

        return response.json({ message: "Ticket cadastrado com sucesso" });
    },

    async getTickets(request, response) {
        const tickets = await connection('tickets').select('*');

        return response.json(tickets);
    },


    async getTicketsById(request, response) {
        const { id } = request.params;

        const ticket = await connection('tickets')
            .where('id', id)
            .select('*');

        return response.json(ticket)
    },

    async removeTicket(request, response) {
        const { id } = request.params;

        const ticket = await connection('tickets')
            .where('id', id)
            .delete();

        return response.status(204).send();
    },

    async updateTicket(request, response) {
        const { id, name, subject, description } = request.body;

        try {

            await connection('tickets')
                .update({ id, name, subject, description })
                .where('id', id)

            return response.json({ message: "Ticket alterado com sucesso" });

        } catch (error) {
            next(error)
        }

    }
}
