import {
  GET_MUSIC_RECORD_FAILURE,
  GET_MUSIC_RECORD_REQUEST,
  GET_MUSIC_RECORD_SUCCESS,
} from "./actionType";
  
 // store.AppReducer.musicRecotds
const initialState = {
  musicRecords: [],
  isLoading: false,
  isError: false,
};


const reducer = (oldState = initialState, action) => {  //  {state,action -> type , payload}
  const { type, payload } = action;

  switch (type) {
    case GET_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isErrr: false,
      };
    case GET_MUSIC_RECORD_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isErrr: false,
        musicRecords: payload,    // []
      };
    case GET_MUSIC_RECORD_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isErrr: true,
      };
      
    default:
      return oldState;
  }
};

export { reducer };
