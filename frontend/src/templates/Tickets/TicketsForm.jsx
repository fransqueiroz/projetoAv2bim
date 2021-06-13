import React from 'react'


//eslint-disable-next-line
export default props => {

    return (
        <React.Fragment>
            <div className={props.open? "ticket_form ticket_form_expanded" : "ticket_form"}>
                <div className="ticket_form_content">
                    <div className="close_form"
                        onClick={() => props.closeForm()}
                    >
                        x
                    </div>
                    <div className="content">
                        <form className="tickets_forms_container">
                            <label for="input_name"> Nome:</label>
                                <input
                                    id="input_name"
                                    type="text"
                                    value={props.name}
                                    onChange={props.handleChangeName}
                                    name="name"
                                />
                            <label for="input_subject"> Assunto:</label>
                                <input
                                    id="input_subject"
                                    type="text"
                                    value={props.subject}
                                    onChange={props.handleChangeSubject}
                                    name="subject"
                                />
                            <label for="input_description"> Descrição:</label>
                                <textarea
                                    id="input_description"
                                    type="text"
                                    value={props.description}
                                    onChange={props.handleChangeDescription}
                                    name="description"
                                />

                            <div className="buttons_content">
                                <a id="button_save" className="button" onClick={props.handleAdd}>Enviar</a>
                                <a id="button_back" className="button" onClick={() => props.closeForm()} >Voltar</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );


}