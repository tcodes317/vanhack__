import "../Main/main.css";
import Vid from "./vid/Vid";
import Main_i from "./Main_i/Main_i";
import Main_ii from "./Main_ii/Main_ii";
import Main_iii from "./Main_iii/Main_iii";

function Main(){
    return(
        <>
            <div className="xlg:relative xxxs:pt-14">
                <Vid />
                <Main_i />
                <Main_ii />
                <Main_iii />
            </div>
        </>
    )
}
export default Main;