import { ReactComponent as AppLogo } from "../../assets/svg/logo-metapix.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-logoContainer">
        <AppLogo className="app-logo" />
      </div>
    </header>
  );
};
export default Header;
