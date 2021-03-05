import * as api from '../api/index';

// Actions creators
export const getIndustries = () => async (dispatch) => {
  try {
    const { data } = await api.fetchIndusdtries();

    dispatch({ type: 'FETCH_ALL', payload: data });

  } catch (error) {
    console.log(error.message);
  }
}


export const addIndustry = (industry) => async (dispatch) => {
  try {
    const { data } = await api.addIndustry(industry);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
}