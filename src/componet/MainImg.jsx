import React from "react";
import styled from 'styled-components'

const MainImgArea = styled.div`
  width: 100%;
  height: 465px;
  background: url(${process.env.PUBLIC_URL + '/images/main_img.jpg'}) no-repeat 0 0;
`
function MainImg(){
  return(
    <div>
      <MainImgArea>
      </MainImgArea>
    </div>
  )
}

export default MainImg