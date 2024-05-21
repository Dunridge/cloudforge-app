import { ISidebarOption } from "../interfaces/ISidebarOption";
import lightning from '../../assets/svg/lightning.svg';
import inventory from '../../assets/svg/inventory.svg';
import email from '../../assets/svg/email.svg';
import draft from '../../assets/svg/draft.svg';
import sent from '../../assets/svg/sent.svg';

export const sidebarOptions: ISidebarOption[] = [
    {
        name: 'Inventory',
        path: '/inventory',
        icon: inventory
    },
    {
        name: 'Email Input',
        path: '/email-input/emails-list',
        icon: email,
        suboptions: [
            {
                name: 'Emails list',
                path: '/email-input/emails-list'
            },
            {
                name: 'Email Text Input',
                path: '/email-input/emailtext-input'
            }
        ]
    },
    {
        name: 'Draft Quotes',
        path: '/draft-quotes',
        icon: draft
    },
    {
        name: 'Sent Quotes',
        path: '/sent-quotes',
        icon: sent
    }
];