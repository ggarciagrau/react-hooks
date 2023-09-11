import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../MainApp";

describe("Tests for MainApp", () => {
 it("should display the home page", () => {
    const rendered = render(<MemoryRouter><MainApp /></MemoryRouter>);

    expect(rendered.getByText("HomePage"))
 });

 it("should display the login page", () => {
    const rendered = render(<MemoryRouter initialEntries={['/login']}><MainApp /></MemoryRouter>);

    expect(rendered.getByText("LoginPage"))
 });

 it("should display the about page", () => {
    const rendered = render(<MemoryRouter initialEntries={['/about']}><MainApp /></MemoryRouter>);

    expect(rendered.getByText("AboutPage"))
 });
});