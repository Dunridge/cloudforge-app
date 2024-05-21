import { IEmail } from "./IEmail";

export interface IEmailProps extends IEmail {
    handleEmailClick: (_id: string) => void;
}
