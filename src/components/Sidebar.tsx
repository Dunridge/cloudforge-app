import { Link } from "react-router-dom";
import { sidebarOptions } from "../utils/data/sidebarOptions";
import SidebarOption from "./SidebarOption";

export default function Sidebar() {

    return (
        <div className="w-[227px] py-[40px] px-[25px] rounded-tr-lg rounded-br-lg flex flex-col bg-white">
            <Link to={'/'}>
                <div className="">CloudforgeApp</div>
            </Link>

            <div className="mt-[40px] flex flex-col gap-[20px]">
                {sidebarOptions.map((option) => <SidebarOption key={option.name} name={option.name} path={option.path} icon={option.icon}/>)}
            </div>
        </div>
    )
}