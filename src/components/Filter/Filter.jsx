import styles from './Filter.module.css';
import { changeFilter } from '../../store/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../store/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const currentValue = useSelector(selectFilter);

  const handleChange = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };
  return (
    <fieldset className={styles.filter}>
      <legend className={styles.legend}>Quickly find the right contact</legend>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={currentValue}
          onChange={handleChange}
        />
      </label>
    </fieldset>
  );
};
