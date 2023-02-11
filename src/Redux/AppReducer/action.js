import axios from "axios";
import {
  GET_MUSIC_RECORD_FAILURE,
  GET_MUSIC_RECORD_REQUEST,
  GET_MUSIC_RECORD_SUCCESS,
  UPDATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from "./actionType";

const url = "https://good-puce-caterpillar-boot.cyclic.app/albums"

export const getMusicRecords = (params) => (dispatch) => {
  dispatch({ type: GET_MUSIC_RECORD_REQUEST });
  console.log("param in actionnnnnnn", params);

  return axios
    .get(url, params)
    .then((res) => {
      return dispatch({ type: GET_MUSIC_RECORD_SUCCESS, payload: res.data });
    })
    .catch((e) => dispatch({ type: GET_MUSIC_RECORD_FAILURE }));
};

export const updateMusicRecords = (id, payload) => (dispatch) => {
  dispatch({ type: UPDATE_REQUEST });

  return axios
    .patch(`${url}/${id}`, payload)
    .then((r) => dispatch({ type: UPDATE_SUCCESS }))
    .catch((e) => dispatch({ type: UPDATE_FAILURE }));
};

export const deleteFunc = (id) => async (dispatch) => {
 // database
  try{
      await axios.delete(`${url}/${id}`)
  }catch(err){
    console.log(err)
  }

};


