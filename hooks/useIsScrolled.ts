import { useCallback, useEffect, useMemo, useState } from "react";

import { debounce } from "lodash";

const SCROLL_MARGIN = 1;

export const useIsScrolled = (
  currentTarget: HTMLDivElement | null,
  delay = 0
): {
  checkIfScrolled: (currentTarget: HTMLDivElement) => void;
  isOnTop: boolean;
  isOnBottom: boolean;
  scrollTop: number | undefined;
} => {
  const [isOnTop, setIsOnTop] = useState(true);
  const [isOnBottom, setIsOnBottom] = useState(false);
  const [scrollTop, setScrollTop] = useState<number | undefined>();

  const checkIfScrolled = useCallback(() => {
    if (!currentTarget) {
      return;
    }
    if (currentTarget.scrollTop === 0) setIsOnTop(true);
    else setIsOnTop(false);
    if (
      currentTarget.scrollHeight - currentTarget.scrollTop - SCROLL_MARGIN <=
      currentTarget.clientHeight
    )
      setIsOnBottom(true);
    else setIsOnBottom(false);
    setScrollTop(currentTarget.scrollTop);
  }, [currentTarget]);

  const delayedCheck = useMemo(
    () => debounce(checkIfScrolled, delay),
    [checkIfScrolled, delay]
  );

  useEffect(() => {
    if (currentTarget) {
      checkIfScrolled();
      currentTarget.addEventListener("scroll", delayedCheck);

      return () => currentTarget?.removeEventListener("scroll", delayedCheck);
    }
  }, [currentTarget, checkIfScrolled, delayedCheck]);

  return { checkIfScrolled, isOnTop, isOnBottom, scrollTop };
};
