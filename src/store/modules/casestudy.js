/* eslint-disable no-shadow */
import axios from 'axios';

const state = {
  csApplicantId: null,
  csPropertyValue: '380000',
  csDepositAmount: '90000',
  csMortgages: [],
  csLoading: false,
};

const getters = {
  getCsApplicantId: (state) => state.csApplicantId,
  getCsPropertyValue: (state) => state.csPropertyValue,
  getCsDepositAmount: (state) => state.csDepositAmount,
  getCsMortgages: (state) => state.csMortgages,
  getCsLoading: (state) => state.csLoading,
};

const mutations = {
  setCsApplicantId: (state, id) => { state.csApplicantId = id; },
  setCsPropertyValue: (state, value) => { state.csPropertyValue = value; },
  setCsDepositAmount: (state, value) => { state.csDepositAmount = value; },
  setCsMortgages: (state, value) => { state.csMortgages = value; },
};

const actions = {
  async createCsApplicant({ commit }, applicant) {
    // TODO (like to have) Add error handling
    const response = await axios.post('http://localhost:5000/api/applicants', applicant);

    commit('setCsApplicantId', response.data.id);
  },
  async updateCsPropertyValue({ commit }, value) {
    commit('setCsPropertyValue', value);
  },
  async updateCsDepositAmount({ commit }, value) {
    commit('setCsDepositAmount', value);
  },
  async fetchCsMortgages({ commit, state }) {
    // TODO (like to have) Add error handling
    const queryString = `?id=${state.csApplicantId}&proprtyPrice=${state.csPropertyValue}&deposit=${state.csDepositAmount}`;
    this.csLoading = true;
    const response = await axios.get(`http://localhost:5000/api/Search/MortgagesById${queryString}`);
    this.csLoading = false;

    commit('setCsMortgages', response.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
