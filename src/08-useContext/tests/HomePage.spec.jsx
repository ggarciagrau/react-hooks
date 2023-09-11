import { render } from "@testing-library/react";
import { HomePage } from "../HomePage";
import { UserContext } from "../context/UserContext";

describe("Tests for HomePage", () => {
  it("Should render component without user", () => {
    const rendered = render(
      <UserContext.Provider value={{ user: {} }}>
        <HomePage />
      </UserContext.Provider>
    );

    expect(rendered.container).toMatchSnapshot();
  });

  it("Should render component without user", () => {
    const rendered = render(
      <UserContext.Provider value={{ user: { name: "Roberto" } }}>
        <HomePage />
      </UserContext.Provider>
    );

    
    expect(rendered.container).toMatchSnapshot();
  });
});
