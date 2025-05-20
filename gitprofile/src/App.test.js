import { render, screen } from "@testing-library/react";
import App from "./app";

// Mock child components
jest.mock("./components", () => ({
  __esModule: true,
  MainNav: () => <nav>Navbar</nav>,
  Home: () => <main>Home</main>,
  Footer: () => <footer>Footer</footer>
}));

describe("App", () => {
  test("renders App component with Navbar, Home, and Footer", () => {
    render(<App />);
    // Check for the main text as before
    const linkElements = screen.getAllByText("Travis Prall");
    expect(linkElements.length).toBeGreaterThan(0);

    // Check if mocked components are rendered
    expect(screen.getByText("Navbar")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
