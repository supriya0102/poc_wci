import { screen, render as rtlRender, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/Index";
import Home from "../Home";
import AddUser from "../../adduser-old/AddUser";
import ProfilePage from "../../profile/index";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

describe("Home Page Component", () => {
  test("render for Add user button", () => {
    render(<Home />);
    expect(screen.getByText(/Western Climate Initiative/i)).toBeInTheDocument();
    const btnEle = screen.queryByText("ADD USER");
    expect(btnEle).toBeDefined();
    expect(screen.getByLabelText(/Search Text/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort By/i)).toBeInTheDocument();
  });

  test("After clicking Add button shows Add user page", () => {
    render(<AddUser />);
  });
});
