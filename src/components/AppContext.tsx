import React, { createContext, ReactNode, useContext, useState } from "react";
import { allIconsArray, IconData } from "./AllIcons";

// Define the shape of the contect state
interface AppState {
    openExpenseWindowObject: {
        openExpenseWindow: boolean;
        setOpenExpenseWindow: React.Dispatch<React.SetStateAction<boolean>>;
    };
    openIconWindowObject: {
        openIconWindow: boolean;
        setOpenIconWindow: React.Dispatch<React.SetStateAction<boolean>>;
    };
    allIconsArrayObject: {
        allIcons: IconData[];
        setAllIcons: React.Dispatch<React.SetStateAction<IconData[]>>;
    };
    openWalletDropDownObject: {
        openWalletDropDown: boolean;
        setOpenWalletDropDown: React.Dispatch<React.SetStateAction<boolean>>;
    };
    WalletDropDownPositionsObject: {
        WalletDropDownPositions: {top: number, left: number, width?: number};
        setWalletDropDownPositions: React.Dispatch<React.SetStateAction<{top: number, left: number, width?: number}>>;
    };
    openWalletWindowObject: {
        openWalletWindow: boolean;
        setOpenWalletWindow: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

// Create a default state
const defaultState: AppState = {
    openExpenseWindowObject: {
        openExpenseWindow: false,
        setOpenExpenseWindow: () => {},
    },
    openIconWindowObject: {
        openIconWindow: false,
        setOpenIconWindow: () => {},
    },
    allIconsArrayObject: {
        allIcons: allIconsArray,
        setAllIcons: () => {},
    },
    openWalletDropDownObject: {
        openWalletDropDown: false,
        setOpenWalletDropDown: () => {},
    },
    WalletDropDownPositionsObject: {
        WalletDropDownPositions: {top: 0, left: 0},
        setWalletDropDownPositions: () => {},
    },
    openWalletWindowObject: {
        openWalletWindow: false,
        setOpenWalletWindow: () => {},
    },
};

// Create the context with default values
const AppContext = createContext<AppState>(defaultState);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> =({ children, }) => {
    const [openExpenseWindow, setOpenExpenseWindow] = useState(false);
    const [openIconWindow, setOpenIconWindow] = useState(false);
    const [allIcons, setAllIcons] = useState(allIconsArray);
    const [openWalletDropDown, setOpenWalletDropDown] = useState(false);
    const [WalletDropDownPositions, setWalletDropDownPositions] = useState({top: 0, left: 0});
    const [openWalletWindow, setOpenWalletWindow] = useState(false);

    return (
        <AppContext.Provider
        value={{
            openExpenseWindowObject: {openExpenseWindow, setOpenExpenseWindow},
            openIconWindowObject: {openIconWindow, setOpenIconWindow},
            allIconsArrayObject: {allIcons, setAllIcons},
            openWalletDropDownObject: {openWalletDropDown, setOpenWalletDropDown},
            WalletDropDownPositionsObject: {WalletDropDownPositions, setWalletDropDownPositions},
            openWalletWindowObject: {openWalletWindow, setOpenWalletWindow},}}>
            {children}
        </AppContext.Provider>

    );
};

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);