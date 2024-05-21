import { useEffect, useState } from "react";
import { IRFQ } from "../utils/interfaces/IRFQ";
import RFQListItem from "./RFQListItem";
import RFQCard from "./RFQCard";

export default function DraftQuotes() {
    const [rfqs, setRFQs] = useState<IRFQ[]>([]);
    const [selectedRFQ, setSelectedRFQ] = useState<IRFQ>({} as IRFQ);
    const [sentQuotes, setSentQuotes] = useState<IRFQ[]>([]);
    const [unsentQuotes, setUnsentQuotes] = useState<IRFQ[]>([]);

    useEffect(() => {
        fetchCreatedRFQs().then(() => {
            fetchSentQuotes();
        });
    }, []);

    useEffect(() => {
        setUnsentQuotes(sentQuotes.filter((sentQuote) => !rfqs.find((rfq) => rfq._id === sentQuote._id)));
    }, [rfqs, sentQuotes]);

    useEffect(() => {
        const firstRFQ = unsentQuotes[0]; 
        setSelectedRFQ(firstRFQ);
    }, [unsentQuotes]);

    const fetchCreatedRFQs = async () => { 
        // getCreatedRFQs

        const port = 3000;
        // TODO: put this url into a config 
        const fetchUrl = `http://localhost:${port}/api/getCreatedRFQs`;
        debugger;

        try {
            const response = await fetch(fetchUrl);
            const data: IRFQ[] = await response.json();
            setRFQs(data); 
            // const firstRFQ = data[0];
            // setSelectedRFQ(firstRFQ);
            console.log(data);
            debugger;
        } catch (error) {
            console.error(error);
            debugger;
        }
    }

    const handleRFQClick = (_id: string) => {
        // const targetRFQ = rfqs.find((rfq) => rfq._id === _id)!;
        const targetRFQ = unsentQuotes.find((rfq) => rfq._id === _id)!;
        setSelectedRFQ(targetRFQ);
    }

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
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex h-full flex-grow">
            {/* <span>DraftQuotes</span> */}
            {/* <TestFetchButton doAction={fetchCreatedRFQs} title={"Fetch RFQs"}/> */}
            <div className="w-[260px] flex flex-col h-full bg-white overflow-y-auto no-scrollbar">
                { unsentQuotes.map(rfq => <RFQListItem key={rfq._id} handleRFQClick={handleRFQClick} {...rfq} />) }
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <RFQCard {...selectedRFQ} />
            </div>
        </div>
    );
}