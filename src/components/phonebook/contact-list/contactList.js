import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ContactList = ({ allContacts, onDelete, id }) => {
  const listItems = allContacts.map(contact => {
    const id = nanoid();
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

ContactList.propTypes = {
  listItems: PropTypes.array,
  onDelete: PropTypes.func,
  id: PropTypes.string,
};
