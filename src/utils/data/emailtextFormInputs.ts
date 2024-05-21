import { IEmailInput } from "../interfaces/IEmailInput";

export const emailtextFormInputs: IEmailInput[] = [
    {
        fieldKey: 'email',
        name: 'Email',
    },
    {
        fieldKey: 'subject',
        name: 'Subject',
    },
    {
        fieldKey: 'content',
        name: 'Content',
        isTextarea: true
    },
]