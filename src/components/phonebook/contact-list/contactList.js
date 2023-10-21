import { nanoid } from 'nanoid';

export const ContactList = ({ allContacts, onDelete, id }) => {
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
