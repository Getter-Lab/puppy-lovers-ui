import { render, screen } from "@testing-library/react";
import { ExempleCard } from "./index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<ExempleCard />);
    const heading = screen.getByText(/Example Card Component/i);
    expect(heading).toBeInTheDocument();
  });
});
