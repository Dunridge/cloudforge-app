import { useState } from "react";
import { inventoryItems } from "../utils/data/inventoryItems";
import InvetoryItem from "./InventoryItem";

export default function Inventory() {
    const [items, setItems] = useState(inventoryItems);

    return (
        <div className="flex flex-col h-full">
            <div className="font-bold">Inventory</div>
            <div className="flex flex-col gap-[20px] mt-[16px] overflow-y-auto flex-1 no-scrollbar">
                {items.map((item) => <InvetoryItem key={item.name} name={item.name} quantity={item.quantity} />)}
            </div>
        </div>
    )
}