import axios from "axios";
import {
  GET_MUSIC_RECORD_FAILURE,
  GET_MUSIC_RECORD_REQUEST,
  GET_MUSIC_RECORD_SUCCESS,
  UPDATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from "./actionType";

export const getMusicRecords = (params) => (dispatch) => {
  dispatch({ type: GET_MUSIC_RECORD_REQUEST });
  // console.log("param in actionnnnnnn", params);

  return axios
    .get("http://localhost:8080/albums", params)
    .then((r) => {
      return dispatch({ type: GET_MUSIC_RECORD_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: GET_MUSIC_RECORD_FAILURE }));
};

export const updateMusicRecords = (id, payload) => (dispatch) => {
  dispatch({ type: UPDATE_REQUEST });

  return axios
    .patch(`http://localhost:8080/albums/${id}`, payload)
    .then((r) => dispatch({ type: UPDATE_SUCCESS }))
    .catch((e) => dispatch({ type: UPDATE_FAILURE }));
};

export const deleteFunc = (id) => async (dispatch) => {

  return await axios.delete(`http://localhost:8080/albums/${id}`).then(() => {
    console.log("deleted");
  });
  
};
