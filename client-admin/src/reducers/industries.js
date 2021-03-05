import { Posts } from "../components/Pages/Table/Posts";

export default (industries = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...Posts, action.payload];
    default:
      return industries;
  }
}