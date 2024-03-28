import Footer_login from "../../components/login/Footer_login";
import Header_login from "../../components/login/Header_login";
import Content_easyLogin from "../../components/login/Content_easyLogin";


function EasyLogin(){

    return(
        <>
        <div id="Header">
            {<Header_login/>}
        </div>

        <div id="content">
            {<Content_easyLogin/>}
        </div>

        <div id="Footer">
            {<Footer_login/>}
        </div>
        </>
    )
}

export default EasyLogin;