import { Component } from "react";
import s from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    imageName: "",
  };

  handleNameChange = (e) => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.imageName);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
