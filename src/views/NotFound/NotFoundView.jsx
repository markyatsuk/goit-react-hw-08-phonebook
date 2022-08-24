import icon from "../../images/404.png";

import s from "./NotFoundView.module.css";

export default function NotFoundView() {
  return (
    <div className={s.wrap}>
      <img className={s.image} src={icon} alt="not-found" />
    </div>
  );
}
