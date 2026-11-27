import { useAppContext } from "../AppContext";
import * as MuiIcons from "@mui/icons-material"

// export const allIconsArray: IconData[] = [
//     {
//         id: 100,
//         icons: <PersonalVideo className="text-[20px]"/>,
//         name: "PersonalVideo",
//         isSelected: false,
//     },
// ];

export interface IconData {
    id: number;
    icon: React.ReactElement;
    name: string;
    isSelected: boolean;
}

// Grabs the first 100 icons from icons-material for the array
export const allIconsArray: IconData[] = Object.entries(MuiIcons)
    .filter(([name]) => !/(Outlined|Rounded|TwoTone|Sharp)$/.test(name))
    .slice(0, 100)
    .map(([name, IconComponent], index) => ({
        id: index + 1,
        icon: <IconComponent className="text-[20px]"/>,
        name,
        isSelected: false
    }))

export default function AllIcons() {
    const {allIconsArrayObject: { allIcons, setAllIcons },} = useAppContext();

    return (
        <div className="flex flex-wrap gap-2 text-purple-600 p-3">
            {allIcons.map((singleIcon, index) => (
                <div
                key={index}
                className={`w-9 h-9 shadow-sm border border-slate-50 flex items-center
                    justify-center rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-500
                    ${
                        singleIcon.isSelected
                        ? "bg-purple-600 text-white border-purple-500"
                        : "bg-white text-purple-600 border-slate-50 dark:bg-slate-800 dark:text-purple-400 dark:border-slate-700"}`}
                >
                    {singleIcon.icon}
                </div>
            ))}
        </div>
    );
}