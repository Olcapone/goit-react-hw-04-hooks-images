//import { Component } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../../utils/UseLocalStorage";
import s from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  const [imageName, setName] = useLocalStorage("pictureName", "");

  const handleNameChange = (e) => {
    setName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(imageName);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          name="imageName"
          value={imageName}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  imageName: PropTypes.string,
};
