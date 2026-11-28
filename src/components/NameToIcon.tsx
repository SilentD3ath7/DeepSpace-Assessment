import React from "react";
import {
  AccountBalance,
  AccountBalanceWallet,
  CreditCard,
  ShoppingCart,
  Fastfood,
  DirectionsCar,
  Home,
  Flight,
  LocalHospital,
  School,
  SportsEsports,
  Checkroom,
  DensitySmall,
  HelpOutlined,
  Restaurant,
  LocalActivity,
  LocalGasStation,
  Paid,
} from "@mui/icons-material";

export const getIconComponent = (
  iconName: string,
  textColor?: string,
  fontSize?: string
): React.JSX.Element => {
  const defaultFontSize = "27px";
  const defaultTextColor = "text-purple-600";

  const iconProps = {
    sx: { fontSize: fontSize || defaultFontSize },
    className: `${defaultTextColor} ${textColor || ""}`.trim(),
  };

  switch (iconName) {
    case "AccountBalance":
      return <AccountBalance {...iconProps} />;
    case "AccountBalanceWallet":
      return <AccountBalanceWallet {...iconProps} />;
    case "CreditCard":
      return <CreditCard {...iconProps} />;
    case "ShoppingCart":
      return <ShoppingCart {...iconProps} />;
    case "Fastfood":
      return <Fastfood {...iconProps} />;
    case "DirectionsCar":
      return <DirectionsCar {...iconProps} />;
    case "Home":
      return <Home {...iconProps} />;
    case "Flight":
      return <Flight {...iconProps} />;
    case "LocalHospital":
      return <LocalHospital {...iconProps} />;
    case "School":
      return <School {...iconProps} />;
    case "SportsEsports":
      return <SportsEsports {...iconProps} />;
    case "Checkroom":
      return <Checkroom {...iconProps} />;
    case "DensitySmall":
      return <DensitySmall {...iconProps} />;
    case "Restaurant":
      return <Restaurant {...iconProps} />;
    case "LocalActivity":
      return <LocalActivity {...iconProps} />;
    case "LocalGasStation":
      return <LocalGasStation {...iconProps} />;
    case "Savings":
      return <Paid {...iconProps} />;
    default:
      return <HelpOutlined {...iconProps} />;
  }
};