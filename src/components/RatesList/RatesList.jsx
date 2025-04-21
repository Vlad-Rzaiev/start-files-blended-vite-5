import { useSelector } from 'react-redux';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import {
  selectCurrency,
  selectFilteredRates,
} from '../../redux/currency/selectors';

import styles from './RatesList.module.css';

const RatesList = () => {
  const filteredRates = useSelector(selectFilteredRates);
  const baseCurrency = useSelector(selectCurrency);

  return (
    <Grid>
      {filteredRates.map(({ code, rate }, idx) => (
        <GridItem key={idx}>
          <p className={styles.text}>
            1 {code} = {rate} {baseCurrency}
          </p>
        </GridItem>
      ))}
    </Grid>
  );
};
export default RatesList;
