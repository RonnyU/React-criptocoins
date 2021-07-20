import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './components/Form';
import Consult from './components/Consult';
import axios from 'axios';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [coin, setCoin] = useState('');
  const [coinCripto, setCripto] = useState('');
  const [apiResponse, setApiResponse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const consultCiptoCoin = async () => {
      //evitar la ejecución la primera ves
      if (coin === '') return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinCripto}&tsyms=${coin}`;
      const result = await axios.get(url);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setApiResponse(result.data.DISPLAY[coinCripto][coin]);
      }, 3000);
    };
    consultCiptoCoin();
  }, [coin, coinCripto]);

  const Component = loading ? (
    <Spinner />
  ) : (
    <Consult apiResponse={apiResponse} />
  );

  return (
    <Container>
      <div>
        <Image src={image} />
      </div>
      <div>
        <Heading>Quote Cryptocurrencies instantly</Heading>
        <Form setCoin={setCoin} setCripto={setCripto} />
        {Component}
      </div>
    </Container>
  );
}

export default App;
