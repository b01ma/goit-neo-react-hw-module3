import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as yup from 'yup';
import styles from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  number: yup
    .string()
    .matches(/^[0-9-]+$/, 'Number can contain only digits and dashes')
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number must be less than 50 characters')
    .required('Number is required'),
});

const ContactForm = ({ handleAddContact }) => {
  const nameFormId = useId();
  const numberFormId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleAddContact(values, actions);
        actions.resetForm();
      }}
      validationSchema={formSchema}
    >
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor={nameFormId} className={styles.label}>
            Contact Name
          </label>
          <Field
            id={nameFormId}
            name="name"
            placeholder="John Doe"
            className={styles.input}
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={numberFormId} className={styles.label}>
            Contact Number
          </label>
          <Field
            id={numberFormId}
            name="number"
            placeholder="123-456-1289"
            className={styles.input}
          />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
