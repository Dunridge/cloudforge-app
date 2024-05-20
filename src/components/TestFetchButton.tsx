import { ITestFetchButton } from "../utils/interfaces/ITestFetchButton";

export default function TestFetchButton({ title, doAction }: ITestFetchButton) {

    return (
        <button className="px-[12px] py-[2px] bg-black text-white" onClick={doAction}>{ title }</button>
    );
}