import { IRFQCardProps } from "../utils/interfaces/IRFQCardProps";

export default function RFQCard({ emailAdress, emailText, subject }: IRFQCardProps) {

    const handleSendRFQEmail = () => {
        debugger;
    }

    return (
        <div className="flex flex-col w-[420px] bg-white px-4 py-3 border border-gray-200 rounded rounded-md">
            <div className="flex gap-[8px]">
                <span className="font-bold">Subject:</span>
                <span>{subject}</span>
            </div>
            <div className="flex gap-[8px]">
                <span className="font-bold">Email:</span>
                <span>{emailAdress}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: emailText }}></div>
        
            <div className="flex flex-col mt-[10px] gap-[8px]">
                <button onClick={handleSendRFQEmail} className={`px-[12px] py-[2px] bg-black text-white`}>Send RFQ</button>
            </div>
        </div>
    )
} 