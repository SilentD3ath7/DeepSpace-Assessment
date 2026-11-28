import { AccountBalance, HelpOutlined } from "@mui/icons-material";
import { JSX } from "react/jsx-runtime";

export const getIconComponent = (
    iconName: string,
    textColor?: string,
    fontSize?: string,
): JSX.Element => {
    const defaultFontSize = "27px";
    const defaultTextColor = "text-purple-600";

    const iconProps = {
        sx: { fontSize: fontSize || defaultFontSize },
        className: `${defaultTextColor} ${textColor || ""}`.trim(),
    };

    switch (iconName) {
        case "AccountBalance":
            return <AccountBalance {...iconProps}/>;
        default:
            return <HelpOutlined {...iconProps}/>;
    }
}