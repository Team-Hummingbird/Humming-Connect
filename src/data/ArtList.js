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

  const artistList = [
    'geoffrey-bouillot',
    'eva-lewis',
    'suanjaya-kencut',
    // { 
    //   name : 'geoffrey-bouillot'
    // }, 
    // { name : 'eva-lewis'}, 
    // { name : 'suanjaya-kencut'}, 
    // {}
  ];

  // 가격 랜덤 생성
  const getRandomIntInclusive = (Math.floor(Math.random() * (99)) + 1) * 100000; 
    
  console.log("random price" + getRandomIntInclusive);

  const changeArtList = artList.concat({
    artCode: nextId,
    artist: 'testArtist',
    title: "",
    year: "res.body.date",
    price: 8000000,
    materials: "res.body.medium",
    description: "res.body.additional_information",
    img: "res.body._links.thumbnail.href",
    //img size
  });

  // const clientID = 'e48ab2d5bb4d48c9c2d7',
  //   clientSecret = 'e32c6c255beded65ef663409b6256ffd',
  //   apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2ZmY5NzI0MS04N2NkLTQ5YTQtOWY0Mi1mZGRjOTU0NTkwOGIiLCJleHAiOjE3MTE1MjY5MjUsImlhdCI6MTcxMDkyMjEyNSwiYXVkIjoiNmZmOTcyNDEtODdjZC00OWE0LTlmNDItZmRkYzk1NDU5MDhiIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY1ZmE5OThkNWQ1ODk0MDAwZDMwYTRlZiJ9.E3KkLTNOVOc9KUyu4kvejh2tV37gazMzl5szElEgB-I';

  //artworks 30 list 
  //https://api.artsy.net/api/artworks?size=30&page=5&exact=true&published=false

  //Api호출 후 각 artist에 접근해서 데이터 저장 request
  useEffect(
    () => {
      new Promise((resolve, reject) => {
        //_embedded        
          request
            .get('https://api.artsy.net/api/artists?similarity_type=contemporary&artworks=true&size=30&page=1')
            .set('X-Xapp-Token', token)
            .set('Accept', 'application/vnd.artsy-v2+json')
            .then((res) => {
              // console.log('art list' + JSON.stringify(res.body._embedded.artists));
              console.log(res.body._embedded.artists);
              (res.body._embedded.artists).map(artist => 
                { 
                  const changeArtList = artList.concat({                  
                  artCode : nextId,
                  artist : artist.name,
                  nationality : artist.nationality,
                  //title : res.body.title,
                  //year : res.body.date,
                  price : getRandomIntInclusive,
                  //materials : res.body.medium,
                  // description : res.body.additional_information,
                  img : artist._links.thumbnail.href,
                  //img size
                })
                
                setArtList(changeArtList);
                console.log(artList);

                setNextId(nextId + 1);}
              );
              ;
                console.log('links :'+res.body._embedded.artists._links);
              // request
              // .get(res.body._embedded.artists._links.artworks.href)
              // .set('X-Xapp-Token', token)
              // .set('Accept', 'application/vnd.artsy-v2+json')
              // .then((res) => {
              //   res.body._embedded.artists.map(artist => 
                
              //     artList.concat({
              //       title : res.body.title,
              //       year : res.body.date,
              //       materials : res.body.medium,
              //       //img size
              //     })                  
              //   );
              // })
              
              console.log('artlist : ' + artList);
              const changeArtList = artList.concat({
                // artCode : nextId,
                // artist : res.body.name,
                // title : res.body.title,
                // year : res.body.date,
                // price : getRandomIntInclusive,
                // materials : res.body.medium,
                // description : res.body.additional_information,
                // img : 'res.body._links.thumbnail.href2',
                //img size
              });

              //setNextId(nextId + 1);
              //setArtList(changeArtList);
              //return res.body;
              resolve(res.body);
            })

        

        //resolve(res.body);
        //console.log("artList from ArtList.js : ");
        //console.table((artList));

        //     return artList;

        //   })
      })
    }, []
  );
  //console.log("artList after setState : ");
  //console.table(artList);

  return (
    <>
      <div style={{ maxWidth: 1600, minHeight: 'calc(100vh - 160px)', margin: '0 auto' }}>
        <h1>Working on ArtList Json</h1>
      </div>
    </>
  );

}
