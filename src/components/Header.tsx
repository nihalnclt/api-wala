import {
    AiOutlineQuestionCircle,
    AiOutlineSearch,
    AiOutlineDownload,
} from "react-icons/ai";

export default function Header() {
    return (
        <div className="bg-[#262a2f] h-[3em] border-b border-[#32383e] flex items-center justify-between px-5">
            <div>
                <h1 className="font-bold text-white text-[17px]">
                    API <span className="text-rose-500">WALA</span>
                </h1>
            </div>
            <div className="flex items-center gap-[30px]">
                <button className="text-white text-lg">
                    <AiOutlineSearch />
                </button>
                <button className="text-white text-lg">
                    <AiOutlineDownload />
                </button>
                <button className="text-white text-lg">
                    <AiOutlineQuestionCircle />
                </button>
                <div className="w-[25px] h-[25px] rounded-full overflow-hidden">
                    <img
                        src="https://avatars.githubusercontent.com/u/76242062?s=40&v=4"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
