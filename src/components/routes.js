import Home from "./Home/Home";
import About from "./About/About";
import AboutSetting from "./About/AboutSetting";
import AbuteDescription from "./About/AboutDescription";
import MainProduct from "./Product/MainProduct";
import Products from "./Product/Products";
import LoginComponent from "./Login/LoginComponent";
import LoginRoute from "./Login/LoginRoute";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import Profile from "./Login/Profile";

let routes = [
  { path: "/", element: <Home /> },
  {
    path: "/Login/*",
    element: <LoginComponent />,
    children: [
      { path: "signIn", element: <SignIn /> },
      { path: "signUp", element: <SignUp /> },
    ],
  },
  { path: "/Products", element: <Products /> },
  { path: "/Product/:productID", element: <MainProduct /> },
  {
    path: "/loginroute/*",
    element: <LoginRoute />,
    children: [{ path: "Profile", element: <Profile /> }],
  },
  {
    path: "/About/*",
    element: <About />,
    children: [
      { path: "setting", element: <AboutSetting /> },
      { path: "discription", element: <AbuteDescription /> },
    ],
  },
];
export default routes;
