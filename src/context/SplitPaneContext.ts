import { createContext } from "react";

const SplitPaneContext = createContext<{
    clientHeight: number | null,
    setClientHeight: React.Dispatch<React.SetStateAction<number | null>>,
    clientWidth: number | null,
    setClientWidth: React.Dispatch<React.SetStateAction<number | null>>,
    onMouseHoldDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
} | null>(null);

export default SplitPaneContext;