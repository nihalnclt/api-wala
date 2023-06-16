import { HomePageTabs, HomeSearchSection } from "../features/HomePage";
import { Header, Sidebar } from "../components";

export default function HomePage() {
    return (
        <div>
            <Header />
            <div className="flex items-center">
                <Sidebar />
                <div className="bg-[#1a1d21] w-full h-[calc(100vh-3em)] px-4 pt-2 pb-0 flex flex-col">
                    <div>
                        <HomePageTabs />
                    </div>
                    <div className="mt-2">
                        <HomeSearchSection />
                    </div>
                    <div className="h-[100%] w-[100%] bg-[#262a2f] mt-2 rounded-lg grid grid-cols-2">
                        <div className="border-r border-[#32383e]">
                            <div className="w-full border-b border-[#32383e] flex items-center gap-[20px] px-4 py-3">
                                <span className="font-medium text-white">Params</span>
                                <span className="font-medium text-white">Auth</span>
                                <span className="font-medium text-white">Headers</span>
                                <span className="font-medium text-white">Body</span>
                            </div>
                        </div>
                        <div>
                            {/* <div className="w-full h-[50px] border-b border-[#32383e]"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
