interface Props {
  toggleSideBar: () => void;
}

import Button from "@/components/Button.tsx";
import "./Header.scss";

function Header({ toggleSideBar }: Props) {
  return (
    <header className="header">
      <div className="header__brand">Portfolio</div>
      <div className="header__nav">
        <Button type="icon" handleClick={toggleSideBar} />
      </div>
    </header>
  );
}

export default Header;
