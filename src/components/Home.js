import React from 'react';

function Home() {
  return (
    <div>
      <div className='cart'><img src='https://img.icons8.com/nolan/72/fast-cart.png' /></div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://picsum.photos/80' />
        </div>
        <div className='text-wrapper item'>
          <span>I-phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home;