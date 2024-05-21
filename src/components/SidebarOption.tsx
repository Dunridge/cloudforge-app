import { Link, useLocation } from "react-router-dom";
import { ISidebarOption } from "../utils/interfaces/ISidebarOption";

// TODO: add the font family from your CV 
export default function SidebarOption({ name, path, icon }: ISidebarOption) {
    const location = useLocation();

    // TODO: fix the issue with the highlight of the selected option
    return (
        <Link to={path}>
            <div className={`flex gap-[14px] rounded-md ${ path === location.pathname ? 'bg-gray-200' : '' } hover:bg-gray-200 px-[20px] py-[12px]`}>
                <img src={icon} alt="icon" width={16} height={16}/>
                <div>{name}</div>
            </div>
        </Link>
    );
}