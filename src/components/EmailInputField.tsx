import { IEmailInputProps } from "../utils/interfaces/IEmailInputFieldProps";

export default function EmailInputField({ name, fieldKey, isTextarea, form, setForm }: IEmailInputProps) {

    const handleChange = (event: React.ChangeEvent<any>) => {
        setForm(prevState => ({
            ...prevState,
            [fieldKey]: event.target.value
        }));
    };

    return (
        <div className="flex flex-col gap-[5px]">
            <div className="font-bold">{name}</div>

            {isTextarea ? (
                <textarea className="border border-gray-200 h-[200px] resize-none" value={form[fieldKey]} onChange={handleChange} /> 
            ) : (
                <input type="text" className="border border-gray-200" value={form[fieldKey]} onChange={handleChange} />
            )}
        </div>
    );
}