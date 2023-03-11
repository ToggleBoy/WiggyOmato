import { Fragment } from "react";
import images from '../../assets/meals.jpg';
import './Header.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>WiggyOmato</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className="main-image">
        <img  src={images} alt='A table full'/>
      </div>
    </Fragment>
  );
};

export default Header;
