import axios from "axios";

// ACTION TYPE
const ADD_IMAGE = "ADD_IMAGE";

// ACTION CREATOR
const addImage = (image) => {
  return {
    type: ADD_IMAGE,
    image,
  };
};

// THUNKS
export const createImage = (prompt) => {
  console.log(prompt);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/openai/",
        prompt
      );
      dispatch(addImage(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
export default function imagesReducer(state = {}, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return action.image;
    default:
      return state;
  }
}
