import React from 'react';

function Home(props) {
  console.log('home', props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://picsum.photos/80' alt='' />
        </div>
        <div className='text-wrapper item'>
          <span>I-phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className='btn-wrapper item'>
          <button onClick={() =>
            props.addToCartHandler({ price: 1000.00, name: 'iPhone 11' })
          }>Add to Cart</button>
          <button className='danger' onClick={() =>
            props.removeToCartHandler()
          }>Remove to Cart</button>
        </div>
      </div>
    </div >
  )
}

export default Home;