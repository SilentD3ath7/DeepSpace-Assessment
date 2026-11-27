import { useState } from "react";
import { useAppContext } from "../AppContext";
import AppsIcon from "@mui/icons-material/Apps"
import CloseIcon from "@mui/icons-material/Close"
import AllIcons, { allIconsArray, IconData } from "../AllIcons";

export default function IconsWindow() {
    const [allIconsState, setAllIconsState] = useState<IconData[]>(allIconsArray);
    const {openIconWindowObject: {openIconWindow, setOpenIconWindow},} = useAppContext();

    return (
        <div className={`${openIconWindow ? "block" : "hidden"}
        fixed z-50 p-3 h-[600px] w-[50%] max-sm:w-[90%] bg-white dark:bg-slate-900
        shadow-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg`}>
            <Header/>

            <span className="mx-8 text-[13px] mt-12 text-slate-400">
                {`Please select the icons you'd like to use from the collection below:`}
            </span>

            {/* All the icons */}
            <IconsArea/>

            <Buttons/>
        </div>
    );
}

function Header() {
    const {openIconWindowObject: { setOpenIconWindow }} = useAppContext();

    return (
        <div className="flex justify-between items-center pt-7 px-7 mb-8">
            <div className="flex items-center gap-2">

                {/* Icons */}
                <div className="p-2 bg-purple-200 dark:bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <AppsIcon
                    sx={{ fontSize: 21 }}
                    className="text-purple-600 text-[17px]"/>
                </div>

                {/* Header */}
                <span className="font-semibold text-lg text-slate-800 dark:text-slate-100">All Icons</span>
            </div>

            <CloseIcon
            onClick={() => setOpenIconWindow(false)}
            className="text-slate-400 text-[18px] cursor-pointer"/>
        </div>
    );
}

function IconsArea() {
    return (
        <div className="w-full flex flex-col items-center mt-3">
            <div className="border border-slate-100 dark:border-slate-700 w-[92%] h-[330px] overflow-auto rounded-md bg-slate-100 dark:bg-slate-800/80">
                <AllIcons/>
            </div>
        </div>
    );
}

function Buttons() {
    const {openIconWindowObject: { setOpenIconWindow }} = useAppContext();

    return (
        <div className="flex justify-end gap-4 mt-10 px-7 text-[12px]">
            <button
            onClick={() => setOpenIconWindow(false)}
            className="px-4 py-2 text-slate-500 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800">
                Cancel
            </button>

            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 dark:hover:bg-purple-500">
                Save
            </button>
        </div>
    );
}