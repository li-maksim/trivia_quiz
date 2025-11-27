import { useState } from "react";
import { type StartingScreenProps } from "../utils/interfaces";
import Button from "./Button";
import Select from "./Select";

function StartingScreen({ startFn, values, changeOption }: StartingScreenProps) {

  return (
    <section className="flex w-full min-h-[calc(100vh-50px)] justify-center items-center">
      <form>
        <Select 
          id="number_of_questions"
          question="Number of questions"
          options={["5", "10", "15", "20", "25"]}
          selected={values.numOfQuestions}
          onChange={changeOption.numOfQuestions}
        />
        <Select 
          id="category_of_questions"
          question="Category"
          options={[
            "Linux",
            "DevOps",
            "Networking",
            "HTML",
            "Random"
          ]}
          selected={values.category}
          onChange={changeOption.category}
        />
        <Select 
          id="difficulty_of_questions"
          question="Difficulty"
          options={["Easy", "Medium", "Hard"]}
          selected={values.difficulty}
          onChange={changeOption.difficulty}
        />
        <Button onClick={startFn} text="Start" />
      </form>
    </section>
  );
}

export default StartingScreen;
