import s from "./Section.module.css";

const Section = ({ title, children }) => (
  <div>
    <h2 className={s.title}>{title}</h2>
    {children}
  </div>
);

export { Section };
