import React from 'react';
import { useSelector } from 'react-redux';
import GoodsList from './GoodsList';
import { Container, Row, Col } from 'react-bootstrap';

function Goods() {
  const {
    goods: { goods },
  } = useSelector(({ goods }) => ({ goods }));

  return (
    <>
      <Container>
        <Row className="justify-content-evenly mt-5 justify-content-xs-center">
          {goods.map(
            ({ title, image, cost, id, discount, discontForEveryKg }) => (
              <GoodsList
                key={id}
                id={id}
                title={title}
                img={image}
                cost={cost}
                discount={discount}
                discontForEveryKg={discontForEveryKg}
              />
            )
          )}
        </Row>
      </Container>
    </>
  );
}

export default Goods;
