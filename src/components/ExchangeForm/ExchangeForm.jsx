import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { getExchangeData } from '../../redux/currency/operations';

const pattern = /^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$/;

const ExchangeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.elements.currency.value.toLowerCase().trim();
    const isValid = pattern.test(value);

    if (!isValid) {
      toast.error(
        `Incorrect input value!\n\nPlease enter your value in "15 USD in UAH" format.`,
        {
          duration: 6000,
        },
      );
      return;
    }

    const [amount, from, , to] = value.split(' ');

    const requestData = {
      amount,
      from,
      to,
    };

    dispatch(getExchangeData(requestData));

    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        className={styles.input}
        name="currency"
      />
    </form>
  );
};

export default ExchangeForm;
