import React, { Component } from 'react';

const INITIAL_STATE = {
  contacts: [],
  name: '',
};
export class Phonebook extends Component {
  state = { contacts: [], name: '' };

  //   handleChange = event => {
  //     this.setState({ name: event.currentTarget.form.elements.value });
  //   };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    //this.props.onSubmit({ ...this.state });
    //this.handleChange();
    this.setState(prevState => {
      const newAndOldContacts = [...prevState.contacts, name];
      return {
        contacts: newAndOldContacts,
        name: name,
      };
    });
    //this.reset();
    console.log(this.state);
    // return (
    //   <>
    //     <Input name={this.state.name} />
    //   </>
    //);
  };

  //   reset = () => {
  //     this.setState({ ...INITIAL_STATE });
  //   };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
          {}
          <NamesList allContacts={this.state.contacts} />
        </form>
      </>
    );
  }
}

const NamesList = ({ allContacts, name, id }) => {
  //allContacts.map(contact => console.log(contact));
  const listItems = allContacts.map(contact => (
    <li key={7}>
      <p>{contact}</p>
    </li>
  ));
  return <ul>{listItems}</ul>;
};
