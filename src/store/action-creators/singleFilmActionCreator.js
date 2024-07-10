import axios from "axios";
import { singleFilmActions } from "../reducers/singleFilmSlice.js";

export const fetchFilm = (id) => async (dispatch) => {
  dispatch(singleFilmActions.fetchFilm());
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=7049fffc`/*${import.meta.env.OMDB_KEY}`*/,
    {
      params: { i: id, plot: "full" },
    }
  );
  if (response.data.Error) {
    dispatch(singleFilmActions.fetchFilmError(response.data.Error));
    return;
  }
  dispatch(singleFilmActions.fetchFilmSuccess(response.data));
};
