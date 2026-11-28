import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { allIconsArray, IconData } from "./LocalData/AllIcons";
import { Wallet, walletsData } from "./LocalData/WalletsArray";
import { Expense, expensesData } from "./LocalData/ExpensesArray";

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
    walletsArrayObject: {
        walletsArray: Wallet[];
        setWalletsArray: React.Dispatch<React.SetStateAction<Wallet[]>>;
    };
    expensesArrayObject: {
        expensesArray: Expense[];
        setExpensesArray: React.Dispatch<React.SetStateAction<Expense[]>>;
    };
    selectedExpenseObject: {
        selectedExpense: Expense | null;
        setSelectedExpense: React.Dispatch<React.SetStateAction<Expense | null>>;
    };
    selectedWalletFromMainPageObject: {
        selectedWalletFromMainPage: Wallet | null;
        setSelectedWalletFromMainPage: React.Dispatch<React.SetStateAction<Wallet | null>>;
    };
    selectedWalletInExpenseWindowObject: {
        selectedWalletInExpenseWindow: Wallet | null;
        setSelectedWalletInExpenseWindow: React.Dispatch<React.SetStateAction<Wallet | null>>;
    };
    selectedIconObject: {
        selectedIcon: string;
        setSelectedIcon: React.Dispatch<React.SetStateAction<string>>;
    };
    isClickedOnMainPageObject: {
        isClickedOnMainPage: boolean;
        setIsClickedOnMainPage: React.Dispatch<React.SetStateAction<boolean>>;
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
    walletsArrayObject: {
        walletsArray: [],
        setWalletsArray: () => {},
    },
    expensesArrayObject: {
        expensesArray: [],
        setExpensesArray: () => {},
    },
    selectedExpenseObject: {
        selectedExpense: null,
        setSelectedExpense: () => {},
    },
    selectedWalletFromMainPageObject: {
        selectedWalletFromMainPage: null,
        setSelectedWalletFromMainPage: () => {},
    },
    selectedWalletInExpenseWindowObject: {
        selectedWalletInExpenseWindow: null,
        setSelectedWalletInExpenseWindow: () => {},
    },
    selectedIconObject: {
        selectedIcon: "AccountBalance",
        setSelectedIcon: () => {},
    },
    isClickedOnMainPageObject: {
        isClickedOnMainPage: false,
        setIsClickedOnMainPage: () => {},
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
    const [isLoading, setIsLoading] = useState(false);
    const [walletsArray, setWalletsArray] = useState<Wallet[]>([]);
    const [expensesArray, setExpensesArray] = useState<Expense[]>([]);
    const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
    const [selectedWalletFromMainPage, setSelectedWalletFromMainPage] = useState<Wallet | null>(null);
    const [selectedWalletInExpenseWindow, setSelectedWalletInExpenseWindow] = useState<Wallet | null>(null);
    const [selectedIcon, setSelectedIcon] = useState("AccountBalance");
    const [isClickedOnMainPage, setIsClickedOnMainPage] = useState(false);

    // Simulate the fetching
    useEffect(() => {
        async function fetchdata() {
            try {
                setIsLoading(true);

                // Simulate a network delay
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setExpensesArray(expensesData);
                setWalletsArray(walletsData);

                // Set the first wallet as the default once loaded
                setSelectedWalletFromMainPage(walletsData[0] ?? null);
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        }

        fetchdata();
    }, []);

    console.log("walletsArray", walletsArray);
    console.log("expensesArray", expensesArray);

    return (
        <AppContext.Provider
        value={{
            openExpenseWindowObject: {openExpenseWindow, setOpenExpenseWindow},
            openIconWindowObject: {openIconWindow, setOpenIconWindow},
            allIconsArrayObject: {allIcons, setAllIcons},
            openWalletDropDownObject: {openWalletDropDown, setOpenWalletDropDown},
            WalletDropDownPositionsObject: {WalletDropDownPositions, setWalletDropDownPositions},
            openWalletWindowObject: {openWalletWindow, setOpenWalletWindow},
            walletsArrayObject: {walletsArray, setWalletsArray},
            expensesArrayObject: {expensesArray, setExpensesArray},
            selectedExpenseObject: {selectedExpense, setSelectedExpense},
            selectedWalletFromMainPageObject: {selectedWalletFromMainPage, setSelectedWalletFromMainPage},
            selectedWalletInExpenseWindowObject: {selectedWalletInExpenseWindow, setSelectedWalletInExpenseWindow},
            selectedIconObject: {selectedIcon, setSelectedIcon},
            isClickedOnMainPageObject: {isClickedOnMainPage, setIsClickedOnMainPage},}}>
            {children}
        </AppContext.Provider>

    );
};

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);