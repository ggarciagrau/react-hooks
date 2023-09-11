import { fireEvent, render } from "@testing-library/react";
import { LoginPage } from "../LoginPage";
import { UserContext } from "../context/UserContext";
import { act } from "react-dom/test-utils";

describe("Tests for LoginPage", () => {
  it.skip("Should render without user", () => {
    const rendered = render(
      <UserContext.Provider value={{ user: {} }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = rendered.getByLabelText("pre");

    expect(preTag.innerHTML).toMatch("{}");
  });

  it.skip("Should render without user", () => {
    const rendered = render(
      <UserContext.Provider value={{ user: { name: "Roberto" } }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = rendered.getByLabelText("pre");

    expect(preTag.innerHTML).toContain("name");
    expect(preTag.innerHTML).toContain("Roberto");
  });

  it("Should update login data", () => {
    let userState = {};

    const setUserMock = jest.fn((newUserState) => {
      userState = newUserState;
    });

    const rendered = render(
      <UserContext.Provider value={{ user: userState, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const loginButton = rendered.getByRole("button");

    act(() => {
      fireEvent.click(loginButton);
    });

    expect(setUserMock).toHaveBeenCalledWith({
      id: 1,
      name: "Gerard",
      email: "gerard@gerardgg.com",
    });

    let preElement = rendered.getByLabelText("pre");

    rendered.rerender(
      <UserContext.Provider value={{ user: userState, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    expect(preElement.textContent).toBe(
      JSON.stringify(
        { id: 1, name: "Gerard", email: "gerard@gerardgg.com" },
        null,
        1
      )
    );
  });
});
