import { Link } from 'react-router-dom';
import '../App.css'
import { Button, Modal } from "react-bootstrap";


function RegisterAlert(props) {
  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header id='modalHeader' >
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className='text-success'>Success</h1>
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body id='modalBody'>
        <p className='text-center text-success font-weight-bold h3'>
         Registered Successfully
        </p>
      </Modal.Body>
      <Modal.Footer id='modalFooter'>
      <Link to='/login'> <Button onClick={props.onHide}>Go To LogIn Page</Button></Link>
      </Modal.Footer>
    </Modal>
  );
}
export default RegisterAlert;

