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

const useCoin = (label, firtsState, options) => {
  const [state, setState] = useState(firtsState);

  const Select = () => (
    <Fragment>
      <Label>{label}</Label>
      <SelectStyle onChange={(e) => setState(e.target.value)} value={state}>
        <option value=''> - Select - </option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </SelectStyle>
    </Fragment>
  );

  return [state, Select, setState];
};

export default useCoin;
