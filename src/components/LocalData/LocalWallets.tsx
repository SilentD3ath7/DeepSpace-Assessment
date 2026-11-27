import { v4 } from "uuid";

export interface Wallet {
    id: string;
    name: string;
    icon: string;
}

export const walletsData: Wallet[] = [
    {
        id: v4(),
        name: "Cash",
        icon: "AccountBalanceWallet",
    },
    {
        id: v4(),
        name: "Bank Account",
        icon: "AccountBalance",
    },
    {
        id: v4(),
        name: "Credit Card",
        icon: "CreditCard",
    },
    {
        id: v4(),
        name: "Savings",
        icon: "Savings",
    },
]