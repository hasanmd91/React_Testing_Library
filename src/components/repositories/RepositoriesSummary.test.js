import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays the primary language of the repositories", () => {
  const repository = {
    stargazers_count: 5,
    open_issues: 1,
    forks: 6,
    language: "javaScript",
  };
  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const value = repository[key];
    const item = screen.getByText(new RegExp(value));
    expect(item).toBeInTheDocument();
  }
});
