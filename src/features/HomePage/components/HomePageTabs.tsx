import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { BsPlus } from "react-icons/bs";

import { RootState } from "../../../redux/store";
import {
    addNewRequest,
    closeRequestTab,
    setSelectedTab,
} from "../../../redux/slices/restApiSlice";

export default function HomePageTabs() {
    const { activeRequests, selectedTab } = useSelector(
        (state: RootState) => state.restApi
    );
    const dispatch = useDispatch();

    return (
        <div className="flex items-center w-[100%] h-[100%] border-b border-[#32383e]">
            {activeRequests?.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={
                            "max-w-[200px] h-[100%] flex items-center gap-[10px] px-2 text-[12px] cursor-pointer border-r border-[#32383e] " +
                            (selectedTab === index
                                ? "bg-[#212529] text-white border-b border-b-rose-500"
                                : "bg-[#262a2f] text-[#878a99]")
                        }
                        onClick={() => dispatch(setSelectedTab(index))}
                    >
                        <span
                            className={
                                "text-[12px] " +
                                (selectedTab === index
                                    ? "text-green-500"
                                    : "text-[#878a99]")
                            }
                        >
                            {item?.method}
                        </span>
                        <span>{item?.requestName || "Untitled"}</span>
                        <span
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(closeRequestTab(index));
                            }}
                            className=""
                        >
                            <IoMdClose />
                        </span>
                    </div>
                );
            })}
            <button
                onClick={() => dispatch(addNewRequest())}
                className="flex items-center justify-center w-[35px] h-[35px] text-white font-bold text-2xl transition-all hover:bg-[#262a2f] rounded-lg"
            >
                <BsPlus />
            </button>
        </div>
    );
}
