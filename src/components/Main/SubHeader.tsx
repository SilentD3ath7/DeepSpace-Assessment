import React from "react"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import { useAppContext } from "../AppContext";

export default function SubHeader() {
    return (
        <div className="mt-[90px] flex justify-between">
            <WalletOptions/>
            <ClearAllBtn/>
        </div>
    );
}

function WalletOptions() {
    const {
        openWalletDropDownObject: { setOpenWalletDropDown },
        WalletDropDownPositionsObject: { setWalletDropDownPositions }} = useAppContext();
    const walletOptionsRef = React.useRef<HTMLDivElement>(null);

    function handleClick() {
        setOpenWalletDropDown(true);
        const rect = walletOptionsRef.current?.getBoundingClientRect();
        const { top, left } = rect || {top: 0, left: 0};
        setWalletDropDownPositions({top: top, left: left})
    }

    return (
        <div 
        ref={walletOptionsRef}
        onClick={handleClick}
        className="border border-slate-800 dark:border-slate-200 p-2 rounded-md flex items-center gap-2 cursor-pointer">
            <HomeOutlinedIcon className="text-purple-500" sx={{fontSize: "27px"}}/>
            <span className={`text-[15px] mt-1 text-slate-800 dark:text-slate-200`}>Home Wallet</span>
            <KeyboardArrowDownOutlinedIcon fontSize="small" className={`mt-[4px] text-slate-800 dark:text-slate-200`}/>
        </div>
    );
}

function ClearAllBtn() {
    return (
        <button className={`border transition-all px-6 text-slate-500 hover:bg-red-800 text-rose-400
        hover:text-white flex text-sm rounded-md items-center justify-center`}>
            <span>Clear All</span>
        </button>
    );
}