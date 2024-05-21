import { useEffect, useState } from "react";
import { IEmail } from "../utils/interfaces/IEmail";
import InboxEmail from "./InboxEmail";
import EmailCard from "./EmailCard";

export default function EmailsList() {
    const [selectedEmail, setSelectedEmail] = useState<IEmail>({} as IEmail);
    const [emails, setEmails] = useState<IEmail[]>([]);

    useEffect(() => {
        fetchEmails();
    }, [])

    useEffect(() => {
        if (emails.length > 0) {
            console.log('emails', emails);
            debugger;
        }
    }, [emails]);

    const fetchEmails = async () => {
        const port = 3000;
        // TODO: put this url into a config 
        const fetchUrl = `http://localhost:${port}/api/getCustomerEmails`;

        try {
            const response = await fetch(fetchUrl);
            const data: IEmail[] = await response.json();
            console.log(data);
            debugger;
            setEmails(data);
            const selectedEmailData = data[0];
            setSelectedEmail(selectedEmailData);
        } catch (error) {
            console.error(error);
        }
    }

    const handleEmailClick = (_id: string) => {
        const targetEmail = emails.find((email) => email._id === _id)!;
        setSelectedEmail(targetEmail);
    }

    return (
        <div className="flex h-full flex-grow">
            <div className="w-[260px] flex flex-col h-full bg-white overflow-y-auto no-scrollbar">
                {emails.map((emailObj) => <InboxEmail key={emailObj._id} handleEmailClick={handleEmailClick} {...emailObj}/>)}
            </div>

            <div className="w-full h-full flex justify-center items-center">
                <EmailCard {...selectedEmail} />
            </div>
        </div>
    )
}