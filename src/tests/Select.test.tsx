import StartingScreen from "../components/StartingScreen";
import { render, act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Starting screen tests", () => {
  const user = userEvent.setup();

  const handleStart = vi.fn();

  it("Renders with option 10 as default", async () => {
    await act(() =>
      render(
        <StartingScreen
            startFn={handleStart}
        />
      )
    );

    const select = screen.getByText("10");

    await user.click(select);

    expect(true).toBeTruthy();
  });

  it("Chooses option 20", async () => {
    await act(() =>
      render(
        <StartingScreen
            startFn={handleStart}
        />
      )
    );

    const select = screen.getByLabelText("Number of questions") as HTMLSelectElement;

    await user.click(select);

    await user.selectOptions(
        select,
        screen.getByRole("option", { name: "20" })
    );
    
    expect(select.value).toBe("20");
  });
});
