import * as request from 'superagent';
import { useState, useEffect } from 'react';

export function getArtworkList() {

  //const [artList, setArtList] = useState([]);
  // const [imgUrl, setImgUrl] = useState("");
  // const [artistName, setArtistName] = useState("");
  // const [title, setTitle] = useState("");
  // const [year, setYear] = useState("");
  // const price = 8000000;
  // const [materials, setMaterials] = useState("");
  // const [description, setDescription] = useState("");
  //const [nextId, setNextId] = useState(1);

  const changeArtList = [{
    artCode : 1,
    artist : 'testArtist',
    title : "res.body.title",
    year : "res.body.date",
    price : 8000000,
    materials : "res.body.medium",
    description : "res.body.additional_information",
    img : "res.body._links.thumbnail.href",
    //img size
  }];

  //setArtList(changeArtList);

  return changeArtList;
  
  // console.log('artwork list called.');
  // console.log(ArtworkList);
  // return ArtworkList;

  // artist
  // title
  // year
  // price
  // materials
  // description
  // img
  // img size
  // return (
  //   <>
  //     <h1>메인 화면입니다.</h1>
  //     <img src={imgUrl} />
  //     <h2>Artist : {artistName}</h2>
  //     <h2>Title : {title}</h2>
  //     <h2>Date : {year}</h2>
  //     <h2>Materials : {materials}</h2>
  //     <h2>price : ￦{price}</h2>
  //     <h2>description : {description}</h2>  
  //   </>
  // );
}

export function searchArt(artName){
  return getArtworkList().filter(art => (art.artist.match(artName) || art.title.match(artName)));
}