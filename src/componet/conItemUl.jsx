import React, { useState } from "react";

function ItemLi({item, onToggle}){
  return(
    <>
      <li onClick={() => onToggle(item.id)} style={{width : '190px', height : '260px',border:'1px solid #333'}}>
        <img src={item.src} alt="123" style={{width:'100%', borderBottom:'1px solid #333'}}/>
        <h4 style={{fontSize:'15px', paddingBottom:'10px',paddingLeft:'5px',fontWeight:(item.active ? '700' : '400')}}>{item.ttl}</h4>
        <p style={{fontSize:'12px', paddingBottom:'10px',paddingLeft:'5px',fontWeight:(item.active ? '700' : '400')}}>{item.price}</p>
      </li>
    </>
  )
}

function ConItemUl(){
  const [items,setItems] = useState([
    {
      id : 1,
      src : '/images/popular_item.jpg',
      ttl : '[트레킹]휠리#1',
      price : '98,000원',
      active : false
    },
    {
      id : 2,
      src : '/images/popular_item.jpg',
      ttl : '[트레킹]휠리#2',
      price : '98,000원',
      active : false
    },
    {
      id : 3,
      src : '/images/popular_item.jpg',
      ttl : '[트레킹]휠리#3',
      price : '98,000원',
      active : false
    },
    {
      id : 4,
      src : '/images/popular_item.jpg',
      ttl : '[트레킹]휠리#4',
      price : '98,000원',
      active : false
    },
  ])

  const onToggle = (id) => {
    setItems(items.map(item => item.id === id ? {...item, active : !item.active} : item))
  }

  return(
    items.map((item) => (
      <ItemLi key={item.id} item={item} onToggle = {onToggle}></ItemLi>
    ))
  )
}

export default ConItemUl