import { IInventoryItem } from "../utils/interfaces/IInventoryItem";

export default function InvetoryItem({ name, quantity }: IInventoryItem) {

    return (
        <div className="w-full flex justify-between bg-white px-[20px] py-[12px]">
            <div>{name}</div>
            <div>{quantity}</div>
        </div>    
    );
}