import './ModalDialog.css'

export const ModalDialog = ({label, message, onConfirm, onCancel}) => {
    return (
        <div className="modal-dialog">
            <div className="modal-dialog__header">
                {label}
            </div>
            <div  className="modal-dialog__message">
                {message}
            </div>
            <div className="modal-dialog__footer">
                <button className="modal-dialog__button" onClick={onConfirm}>Confirm</button>
                <button className="modal-dialog__button" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}