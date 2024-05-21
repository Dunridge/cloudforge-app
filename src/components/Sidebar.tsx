import { Link } from "react-router-dom";
import { sidebarOptions } from "../utils/data/sidebarOptions";
import cloudforgeIcon from '../assets/svg/cloudforge-icon.svg';
import SidebarOption from "./SidebarOption";

export default function Sidebar() {

    return (
        <div className="max-w-[227px] min-w-[227px] py-[40px] px-[25px] rounded-tr-lg rounded-br-lg flex flex-col bg-white border-r border-gray-200">
            <Link to={'/'} className="flex gap-[8px] pl-[6px]">
                <img src={cloudforgeIcon} width={28} height={28} alt="icon"/>
                <div className="">CloudforgeApp</div>
            </Link>

            <div className="mt-[40px] flex flex-col gap-[20px]">
                {sidebarOptions.map((option) => <SidebarOption key={option.name} name={option.name} path={option.path} icon={option.icon} suboptions={option.suboptions}/>)}
            </div>
        </div>
    )
}