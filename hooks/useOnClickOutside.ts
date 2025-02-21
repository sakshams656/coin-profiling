import { MutableRefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  handler: () => void
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const current = ref.current;
      const useHandler =
        current && !current.contains(event.target as HTMLDivElement);

      if (useHandler) handler();
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
