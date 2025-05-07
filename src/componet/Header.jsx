import React,{useState} from "react";
import styles from './Header.module.css';
import styled from 'styled-components'
import { IoSearch } from "react-icons/io5";

const HeaderArea = styled.div`
  width: 100%;
  height: auto;
  background-color: #aff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Header(){
  return(
    <div>
      <HeaderArea>
        <div className={styles.inner}>
          <div className={styles.Top}>
            <h1 className={styles.logo}><img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="" /></h1>
            <div className={styles.qBox}>
              <ul className={styles.qMn}>
                <li>New</li>
                <li>Best</li>
                <li>Event</li>
              </ul>
              <div className={styles.search}>
                <input className={styles.input} placeholder="검색어를 입력해주세요."></input>
                <button className={styles.searchBtn}>
                  <IoSearch/>
                </button>
              </div>
            </div>
          </div>
          <ul className={styles.infoMn}>
            <li>JOIN</li>
            <li>LOGIN</li>
            <li>MYPAGE</li>
            <li>CART(0)</li>
            <li>즐겨찾기</li>
          </ul>
        </div>
        <div className={styles.mainNav}>
          <ul>
            <MainUl/>
          </ul>
        </div>
      </HeaderArea>
    </div>
  )
}

function MainUl(){
  const [mainLiList,setNavLi] = useState([
    {
      id : 1,
      name : 'ACTNTY',
      active : false
    },
    {
      id : 2,
      name : 'MAN',
      active : false
    },{
      id : 3,
      name : 'WOMAN',
      active : false
    },
    {
      id : 4,
      name : 'FOOTWEAR',
      active : false
    },
    {
      id : 5,
      name : 'BAGS',
      active : false
    },
    {
      id : 6,
      name : 'EQULPMENT',
      active : false
    },
    {
      id : 7,
      name : 'CAMPING',
      active : false
    },
    {
      id : 8,
      name : 'BRAND',
      active : false
    },
  ])

  const ontoggle = (id) => {
    setNavLi(mainLiList.map(li => li.id === id ? {...li, active : !li.active} : li))
  }

  return(
    mainLiList.map((text) => (
      <li key={text.id} onClick={() => ontoggle(text.id)} style={{cursor : 'pointer', color : (text.active ? "red" : "#fff")}}>{text.name}</li>
    ))
  )
}

export default Header