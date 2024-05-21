import { useEffect, useState } from "react";
import { IEmail } from "../utils/interfaces/IEmail";
import { emailtextFormInputs } from "../utils/data/emailtextFormInputs";
import { IEmailInput } from "../utils/interfaces/IEmailInput";
import EmailInputField from "./EmailInputField";

export default function EmailTextInput() {
    const [form, setForm] = useState<IEmail>({
        email: '',
        subject: '',
        content: '',
        _id: '', // TODO: decide what to do with this id 
    });

    useEffect(() => {
        // console.log(form);
    }, [form]);

    const handleSubmit = () => {
        console.log(form);
        debugger;
        // TODO: move the decalaration of the endpoint call to here
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[420px] h-fit flex flex-col bg-white px-4 py-3 border border-gray-200">
                <form action="" className="h-full flex flex-col gap-[40px] justify-between">
                    <div className="flex flex-col gap-[20px]">
                        {
                            emailtextFormInputs.map((emailInput: IEmailInput) => <EmailInputField {...emailInput} form={form} setForm={setForm} key={emailInput.fieldKey} />)
                        }
                    </div>

                    <button className="px-[12px] py-[2px] bg-black text-white" onClick={handleSubmit}>Send</button>
                </form>
            </div>
        </div>
    )
}