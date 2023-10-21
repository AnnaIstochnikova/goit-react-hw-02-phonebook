import { nanoid } from 'nanoid';

export { Filter, ContactForm, ContactList };

const Filter = ({ filterFn }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        className="find-contact"
        name="find-contact"
        onChange={filterFn}
      ></input>
    </>
  );
};

const ContactForm = ({ handleSubmitFn }) => {
  return (
    <form onSubmit={event => handleSubmitFn(event)}>
      <>
        <h3>Name</h3>
        <input
          className="input--name"
          type="text"
          name="name"
          //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className="button--submit" type="submit">
          Add contact
        </button>
      </>
    </form>
  );
};

const ContactList = ({ allContacts, onDelete, id }) => {
  const listItems = allContacts.map(contact => {
    id = nanoid();
    return (
      <li key={id}>
        {contact}
        <button
          className="button-delete"
          type="button"
          onClick={() => onDelete(contact)}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ul>{listItems}</ul>;
};
