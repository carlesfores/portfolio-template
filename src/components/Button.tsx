interface Props extends React.PropsWithChildren {
  title: string;
  type: string;
  handleClick: () => void;
}

import "./Button.scss";

function Button({ children, title, type, handleClick }: Props) {
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
      aria-label={title}
      title={title}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
}

export default Button;
