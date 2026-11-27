import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useAppContext } from "../AppContext";
import { useEffect, useRef } from "react";

export default function WalletDropDown() {
    const {
        openWalletDropDownObject: { openWalletDropDown, setOpenWalletDropDown },
        WalletDropDownPositionsObject: { WalletDropDownPositions },} = useAppContext();
    const dropDownRef = useRef<HTMLDivElement>(null);

    // Function to close the wallet drop down by clicking outside of it
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target as Node)
            ) {
                setOpenWalletDropDown(false)
            }
        }

        if (openWalletDropDown) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openWalletDropDown, setOpenWalletDropDown]);

    return (
        <div 
        ref={dropDownRef}
        style={{
            top: WalletDropDownPositions.top + 55,
            left: WalletDropDownPositions.left,
            width: WalletDropDownPositions.width,
        }}
        className={` ${openWalletDropDown ? "flex" : "hidden"}
            flex-col gap-2 fixed z-[60] p-3 bg-white dark:bg-slate-800 border border-slate-50 dark:border-slate-700 
            text-slate-100 select-none shadow-xl rounded-lg`}>
            <AddButton/>
            <WalletList/>
        </div>
    );
}

function AddButton() {
    const {
        openWalletWindowObject: { setOpenWalletWindow },
        openWalletDropDownObject: { setOpenWalletDropDown },
    } = useAppContext();

    return (
        <div 
        onClick={() => {
            setOpenWalletWindow(true);
            setOpenWalletDropDown(false);
        }}
        className="flex items-center gap-2 p-[9px] rounded-lg border border-dashed 
            dark:border-slate-600 text-slate-600 dark:text-slate-300 cursor-pointer
            hover:border-purple-500 hover:bg-slate-700/50">
            <div>
                <AddOutlinedIcon className="text-purple-400"/>
            </div>

            <span className="text-[14px] text-slate-300">Add</span>
        </div>
    );
}

function WalletList() {
    return (
        <div className="flex flex-col gap-1">
            <SingleList/>
            <SingleList/>
        </div>
    );
}

function SingleList() {
    return (
        <div className="flex items-center justify-between gap-7 p-3 rounded-lg text-slate-600
            hover:bg-slate-300/60 dark:text-slate-200 dark:hover:bg-slate-700/60 transition-colors">
            <div className="flex gap-2 items-center">
                <div>
                    <HomeOutlinedIcon
                    sx={{fontSize: "22px"}}
                    className="text-purple-500"/>
                </div>

                <span className="text-[15px] mt-1 hover:text-purple-500 cursor-pointer transition-colors">
                    Grocery
                </span>
            </div>

            {/* Action buttons */}
            <div className="flex font-bold items-center mt-[3px]">
                <div className="flex gap-2 items-center">

                    {/* Delete button */}
                    <div className="p-1 rounded-md hover:bg-slate-700 dark:hover:bg-slate-500 flex items-center justify-center cursor-pointer transition-colors">
                        <DeleteOutlineOutlinedIcon
                        sx={{fontSize: "16px"}}
                        className="text-rose-400 transition-colors"/>
                    </div>
                </div>
            </div>
        </div>
    );
}