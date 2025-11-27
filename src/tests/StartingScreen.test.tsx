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

    const changeOption = (() => {

      function numOfQuestions(e) {
        const val: string = e.target.value;
        setValues({...values, numOfQuestions: val});
      }
  
      function category(e) {
        const val: string = (e.target as HTMLOptionElement).value;
        setValues({...values, category: val});
      };
  
      function difficulty(e) {
        const val: string = (e.target as HTMLOptionElement).value;
        setValues({...values, difficulty: val});
      };
  
      return { numOfQuestions, category, difficulty }
    })();
  
    return (
      <StartingScreen
        startFn={vi.fn()}
        values={values}
        changeOption={changeOption}
      />
    );
  }

  it("Renders with correct default options", async () => {
    await act(() =>
      render(
        <StartingScreen
            startFn={handleStart}
            values={initialValues}
            changeOption={{}}
        />
      )
    );

    const numOfQuestions = screen.getByLabelText("Number of questions") as HTMLSelectElement;
    const category = screen.getByLabelText("Category") as HTMLSelectElement;
    const difficulty = screen.getByLabelText("Difficulty") as HTMLSelectElement;

    expect(numOfQuestions.value).toBe("10");
    expect(category.value).toBe("HTML");
    expect(difficulty.value).toBe("Medium");
  });

  it("Chooses number of questions '20'", async () => {
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

  it("Chooses category 'DevOps'", async () => {
    await act(() =>
      render(<Wrapper />)
    );

    const select = screen.getByLabelText("Category") as HTMLSelectElement;

    await user.click(select);

    await user.selectOptions(
        select,
        screen.getByRole("option", { name: "DevOps" })
    );
    
    expect(select.value).toBe("DevOps");
  });

  it("Chooses difficulty 'Hard'", async () => {
    await act(() =>
      render(<Wrapper />)
    );

    const select = screen.getByLabelText("Difficulty") as HTMLSelectElement;

    await user.click(select);

    await user.selectOptions(
        select,
        screen.getByRole("option", { name: "Hard" })
    );
    
    expect(select.value).toBe("Hard");
  });
});
