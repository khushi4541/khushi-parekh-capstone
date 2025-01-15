import Logo from '../../assets/logo/levelup-logo.svg';
import { useLocation } from 'react-router-dom';
import "./Header.scss";

function Header() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
    {!isLandingPage && ( <section className="header">
      <img src={Logo} alt='level up logo' />
      <div className="header__profile"></div>
    </section>)}
    </>
  );
}

export default Header;
