import axios from "axios";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { handleRequestDataChange } from "../../../redux/slices/restApiSlice";
import { RootState } from "../../../redux/store";

export default function HomeSearchSection() {
    const { activeRequests, selectedTab } = useSelector(
        (state: RootState) => state.restApi
    );
    const dispatch = useDispatch();

    const selectedRequest = activeRequests[selectedTab];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            handleRequestDataChange({
                name: e.target.name,
                value: e.target.value,
            })
        );
    };

    const sendRestApiRequest = async () => {
        try {
            const response = await axios.request({
                url: selectedRequest.url,
                method: selectedRequest.method,
            });
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {selectedTab >= 0 ? (
                <div className="flex items-center gap-2 p-4 pb-0">
                    <div className="w-full h-[40px] flex items-center border border-[#716d6d] rounded">
                        <div className="relative p-2">
                            <div className="flex items-center gap-[5px] transition-all hover:bg-[#2c3034] rounded-lg px-2 py-[2px] cursor-pointer">
                                {/* value={selectedRequest.method || ""}
                            onChange={(e) => {
                                dispatch(
                                    handleRequestDataChange({
                                        name: "method",
                                        value: e.target.value,
                                    })
                                );
                            }} */}
                                <span className="font-medium text-green-500">
                                    GET
                                </span>
                                <span className="text-green-500">
                                    <FiChevronDown />
                                </span>
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter URL or paste text"
                            className="h-[100%] w-full bg-transparent outline-none text-white px-1 text-sm"
                            value={selectedRequest.url || ""}
                            name="url"
                            onChange={handleChange}
                        />
                    </div>
                    <button className="h-[40px] px-5 bg-rose-500 rounded-lg text-white font-bold">
                        Send
                    </button>
                    <button className="h-[40px] px-5 rounded-lg text-white bg-[#212529] flex items-center gap-[10px]">
                        <span>Save</span>
                        <span className="text-white">
                            <FiChevronDown />
                        </span>
                    </button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
