import {Modal, Button} from 'react-bootstrap';
import styles from './ConfirmDialog.module.css'



const ConfirmDialog = ({
    show,
    onClose, 
    onSave
    
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header className={styles.modal} closeButton>
                <Modal.Title >Delete Bait</Modal.Title>
            </Modal.Header>
            <Modal.Body  >
                <p  className={styles.modal_paragraph}>Are you sure you want to delete this post?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose} >Cancel</Button>
                <Button  variant="custom" className={styles.btnCustom}
                  onClick={onSave}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;