import React from 'react';
import styled from '@emotion/styled';

const DivCointainer = styled.div`
  color: #fff;

  font-family: Arial, Helvetica, sans-serif;
`;
const PContainer = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;
const Price = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`;

const Consult = ({ apiResponse }) => {
  if (Object.keys(apiResponse).length === 0) return null;

  return (
    <DivCointainer>
      <Price>
        The price is: <span>{apiResponse.PRICE}</span>
      </Price>
      <PContainer>
        The highest price of the day: <span>{apiResponse.HIGHDAY}</span>
      </PContainer>
      <PContainer>
        The lowest price of the day: <span>{apiResponse.LOWDAY}</span>
      </PContainer>
      <PContainer>
        Variation in the last 24 hours:{' '}
        <span>{apiResponse.CHANGEPCT24HOUR}</span>
      </PContainer>
      <PContainer>
        Last Update: <span>{apiResponse.LASTUPDATE}</span>
      </PContainer>
    </DivCointainer>
  );
};

export default Consult;
