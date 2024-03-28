import Footer_login from "../../components/login/Footer_login";
import Header_login from "../../components/login/Header_login";
import Content_find_pwd from "../../components/login/Content_find_pwd";


function FindPwd(){

    return(
        <>
        <div id="Header">
            {<Header_login/>}
        </div>

        <div id="content">
            {<Content_find_pwd/>}
        </div>

        <div id="Footer">
            {<Footer_login/>}
        </div>
        </>
    )
}

export default FindPwd;