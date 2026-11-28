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
    const {expensesArrayObject: { expensesArray },} = useAppContext();

    const currentDate: string = formatDate(new Date());
    const totalExpenses: string = formatCurrency(expensesArray.reduce((a, b) => a + b.amount, 0));

    return (
        <div className="flex justify-between mb-4 items-center px-1">

            {/* Date */}
            <span className="font-bold text-[15px] text-slate-400">{currentDate}</span>
        
            {/* Transactions and value */}
            <div className="flex gap-7 text-slate-400 text-[13px] font-semibold">
                <span>Number of transaction: {expensesArray.length}</span>
                <span>Value: ${totalExpenses}</span>
            </div>
        </div>
    );
}

function ExpensesList() {
    const {expensesArrayObject: { expensesArray },} = useAppContext();

    return (
        <div className="flex p-1 mt- items-center flex-col gap-5 h-[400px] overflow-y-auto">
            {expensesArray.map((expense) => (
                <SingleExpense key={expense.id} singleExpense={expense}/>
            ))}
        </div>
    );
}

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return date.toLocaleDateString("en-US", options)
}

function formatCurrency(value: number): string {
    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
        .format(value)
}