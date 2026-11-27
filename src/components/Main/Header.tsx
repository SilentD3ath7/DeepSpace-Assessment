import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import { useAppContext } from "../AppContext";

const bgColor = "bg-purple-600"

export default function Header() {
    return (
        <nav className="flex justify-between items-center">
            <LogoSection/>
            <Searchbar/>
            <Button/>
        </nav>
    );
}

function LogoSection() {
    return (
        <div className="flex gap-2 items-center">

            {/* Icon container */}
            <div className={`${bgColor} flex items-center justify-center p-[11px] rounded-lg`}>

                {/* Icon */}
                <div className="w-[26px] h-[26px] items-center justify-center flex">
                    <SavingsOutlinedIcon sx={{fontSize: "25px"}} className="text-white"/>
                </div>
            </div>

            {/* App name */}
            <div className="flex gap-1 text-[24px] max-sm:hidden">
                <span className="font-bold text-purple-500">Common</span>
                <span className="text-slate-400">Cents</span>
            </div>
        </div>
    );
}

function Searchbar() {
    return (
        <div className={`h-[46px] bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 focus-within:border-purple-500
        text-slate-500 flex items-center text-sm rounded-md px-3 gap-2 w-[300px] max-sm:w-[220px]`}>
            <SearchOutlinedIcon className="text-slate-400"/>
            <input placeholder="Search an expense..." className="bg-transparent outline-none w-full font-light"/>
        </div>
    );
}

function Button() {
    const {openExpenseWindowObject: { setOpenExpenseWindow}} = useAppContext();

    return (
        <button onClick={() => setOpenExpenseWindow(true)}
        className={`${bgColor} gap-1 p-[12px] flex text-sm rounded-md text-white 
        items-center justify-center pr-[18px] hover:bg-purple-700 dark:hover:bg-purple-500
        hover:scale-105 transition-all cursor-pointer max-sm:pr-3`}>
            <AddOutlinedIcon sx={{fontSize: "20px"}}/>
            <span className="max-sm:hidden">New Expense</span>
        </button>
    );
}