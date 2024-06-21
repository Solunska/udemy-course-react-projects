import { useAccorionContext } from "./Accordion";
import { useAccorionItemContext } from "./AccordionItem";

export default function AccordionContent({ className, children }) {
    const { openItemId } = useAccorionContext();
    const id = useAccorionItemContext();

    const isOpen = openItemId === id;

    return <div
        className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>
        {children}
    </div>
}