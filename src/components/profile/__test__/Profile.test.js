import { screen, render as rtlRender, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/Index";
// import Home from "../Home";
// import AddUser from "../../adduser-old/AddUser";
import ProfilePage from '../../profile/index'
// import UpdateUser from '../../updateuser'
const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

describe("Profile Page Component", () => {
  test("render view user button", () => {
    render(<ProfilePage />);
    expect(screen.getByText(/Western Climate Initiative/i)).toBeInTheDocument();
    expect(screen.getByText("Personal Information")).toBeInTheDocument();
    expect(screen.getByText("Academic Information")).toBeInTheDocument();
    expect(screen.getByText("Employement Information")).toBeInTheDocument();
    const btnEle = screen.queryByText("BACK");
    expect(btnEle).toBeDefined();
  });
});
