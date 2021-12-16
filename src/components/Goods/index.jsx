import React from 'react';
import { useSelector } from 'react-redux';
import GoodsList from './GoodsList';
import style from './Goods.module.sass';

function Goods() {
  const {
    goods: { goods },
  } = useSelector(({ goods }) => ({ goods }));

  return (
    <>
      <section className={style.container}>
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
        <div></div>
      </section>
    </>
  );
}

export default Goods;
