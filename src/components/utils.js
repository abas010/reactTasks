let login = false;
const isLogin = (e) => {
  if (e) {
    login = true;
  } else {
    login = false;
  }
};
let userInformation = [];

export { userInformation, isLogin, login };
