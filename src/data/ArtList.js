import * as request from 'superagent';
import { useState, useEffect } from 'react';

export default function ArtworkList() {

  const [artList, setArtList] = useState([]);
  // const [imgUrl, setImgUrl] = useState("");
  // const [artistName, setArtistName] = useState("");
  // const [title, setTitle] = useState("");
  // const [year, setYear] = useState("");
  // const price = 8000000;
  // const [materials, setMaterials] = useState("");
  // const [description, setDescription] = useState("");
  const [nextId, setNextId] = useState(1);

  const changeArtList = artList.concat({
    artCode : nextId,
    artist : 'testArtist',
    title : "",
    year : "res.body.date",
    price : 8000000,
    materials : "res.body.medium",
    description : "res.body.additional_information",
    img : "res.body._links.thumbnail.href",
    //img size
  });

  // const clientID = 'e48ab2d5bb4d48c9c2d7',
  //   clientSecret = 'e32c6c255beded65ef663409b6256ffd',
  //   apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';

  // const url = 'https://api.artsy.net/api/tokens/xapp_token?client_id=e48ab2d5bb4d48c9c2d7&client_secret=e32c6c255beded65ef663409b6256ffd'

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2ZmY5NzI0MS04N2NkLTQ5YTQtOWY0Mi1mZGRjOTU0NTkwOGIiLCJleHAiOjE3MTE1MjY5MjUsImlhdCI6MTcxMDkyMjEyNSwiYXVkIjoiNmZmOTcyNDEtODdjZC00OWE0LTlmNDItZmRkYzk1NDU5MDhiIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY1ZmE5OThkNWQ1ODk0MDAwZDMwYTRlZiJ9.E3KkLTNOVOc9KUyu4kvejh2tV37gazMzl5szElEgB-I';

  // // artist
  // // title
  // // year
  // // price
  // // materials
  // // description
  // // img
  // // img size

  useEffect(
    () => {
      new Promise((resolve, reject) => {
        request
          //.get('https://api.artsy.net/api')
          .get('https://api.artsy.net/api/artworks/516dfb9ab31e2b2270000c45')
          //.get('https://api.artsy.net/api/sales/517fa04c3ce51aa391000001')
          .set('X-Xapp-Token', token)
          .set('Accept', 'application/vnd.artsy-v2+json')
          .end((res) => {
            console.log('connected');
            console.log('id : ' + JSON.stringify(res.body._links.sale_artworks));
            console.log("resolve : " + res);
            ///artist/eva-lewis
            //artwork/eva-lewis-little-kitty


            const changeArtList = artList.concat({
              artCode : nextId,
              artist : 'testArtist',
              title : res.body.title,
              year : res.body.date,
              price : 8000000,
              materials : res.body.medium,
              description : res.body.additional_information,
              img : res.body._links.thumbnail.href,
              //img size
            });

            setNextId(nextId + 1);
            // setTitle(res.body.title);
            // setYear(res.body.date);
            // setMaterials(res.body.medium);
            // setDescription(res.body.additional_information);      
            // setImgUrl(res.body._links.thumbnail.href);
            
            
            setArtList(changeArtList);

            resolve(res.body);
            // .then(
            //   res => {
            //     console.log("resolve : " + res);
            //     ///artist/eva-lewis
            //     //artwork/eva-lewis-little-kitty
            //     setTitle(res.body.title);
            //     setYear(res.body.date);
            //     setMaterials(res.body.medium);
            //     setDescription(res.body.additional_information);
            //     // console.log('res.body.additional_information' + res.body.additional_information)
            //     setImgUrl(res.body._links.thumbnail.href);   
            //     request
            //       .get(res.body._links.artists.href)
            //       .set('X-Xapp-Token', token)
            //       .set('Accept', 'application/vnd.artsy-v2+json')
            //       .then((res) => {
            //         //setMaterials(res)
            //         //console.log('artist name : ' + res.name);
            //         //console.log('res for artists : ' + JSON.stringify(res));
            //         console.log('artist name : ' + JSON.stringify(res.body._embedded.artists[0].name));
            //         setArtistName(res.body._embedded.artists[0].name);
            //       });
            //       const changeArtList = artList.concat({
            //         artCode : nextId,
            //         artist : artistName,
            //         title : title,
            //         year : year,
            //         price : price,
            //         materials : materials,
            //         description : description,
            //         img : imgUrl,
            //         //img size
            //       })
            //       setNextId(nextId + 1);
            //       setArtList(changeArtList);
            //   }
            // )
            console.log("artList from ArtList.js : " + artList);

            return artList;

          })
      })
    },[]
  );

}
