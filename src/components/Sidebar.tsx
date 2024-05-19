import { sidebarOptions } from "../utils/data/sidebarOptions";
import SidebarOption from "./SidebarOption";

export default function Sidebar() {

    return (
        <div className="flex flex-col">
            { sidebarOptions.map((option) => <SidebarOption key={option.name} name={option.name} path={option.path} />) }
        </div>
    )
}