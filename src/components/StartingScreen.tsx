import { useState } from "react";
import { type StartingScreenProps } from "../utils/interfaces";
import Button from "./Button";
import Select from "./Select";

function StartingScreen({ startFn, values, changeNumOfQuestions }) {

  return (
    <section className="flex w-full min-h-[calc(100vh-50px)] justify-center items-center">
      <form>
        <Select 
          id="number_of_questions"
          question="Number of questions"
          options={["5", "10", "15", "20", "25"]}
          selected={values.numOfQuestions}
          onChange={changeNumOfQuestions}
        />
        <Button onClick={startFn} text="Start" />
      </form>
    </section>
  );
}

export default StartingScreen;
