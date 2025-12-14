import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  return (
    <div className={styles.contactItem}>
      <ul className={styles.contactList}>
        <li className={styles.contactDetail}>
          <span className={styles.label}>Name:</span> {contact.name}
        </li>
        <li className={styles.contactDetail}>
          <span className={styles.label}>Phone:</span> {contact.number}
        </li>
      </ul>
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
};

export default Contact;
