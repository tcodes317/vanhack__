import "../Header/Header.css";

function Headerr(){
    return(
        <>
            <div className="xlg:relative xlg:pt-16 xlg:px-4">
                <div className="xlg:flex xlg:justify-between">
                    <div className="xlg:flex xlg:justify-between xlg:w-7/12 xlg:flex-col xlg:bg-slate-300 xlg:h-11/12">
                        <div>
                            <h1 className="xlg:text-4xl xlg:font-bold xlg:w-8/12">Instantly connect with senior tech talent</h1>
                            <div className="xlg:pt-2 xlg:text-xl">Hire tech talent that gets promoted</div>
                        </div>
                        <div className="xlg:relative">
                            <button className="xlg:p-3 xlg:bg-black">
                                <span>Find Candidate Now</span>
                            </button>
                        </div>
                        <div className="xlg:flex xlg:items-center xlg:space-x-8">
                            <div>2,000+ hires made</div>
                            <div>3.3 yrs tenure</div>
                            <div>25% of hires promoted</div>
                        </div>
                    </div>
                    <div className="xlg:relative">
                        <div className="xlg:flex xlg:flex-col">
                            <div className="xlg:flex xlg:flex-row">
                                <div id="img_i">
                                    <img src="https://vanhackblobstorageprod.blob.core.windows.net/profileimages/edae6ad7-e97c-47ee-81a1-da6bb1877367.jpg" alt="" />
                                </div>
                                <div>
                                    <div className="xlg:font-bold">Camila</div>
                                    <div>Backend Engineer <span className="font-bold">hired by SkipTheDishes</span></div>
                                </div>
                            </div>
                            <div className="xlg:relative">
                                <div id="img_ii">
                                    <div id="player"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Headerr;