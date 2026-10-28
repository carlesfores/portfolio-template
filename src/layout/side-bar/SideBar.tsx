import './SideBar.scss';

interface Props {
  show: boolean;
}

function SideBar({ show }: Props) {
  return (
    <div className={show ? "side-bar side-bar--open" : "side-bar"}>
      <p>side nav</p>
    </div>
  );
}

export default SideBar;
