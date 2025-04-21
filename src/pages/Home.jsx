import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import ExchangeForm from '../components/ExchangeForm/ExchangeForm';
import { useSelector } from 'react-redux';
import { selectExchangeInfo } from '../redux/currency/selectors';
import ExchangeInfo from '../components/ExchangeInfo/ExchangeInfo';

const Home = () => {
  const isError = false;
  const exchengeInfo = useSelector(selectExchangeInfo);

  return (
    <Section>
      <Container>
        <Heading
          info
          title="What currencies do you want to exchange?🙂"
          bottom
        />

        <ExchangeForm />

        {exchengeInfo && <ExchangeInfo />}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
