import './Modal.css'
import ReactDom from 'react-dom'

export default function Modal({children, handleClose, showModal}) {
    // createPortal takes the template out of App and puts it where we chose
    return ReactDom.createPortal((
        <div className={`modal-backdrop ${showModal ? '' : 'hide'}`}>
            <div className='modal'>
                {children}
                <button onClick={handleClose}>close</button>
            </div>
        </div>
    ), document.body) // template put at the bottom of document.body
}