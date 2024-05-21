import { Link, Outlet } from "react-router-dom";

export default function EmailInput() {

    return (
        <div className="w-full h-full">
            {/* <TestFetchButton title="Fetch Emails" doAction={fetchEmails} /> */}
            <div className="h-[60px] bg-white w-full flex flex-grow gap-[8px] border-b border-gray-200">
                <Link to="emails-list" className="px-[12px] py-[2px]"
                >Emails list</Link>
                <Link to="emailtext-input" className="px-[12px] py-[2px]"
                >Emailtext input</Link>
            </div>

            <div className="flex flex-grow w-full">
                <Outlet/>
            </div>
        </div>
    )
}