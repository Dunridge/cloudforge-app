import { IEmailProps } from "../utils/interfaces/IEmailProps"

export default function InboxEmail({ _id, email, subject, content, handleEmailClick }: IEmailProps) {

    const onHandleEmailClick = () => {
        handleEmailClick(_id!);
    }

    return (
        <div onClick={onHandleEmailClick} className="w-full h-full flex flex-col bg-white px-4 py-3 border-b border-r border-gray-200 cursor-pointer">
            <div>{ subject }</div>
            <div>{ email }</div>
            <div className="truncate">{ content }</div>
        </div>
    )
}