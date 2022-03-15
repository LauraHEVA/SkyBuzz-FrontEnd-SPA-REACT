import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import DetailBuzzPage from "./DetailBuzzPage";

describe("Given a DetailBuzzPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a h1 element with the text 'Buzz Detail'", () => {
      const expectedText = "Buzz Detail";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailBuzzPage />
          </Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.getByText(expectedText);

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a NavBar with three icons as Links", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailBuzzPage />
          </Provider>
        </BrowserRouter>
      );

      const links = screen.queryAllByRole("link");

      expect(links[0]).toBeInTheDocument();
      expect(links[1]).toBeInTheDocument();
      expect(links[2]).toBeInTheDocument();
      expect(links).toHaveLength(3);
    });

    test("Then it should render a button with the text 'Go Back' inside", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailBuzzPage />
          </Provider>
        </BrowserRouter>
      );

      const buttonNewBuzz = screen.getByRole("button");

      expect(buttonNewBuzz).toBeInTheDocument();
      expect(buttonNewBuzz.textContent).toBe("Go Back");
    });
  });

  // describe("When it's rendered with a detail of a buzz, with a text 'React Redux'", () => {
  //   test("Then it should render a paragraph with the text 'React Redux'", async () => {
  //     TimeAgo.addLocale(en);
  //     render(
  //       <BrowserRouter>
  //         <Provider store={store}>
  //           <DetailBuzzPage />
  //         </Provider>
  //       </BrowserRouter>
  //     );

  //     const textFound = await screen.findByText(/react redux/i);

  //     expect(textFound).toBeInTheDocument();
  //   });
  // });
});
