import type { FC, ReactNode } from "react";
import React, { createContext, useContext, useState } from "react";

export interface DataStorage {
  [key: string]: any;
}

interface DataContextProps {
  storage: DataStorage;
  setValues: (values: DataStorage) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [storage, setStorage] = useState<DataStorage>({});

  const setValues = (values: DataStorage) => {
    setStorage((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ storage, setValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
