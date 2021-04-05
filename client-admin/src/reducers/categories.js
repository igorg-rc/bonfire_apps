export default (categories = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
      case 'CREATE':
        return [...categories, action.payload];
      case 'UPDATE':
        return categories.map((category) => (category._id === action.payload._id ? action.payload : category));
      case 'DELETE':
        return categories.filter((category) => category._id !== action.payload);
    default:
      return categories;
  }
}