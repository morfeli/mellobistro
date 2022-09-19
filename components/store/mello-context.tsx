import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  createContext,
} from "react";

type MelloBistroProviderProps = {
  children: React.ReactNode;
};

type MelloBistroContextType = {
  mode: boolean;
  toggleMode: () => void;
};

const melloBistroDefaultState = {
  mode: false,
  toggleMode: () => {},
};

export const MelloContext = createContext<MelloBistroContextType>(
  melloBistroDefaultState
);

export const MelloBistroProvider = ({ children }: MelloBistroProviderProps) => {
  const [mode, setMode] = useState<boolean>(false);

  const toggleMode = useCallback(() => {
    setMode((current) => !current);
  }, []);

  const state = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);

  return (
    <MelloContext.Provider value={state}>{children}</MelloContext.Provider>
  );
};
