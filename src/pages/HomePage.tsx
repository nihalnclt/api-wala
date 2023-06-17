import { HomePageTabs, HomeSearchSection } from "../features/HomePage";
import { Header, Sidebar } from "../components";

export default function HomePage() {
    return (
        <div>
            <Header />
            <div className="flex items-center">
                <Sidebar />
                <div className="bg-[#212529] w-full h-[calc(100vh-3em)] flex flex-col border-l border-[#32383e]">
                    <div>
                        <HomePageTabs />
                    </div>
                    <div className="">
                        <HomeSearchSection />
                    </div>
                    <div className="h-[100%] w-[100%] grid grid-rows-2">
                        <div className="border-b border-[#32383e]">
                            <div className="w-full flex items-center gap-[20px] px-4 py-3 text-sm">
                                <span className="font-medium text-[#ced4da] bg-[#32383e] rounded px-2 py-[3px]">
                                    Params
                                </span>
                                <span className="text-[#878a99] font-medium">
                                    Auth
                                </span>
                                <span className="text-[#878a99] font-medium">
                                    Headers
                                </span>
                                <span className="text-[#878a99] font-medium">
                                    Body
                                </span>
                            </div>
                            <div className="p-4">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Key</th>
                                            <th>Value</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between border-b border-[#32383e] px-4">
                                <div className="flex items-center gap-[20px] py-3 text-sm">
                                    <span className="font-medium text-white">
                                        JSON
                                    </span>
                                    <span className="font-medium text-white">
                                        Raw
                                    </span>
                                    <span className="font-medium text-white">
                                        Headers
                                    </span>
                                </div>
                                <div className="flex items-center text-sm py-3">
                                    <div>
                                        <span>Status</span>
                                        <span>200 . Ok</span>
                                    </div>
                                    <div>
                                        <span>Time</span>
                                        <span>2908 ms</span>
                                    </div>
                                    <div>
                                        <span>Size</span>
                                        <span>508 B</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="w-full h-[50px] border-b border-[#32383e]"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
