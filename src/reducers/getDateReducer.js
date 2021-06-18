import moment from 'moment';

const initialState = {
  nextDate1: moment().add(1, 'days').utcOffset('+05:45').format('ddd DD'),
  nextDate2: moment().add(2, 'days').utcOffset('+05:45').format('ddd DD'),
  nextDate3: moment().add(3, 'days').utcOffset('+05:45').format('ddd DD'),
  nextDate4: moment().add(4, 'days').utcOffset('+05:45').format('ddd DD'),
  nextDate5: moment().add(5, 'days').utcOffset('+05:45').format('ddd DD'),
  nextDate6: moment().add(6, 'days').utcOffset('+05:45').format('ddd DD'),
};

export default function getDateReducer(state = initialState, {type, id}) {
  switch (type) {
    case 'GET_DATE':
      return state;
    default:
      return state;
  }
}
