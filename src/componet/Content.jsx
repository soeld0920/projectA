import React from "react";
import styled from 'styled-components'
import styles from './Content.module.css'
import ConItemUl from "./conItemUl";
import ConStyleUl from "./conStyleUL";
import ConBannerUl from "./conBannerUl";

const ContentArea = styled.div`
  width: 100%;
  height: 3000px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
`

function GoBtnBox({src})
{
  return(
    <>
      <a href="#"><img src={src} alt="124312"/></a>
    </>
  )
}
function Content(){
  return(
    <div>
      <ContentArea className={styles.area}>
        <article className={styles.item}>
          <header>
            <h3>POPULAR <br /> ITEM
            </h3>
            <ul>
              <li><a href="#">menu1</a></li>
              <li><a href="#">menu2</a></li>
              <li><a href="#">menu3</a></li>
            </ul>
          </header>
          <section>
            <ul>
              <ConItemUl/>
            </ul>
          </section>
        </article>
        <article className={styles.banner}>
          <ConBannerUl/>
        </article>
        <article className={styles.move}></article>
        <article className={styles.style}>
          <header>
            <h3>STYLE OF <br />THE WEEK
            </h3>
            <ul>
              <li><a href="#">menu1</a></li>
              <li><a href="#">menu2</a></li>
              <li><a href="#">menu3</a></li>
            </ul>
          </header>
          <section>
            <ul>
              <ConStyleUl/>
            </ul>
          </section>
        </article>
        <article className={styles.gobths}>
          <div>
            <GoBtnBox src={process.env.PUBLIC_URL + '/images/goto_shop01.png'}/>
            <GoBtnBox src={process.env.PUBLIC_URL + '/images/goto_shop02.png'}/>
          </div>
          <GoBtnBox src={process.env.PUBLIC_URL + '/images/goto_shop03.png'}/>
        </article>
        <article className={styles.info}></article>
      </ContentArea>
    </div>
  )
}

export default Content