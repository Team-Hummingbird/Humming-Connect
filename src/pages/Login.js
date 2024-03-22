import Footer_login from "../components/Footer_login";
import Header_login from "../components/Header_login";
import Content_login from "../components/Content_login";

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