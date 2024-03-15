import styles from './Contact.module.css';
import { eachFirstToUpperCase } from '../../../utils/utils';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../store/contacts/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      <span className={styles.span}>{eachFirstToUpperCase(name)}:</span>
      <span className={styles.span}> {number}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
