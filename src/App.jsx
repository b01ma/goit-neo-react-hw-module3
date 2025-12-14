import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import contactsList from './data/contactList.json';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    // check local storage
    const saved = localStorage.getItem('contacts');
    // if local storage is empty => use Contact List
    try {
      return saved ? JSON.parse(saved) : contactsList; // fallback to bundled data
    } catch {
      return contactsList;
    }
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) => {
    const { name, number } = contact;
    const lowerFilter = filter.toLowerCase();

    return (
      name.toLowerCase().includes(lowerFilter) ||
      number.toLowerCase().includes(lowerFilter)
    );
  });

  const handleAddContact = (values) => {
    // Check for duplicate names (case-insensitive)
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts!`);
      return;
    }

    setContacts((prev) => [...prev, { ...values, id: nanoid() }]);
  };

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <div className={styles.section}>
        <ContactForm handleAddContact={handleAddContact} />
      </div>
      <div className={styles.section}>
        <SearchBox value={filter} onFilter={handleFilter} />
      </div>
      <div className={styles.section}>
        <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
