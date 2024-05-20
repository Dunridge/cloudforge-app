import { useEffect, useState } from "react";
import { IEmail } from "../utils/interfaces/IEmail";

export default function Dashboard() {
    const [emails, setEmails] = useState<IEmail[]>([]);

    useEffect(() => {
        fetchEmails();
    }, []);

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
            setEmails(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>Dashboard</div>
    );
}