import { IRFQListItemProps } from "../utils/interfaces/IRFQListItemProps";

export default function RFQListItem({ _id, emailAdress, emailText, subject, handleRFQClick }: IRFQListItemProps) {

    const onRFQClick = () => {
        handleRFQClick(_id);
    }

    return (
        <div onClick={onRFQClick} className="w-full h-[100px] flex flex-col bg-white px-4 py-3 border-b border-r border-gray-200 cursor-pointer">
            <div>{ emailAdress }</div>
            <div>{ subject }</div>
            <div className="truncate">{ emailText }</div>
        </div>
    );
}