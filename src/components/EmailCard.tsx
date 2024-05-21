import { useState } from "react";
import { IEmailCardProps } from "../utils/interfaces/IEmailCardProps";
import { toast } from "react-toastify";

export default function EmailCard({ email, subject, content }: IEmailCardProps) {
    const [emailIsRFQ, setEmailIsRFQ] = useState(false);

    // TODO: move the RFQ check here to the component 
    // TODO: add a toaster that tells whether the RFQ can be generated out of this email 

    const checkWhetherEmailIsRFQ = async (content: string) => {
        // test content, replace with real values 
        const port = 3000;
        const postUrl = `http://localhost:${port}/api/checkWhetherEmailIsRFQ`;

        const reuqestBody = { content };
        const stringifiedBody = JSON.stringify(reuqestBody);

        try {
            const response = await fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: stringifiedBody
            });
            const data = await response.json();
            debugger;
            console.log(data);

            return data;
        } catch (error) {
            console.error(error);
        }
    }

    const handleWeatherEmailIsRFQ = () => {
        toast.info('Checking whether email is RFQable...');
        checkWhetherEmailIsRFQ(content).then(data => {
            const isRFQable = data.isRFQ;
            debugger;
            setEmailIsRFQ(isRFQable);
            isRFQable && toast.success('Email is RFQable');
            !isRFQable && toast.error('Email is not RFQable');
        });
    }

    const handleGenerateRFQFromEmail = () => {
        createRFQFromEmail(email, subject, content, emailIsRFQ);
    }

    const createRFQFromEmail = async (emailAdress: string, subject: string, content: string, isRFQable: boolean) => {
        const port = 3000;
        const postUrl = `http://localhost:${port}/api/createRFQFromEmail`;
        const requestBody = { emailAdress, subject, content, isRFQable }; // this is sent to the endpoint
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
                toast.success('RFQ created successfully');
            }
            console.log(data);
        } catch (error) {
            console.error(error);
        }

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
                <span>{email}</span>
            </div>
            <div>{content}</div>

            <div className="flex flex-col mt-[10px] gap-[8px]">
                <button onClick={handleWeatherEmailIsRFQ} disabled={emailIsRFQ} className={`px-[12px] py-[2px] ${emailIsRFQ ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-black text-white'}`}>Check Wheather RFQ</button>
                { emailIsRFQ && <button onClick={handleGenerateRFQFromEmail} className="px-[12px] py-[2px] bg-black text-white">Generate RFQ</button> }
            </div>
        </div>
    );
}