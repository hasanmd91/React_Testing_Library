import { screen, render } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";
import { Link, MemoryRouter } from "react-router-dom";
import { async } from "validate.js";

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "javascript",
    description: " a is library",
    owner: "facebook",
    name: "ract",
    html_utl: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}

jest.mock("../tree/FileIcon", () => {
  return () => "render file icon";
});

test(" render link in the component", async () => {
  renderComponent();
  const img = await screen.findByRole("img");
  const fileIcon = await screen.findByText("render file icon");

  expect(img).toBeInTheDocument();
  expect(fileIcon).toBeInTheDocument();
});
