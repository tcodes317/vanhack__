import "../Header/Header.css";

function Headerr(){
    return(
        <>
            <div className="xlg:relative xlg:pt-16 xxxs:pt-16 xlg:px-4">
                <div className="xlg:flex xlg:justify-between">
                    <div className="xlg:flex xlg:justify-between xlg:w-7/12 xlg:flex-col xxxs:space-y-12 xlg:h-11/12">
                        <div>
                            <h1 className="xlg:text-4xl xlg:font-bold xlg:w-8/12 xxxs:text-6xl xxxs:font-bold xxxs:pb-2">Instantly connect with senior tech talent</h1>
                            <div className="xlg:pt-2 xlg:text-xl xxxs:text-xl xxxs:w-8/12">Hire tech talent that gets <span className="xxxs:font-bold xxxs:underline">promoted</span></div>
                        </div>
                        <div className="xlg:relative">
                            <button className="xlg:p-4 xxxs:mb-12 xxxs:mt-12 xxxs:rounded-full  xlg:bg-black xlg:text-white xlg:text-xl xxxs:p-4 xxxs:bg-black xxxs:text-white xxxs:w-full xlg:w-auto xlg:px-6 xlg:rounded-full">
                                <span>Find Candidate Now</span>
                            </button>
                        </div>
                        <div className="xlg:flex xlg:items-center xxxs:hidden xlg:visible xlg:space-x-8">
                            <div>2,000+ hires made</div>
                            <div>3.3 yrs tenure</div>
                            <div>25% of hires promoted</div>
                        </div>
                    </div>
                    <div className="xlg:relative">
                        <div className="xlg:flex xlg:flex-col xlg:bg-white xxxs:p-4 xxxs:bg-slate-300 xlg:p-4">
                            <div className="xlg:flex xlg:flex-row xxxs:flex">
                                <div id="img_i">
                                    <img src="https://vanhackblobstorageprod.blob.core.windows.net/profileimages/edae6ad7-e97c-47ee-81a1-da6bb1877367.jpg" alt="" />
                                </div>
                                <div>
                                    <div className="xlg:font-bold xxxs:font-bold xxxs:text-sm">Camila</div>
                                    <div className="xxxs:text-sm">Backend Engineer <span className="font-bold">hired by SkipTheDishes</span></div>
                                </div>
                            </div>
                            <div className="xlg:relative">
                                <div id="img_ii">
                                    <div id="player"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="xlg:hidden xlg:items-center xxxs:mt-12 xlg:space-x-8">
                            <div>
                                <div>2,000+ hires made</div>
                            </div>
                            <div>
                                <div>3.3 yrs tenure</div>
                            </div>
                            <div>
                                <div>25% of hires promoted</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Headerr;