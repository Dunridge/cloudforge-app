import { useEffect, useState } from "react";
import { IRFQ } from "../utils/interfaces/IRFQ";
import TestFetchButton from "./TestFetchButton";
import RFQListItem from "./RFQListItem";
import RFQCard from "./RFQCard";

export default function SentQuotes() {
    const [sentQuotes, setSentQuotes] = useState<IRFQ[]>([]);
    const [selectedQuote, setSelectedQuote] = useState<IRFQ>({} as IRFQ);


    useEffect(() => {
        fetchSentQuotes();
    }, []);

    const fetchSentQuotes = async () => {
        const port = 3000;
        // TODO: put this url into a config 
        const fetchUrl = `http://localhost:${port}/api/getSentRFQ`;

        try {
            const response = await fetch(fetchUrl);
            const data: IRFQ[] = await response.json();
            console.log(data);
            debugger;
            setSentQuotes(data);
            const selectedQuoteData = data[0];
            setSelectedQuote(selectedQuoteData);
        } catch (error) {
            console.error(error);
        }

    }

    const handleFetchSentQuotes = () => { 
        fetchSentQuotes();

    }

    const handleRFQClick = (_id: string) => {
        const targetQuote = sentQuotes.find((quote) => quote._id === _id)!;
        setSelectedQuote(targetQuote);
    }

    return (
        <div className="flex h-full flex-grow">
            <div className="w-[260px] flex flex-col h-full bg-white overflow-y-auto no-scrollbar">
                { sentQuotes.map(quote => <RFQListItem key={quote._id} handleRFQClick={handleRFQClick} {...quote} />) }

            </div>

            <div className="w-full h-full flex justify-center items-center">
                {/* <TestFetchButton doAction={handleFetchSentQuotes} title={"Fetch Sent Quotes"}/> */}
                <RFQCard {...selectedQuote} />
            </div>
        </div>
    );   
}