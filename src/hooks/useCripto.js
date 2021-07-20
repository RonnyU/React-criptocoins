import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const SelectStyle = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCripto = (label, firtsState, options) => {
  const [state, setState] = useState(firtsState);

  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <SelectStyle onChange={(e) => setState(e.target.value)} value={state}>
        <option value=''> - Select - </option>
        {options.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </SelectStyle>
    </Fragment>
  );

  return [state, SelectCripto, setState];
};

export default useCripto;
