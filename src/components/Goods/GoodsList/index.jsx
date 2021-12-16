import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartCreaters from '../../../actions/cartCreaters';
import { toCurrency } from '../../../func';
import style from './GoodsList.module.sass';
import { Card, Button } from 'react-bootstrap';
import cx from 'classnames';
import { Col } from 'react-bootstrap';

function GoodsList({ img, title, cost, id, discount, discontForEveryKg }) {
  const dispatch = useDispatch();
  const {
    cart: { values: cart },
  } = useSelector(({ cart }) => ({ cart }));
  const { addToCart } = bindActionCreators(cartCreaters, dispatch);
  const clickHandler = () =>
    addToCart({ title, cost, id, discount, discontForEveryKg, img });

  return (
    <Col xs={12} lg={3}>
      <Card style={{ width: '18rem', height: '400px', margin: '15px auto', }}>
        <Card.Img variant='top' src={img} className={style.image} />
        <Card.Body className={style.cardBody}>
          <Card.Title>{title}</Card.Title>
          <Card.Text
            className={cx(style.normalPrice, {
              [style.dicountPrice]: !discount,
            })}
          >
            {toCurrency(cost)}
          </Card.Text>
          {discount && (
            <Card.Text>{`Акция : ${toCurrency(
              discount
            )}за каждые ${discontForEveryKg}кг`}</Card.Text>
          )}
          <div className={style.btnContainer}>
            {!cart[id] ? (
              <Button onClick={clickHandler} variant='primary'>
                Заказать
              </Button>
            ) : (
              <Button variant='primary' size='lg' disabled>
                Добавлен в корзину
              </Button>

            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default GoodsList;
