import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CardProvider from './store/CartProvider';


function App() {
  const [cartIsShown, setCartShow] = useState(false);

  const ShowCartHandler = () => {
    setCartShow(true)
  }

  const hideCartHandler = () => {
    setCartShow(false)
  }

  return (
    <CardProvider>
      {cartIsShown && <Cart  closeCart={hideCartHandler}/>}
      <Header onShowCart={ShowCartHandler}/>
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
