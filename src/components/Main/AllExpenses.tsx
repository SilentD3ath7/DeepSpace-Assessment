import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import ReceiptLonglinedIcon from "@mui/icons-material/ReceiptLongOutlined"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import SingleExpense from "./SingleExpense"
import { useAppContext } from "../AppContext"

export function AllExpenses() {
    return (
        <div className="mt-16">
            <ListHeader/>
            <ExpensesList/>
        </div>
    );
}

function ListHeader() {
    return (
        <div className="flex justify-between mb-4 items-center px-1">

            {/* Date */}
            <span className="font-bold text-[15px] text-slate-400">November 27th, 2026</span>
        
            {/* Transactions and value */}
            <div className="flex gap-7 text-slate-400 text-[13px] font-semibold">
                <span>Number of transaction: 3</span>
                <span>Value: $2100</span>
            </div>
        </div>
    );
}

function ExpensesList() {
    const {localExpensesObject: { localExpenses },} = useAppContext();

    return (
        <div className="flex p-1 mt- items-center flex-col gap-5 h-[400px] overflow-y-auto">
            {localExpenses.map((expense) => (
                <SingleExpense key={expense.id} singleExpense={expense}/>
            ))}
        </div>
    );
}