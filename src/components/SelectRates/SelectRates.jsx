import { useDispatch, useSelector } from 'react-redux';
import { selectCurrency } from '../../redux/currency/selectors';
import Select from 'react-select';
import symbols from './symbols.json';
import styles from './SelectRates.module.css';
import './ReactSelect.css';
import { setBaseCurrensy } from '../../redux/currency/slice';

const SelectRates = () => {
  const dispatch = useDispatch();

  const baseCurrency = useSelector(selectCurrency);

  const handleOnChange = selectedOption => {
    dispatch(setBaseCurrensy(selectedOption.value));
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        options={symbols}
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        isSearchable
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SelectRates;
