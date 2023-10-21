import React, { Component } from 'react';

import { ContactForm, Filter, ContactList } from './parts';

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
      for (const element of prevState.contacts) {
        if (element.includes(name)) {
          alert(`${name} is already in contacts`);
          return;
        }
      }
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
        <h1>Phonebook</h1>
        <ContactForm handleSubmitFn={this.handleSubmit} />
        {showContactList && (
          <>
            <Filter filterFn={this.findContact} />
          </>
        )}
        {showContactList && (
          <>
            <h2>Contacts</h2>
            <ContactList
              allContacts={filteredContacts}
              onDelete={this.deleteContact}
            />
          </>
        )}
      </>
    );
  }
}
