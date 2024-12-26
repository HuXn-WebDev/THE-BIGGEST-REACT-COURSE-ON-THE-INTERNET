import { render, screen } from "@testing-library/react";
import TodoList from "../../src/components/TodoList";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

describe("TodoList", () => {
  it("should render a list of todos", async () => {
    render(<TodoList />);
    const todos = await screen.findAllByRole("listitem");
    expect(todos.length).toBeGreaterThan(0);
  });

  it("should render no todos available if no todo is found", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/todos", () =>
        HttpResponse.json([])
      )
    );

    render(<TodoList />);
    const noTodos = await screen.findByText(/no todos/i);
    expect(noTodos).toBeInTheDocument();
  });

  it("should render a loading if products are loading", () => {
    render(<TodoList />);
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });
});
