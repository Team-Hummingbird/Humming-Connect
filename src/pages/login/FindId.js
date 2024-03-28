import Footer_login from "../../components/login/Footer_login";
import Header_login from "../../components/login/Header_login";
import Content_find_id from "../../components/login/Content_find_id";


function FindId(){

    return(
        <>
        <div id="Header">
            {<Header_login/>}
        </div>

        <div id="content">
            {<Content_find_id/>}
        </div>

        <div id="Footer">
            {<Footer_login/>}
        </div>
        </>
    )
}

export default FindId;