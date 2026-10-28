interface Props extends React.PropsWithChildren {
  title: string | undefined;
}

import "./Section.scss";

function Section({ children, title }: Props) {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
