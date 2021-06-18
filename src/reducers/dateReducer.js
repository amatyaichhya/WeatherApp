import moment from 'moment';

const initialState = [];

export default function dateReducer(state = initialState, {type, id}) {
  switch (type) {
    case 'SET_DATE':
      return moment().add(id, 'days').utcOffset('+05:45').format('ddd, MMM DD');
    default:
      return state;
  }
}
