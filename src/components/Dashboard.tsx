import { useEffect, useState } from "react";
import { IEmail } from "../utils/interfaces/IEmail";
import TestFetchButton from "./TestFetchButton";

export default function Dashboard() {

    useEffect(() => {
        // fetchEmails(); // (~)
        // tmpPopulateDBWithEmails(); (~)
    }, []);

    // useEffect(() => {
    //     if (emails.length > 0) {
    //         console.log('emails', emails);
    //         debugger;
    //     }
    // }, [emails]);

    // const tmpPopulateDBWithEmails = async () => {
    //     const content = "Dear Jack,\nI hope this email finds you well. My name is John Doe, and I am reaching out to request a quotation for Product A and Product B. Product A comprises 100 units, while Product B consists of 50 units with custom dimensions required. The due date for this order is June 1, 2024, and the shipping address is 123 Main Street, Anytown, USA. Could you please provide a quote for the requested products, including any applicable discounts, taxes, and shipping costs? Based on previous quotes, we anticipate the following pricing: Product A at 100 units x $10/unit totaling $1000, and Product B at 50 units x $15/unit totaling $750 due to custom dimensions. The total cost is expected to be $1750. Please confirm if you can meet the specified due date and provide any additional information or documentation required to proceed with this order. Thank you for your time and assistance. I look forward to your prompt response.\n Best,\nJohn Doe\njohn.doe@example.com"
    //     const email = "jack@google.com";
    //     const subject = "Quotation request";

    //     postEmail(email, subject, content);
    // }

    // const tmpCheckWhetherEmailIsRFQ = async () => { 
    //     const content = "Dear Jack,\nI hope this email finds you well. My name is John Doe, and I am reaching out to request a quotation for Product A and Product B. Product A comprises 100 units, while Product B consists of 50 units with custom dimensions required. The due date for this order is June 1, 2024, and the shipping address is 123 Main Street, Anytown, USA. Could you please provide a quote for the requested products, including any applicable discounts, taxes, and shipping costs? Based on previous quotes, we anticipate the following pricing: Product A at 100 units x $10/unit totaling $1000, and Product B at 50 units x $15/unit totaling $750 due to custom dimensions. The total cost is expected to be $1750. Please confirm if you can meet the specified due date and provide any additional information or documentation required to proceed with this order. Thank you for your time and assistance. I look forward to your prompt response.\n Best,\nJohn Doe\njohn.doe@example.com"
    //     checkWhetherEmailIsRFQ(content);
    // }

    // const tmpCreateRFQFromEmail = () => {  
    //     const content = "Dear Jack,\nI hope this email finds you well. My name is John Doe, and I am reaching out to request a quotation for Product A and Product B. Product A comprises 100 units, while Product B consists of 50 units with custom dimensions required. The due date for this order is June 1, 2024, and the shipping address is 123 Main Street, Anytown, USA. Could you please provide a quote for the requested products, including any applicable discounts, taxes, and shipping costs? Based on previous quotes, we anticipate the following pricing: Product A at 100 units x $10/unit totaling $1000, and Product B at 50 units x $15/unit totaling $750 due to custom dimensions. The total cost is expected to be $1750. Please confirm if you can meet the specified due date and provide any additional information or documentation required to proceed with this order. Thank you for your time and assistance. I look forward to your prompt response.\n Best,\nJohn Doe\njohn.doe@example.com"
    //     const email = "jack@google.com";
    //     const subject = "Quotation request";
    //     const isRFQable = true;

    //     createRFQFromEmail(email, subject, content, isRFQable);
    //     debugger;
    // } 

    // const checkWhetherEmailIsRFQ = async (content: string) => {
    //     // test content, replace with real values 
    //     const port = 3000;
    //     const postUrl = `http://localhost:${port}/api/checkWhetherEmailIsRFQ`;

    //     const reuqestBody = { content };
    //     const stringifiedBody = JSON.stringify(reuqestBody);

    //     try {
    //         const response = await fetch(postUrl, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: stringifiedBody
    //         });
    //         const data = await response.json();
    //         debugger;
    //         console.log(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const postEmail = async (email: string, subject: string, content: string) => {
    //     const port = 3000;
    //     const postUrl = `http://localhost:${port}/api/postEmail`;

    //     const requestBody = { email, subject, content };
    //     const strigifiedBody = JSON.stringify(requestBody);

    //     try {
    //         const response = await fetch(postUrl, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: strigifiedBody
    //         });
    //         const data = await response.json();
    //         debugger;
    //         console.log(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const fetchEmails = async () => {
    //     const port = 3000;
    //     // TODO: put this url into a config 
    //     const fetchUrl = `http://localhost:${port}/api/getCustomerEmails`;

    //     try {
    //         const response = await fetch(fetchUrl);
    //         const data = await response.json();
    //         console.log(data);
    //         setEmails(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const createRFQFromEmail = async (emailAdress: string, subject: string, content: string, isRFQable: boolean) => {
    //     const port = 3000;
    //     const postUrl = `http://localhost:${port}/api/createRFQFromEmail`;
    //     const requestBody = { emailAdress, subject, content, isRFQable }; // this is sent to the endpoint
    //     const strigifiedBody = JSON.stringify(requestBody);
    //     debugger;

    //     try {
    //         const response = await fetch(postUrl, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: strigifiedBody
    //         });
    //         const data = await response.json();
    //         debugger;
    //         console.log(data);
    //     } catch (error) {
    //         console.error(error);
    //     }

    //     debugger;
    // }

    return (
        <>
            <div>Dashboard</div>
            <div className="flex gap-[20px]">
                {/* <TestFetchButton title="Fetch Emails" doAction={fetchEmails} /> */}
                {/* <TestFetchButton title="Post Emails" doAction={tmpPopulateDBWithEmails} /> */}
                {/* <TestFetchButton title="Check Whether RFQ" doAction={tmpCheckWhetherEmailIsRFQ} /> */}
                {/* <TestFetchButton title="Create RFQ From Email" doAction={tmpCreateRFQFromEmail} /> */}
            </div>
        </>
    );
}