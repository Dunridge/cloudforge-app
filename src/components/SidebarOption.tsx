import { Link } from "react-router-dom";
import { ISidebarOption } from "../utils/interfaces/ISidebarOption";

export default function SidebarOption({ name, path }: ISidebarOption) {

    return (
        <Link to={path}>
            <div className="">
                <div>{name}</div>
            </div>
        </Link>
    );
}