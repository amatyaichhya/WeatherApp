export function setDate(id) {
  return {
    type: 'SET_DATE',
    id: id,
  };
}

export function getDate(id) {
  return {
    type: 'GET_DATE',
    id: id,
  };
}
