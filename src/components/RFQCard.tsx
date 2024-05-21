import { IRFQCardProps } from "../utils/interfaces/IRFQCardProps";
import { toast } from "react-toastify";

export default function RFQCard({ emailAdress, emailText, subject, isInSentQuotes }: IRFQCardProps) {

    const handleSendRFQEmail = () => {
        debugger;
        sendRFQEmail(emailAdress, emailText, subject);
    }

    const sendRFQEmail = async (emailAdress: string, emailText: string, subject: string) => {
        const port = 3000;
        const postUrl = `http://localhost:${port}/api/sendRFQ`;
        const requestBody = { emailAdress, emailText, subject }; // this is sent to the endpoint
        const strigifiedBody = JSON.stringify(requestBody);
        debugger;

        try {
            const response = await fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: strigifiedBody
            });
            const data = await response.json();
            debugger;
            if (response.ok && data.result.acknowledged) {
                debugger;
                toast.success('RFQ sent successfully');
            }
            console.log(data);
        } catch (error) {
            console.error(error);
            debugger;
        }

    }

    const checkWhetherRFQCanBeFilled = async (emailTextData: string) => {
        // emailText
        // checkWhetherRFQCanBeFilled
        const port = 3000;
        const postUrl = `http://localhost:${port}/api/checkWhetherRFQCanBeFilled`;
        const requestBody = { emailText: emailTextData }; // this is sent to the endpoint
        const strigifiedBody = JSON.stringify(requestBody);
        debugger;

        try {
            const response = await fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: strigifiedBody
            });
            const data = await response.json();
            if (response.ok && data.canBeFilled) {
                toast.info('RFQ can be filled');
                debugger;
            } else {
                toast.error('RFQ cannot be filled');
            }
            console.log(data);
        } catch (error) {
            console.error(error);
            debugger;
        }
    }

    const handleWhetherRFQCanBeFilled = () => {
        debugger;
        checkWhetherRFQCanBeFilled(emailText);
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

            {
                !isInSentQuotes && (
                    <div className="flex flex-col mt-[10px] gap-[8px]">
                        <button onClick={handleSendRFQEmail} className={`px-[12px] py-[2px] bg-black text-white`}>Send RFQ</button>
                        <button onClick={handleWhetherRFQCanBeFilled} className={`px-[12px] py-[2px] bg-black text-white`}>Check whether RFQ can be filled</button>
                    </div>
                )
            }
        </div>
    )
} 