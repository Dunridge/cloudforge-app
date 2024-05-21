import { Link, useLocation } from "react-router-dom";
import { ISidebarSuboption } from "../utils/interfaces/ISidebarSuboption";

export default function SubOption({ name, path }: ISidebarSuboption) {
    const location = useLocation();

    return (
        <Link to={path} className={`flex pl-[24px] px-[20px] py-[12px] ${ location.pathname.includes(path) ? 'bg-gray-200' : ''} hover:bg-gray-200`} >
            <div>{ name }</div>
        </Link>
    )
}