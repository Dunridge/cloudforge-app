import { Link, useLocation } from "react-router-dom";
import { ISidebarOption } from "../utils/interfaces/ISidebarOption";
import SubOption from "./SubOption";
import { useEffect } from "react";

// TODO: add the font family from your CV 
export default function SidebarOption({ name, path, icon, suboptions }: ISidebarOption) {
    const location = useLocation();

    useEffect(() => {
        if (!!suboptions!?.length) {
            console.log('location.pathname', location.pathname);
            console.log('path', path);
            debugger;
        }

    }, [path, location.pathname])

    return (
        <>
            <Link to={path}>
                <div className={`flex gap-[14px] rounded-md ${ (location.pathname === path || location.pathname.split('/').includes(path.split('/')[1])) ? 'bg-gray-200' : ''} hover:bg-gray-200 px-[20px] py-[12px]`}>
                    <img src={icon} alt="icon" width={16} height={16} />
                    <div>{name}</div>
                </div>
            </Link>

            {suboptions && suboptions.map((option) => <SubOption key={option.name} name={option.name} path={option.path} />)}
        </>
    );
}