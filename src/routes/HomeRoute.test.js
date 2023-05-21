import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter } from "react-router";
import HomeRoute from "./HomeRoute";
import { async } from "validate.js";

// request intercepting function

const handelers = [
  rest.get("/api/repositories", (req, res, ctx) => {
    const query = req.url.searchParams.get("q");
    console.log(query);
    return res(
      ctx.json({
        items: [
          { id: "1", full_name: "full name" },
          { id: "2", full_name: "other name" },
        ],
      })
    );
  }),
];

const server = setupServer(...handelers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test("render two links for each language", async () => {
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );

  // Loop over each language
  // for each language make sure that we see  two links
  // Assert that the links hav the appropriate full_name

  await pause();
  screen.debug();
});

const pause = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
