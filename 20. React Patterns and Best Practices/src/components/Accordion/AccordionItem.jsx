import { createContext, useContext } from "react"

const AccorionItemContext = createContext();

export function useAccorionItemContext() {
    const ctx = useContext(AccorionItemContext);

    if (!ctx) {
        throw new Error('AccordionItem-related components must be wrapped by <Accordion.Item>');
    }

    return ctx;
}

export default function AccordionItem({ id, className, children }) {
    return <AccorionItemContext.Provider value={id}>
        <li className={className}>
            {children}
        </li>
    </AccorionItemContext.Provider>
}