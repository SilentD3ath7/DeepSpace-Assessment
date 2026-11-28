import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import { useAppContext } from "../AppContext";
import { Wallet } from "../LocalData/WalletsArray";
import { useEffect, useRef } from "react";
import { getIconComponent } from "../NameToIcon";

export default function WalletDropDown() {
    const {
    openWalletDropDownObject: { openWalletDropDown, setOpenWalletDropDown },
    WalletDropDownPositionsObject: { WalletDropDownPositions },
    isClickedOnMainPageObject: { isClickedOnMainPage, setIsClickedOnMainPage }} = useAppContext();

    const dropDownRef = useRef<HTMLDivElement>(null);

    // Function to close the wallet drop down by clicking outside of it
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target as Node)
            ) {
                setOpenWalletDropDown(false);
                setIsClickedOnMainPage(false);
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
            
            {/* If user clicks on wallet main page, show add button */}
            {isClickedOnMainPage && <AddButton/>}
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
    const {
    walletsArrayObject: { walletsArray },
    isClickedOnMainPageObject: { isClickedOnMainPage }
    } = useAppContext();

    const filterWalletsArray = !isClickedOnMainPage
    ? walletsArray.filter((wallet) => wallet.name !== "All Wallets")
    : walletsArray;

    if (filterWalletsArray.length === 0 && !isClickedOnMainPage) {
        return (
            <p className="text-[13px] p-1 text-slate-600 dark:text-slate-500">
                No Wallets created yet...
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-1">
            {filterWalletsArray.map((wallet) => (
            <SingleList key={wallet.id} wallet={wallet}/>))}
        </div>
    );
}

function SingleList({ wallet }: { wallet: Wallet }) {
    const {
        isClickedOnMainPageObject: { isClickedOnMainPage, setIsClickedOnMainPage },
        selectedWalletFromMainPageObject: { selectedWalletFromMainPage, setSelectedWalletFromMainPage },
        selectedWalletInExpenseWindowObject: { setSelectedWalletInExpenseWindow },
        openWalletDropDownObject: { setOpenWalletDropDown },
    } = useAppContext();

    const changeColorSelectedWallet = isClickedOnMainPage && selectedWalletFromMainPage?.id
    === wallet.id && "border border-purple-600 bg-purple-50 dark:bg-purple-700"

    return (
        <div className={`${changeColorSelectedWallet} flex items-center justify-between gap-7 p-3
        rounded-lg text-slate-600 hover:bg-slate-300/60 dark:text-slate-200 dark:hover:bg-slate-700/60`}>
            <div 
            onClick={() => {

                // Update selection of wallet only in main page so using drop down
                // in expense window does not change main page
                if (isClickedOnMainPage) {setSelectedWalletFromMainPage(wallet);}
                else {setSelectedWalletInExpenseWindow(wallet)};

                // Reset isClicked
                setIsClickedOnMainPage(false);

                // Close the drop down
                setOpenWalletDropDown(false);
            }}
            className="flex gap-2 items-center">

                {/* Wallet Icon */}
                <div>
                    {getIconComponent(wallet.icon)}
                </div>

                {/* Wallet Name */}
                <span className="text-[15px] mt-1 hover:text-purple-500 cursor-pointer transition-colors">
                    {wallet.name}
                </span>
            </div>

            {/* Action buttons */}
            {isClickedOnMainPage && wallet.name !== "All Wallets" && (
            <div className="flex font-bold items-center mt-[3px]">
                <div className="flex gap-2 items-center">

                    {/* Edit button */}
                    <div className="p-1 rounded-md flex items-center justify-center
                    cursor-pointer hover:bg-purple-600 text-white dark:text-purple-400">
                        <EditOutlinedIcon sx={{fontSize: "16px"}}/>
                    </div>

                    {/* Delete button */}
                    <div className="p-1 rounded-md flex items-center justify-center
                    cursor-pointer text-rose-400 hover:bg-red-800 hover:text-white">
                        <DeleteOutlineOutlinedIcon sx={{fontSize: "16px"}}/>
                    </div>
                </div>
            </div>)}
        </div>
    );
}