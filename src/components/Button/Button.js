import s from "./Button.module.css";

export default function Button({ name, onLoadMore }) {
  return (
    <button className={s.Button} type="button" onClick={onLoadMore}>
      {name}
    </button>
  );
}
