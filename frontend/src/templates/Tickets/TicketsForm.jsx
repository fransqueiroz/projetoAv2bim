import React from 'react'

export default props => {

    const width= 620;

    const [xPosition, setX] = React.useState(-width);

    const [id, setId] = React.useState('')

    console.log('teste');


    return (
    <React.Fragment>
        <div
        className="ticket_form"
        style={{
            right: `${xPosition}px`
        }}
        >
        <div className="content">Form</div>
        </div>
    </React.Fragment>
    );


}