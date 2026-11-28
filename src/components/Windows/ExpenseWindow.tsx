import React, { createContext, useEffect, useRef, useState } from "react";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import { useAppContext } from "../AppContext"
import { getIconComponent } from "../NameToIcon";
import { v4 } from "uuid";
import { Expense } from "../LocalData/ExpensesArray";


interface expenseWindowInterface {
    expenseInputObject: {
        expenseName: string;
        setExpenseName: React.Dispatch<React.SetStateAction<string>>;
    };
    amountInputObject: {
    amount: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
    };
}

const expenseWindowDefaultState = {
    expenseInputObject: {
        expenseName: "",
        setExpenseName: () => {},
    },
    amountInputObject: {
    amount: 0,
    setAmount: () => {},
    },
}

const expenseWindowContext = createContext<expenseWindowInterface>(expenseWindowDefaultState);
const useExpenseWindowContext = () => React.useContext(expenseWindowContext);

const parentNameClass = "text-[13px] font-medium text-slate-600 dark:text-slate-300"
const inputClass = "text-[13px] p-2 w-full rounded-md border outline-none placeholder:text-slate-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-700"
const errorClass = "text-[11px] mt-1 text-red-500"

export function ExpenseWindow() {
    const {
        openExpenseWindowObject: { openExpenseWindow },
    } = useAppContext();

    const [expenseName, setExpenseName] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <expenseWindowContext.Provider
        value={{
            expenseInputObject: { expenseName, setExpenseName },
            amountInputObject: { amount, setAmount },
        }}>

            {/* Parent container */}
            <div className={`${openExpenseWindow ? "block" : "hidden"}
            w-[48%] max-sm:w-[82%] z-50 p-3 left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2
            fixed flex flex-col gap-3 bg-white dark:bg-slate-900 border border-slate-50 dark:border-slate-800 rounded-md shadow-md`}>
                <Header/>

                {/* Body */}
                <form className="flex flex-col gap-2 pt-8 px-7 mt-3">

                    {/* Expense input */}
                    <ExpenseInput/>

                    <div className="flex mt-3 gap-3 justify-between">
                        <AmountInput/>
                        <WalletSelection/>
                    </div>
                </form>

                <Footer/>
            </div>
        </expenseWindowContext.Provider>
    );
}

function Header() {
    const {openExpenseWindowObject: { setOpenExpenseWindow }} = useAppContext();

    return (
        <div className="flex justify-between items-center pt-7 px-7">
            <div className="flex items-center gap-2">

                {/* Expense icon */}
                <div className="p-[7px] bg-purple-200 dark:bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <ReceiptLongOutlinedIcon sx={{fontSize: "21px"}} className="text-purple-600"/>
                </div>

                {/* Expense header */}
                <div>
                    <span className="font-semibold text-lg text-slate-800 dark:text-slate-100">Add Expense</span>
                </div>
            </div>

            <CloseOutlinedIcon
            onClick={() => setOpenExpenseWindow(false)}
            sx={{fontSize: "18px"}}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer transition-colors"/>
        </div>
    );
}

function ExpenseInput() {
    const {
        openIconWindowObject: { setOpenIconWindow },
        openExpenseWindowObject: { openExpenseWindow },
        selectedIconObject: { selectedIcon }
    } = useAppContext();

    const {
        expenseInputObject: { expenseName, setExpenseName },
    } = useExpenseWindowContext();
    const inputNameRef = useRef<HTMLInputElement>(null);

    // Set focus to input when window is opened
    useEffect(() => {
        if (inputNameRef.current) {inputNameRef.current.focus();}
    }, [openExpenseWindow]);

    return (
        <div className="flex flex-col gap-2">
            <span className={`${parentNameClass}`}>Expense Name</span>

            
            <div className="flex gap-3 justify-between">
                
                {/* Input */}
                <div className="w-full">
                    <input
                    type="text"
                    ref={inputNameRef}
                    onChange={(e) => setExpenseName(e.target.value)}
                    value={expenseName}
                    placeholder="Enter Expense Name..."
                    className={`${inputClass}`}/>

                    {/* <p className={`${errorClass}`}>This is an error</p> */}
                </div>

                {/* Icon */}
                <div
                onClick={() => setOpenIconWindow(true)} 
                className="w-12 h-10 flex items-center justify-center
                    bg-purple-600 rounded-lg cursor-pointer hover:bg-purple-700 dark:hover:bg-purple-500">
                    {/* <ReceiptLongOutlinedIcon sx={{fontSize: "21px"}}/> */}
                    {getIconComponent(selectedIcon, "text-white", "21px")}
                </div>
            </div>
        </div>
    );
}

function AmountInput() {
    const {
        amountInputObject: { amount, setAmount },
    } = useExpenseWindowContext();

    function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    // Allow clearing input back to 0, otherwise parse as a number
    setAmount(value === "" ? 0 : parseFloat(value));
  }

    return (
        <div className="flex flex-col gap-2 mt-2 w-full">
            <span className={`${parentNameClass}`}>Amount</span>

            <div className="flex gap-3 items-center">

                {/* Input */}
                <div className="w-full">
                    <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={amount === 0 ? "" : amount}
                    onChange={handleAmountChange}
                    placeholder="Enter  Amount..."
                    className={`${inputClass}`}/>

                    {/* <p className={`${errorClass}`}>This is an error</p> */}
                </div>
            </div>
        </div>
    );
}

function WalletSelection() {
    const {
        openWalletDropDownObject: { setOpenWalletDropDown },
        WalletDropDownPositionsObject: { setWalletDropDownPositions },
        selectedWalletInExpenseWindowObject: { selectedWalletInExpenseWindow, setSelectedWalletInExpenseWindow },
        openExpenseWindowObject: { openExpenseWindow, setOpenExpenseWindow },
        walletsArrayObject: { walletsArray },
    } = useAppContext();

    const walletSelectionRef = React.useRef<HTMLDivElement>(null);

    function handleClick() {
        setOpenWalletDropDown(true);
        const rect = walletSelectionRef.current?.getBoundingClientRect();
        const { top, left, width } = rect || {top: 0, left: 0};
        setWalletDropDownPositions({top: top + 30, left: left, width: width})
    }

    const filterWalletsArray = walletsArray.filter((wallet) => wallet.name !== "All Wallets");

    // Set default wallet when window opens
    useEffect(() => {
        if (openExpenseWindow && filterWalletsArray.length !== 0) {
        setSelectedWalletInExpenseWindow(filterWalletsArray[0]);
        }
    }, [openExpenseWindow]);

    return (
        <div 
        ref={walletSelectionRef}
        onClick={() => {
            if (filterWalletsArray.length !== 0) {
                handleClick();
            }
        }}
        className={`flex flex-col gap-2 mt-2 w-full cursor-pointer 
            ${filterWalletsArray.length === 0 && "opacity-50"}`}>

            <span className={`${parentNameClass}`}>Wallet</span>

            <div className="p-[9px] rounded-md flex items-center justify-between gap-2
            dark:bg-slate-800 border dark:border-slate-700 dark:hover:border-slate-600">
                <div className="flex gap-2 items-center">
                    {selectedWalletInExpenseWindow && (
                        <>
                            {/* Wallet icon */}
                            {getIconComponent(selectedWalletInExpenseWindow.icon)}

                            {/* Wallet Name */}
                            <span className="text-[13px] mt-[2px] text-slate-500 dark:text-slate-200">
                                {selectedWalletInExpenseWindow?.name}
                            </span>
                        </>
                    )}
                </div>

                <KeyboardArrowDownOutlinedIcon fontSize="small"/>
            </div>
        </div>
    );
}

function Footer() {
    const {
        openExpenseWindowObject: { setOpenExpenseWindow },
        selectedIconObject: { selectedIcon },
        selectedWalletInExpenseWindowObject: { selectedWalletInExpenseWindow },
        expensesArrayObject: { expensesArray, setExpensesArray },
    } = useAppContext();

    const {
        expenseInputObject: { expenseName, setExpenseName },
        amountInputObject: { amount, setAmount },
    } = useExpenseWindowContext();

    function handleAddExpense() {
    // Basic validation
    if (!expenseName.trim() || amount <= 0 || !selectedWalletInExpenseWindow) {
      return;
    }

    // Construct new expense object
    const newExpense: Expense = {
      id: v4(),
      name: expenseName.trim(),
      wallet: selectedWalletInExpenseWindow.name,
      icon: selectedIcon,
      amount: -Math.abs(amount),
    };
    
    // Add new expense to global state
    setExpensesArray([...expensesArray, newExpense]);

    // Reset modal inputs and close window
    setExpenseName("");
    setAmount(0);
    setOpenExpenseWindow(false);
}

    return (
        <div className="w-full p-[12px] mt-8 mb-4 flex gap-3 justify-end px-7 items-center">

            {/* Cancel button */}
            <button
            onClick={() => setOpenExpenseWindow(false)}
            className="border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 text-[13px] p-2 px-6 rounded-md
            hover:border-slate-600 dark:hover:border-slate-400 transition-all cursor-pointer">
                Cancel
            </button>

            {/* Add expense button */}
            <button 
            onClick={handleAddExpense}
            className="bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-500 text-white text-[13px] p-2 px-3
            rounded-md transition-all cursor-pointer">
                Add Expense
            </button>
        </div>
    );
}