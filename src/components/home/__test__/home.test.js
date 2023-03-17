import Home from "../Home";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
// import { shallow, mount } from "enzyme";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "../../header/Header";
const onSubmit = jest.fn();

const initialStateMock = 
  [{
    "id": 2,
    "firstName": "Wahid",
    "lastName": "ali",
    "email": "wahidali@gmail.com",
    "deleted": false,
    "createdAt": "2023-03-09T06:29:35.066Z",
    "updatedAt": "2023-03-13T12:26:12.923Z"
}
]

const mockStore = configureStore([thunk]);
const store = mockStore(initialStateMock);

// describe("Home Component", () => {
//   test("renders all fields correctly", () => {
//     render( <Provider store={store}>
//         <Home />
//     </Provider>);
//     expect(screen.getByLabelText(/Search Text/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Select/i)).toBeInTheDocument();
//   });
describe("rendering components", () => {
  it("renders Home component without crashing", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it("renders components within Home without crashing", () => {
    const wrapper = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(HomePage)).toHaveLength(1);
    expect(wrapper.find(AuthPage)).toHaveLength(1);
  });
});
