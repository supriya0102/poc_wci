import { screen, render as rtlRender, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/Index";
import Header from "../Header";
import AddUser from "../../adduser-old/AddUser";
const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

  describe("Header Component", () => {
    test("render header component", () => {
      render(<Header />);
      expect(screen.getByText(/Western Climate Initiative/i)).toBeInTheDocument();
      const btnEle = screen.queryByText("ADD USER");
      expect(btnEle).toBeDefined();
    });
});