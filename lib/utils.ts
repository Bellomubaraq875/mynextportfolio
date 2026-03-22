import { Classvalue, clsx } from "clsx";
import { twMerge} from "tailwind-merge"


export function cn(...inputs: Classvalue[]) {
    return twMerge(clsx(inputs))
}