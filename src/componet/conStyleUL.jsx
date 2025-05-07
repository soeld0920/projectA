import React from "react";

function ItemLi({item}){
  return(
    <>
      <li style={{width : '190px', height : '260px',border:'1px solid #333'}}>
        <img src={process.env.PUBLIC_URL+item.src} alt="123" style={{width:'100%', borderBottom:'1px solid #333'}}/>
        <h4 style={{fontSize:'15px', paddingBottom:'10px',paddingLeft:'5px'}}>{item.ttl}</h4>
        <p style={{fontSize:'12px', paddingBottom:'10px',paddingLeft:'5px'}}>{item.price}</p>
      </li>
    </>
  )
}

function ConStyleUl(){
  const items = [
    {
      id : 1,
      src : '/images/popular_item.jpg',
      ttl : '에이스자켓#1',
      price : '98,000원'
    },
    {
      id : 2,
      src : '/images/popular_item.jpg',
      ttl : '에이스자켓#2',
      price : '98,000원'
    },
    {
      id : 3,
      src : '/images/popular_item.jpg',
      ttl : '에이스자켓#3',
      price : '98,000원'
    },
    {
      id : 4,
      src : '/images/popular_item.jpg',
      ttl : '에이스자켓#4',
      price : '98,000원'
    },
  ]
  return(
    items.map((item) => (
      <ItemLi item={item} key={item.id}></ItemLi>
    ))
  )
}

export default ConStyleUl