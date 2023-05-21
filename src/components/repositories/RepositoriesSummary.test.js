import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays the primary language of the repositories", () => {
  const repository = {
    stargazers_count: 5,
    open_issues: 1,
    forks: 5,
    language: "javaScript",
  };
  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText("javaScript");
  expect(language).toBeInTheDocument();
});
