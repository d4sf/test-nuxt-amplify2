export const state = () => ({
  id: undefined,
});

export const mutations = {
  SET_CONNECTION_ID(state, payload) {
    console.log("payload");
    state.id = payload;
  },
};
