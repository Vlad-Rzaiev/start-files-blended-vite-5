import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Filter;
