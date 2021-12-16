import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toCurrency } from '../../func';
import { bindActionCreators } from 'redux';
import * as cartCreaters from '../../actions/cartCreaters';
import style from './Cart.module.sass';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Cart () {
  let totalPrice = 0;
  const {
    cart: { values: cart },
  } = useSelector(({ cart }) => ({ cart }));
  const dispatch = useDispatch();
  const { removeToCart, increment } = bindActionCreators(
    cartCreaters,
    dispatch
  );
  function priceWithDiscount (counter, cost, discount, discontForEveryKg) {
    let oddCounter = 0;
    let result = 0;
    if (discount) {
      for (let i = 1; i <= counter; i++) {
        if (i % discontForEveryKg === 0) {
          oddCounter++;
          result = discount * oddCounter;
        } else {
          result += cost;
        }
      }
    } else {
      result += counter * cost;
    }
    totalPrice += result;
    return result;
  }

  return (
    <div className='container'>
      <h1>Корзина</h1>
      <div className='row'>
        {Object.values(cart).map(
          ({ title, cost, counter, id, discount, discontForEveryKg, img }) => (
            <div className={style.row} key={id}>
              <img src={img} alt='' />
              <span>{title}</span>
              <span>
                {toCurrency(
                  priceWithDiscount(counter, cost, discount, discontForEveryKg)
                )}
              </span>
              <input
                type='number'
                min={1}
                max='100'
                defaultValue={counter}
                onChange={e => {
                  let value = e.target.value;
                  if (value > 100) {
                    value = 1;
                    e.target.valueAsNumber = 1;
                  }

                  increment({ value, id });
                }}
              />
              <DeleteForeverIcon
                className={style.icon}
                onClick={() => removeToCart(id)}
              />
            </div>
          )
        )}
      </div>

      <h3> Сумма к оплате : {toCurrency(totalPrice)}</h3>
    </div>
  );
}
