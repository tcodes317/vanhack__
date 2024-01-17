import "../Main/main.css";
import Vid from "./vid/Vid";
import Main_i from "./Main_i/Main_i";

function Main(){
    return(
        <>
            <div className="xlg:relative xxxs:pt-14">
                <Vid />
                <Main_i />
            </div>
        </>
    )
}
export default Main;