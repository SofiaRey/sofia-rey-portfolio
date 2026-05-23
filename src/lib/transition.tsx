import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type TransitionPhase = "idle" | "playing" | "fading";

type Ctx = {
  phase: TransitionPhase;
  href: string | null;
  start: (href: string) => void;
  setPhase: (p: TransitionPhase) => void;
};

const TransitionContext = createContext<Ctx>({
  phase: "idle",
  href: null,
  start: () => {},
  setPhase: () => {},
});

export function useTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [href, setHref] = useState<string | null>(null);

  const start = useCallback((h: string) => {
    setHref(h);
    setPhase("playing");
  }, []);

  return (
    <TransitionContext.Provider value={{ phase, href, start, setPhase }}>
      {children}
    </TransitionContext.Provider>
  );
}
