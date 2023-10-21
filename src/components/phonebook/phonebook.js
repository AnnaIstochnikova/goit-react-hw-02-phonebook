import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    showContactList: true,
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
    //console.log(searchWord);
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phoneNumber = form.elements.number.value;

    this.setState(prevState => {
      const allContacts = [...prevState.contacts, `${name}: ${phoneNumber}`];
      return {
        contacts: allContacts,
        name: '',
        number: '',
        showContactList: true,
      };
    });
  };
  onChangeFn = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name, number, contacts, filter, showContactList } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.toLowerCase().includes(filter)
    );
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <>
            <h3>Name</h3>
            <input
              className="input--name"
              value={name}
              onChange={this.onChangeFn}
              type="text"
              name="name"
              //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <h3>Number</h3>
            <input
              value={number}
              onChange={this.onChangeFn}
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
            <NamesList
              allContacts={filteredContacts}
              onDelete={this.deleteContact}
            />
          )}
        </form>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="find-contact"
          onChange={this.findContact}
        ></input>
      </>
    );
  }
}

const NamesList = ({ allContacts, onDelete, id }) => {
  const listItems = allContacts.map(contact => {
    id = nanoid();
    return (
      <li key={id}>
        {contact}
        <button type="button" onClick={() => onDelete(contact)}>
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
