import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
