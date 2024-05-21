import { IInventoryItem } from "../utils/interfaces/IInventoryItem";

export default function InvetoryItem({ name, quantity, price }: IInventoryItem) {

    return (
        <div className="w-full flex justify-between bg-white px-[20px] py-[12px]">
            <div>Name: {name}</div>
            <div>Quantity: {quantity}</div>
            <div>Price (per unit): { price }</div>
            {/* 3000 - 1000 */}
        </div>    
    );
}