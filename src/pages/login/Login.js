import Footer_login from "../../components/login/Footer_login";
import Header_login from "../../components/login/Header_login";
import Content_login from "../../components/login/Content_login";


function Login(){

    return(
        <>
        <div id="Header">
            {<Header_login/>}
        </div>

        <div id="content">
            {<Content_login/>}
        </div>

        <div id="Footer">
            {<Footer_login/>}
        </div>
        </>
    )
}

export default Login;