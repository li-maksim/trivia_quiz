import StartingScreen from "../components/StartingScreen";
import { render, act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

describe("Starting screen tests", () => {
  const user = userEvent.setup();

  const handleStart = vi.fn();

  const initialValues = {
    category: "HTML",
    numOfQuestions: "10",
    difficulty: "Medium"
  };

  //Wrapping the StartingScreen for using states
  function Wrapper() {
    const [values, setValues] = useState(initialValues);
  
    return (
      <StartingScreen
        startFn={vi.fn()}
        values={values}
        changeNumOfQuestions={(e) =>
          setValues({...values, numOfQuestions: e.target.value })
        }
      />
    );
  }

  it("Renders with option 10 as default", async () => {
    await act(() =>
      render(
        <StartingScreen
            startFn={handleStart}
            values={initialValues}
            changeNumOfQuestions={() => vi.fn()}
        />
      )
    );

    const select = screen.getByText("10");

    await user.click(select);

    expect(true).toBeTruthy();
  });

  it("Chooses option 20", async () => {
    await act(() =>
      render(<Wrapper />)
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
