import { LuLayoutDashboard } from "react-icons/lu";

export default function Sidebar() {
    return (
        <div className="flex items-center">
            <div className="w-[4em] h-[calc(100vh-3em)] bg-[#262a2f] border-r border-[#32383e] flex flex-col items-center py-5">
                <div>
                    <ul>
                        <li className="">
                            <button className="text-white text-xl bg-[#32383e] w-[35px] h-[35px] rounded-lg flex items-center justify-center">
                                <LuLayoutDashboard />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-[15em] h-[calc(100vh-3em)] bg-[#262a2f]"></div>
        </div>
    );
}
