export interface IEmail {
    _id?: string;
    email: string;
    subject: string;
    content: string;
    [key: string]: any;
}
