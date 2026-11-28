// import * as MuiIcons from "@mui/icons-material"

// export const allIconsArray: IconData[] = [
//     {
//         id: 100,
//         icons: <PersonalVideo className="text-[20px]"/>,
//         name: "PersonalVideo",
//         isSelected: false,
//     },
// ];

// export interface IconData {
//     id: number;
//     icon: React.ReactElement;
//     name: string;
//     isSelected: boolean;
// }

// Grabs the first 100 icons from icons-material for the array
// export const allIconsArray: IconData[] = Object.entries(MuiIcons)
//     .filter(([name]) => !/(Outlined|Rounded|TwoTone|Sharp)$/.test(name))
//     .slice(0, 100)
//     .map(([name, IconComponent], index) => ({
//         id: index + 1,
//         icon: <IconComponent className="text-[20px]"/>,
//         name,
//         isSelected: false
//     }))
//     allIconsArray[0].isSelected = true;

import { useAppContext } from "../AppContext";
import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import FlightIcon from "@mui/icons-material/Flight";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PaidIcon from '@mui/icons-material/Paid';

export interface IconData {
  id: number;
  icon: React.ReactNode;
  name: string;
  isSelected: boolean;
}

export const allIconsArray: IconData[] = [
  {
    id: 1,
    icon: <AccountBalanceIcon />,
    name: "AccountBalance",
    isSelected: true, // Default selected icon
  },
  {
    id: 2,
    icon: <AccountBalanceWalletIcon />,
    name: "AccountBalanceWallet",
    isSelected: false,
  },
  {
    id: 3,
    icon: <CreditCardIcon />,
    name: "CreditCard",
    isSelected: false,
  },
  {
    id: 4,
    icon: <ShoppingCartIcon />,
    name: "ShoppingCart",
    isSelected: false,
  },
  {
    id: 5,
    icon: <FastfoodIcon />,
    name: "Fastfood",
    isSelected: false,
  },
  {
    id: 6,
    icon: <DirectionsCarIcon />,
    name: "DirectionsCar",
    isSelected: false,
  },
  {
    id: 7,
    icon: <HomeIcon />,
    name: "Home",
    isSelected: false,
  },
  {
    id: 8,
    icon: <FlightIcon />,
    name: "Flight",
    isSelected: false,
  },
  {
    id: 9,
    icon: <LocalHospitalIcon />,
    name: "LocalHospital",
    isSelected: false,
  },
  {
    id: 10,
    icon: <SchoolIcon />,
    name: "School",
    isSelected: false,
  },
  {
    id: 11,
    icon: <SportsEsportsIcon />,
    name: "SportsEsports",
    isSelected: false,
  },
  {
    id: 12,
    icon: <CheckroomIcon />,
    name: "Checkroom",
    isSelected: false,
  },
  {
    id: 13,
    icon: <DensitySmallIcon />,
    name: "DensitySmall", // Used for the "All Wallets" option
    isSelected: false,
  },
  {
    id: 14,
    icon: <RestaurantIcon />,
    name: "Restaurant",
    isSelected: false,
  },
  {
    id: 15,
    icon: <LocalActivityIcon />,
    name: "LocalActivity",
    isSelected: false,
  },
  {
    id: 16,
    icon: <LocalGasStationIcon />,
    name: "LocalGasStation",
    isSelected: false,
  },
  {
    id: 17,
    icon: <PaidIcon />,
    name: "Savings",
    isSelected: false,
  },
];


export default function AllIcons() {
    const {
        allIconsArrayObject: { allIcons, setAllIcons },
        selectedIconObject: { setSelectedIcon },
        openIconWindowObject: { setOpenIconWindow },
    } = useAppContext();

    function handleIconSelection(singleIcon: IconData) {
        setAllIcons((prevIcons) => 
            prevIcons.map((icon) => {
                if (icon.name === singleIcon.name) {
                    setSelectedIcon(icon.name);
                    return {...icon, isSelected: true};
                }

                return {...icon, isSelected: false};
            })
        );

        // Close the icon window
        setOpenIconWindow(false);
    }

    return (
        <div className="flex flex-wrap gap-2 text-purple-600 p-3">
            {allIcons.map((singleIcon, index) => (
                <div
                key={index}
                onClick={() => handleIconSelection(singleIcon)}
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