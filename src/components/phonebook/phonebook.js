import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  state = {
    contacts: [],
    showContactList: false,
    filter: '',
  };

  deleteContact = contact => {
    this.setState(prevState => {
      const contactsAfterDelete = [
        ...prevState.contacts.filter(oldContact => oldContact !== contact),
      ];
      return {
        contacts: contactsAfterDelete,
      };
    });
  };

  findContact = event => {
    event.preventDefault();
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    let phoneNumber = form.elements.number.value;

    this.setState(prevState => {
      const allContacts = [...prevState.contacts, `${name}: ${phoneNumber}`];
      return {
        contacts: allContacts,
        showContactList: true,
      };
    });
    form.reset();
  };
  render() {
    const { contacts, filter, showContactList } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.toLowerCase().includes(filter)
    );

    return (
      <>
        <h3>Name</h3>
        <form onSubmit={this.handleSubmit}>
          <>
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
          {showContactList && (
            <ContactList
              allContacts={filteredContacts}
              onDelete={this.deleteContact}
            />
          )}
        </form>
        {showContactList && (
          <>
            <h3>Find contacts by name</h3>
            <input
              type="text"
              className="find-contact"
              name="find-contact"
              onChange={this.findContact}
            ></input>
          </>
        )}
      </>
    );
  }
}

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

  return (
    <ul>
      <h2>Contacts</h2>
      {listItems}
    </ul>
  );
};
