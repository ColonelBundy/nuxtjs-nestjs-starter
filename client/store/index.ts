export const state = () => ({
  friends: [],
});

export const mutations = {
  setFriends(state, friends) {
    state.friends = friends;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const data = await app.$axios.$get('./friends.json');
    commit('setFriends', data.friends);
  },
};
