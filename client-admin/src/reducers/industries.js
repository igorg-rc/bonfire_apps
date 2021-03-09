export default (industries = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...industries, action.payload];
    default:
      return industries;
  }
}