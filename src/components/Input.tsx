import { type InputProps } from "../utils/interfaces";

function Input({
  type = "radio",
  id,
  questionText,
  checked,
  fn,
  highlight,
}: InputProps) {
  if (type === "radio") {
    return (
      <label
        htmlFor={id}
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer text-[var(--color-text)]
                        ${
                          highlight === "green"
                            ? "border-2 border-[var(--color-green-answer)] bg-[var(--color-green-input-bg)]"
                            : highlight === "red"
                            ? "border-2 border-[var(--color-red)] bg-[var(--color-red-input-bg)]"
                            : "border-2 border-[var(--color-input-border)]"
                        }`}
      >
        <input
          type="radio"
          id={id}
          checked={checked}
          onChange={() => fn(id)}
          className="peer hidden"
        />
        <span
          className="
                            min-w-5 min-h-5 border-2 border-[var(--color-input-border)] rounded-full
                            flex items-center justify-center
                            transition-all duration-200
                            peer-checked:border-[var(--color-input-circle)] peer-checked:bg-[var(--color-input-circle)]
                            "
        >
          {checked && (
            <span className="w-2.5 h-2.5 bg-[var(--color-bg)] rounded-full"></span>
          )}
        </span>
        <span className="text-sm lg:text-lg">{questionText}</span>
      </label>
    );
  } else {
    return (
      <label htmlFor={id}>
        <input type={type} id={id} onClick={() => fn(id)} />
        {questionText}
      </label>
    );
  }
}

export default Input;
