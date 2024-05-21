import { IEmail } from "./IEmail";
import { IEmailInput } from "./IEmailInput";

export interface IEmailInputProps extends IEmailInput {
    form: IEmail;
    setForm: React.Dispatch<React.SetStateAction<IEmail>>;
}