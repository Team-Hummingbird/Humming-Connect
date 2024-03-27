import styles from "./Main.module.css";

export default function Main () {

  return(
    <div style={{height:'calc(100vh - 160px)', padding: 20}}>
      <h1>Main 화면</h1>
      <div className={styles.MainF1}>
        <img src="img/main1.png"></img>
        <img src="img/main1_1.png"></img>

        <h3 className={styles.MainNew}>NEW</h3>

        <div className={styles.MainF2}>
            <img src="img/main2.png"></img>
            <img src="img/main2_1.png"></img>
            <img src="img/main2_2.png"></img>
            <img src="img/main2_3.png"></img>
        </div>

        <h3>Our Picks</h3>
        <div className={styles.MainW}>
            <img src="img/main3.png"></img>
            <img src="img/main3_1.png"></img>
            <img src="img/main3_2.png"></img>
            <img src="img/main3_3.png"></img>
            <img src="img/main3_4.png"></img>
            <img src="img/main3_5.png"></img>
        </div>
        
        <h3>Promotion</h3>
        <div>
            <img scr="img/main4.png"></img>
            <img scr="img/main4_1.png"></img>
        </div>
        </div>
    </div>
    );
}
