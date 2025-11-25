import { useState } from "react";
import type { ChangeEvent } from "react";
import { type StartingScreenProps } from "../utils/interfaces";
import Button from "./Button";
import Select from "./Select";

function StartingScreen({ startFn }: StartingScreenProps) {

  const [selectedNumOfQuestions, setSelectedNumOfQuestions] = useState<string>("10");

  function changeNumOfQuestions(e: ChangeEvent) {
    const val: string = (e.target as HTMLOptionElement).value;
    setSelectedNumOfQuestions(val);
  };

  return (
    <section className="flex w-full min-h-[calc(100vh-50px)] justify-center items-center">
      <form>
        <Select 
          id="number_of_questions"
          question="Number of questions"
          options={["5", "10", "15", "20", "25"]}
          selected={selectedNumOfQuestions}
          onChange={changeNumOfQuestions}
        />
        <Button onClick={startFn} text="Start" />
      </form>
    </section>
  );
}

export default StartingScreen;
