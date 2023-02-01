import axios from "axios";

// ACTION TYPE
const SET_IMAGES = "SET_IMAGES";

// ACTION CREATOR
const setImages = (images) => {
  return {
    type: SET_IMAGES,
    images,
  };
};

// THUNKS
export const fetchImages = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:5000/openai");
      dispatch(setImages(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
export default function imagesReducer(state = [], action) {
  switch (action.type) {
    case SET_IMAGES:
      return action.images;
    default:
      return state;
  }
}
