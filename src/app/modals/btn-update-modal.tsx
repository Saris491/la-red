import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Form } from "react-bootstrap";
import { useEffect } from 'react';
import { isValidUrl } from '../utils/utils';

type Props = {
  btnText: string;
  btnUrl: string;
  show: boolean,
  onClose: any,
  onSave: any
}

export interface BtnUpdate {
  btnText: string;
  btnUrl: string;
}

function ButtonUpdateModal({btnText, btnUrl, show, onClose, onSave}: Props) {
  const onSubmit = (values: BtnUpdate) => {
    if (!formik.isValid) return;
    onSave(values);
  }
  const validationSchema = Yup.object().shape({
    btnText: Yup.string().required('Een titel is vereist'),
    btnUrl: Yup.string().required('Een beschrijving is vereist').test('is valid url', 'Deze url is niet geldig', (value) => isValidUrl(value)),
  });
  const initialValues = { btnText: btnText ?? '', btnUrl: btnUrl ?? '' };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  useEffect(() => {
    formik.setFieldValue('btnText', btnText);
    formik.setFieldValue('btnUrl', btnUrl);
  }, [btnText, btnUrl]);

  return (
    <>
      <Modal className="update-btn-modal" show={show}
        onHide={() => onClose()} keyboard={false} backdrop="static"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Sectie knop aanpassen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form" onSubmit={handleSubmit}>
            <div className="outline form__group">
              <Form.Control
                autoFocus
                onChange={handleChange}
                placeholder="Knop Tekst"
                type="text"
                value={values.btnText}
                name="btnText"
              />
              {errors.btnText && touched.btnText && <div  className="form__error">{errors.btnText}</div>}
            </div>

            <div className="outline form__group">
              <Form.Control
                onChange={handleChange}
                placeholder="Link van de knop"
                type="text"
                value={values.btnUrl}
                name="btnUrl"
              />
              {errors.btnUrl && touched.btnUrl && <div  className="form__error">{errors.btnUrl}</div>}
            </div>

            <div className="form__btn-area">
              <Button variant="text" className="border-animation g2" onClick={() => onClose()}>
                Sluiten
              </Button>
              <Button variant="primary" size="sm" type="submit">
                Wijzigingen opslaan
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ButtonUpdateModal;