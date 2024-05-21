import { useEffect, useState } from "react";
import { IInventoryItem } from "../utils/interfaces/IInventoryItem";
import InvetoryItem from "./InventoryItem";

export default function Inventory() {
    const [items, setItems] = useState<IInventoryItem[]>([]); 

    useEffect(() => {
        fetchInventoryItems();
    }, []);

    const fetchInventoryItems = async () => {
        const port = 3000;
        const fetchUrl = `http://localhost:${port}/api/getInvetoryItems`;
        debugger;
        try {
            const response = await fetch(fetchUrl);
            const data = await response.json();
            console.log(data);
            debugger;
            setItems(data);
        } catch (error) {
            console.error(error);
            debugger;
        }
    }

    return (
        <div className="flex flex-col h-full p-6">
            <div className="font-bold">Inventory</div>

            {/* <TestFetchButton title="Fetch Inventory Items" doAction={fetchInventoryItems} /> */}

            <div className="flex flex-col gap-[20px] mt-[16px] overflow-y-auto flex-1 no-scrollbar">
                {items.map((item) => <InvetoryItem key={item.name} name={item.name} quantity={item.quantity} price={item.price}/>)}
            </div>
        </div>
    )
}