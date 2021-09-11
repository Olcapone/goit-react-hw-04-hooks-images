import PropTypes from "prop-types";

export default function Api(searchQuery, page = 1) {
  const MY_KEY = `22421278-3374a5bf35dcd0f85e00cdc81`;
  const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${
    searchQuery.pictureName || searchQuery
  }&page=${page}&per_page=12&key=${MY_KEY}`;

  return fetch(BASE_URL).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Image not found ${searchQuery}`));
  });
}

Api.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
};
