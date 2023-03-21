import { screen, render as rtlRender, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/Index";
// import Home from "../Home";
import AddUser from "../../adduser-old/AddUser";
import ProfilePage from "../../profile/index";
// import UpdateUser from '../../updateuser'
const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

describe("Add User Page Component", () => {
  test("render Add user button", async () => {
    render(<AddUser />);
    expect(
      await screen.findByRole("textbox", { name: /first name/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("textbox", { name: /last name/i })
    ).toBeInTheDocument();
    expect(
        await screen.findByRole("textbox", { name: /email/i })
      ).toBeInTheDocument();
    expect(
        await screen.findByLabelText(/Select highest Education */i)
      ).toBeInTheDocument();

    expect(
        await screen.findByLabelText(/Passing year/i)
      ).toBeInTheDocument();
    
    expect(
        await screen.findByLabelText(/Employee Code/i)
      ).toBeInTheDocument();

    expect(
        await screen.findByLabelText(/Company Name/i)
      ).toBeInTheDocument();  

    expect(
        await screen.findByLabelText(/Designation/i)
      ).toBeInTheDocument();  
      
    expect(
        await screen.findByRole("button", { name: /cancel/i })
      ).toBeInTheDocument();
    expect(
        await screen.findByRole("button", { name: /submit/i })
      ).toBeInTheDocument();  
  });
});

