
const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0) {
        return (
            <img 
                src={message.attachments[0].file}
                alt="message-attachement"
                className="message-image"
                style={{ float: "right"}}
            />
        )
    }
    return (
        <div className="message-sent" style={{ float: "right", marginRight: "18px"}}>
            {message.text}
        </div>
    )
}

export default MyMessage;