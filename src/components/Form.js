import React, { useEffect, useState } from 'react';
import Error from './Error';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';
import useCripto from '../hooks/useCripto';
import axios from 'axios';

const Buttond = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ setCoin, setCripto }) => {
  const [criptoList, setCriptoList] = useState([]);
  const [error, setError] = useState(false);
  const COINS = [
    { code: 'USD', name: 'United States Dolar' },
    { code: 'MXN', name: 'Mexican peso' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound sterling' },
    { code: 'CRC', name: 'Costa Rican Colones' },
  ];

  const [coin, SelectCoin] = useCoin('Select your currency', '', COINS);
  const [coinCripto, SelectCripto] = useCripto(
    'Select your CriptoCoin',
    '',
    criptoList
  );

  useEffect(() => {
    const APIRequest = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(url);
      setCriptoList(result.data.Data);
    };
    APIRequest();
  }, []);

  const consultCoin = (e) => {
    e.preventDefault();

    if (coin === '' || coinCripto === '') {
      setError(true);
      return;
    }

    setError(false);
    setCoin(coin);
    setCripto(coinCripto);
  };

  return (
    <form onSubmit={consultCoin}>
      {error ? <Error msg='All fields are required' /> : null}
      <SelectCoin />
      <SelectCripto />

      <Buttond type='submit' value='Calcular' />
    </form>
  );
};

export default Form;
