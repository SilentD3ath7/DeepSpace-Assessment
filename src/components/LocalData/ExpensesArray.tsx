import { v4 } from "uuid";

export interface Expense {
    id: string;
    name: string;
    wallet: string;
    icon: string;
    amount: number;
}

export const expensesData: Expense[] = [
    {
        id: v4(),
        name: "Groceries",
        wallet: "Cash",
        icon: "ShoppingCart",
        amount: -75.5,
    },
    {
        id: v4(),
        name: "Rent",
        wallet: "Bank Account",
        icon: "Home",
        amount: -1200,
    },
    {
        id: v4(),
        name: "Dining Out",
        wallet: "Credit Card",
        icon: "Restaurant",
        amount: -45.75,
    },
    {
        id: v4(),
        name: "Gas",
        wallet: "Cash",
        icon: "LocalGasStation",
        amount: -30,
    },
    {
        id: v4(),
        name: "Movie Tickets",
        wallet: "Credit Card",
        icon: "LocalActivity",
        amount: -24.99,
    },
]