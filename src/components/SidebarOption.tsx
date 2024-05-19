import { Link } from "react-router-dom";
import { ISidebarOption } from "../utils/interfaces/ISidebarOption";

export default function SidebarOption({ name, path, icon }: ISidebarOption) {

    return (
        <Link to={path}>
            <div className="flex gap-[14px]">
                <img src={icon}/>
                <div>{name}</div>
            </div>
        </Link>
    );
}