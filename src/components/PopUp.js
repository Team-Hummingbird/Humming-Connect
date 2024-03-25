import popStyle from './PopUp.module.css';

export default function PopUp(props){

  //확인 버튼 클릭시, 팝업창 비활성화
  const onClickHandler = (e) => {
    e.target.parentNode.style.display = 'none';
    e.target.parentNode.previousSibling.style.display = 'none';
  }
  

  return(
    <>
      <div className={popStyle.popBg}></div>
      <div className={popStyle.popUp_cont}>
          <p className={popStyle.popText}>팝업창 컨텐츠</p>
          <p className={popStyle.popText}>팝업창 을 닫아주세요.</p>
          <button className={popStyle.popBtn} onClick={onClickHandler}>확인</button>
      </div>
    </>
  );
}