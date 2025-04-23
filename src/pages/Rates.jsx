import { Wave } from 'react-animated-text';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrency,
  selectFilteredRates,
  selectIsError,
  selectIsLoading,
} from '../redux/currency/selectors';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import { getCurrentExchangeRates } from '../redux/currency/operations';
import RatesList from '../components/RatesList/RatesList';
import Loader from '../components/Loader/Loader';
import Filter from '../components/Filter/Filter';

const Rates = () => {
  const dispatch = useDispatch();

  const baseCurrency = useSelector(selectCurrency);
  const filteredRates = useSelector(selectFilteredRates);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCurrentExchangeRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${'UAH'} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />

        <Filter />

        {isLoading && <Loader />}
        {filteredRates.length > 0 && <RatesList />}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
