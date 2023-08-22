import { fireEvent, render } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../03-examples/MultipleCustomHooks";
import { useFetch } from "../../useFetch";
import { useCounter } from "../../useCounter";

jest.mock("../../useFetch");
jest.mock("../../useCounter");

const mockIncrement = jest.fn();

useCounter.mockReturnValue({
  counter: 0,
  increment: mockIncrement,
});

describe("Tests for MultipleCustomHooks component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component by default", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    const rendered = render(<MultipleCustomHooks />);

    expect(rendered.getByText("Loading..."));
    expect(rendered.getByText("BreakingBad quotes"));

    const nextButton = rendered.getByRole("button", { name: "Next quote" });

    expect(nextButton.disabled).toBeTruthy();
  });

  it("should display a quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Gerard", quote: "Hello world" }],
      isLoading: false,
      hasError: null,
    });

    const rendered = render(<MultipleCustomHooks />);

    expect(rendered.getByText("Gerard")).toBeTruthy();
    expect(rendered.getByText("Hello world")).toBeTruthy();

    const nextButton = rendered.getByRole("button", { name: "Next quote" });

    expect(nextButton.disabled).toBeFalsy();
  });

  it("should call the function of incremente", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Gerard", quote: "Hello world" }],
      isLoading: false,
      hasError: null,
    });

    const rendered = render(<MultipleCustomHooks />);

    const nextButton = rendered.getByRole("button", { name: "Next quote" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
