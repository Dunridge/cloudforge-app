import { ISidebarSuboption } from "./ISidebarSuboption";

export interface ISidebarOption {
    name: string;
    path: string;
    icon: any;
    suboptions?: ISidebarSuboption[];
}
