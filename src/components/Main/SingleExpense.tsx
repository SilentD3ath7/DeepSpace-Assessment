import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { Expense } from "../LocalData/ExpensesArray";
import { useAppContext } from "../AppContext";
import { getIconComponent } from "../NameToIcon";

export default function SingleExpense({ singleExpense }: { singleExpense: Expense }) {
    const {
    expensesArrayObject: { setExpensesArray },
    selectedExpenseObject: { selectedExpense, setSelectedExpense }, } = useAppContext();

    const handleDelete = () => {
        setExpensesArray((prev) => 
            prev.filter((expense) => expense.id !== singleExpense.id)
        );

        // If the deleted expense happened to be selected, clear the selection
        if (selectedExpense?.id === singleExpense.id) {
            setSelectedExpense(null);
        }
    };

    return (

        // Parent Container
        <div className="w-full rounded-lg dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 dark:hover:border-slate-500 shadow-md
        flex gap-3 items-center justify-between p-5 py-6 transition-colors">

            <div className="flex gap-3 items-center">

                {/* Expense icon */}
                <div className="bg-purple-200 dark:bg-purple-600/20 rounded-lg p-2 flex items-center justify-center">
                    {getIconComponent(singleExpense.icon, "text-purple-500")}
                </div>

                {/* Expense Name */}
                <div className="flex flex-col">
                    <span className="font-bold text-slate-700 dark:text-slate-100">{singleExpense.name}</span>
                    <span className="flex text-slate-400 text-[13px] p-[2px]">{singleExpense.wallet}</span>
                </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-11 font-bold items-center">
                
                <span className="text-[16px] text-slate-600 dark:text-slate-100">$ {singleExpense.amount}</span>

                <div className="flex gap-2 items-center">

                    {/* Edit button */}
                    <div className="rounded-lg p-2 flex items-center justify-center
                    cursor-pointer bg-purple-400 hover:bg-purple-600 text-white dark:bg-purple-600/20 dark:hover:bg-purple-600 dark:text-purple-400">
                        <EditOutlinedIcon sx={{fontSize: "17px"}}/>
                    </div>

                    {/* Delete button */}
                    <div 
                    onClick={() => handleDelete()}
                    className="rounded-lg p-2 flex items-center justify-center
                    cursor-pointer bg-rose-500/20 hover:bg-red-800 text-rose-400 hover:text-white transition-colors">
                        <DeleteOutlineOutlinedIcon sx={{fontSize: "17px"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}