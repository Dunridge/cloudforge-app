import { useEffect, useState } from "react";
import { IEmail } from "../utils/interfaces/IEmail";
import TestFetchButton from "./TestFetchButton";

export default function EmailInput() {
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
            const data = await response.json();
            console.log(data);
            debugger;
            setEmails(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div>EmailInput</div>
            {/* <TestFetchButton title="Fetch Emails" doAction={fetchEmails} /> */}
            {/* TODO: add sub routes to the UIs for the output of emails and then for inputting the email text */}

            <div>
                {/* { JSON.stringify(emails) } */}
                { Array.isArray(emails) && emails.map((emailObj) => {
                    debugger;
                    return (
                        <div>Test { `${emailObj?.email}` }</div>
                    );
                })}
            </div>
        </div>
    )
}