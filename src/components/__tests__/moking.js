import { getCompaniesList } from "../../store";

export default {
  mokingGet({ commit }) {
    return getCompaniesList().then(resp =>
      commit("setCompaniesList", { resp })
    );
  }
};
