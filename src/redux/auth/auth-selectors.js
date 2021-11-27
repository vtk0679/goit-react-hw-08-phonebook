export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUsername = (state) => state.auth.user.name;
export const getFetchCurrentUser = (state) => state.auth.isFetchCurrentUser;
export const isRegisterError = (state) => state.auth.isRegisterError;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getFetchCurrentUser,
  isRegisterError,
};

export default authSelectors;
