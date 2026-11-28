import React from "react";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import { useAppContext } from "../AppContext"

const parentNameClass = "text-[13px] font-medium text-slate-600 dark:text-slate-300"
const inputClass = "text-[13px] p-2 w-full rounded-md border outline-none placeholder:text-slate-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-700"
const errorClass = "text-[11px] mt-1 text-red-500"

export function WalletWindow() {
    const {openWalletWindowObject: { openWalletWindow }} = useAppContext();

    return (
        // Parent container
        <div className={`${openWalletWindow ? "block" : "hidden"}
        w-[48%] max-sm:w-[82%] z-50 p-3 left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2
        fixed flex flex-col gap-3 bg-white dark:bg-slate-900 border border-slate-50 dark:border-slate-800 rounded-md shadow-md`}>
            <Header/>

            {/* Body */}
            <form className="flex flex-col gap-2 pt-8 px-7 mt-3">

                {/* Wallet input */}
                <WalletInput/>
            </form>

            <Footer/>
        </div>
    );
}

function Header() {
    const {openWalletWindowObject: { setOpenWalletWindow }} = useAppContext();

    return (
        <div className="flex justify-between items-center pt-7 px-7">
            <div className="flex items-center gap-2">

                {/* Wallet icon */}
                <div className="p-[7px] bg-purple-200 dark:bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <ReceiptLongOutlinedIcon sx={{fontSize: "21px"}} className="text-purple-600"/>
                </div>

                {/* Wallet header */}
                <div>
                    <span className="font-semibold text-lg text-slate-800 dark:text-slate-100">Add Wallet</span>
                </div>
            </div>

            <CloseOutlinedIcon
            onClick={() => setOpenWalletWindow(false)}
            sx={{fontSize: "18px"}}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer transition-colors"/>
        </div>
    );
}

function WalletInput() {
    const {openIconWindowObject: { setOpenIconWindow }} = useAppContext();

    return (
        <div className="flex flex-col gap-2">
            <span className={`${parentNameClass}`}>Wallet Name</span>

            
            <div className="flex gap-3 justify-between">
                
                {/* Input */}
                <div className="w-full">
                    <input placeholder="Enter Wallet Name..."
                    className={`${inputClass}`}/>

                    {/* <p className={`${errorClass}`}>This is an error</p> */}
                </div>

                {/* Icon */}
                <div
                onClick={() => setOpenIconWindow(true)} 
                className="w-12 h-10 text-white flex items-center justify-center
                    bg-purple-600 rounded-lg cursor-pointer hover:bg-purple-700 dark:hover:bg-purple-500">
                    <ReceiptLongOutlinedIcon sx={{fontSize: "21px"}}/>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    const {openWalletWindowObject: { setOpenWalletWindow }} = useAppContext();

    return (
        <div className="w-full p-[12px] mt-8 mb-4 flex gap-3 justify-end px-7 items-center">

            {/* Cancel button */}
            <button
            onClick={() => setOpenWalletWindow(false)}
            className="border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 text-[13px] p-2 px-6 rounded-md
            hover:border-slate-600 dark:hover:border-slate-400 transition-all cursor-pointer">
                Cancel
            </button>

            {/* Add Wallet button */}
            <button className="bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-500 text-white text-[13px] p-2 px-3
            rounded-md transition-all cursor-pointer">
                Add Wallet
            </button>
        </div>
    );
}