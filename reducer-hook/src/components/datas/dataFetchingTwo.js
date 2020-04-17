import React, { useReducer, useEffect } from "react";
import axios from "axios";

const InitialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: "Something went worng",
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, InitialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/post/1`)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.tilte}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
