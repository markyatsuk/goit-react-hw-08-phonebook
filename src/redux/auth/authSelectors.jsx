const getIsLogged = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const getUserEmail = (state) => state.auth.user.email;

const authSelectors = {
  getIsLogged,
  getUserName,
  getUserEmail,
};

export default authSelectors;
