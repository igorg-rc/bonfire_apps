import * as api from '../api/index';

// Actions creators
export const getIndustries = () => async (dispatch) => {
  try {
    const { data } = await api.fetchIndustries();

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

export const updateIndustry = (id, industry) => async (dispatch) => {
  try {
    const { data } = await api.updateIndustry(id, industry);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteIndustry = (id) => async (dispatch) => {
  try {
    await api.deleteIndustry(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};