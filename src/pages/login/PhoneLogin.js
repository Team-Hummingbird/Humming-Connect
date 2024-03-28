import Footer_login from "../../components/login/Footer_login";
import Header_login from "../../components/login/Header_login";
import Content_phoneLogin from "../../components/login/Content_phoneLogin";


function PhoneLogin(){

    return(
        <>
        <div id="Header">
            {<Header_login/>}
        </div>

        <div id="content">
            {<Content_phoneLogin/>}
        </div>

        <div id="Footer">
            {<Footer_login/>}
        </div>
        </>
    )
}

export default PhoneLogin;