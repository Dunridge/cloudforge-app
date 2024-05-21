import { Link } from "react-router-dom";
import { ISidebarSuboption } from "../utils/interfaces/ISidebarSuboption";

export default function SubOption({ name, path }: ISidebarSuboption) {
    return (
        <Link to={path} className="flex gap-[8px] px-[20px] py-[12px] hover:bg-gray-200" >
            <div>{ name }</div>
        </Link>
    )
}