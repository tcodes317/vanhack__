import { FaBars } from "react-icons/fa";
import "../vid/Vid.css";

function Vid(){
    return(
        <>
            <div className="xxxs:px-4"> {/** first */}
                    <h1 className="xlg:text-center xlg:py-8 xlg:text-4xl xlg:font-bold xxxs:text-center xxxs:text-3xl xxxs:font-bold xxxs:mb-8">See VanHack in action</h1>
                    <div className="xlg:relative xlg:px-8">
                        <div className="xlg:flex xlg:justify-between xlg:py-2">
                            <div className="xlg:flex xlg:items-center xlg:space-x-2">
                                <div id="q"></div>
                                <div id="q"></div>
                                <div id="q"></div>
                            </div>
                            <div className="xlg:w-7/12 xxxs:hidden xlg:visible xlg:bg-slate-200 xlg:rounded-full">
                                <h1 className="xlg:text-center">Vanhack Demo</h1>
                                {/* <Fa /> */}
                            </div>
                            <div className="xxxs:hidden xlg:relative xlg:visible xlg:flex xlg:items-center xlg:space-x-3">
                                <FaBars />
                                <FaBars />
                            </div>
                        </div>
                        <div className="xlg:bg-slate-700 xxxs:bg-slate-700 xlg:p-32 xxxs:py-6 xxxs:pb-0 xxxs:rounded-md xlg:relative xxxs:relative">
                            <div className="xxxs:space-x-2 xxxs:flex xxxs:items-center xlg:hidden xxxs:absolute xxxs:right-0 xxxs:top-3">
                                <FaBars className="text-white p-3 bg-black rounded-full" />
                                <FaBars className="text-white p-3 bg-black rounded-full" />
                                <FaBars className="text-white p-3 bg-black rounded-full" />
                            </div>
                            <div className="xlg:flex xlg:items-center xxxs:space-y-2 xlg:justify-center xlg:space-y-4 xlg:flex-col xxxs:flex xxxs:justify-center xxxs:items-center xxxs:flex-col">
                                <div className="xxxs:px-3">
                                    <h1 className="xlg:text-3xl xlg:text-white xlg:font-bold xxxs:text-white xlg:pb-6">Enjoyed the Vanhack Demo?</h1>
                                    <div className="xlg:text-white xxxs:text-white xxxs:text-center xlg:pb-3">Talk to our team to meet your next great hire!</div>
                                    <div className="xxxs:flex xxxs:justify-center xxxs:pt-3">
                                        <button className="bg-blue-500 text-white xxxs:p-2 xxxs:px-4 xlg:p-3 xlg:px-10 xlg:rounded-md">Talk to VanHack</button>
                                    </div>
                                </div>
                                <div className="xlg:text-white xxxs:w-full xlg:w-auto xxxs:pt-3">
                                    <div className="xlg:hidden xxxs:px-2 bg-blue-400 xxxs:flex xxxs:items-center xxxs:justify-between">
                                        <div className="text-white">13/13</div>
                                        <div>
                                            <FaBars className="text-white"/>
                                        </div>
                                    </div>
                                    <span className="xxxs:hidden xlg:block">Replay</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Vid;