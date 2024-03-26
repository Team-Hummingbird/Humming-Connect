import { useEffect, useState } from 'react';
import { searchArt } from '../apis/ArtAPI';
import SearchStyle from '../styles/Search.module.css'
import { Link } from "react-router-dom";
import ArtItem from '../components/ArtItem';

export default function Search(artWorkList){

  const [artsList, setArtsList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchedItem, setSearchedItem] = useState('');
  
  useEffect(
    () => {
      // setArtsList(getArtworkList());
      // console.log(getArtworkList());
      // console.table(getArtworkList());      
    },
    []
  );

  // 검색버튼 클릭시, 검색 결과 표시
  const onClickHandler = () => {
    console.log('search button clicked.');
    setSearchedItem(searchArt(searchValue).map(art => <ArtItem key={art.artCode} art={art}/>));    
  }

  return(
    
    <>
      
      <div className={SearchStyle.main_cont}>
        <div className={SearchStyle.search_cont}>
          <div className={SearchStyle.searchBar}>
            <input 
              type="search" 
              name="artName"
              placeholder="검색할 작품 및 작가명을 입력해주세요."
              onChange={e => setSearchValue(e.target.value)}
            />
            <button onClick={onClickHandler}>검색</button>
          </div>
          <div className={SearchStyle.searchResult}>
            <p>SEARCH RESULT</p>
            <p className={SearchStyle.d_none}>😆😍개의 작품이 검색되었습니다.</p>
            {/*<p>😆😍개의 작품이 검색되었습니다.</p>*/}
            <div className={SearchStyle.searchResultList}>

              <div className={SearchStyle.nullResult}>
                <p>''검색 결과가 없습니다. </p>
              </div>

              <ul >
                <li>
                  <Link>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="search result"/>
                    {/*src={`${process.env.PUBLIC_URL}/img/searchIcon.svg`}*/}
                    <div className={SearchStyle.descriptText}>
                      <p>작가명 Artist</p>
                      <p>작품명 Title, 연도 Year</p>          
                      <p>작품가격 Price</p>          
                    </div>
                  </Link>
                </li>
                {artsList.map(art => <ArtItem key={art.artCode} art={art}/>)}
                {searchedItem}
                <li>
                  <Link>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="search result"/>
                    <div className={SearchStyle.descriptText}>
                      <p>작가명 Artist</p>
                      <p>작품명 Title, 연도 Year</p>          
                      <p>작품가격 Price</p>          
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="search result"/>
                    <div className={SearchStyle.descriptText}>
                      <p>작가명 Artist</p>
                      <p>작품명 Title, 연도 Year</p>          
                      <p>작품가격 Price</p>          
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="search result"/>
                    <div className={SearchStyle.descriptText}>
                      <p>작가명 Artist</p>
                      <p>작품명 Title, 연도 Year</p>          
                      <p>작품가격 Price</p>          
                    </div>
                  </Link>
                </li>
              </ul>

              {/* pagination */}
              {/*<div className={`${SearchStyle.pagination}, ${SearchStyle.d_none}`}>*/}
              <div className={`${SearchStyle.d_none}, ${SearchStyle.pagination}`}>
                <span className={SearchStyle.prevBtn}></span>
                <ul>
                  <li className={SearchStyle.active}><Link>1</Link></li>
                </ul>
                <span className={SearchStyle.nextBtn}></span>
              </div>
            </div>
          </div>
        </div>
        {/* search_cont */}
      </div>
    </>
    
  );
}