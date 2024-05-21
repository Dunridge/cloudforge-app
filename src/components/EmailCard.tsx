import { IEmailCardProps } from "../utils/interfaces/IEmailCardProps";

export default function EmailCard({ email, subject, content }: IEmailCardProps) {

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
        </div>
    );
}