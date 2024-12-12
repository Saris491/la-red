import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type Props = {
  title: string;
  description: string;
  show: boolean;
  onClose: any;
  onConfirm: any;
}

function ConfirmationModal({title, description, show, onClose, onConfirm}: Props) {

  return (
    <>
      <Modal className="modal" show={show}
        onHide={() => onClose()} keyboard={false} backdrop="static"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="confirmation-modal__text">
            {description}
          </p>
          <div className="modal__btn-area">
            <Button variant="text" className="border-animation g2" onClick={() => onClose()}>
              Nee, ga terug
            </Button>
            <Button variant="primary" size="sm" onClick={() => onConfirm()}>
              Ja, ik weet het zeker
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConfirmationModal;
