import {  createContext} from "react";

export const RefreshContext = createContext<{refresh: boolean; setRefresh: React.Dispatch<React.SetStateAction<boolean>>;}>({
    refresh: false,
    setRefresh: () => {},
  });
