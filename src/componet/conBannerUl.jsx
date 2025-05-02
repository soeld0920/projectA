import React from "react";

function BannerLi({banner}){
  return(
    <li><img src={banner.src} alt="324" /></li>
  )
}

function ConBannerUl(){
  const banners = [
    {
      id : 1,
      src : '/images/banner01.jpg'
    },
    {
      id : 2,
      src : '/images/banner02.jpg'
    },
    {
      id : 3,
      src : '/images/banner03.jpg'
    },
  ]
  return(
    <ul>
      {banners.map((banner) => (
        <BannerLi banner={banner} key={banner.id}/>
      ))}
    </ul>
  )
}

export default ConBannerUl