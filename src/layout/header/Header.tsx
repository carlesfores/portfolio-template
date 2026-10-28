interface Props {
  toggleSideBar: () => void;
}

import Button from "@/components/Button.tsx";
import "./Header.scss";

import accessibilityIcon from "@/assets/icons/accessibility.svg";

function Header({ toggleSideBar }: Props) {
  return (
    <header className="header">
      <div className="header__brand">Portfolio</div>
      <div className="header__nav">
        <Button title="Accessibility" type="icon" handleClick={toggleSideBar}>
          <img src={accessibilityIcon} alt="" aria-hidden="true" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
