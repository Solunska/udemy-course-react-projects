import { useAccorionContext } from "./Accordion";
import { useAccorionItemContext } from "./AccordionItem";

export default function AccordionTitle({ className, children }) {
    const { toggleItem } = useAccorionContext();
    const id = useAccorionItemContext();

    return <h3
        className={className}
        onClick={() => toggleItem(id)}>
        {children}
    </h3>
}