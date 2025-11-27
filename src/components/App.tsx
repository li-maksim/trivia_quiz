import { useState, useEffect } from "react";
import Header from "./Header";
import StartingScreen from "./StartingScreen";
import Content from "./Content";
import type { SelectedOptions } from "../utils/interfaces";
import type { ChangeEvent } from "react";

function App() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  //Initializing state based on localStorage to avoid flashing light theme and playing switch animation on reload
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  //Values of select components in StartingScreen
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    category: "HTML",
    numOfQuestions: "10",
    difficulty: "Medium"
  });

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  function start(): void {
    setHasStarted(true);
  }

  function goHome(): void {
    setHasStarted(false);
  }

  function changeNumOfQuestions(e: ChangeEvent) {
    const val: string = (e.target as HTMLOptionElement).value;
    setSelectedOptions({...selectedOptions, numOfQuestions: val});
  };

  return (
    <div className="bg-[var(--color-bg)] min-h-[100vh]">
      <Header
        goHome={goHome}
        flipped={isDark}
        switchFn={() => setIsDark((prev) => !prev)}
      />
      {hasStarted ? (
        <Content hasStarted={hasStarted} goHome={goHome} />
      ) : (
        <StartingScreen startFn={start} values={selectedOptions} changeNumOfQuestions={changeNumOfQuestions} />
      )}
    </div>
  );
}

export default App;
