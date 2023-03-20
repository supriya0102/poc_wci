import { screen, render as rtlRender, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/Index";
// import Home from "../Home";
// import AddUser from "../../adduser-old/AddUser";
import ProfilePage from '../../profile/index'
import UpdateUser from '../../updateuser'
const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

describe(" Update user Component", () => {
  test("render Update page button", () => {
    render(<UpdateUser />);
    expect(screen.getByText(/Basic Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Academic Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Employment information/i)).toBeInTheDocument();
    // const btnEle = screen.queryByText("BACK");
    // expect(btnEle).toBeDefined();
  });
});
