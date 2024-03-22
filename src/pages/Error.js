import { Link } from 'react-router-dom';
import errorStyle from './ErrorPage.module.css'

function ErrorPage() {

    return (
    <div className={errorStyle.a}>
        <img className={errorStyle.images1Icon} alt="" src="images 1.png" />
        <div className={errorStyle.groupContainer}>
            <div className={errorStyle.error}>404 ERROR</div>
            <div className={errorStyle.pageNotFound}>Page Not Found</div>
            <div className={errorStyle.sorry}>죄송합니다 해당 페이지는 찾을 수 없습니다.</div>
            <div className={errorStyle.b}>
            <Link to="/Main">
            <button className={errorStyle.homeButton}>홈으로</button>
            </Link>    
            </div>
        </div>
    </div>
    );
}

export default ErrorPage;