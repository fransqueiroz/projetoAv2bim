import React from 'react'

export default props => {

    const renderList = () => {
        const list = props.list

        if(list){
            return list.map( ticket => (
                <div className="ticketsList" id={ticket.id} key={ticket.id}>
                    <div className="ticket_update"
                        onClick={() => props.openForm(ticket)}
                    >
                        <span class="material-icons">create</span>
                    </div>
                    <div className="ticket_delete"
                        onClick={() => props.handleRemove(ticket)}
                    >
                        <span class="material-icons">delete</span>
                    </div>
                    <div className="ticket_header">
                        <h2 className="ticket_name">{ticket.name}</h2>
                        <p className="ticket_subject">Assunto: {ticket.subject}</p>
                    </div>
                    <div className="ticket_body">
                        <p className="ticket_description">
                            {ticket.description}
                        </p>
                    </div>
                </div>
            ))
        } else {
            return (
                <div className="listEmpty">
                    <h3 className="listEmptyDescription">
                        Você não tem tickets cadastrados
                    </h3>
                </div>
            )
        }
    }

    return (
        <div className="tickets_list">
            <h1 className="titles">Tickets</h1>
            <a className="button_add_tickets"
                onClick={() => props.openFormList()}
            >
                <span class="material-icons">add_circle</span>
                Adicionar Ticket
            </a>
            <div className="tickets_container_card">
                {renderList()}
            </div>
        </div>
    )
}