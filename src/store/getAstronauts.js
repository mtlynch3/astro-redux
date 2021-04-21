import axios from "axios";

// ACTION TYPES;
const GET_ASTRONAUTS = "GET_ASTRONAUTS";

// ACTION CREATORS;
const getAstronauts = (astros) => {
  return {
    type: GET_ASTRONAUTS,
    payload: astros,
  };
};

// THUNK CREATORS;
export const getAstronautsThunk = () => async dispatch => {
	try {
		let res = await axios.get('http://api.open-notify.org/astros.json');
		//res.data will be whole object returned by api endpoint
		//payload is res.data.people
		dispatch(getAstronauts(res.data.people));

	} catch(err) {
		console.error(err);
	}
};

// REDUCER;
export const reducer = (state = {astronauts: []}, action) => {
  switch (action.type) {
    case GET_ASTRONAUTS:
      return {
        astronauts: action.payload,
      }
    default:
      return state;
  }
};
