import React from "react";
import styled from 'styled-components'

const MainImgArea = styled.div`
  width: 100%;
  height: 465px;
  background: url(/images/main_img.jpg) no-repeat 0 0;
`
function MainImg(){
  return(
    <div>
      <MainImgArea>
      <img src="" alt="" />
      </MainImgArea>
    </div>
  )
}

export default MainImg