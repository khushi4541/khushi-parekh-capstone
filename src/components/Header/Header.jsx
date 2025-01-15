import Logo from '../../assets/logo/levelup-logo.svg';
import { useLocation } from 'react-router-dom';
import "./Header.scss";

function Header() {
  const hideHeader = ["/", "/login", "/signup"];
  const shouldHideHeader = hideHeader.includes(location.pathname);

  return (
    <>
    {!shouldHideHeader && ( <section className="header">
      <img src={Logo} alt='level up logo' />
      <div className="header__profile"></div>
    </section>)}
    </>
  );
}

export default Header;
