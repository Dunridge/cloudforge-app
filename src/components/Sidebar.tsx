import { Link } from "react-router-dom";
import { sidebarOptions } from "../utils/data/sidebarOptions";
import SidebarOption from "./SidebarOption";

export default function Sidebar() {

    return (
        <div className="w-[227px] py-[40px] px-[25px] flex flex-col bg-white">
            <Link to={'/'}>
                <div>CloudforgeApp</div>
            </Link>

            <div>
                {sidebarOptions.map((option) => <SidebarOption key={option.name} name={option.name} path={option.path} />)}
            </div>
        </div>
    )
}