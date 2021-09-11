import sadCat from "../../image/sadCat.jpg";
import s from "./ImageNotFound.module.css";

export default function ImageNotFound() {
  return (
    <div className={s.wrap}>
      <img src={sadCat} alt="sad cat" width="450" />
    </div>
  );
}
