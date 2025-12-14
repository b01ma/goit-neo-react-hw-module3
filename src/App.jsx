import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import contactsList from './data/contactList.json';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState('');

  const handleFilter = (value) => {
    setFilter(value);
  };

  const filteredContacts = contactsList.filter((contact) => {
    const { name, number } = contact;
    const lowerFilter = filter.toLowerCase();

    return (
      name.toLowerCase().includes(lowerFilter) ||
      number.toLowerCase().includes(lowerFilter)
    );
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <div className={styles.section}>
        <ContactForm />
      </div>
      <div className={styles.section}>
        <SearchBox value={filter} onFilter={handleFilter} />
      </div>
      <div className={styles.section}>
        <ContactList contacts={filteredContacts} />
      </div>
    </div>
  );
}

export default App;
