import { MelloContext } from "../store/mello-context";
import { useContext } from "react";

export const useMelloContext = () => {
  const melloCtx = useContext(MelloContext);

  return melloCtx;
};
