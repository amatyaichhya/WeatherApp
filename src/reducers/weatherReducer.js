const SET_WEATHER = 'SET_WEATHER';

const initialState = {
  all: [],
  selected: [],
  loading: true,
  error: '',
};

export default function weatherReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'WEATHER_REQUEST':
      return {...initialState, loading: true};
    case SET_WEATHER:
      return {...state, all: payload, loading: true};
    case 'WEATHER_ERROR':
      return {...state, all: [], loading: false, error: payload};
    case 'GET_WEATHER':
      return {...state, selected: state.all.list[payload], loading: false};
    default:
      return state;
  }
}
