import Button from "./Button";
import { type FinalScreenProps } from "../utils/interfaces";

function FinalScreen({
  show,
  message,
  score,
  completedQuestions,
  goHome,
}: FinalScreenProps) {
  if (show)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 backdrop-blur-sm">
        <div className="min-w-[80%] md:min-w-[60%] lg:min-w-[40%] min-h-[50%] bg-white flex flex-col justify-center items-center gap-5">
          <div className="text-sm sm:text-xl font-bold">{message}</div>
          {completedQuestions < 9 && (
            <div className="text-sm sm:text-xl">
              {"You completed " + completedQuestions + " out of 10 questions."}
            </div>
          )}
          <div className="text-sm sm:text-xl">
            Final score:
            {score < 4 ? (
              <span className="font-bold text-[var(--color-red)]">
                {" " + score}
              </span>
            ) : score < 8 ? (
              <span className="font-bold text-[var(--color-orange-timer)]">
                {" " + score}
              </span>
            ) : (
              <span className="font-bold text-[var(--color-green-timer)]">
                {" " + score}
              </span>
            )}
          </div>
          <Button onClick={goHome} text="Go home" />
        </div>
      </div>
    );
}

export default FinalScreen;
