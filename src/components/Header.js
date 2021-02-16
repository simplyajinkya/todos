import React from 'react';

function Header(props) {
  console.log('Header', props.data);
  return (
    <div>
      <div className='cart'>
        <span className='cart-count'>{props.data.length}</span>
        <img src='https://img.icons8.com/nolan/72/fast-cart.png' alt='' />
      </div>
    </div >
  )
}

export default Header;