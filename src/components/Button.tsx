interface Props {
  type: string;
  handleClick: () => void;
}

import "./Button.scss";

import accessibilityIcon from "@/assets/icons/accessibility.svg";

function Button({ type, handleClick }: Props) {
  
  const buttonClass = () => {
    const classNames = ["btn"];

    if (type) {
      classNames.push(`btn-${type}`);
    }

    return classNames.join(" ");
  };

  return (
    <button
      className={buttonClass()}
      type="button"
      aria-label="Accessibility"
      title="Accessibility"
      onClick={() => handleClick()}
    >
      <img src={accessibilityIcon} alt="" aria-hidden="true" />
    </button>
  );
}

export default Button;
