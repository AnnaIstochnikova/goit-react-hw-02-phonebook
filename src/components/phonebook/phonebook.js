import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [],
  name: '',
};
export class Phonebook extends Component {
  state = { contacts: [], name: '' };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    this.setState(prevState => {
      const allContacts = [...prevState.contacts, name];
      return {
        contacts: allContacts,
        name: '',
      };
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <NamesList allContacts={this.state.contacts} />
        </form>
      </>
    );
  }
}

const Input = ({ value, onChange }) => {
  return (
    <>
      <h2>Name</h2>
      <input
        className="input--name"
        value={value}
        onChange={onChange}
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button className="button--submit" type="submit">
        Add contact
      </button>
    </>
  );
};

const NamesList = ({ allContacts, id }) => {
  const listItems = allContacts.map(contact => {
    id = nanoid();
    return (
      <li key={id}>
        <p>{contact}</p>
      </li>
    );
  });
  return <ul>{listItems}</ul>;
};
