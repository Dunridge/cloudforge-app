import { ISidebarOption } from "../interfaces/ISidebarOption";
import lightning from '../../assets/svg/lightning.svg';

export const sidebarOptions: ISidebarOption[] = [
    {
        name: 'Inventory',
        path: '/inventory',
        icon: lightning
    },
    {
        name: 'Email Input',
        path: '/email-input',
        icon: lightning
    },
    {
        name: 'Draft Quotes',
        path: '/draft-quotes',
        icon: lightning
    },
    {
        name: 'Sent Quotes',
        path: '/sent-quotes',
        icon: lightning
    }
];