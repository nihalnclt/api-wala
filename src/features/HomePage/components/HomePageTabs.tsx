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
        <div className="flex items-center gap-2 w-[100%]">
            {activeRequests?.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={
                            "max-w-[200px] h-[30px] rounded-lg flex items-center gap-[10px] p-2 text-[12px] cursor-pointer " +
                            (selectedTab === index
                                ? "bg-[#32383e] text-white"
                                : "bg-[#262a2f] text-gray-300")
                        }
                        onClick={() => dispatch(setSelectedTab(index))}
                    >
                        <span className="text-[12px] text-green-500">{item?.method}</span>
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
