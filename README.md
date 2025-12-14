# Phonebook Application

A modern React-based phonebook application with a Matrix-themed interface for managing contacts.

## 🚀 Features

- **Add Contacts**: Create new contacts with name and phone number
- **Search Contacts**: Real-time filtering by name or phone number (case-insensitive)
- **Delete Contacts**: Remove contacts from your phonebook
- **Data Persistence**: Contacts are saved to browser's localStorage
- **Form Validation**: Input validation using Formik and Yup
- **Duplicate Prevention**: Prevents adding contacts with existing names
- **Matrix Theme**: Dark green monospace styling inspired by The Matrix

## 🛠️ Technologies

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Formik** - Form management
- **Yup** - Schema validation
- **nanoid** - Unique ID generation
- **CSS Modules** - Component-scoped styling
- **Prettier** - Code formatting
- **ESLint** - Code linting

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/b01ma/goit-neo-react-hw-module3.git

# Navigate to project directory
cd goit-neo-react-hw-module3

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📁 Project Structure

```
src/
├── components/
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.module.css
│   ├── ContactForm/
│   │   ├── ContactForm.jsx
│   │   └── ContactForm.module.css
│   ├── ContactList/
│   │   ├── ContactList.jsx
│   │   └── ContactList.module.css
│   └── SearchBox/
│       ├── SearchBox.jsx
│       └── SearchBox.module.css
├── data/
│   └── contactList.json
├── App.jsx
├── App.module.css
├── index.css
└── main.jsx
```

## 🎨 Component Overview

### App
Root component managing application state (contacts, filter) and localStorage integration.

### ContactForm
Form for adding new contacts with validation:
- Name: 3-50 characters, required
- Number: 3-50 characters, digits and dashes only, required

### SearchBox
Search input for filtering contacts by name or phone number in real-time.

### ContactList
Displays filtered list of contacts, passes delete handler to Contact components.

### Contact
Individual contact card showing name, phone number, and delete button.

## 💾 Data Persistence

Contacts are automatically saved to browser's localStorage:
- Loaded on application start
- Saved whenever contacts are added or deleted
- Falls back to initial test data if localStorage is empty

## ✨ Form Validation

The contact form includes comprehensive validation:
- **Name field**: Must be 3-50 characters, trimmed whitespace, required
- **Number field**: Must be 3-50 characters, only digits and dashes allowed, required
- **Duplicate check**: Prevents adding contacts with names that already exist (case-insensitive)

## 🎭 Styling

The application features a unique Matrix-inspired theme:
- Dark background (#0d0208)
- Bright green text (#00ff00, #00ff41)
- Monospace font (Courier New)
- Glowing borders and text shadows
- Interactive hover effects

## 📝 License

This project is created as part of GoIT React course (Module 3).

## 👨‍💻 Author

**b01ma**
- GitHub: [@b01ma](https://github.com/b01ma)

## 🔗 Links

- [Live Demo](https://your-vercel-deployment-url.vercel.app)
- [Repository](https://github.com/b01ma/goit-neo-react-hw-module3)
