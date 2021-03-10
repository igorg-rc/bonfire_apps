export default (industries = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...industries, action.payload];
    case 'UPDATE':
      return industries.map((industry) => (industry._id === action.payload._id ? action.payload : industry));
    case 'DELETE':
      return industries.filter((industry) => industry._id !== action.payload);
    default:
      return industries;
  }
}