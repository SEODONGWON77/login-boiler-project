import React from 'react';
import { Route,Link } from 'react-router-dom';
import styled from 'styled-components';

function RecomendBtn() {
    return (
        <BtnDiv>
            <Link to="/recomend">
            <RecomendBtnStyle>
              메뉴더보기
            </RecomendBtnStyle></Link>
        </BtnDiv>
    );
}

const RecomendBtnStyle = styled.button`

  font-size: 20px;
  font-weight: nomal;
  color: white;
  background-color: #a5a0a0;
  padding:10px;
  border-radius: 8px;
  height: 50px;
`;

const BtnDiv = styled.div`
  position: relative;
  top: 600px;

`
export default RecomendBtn;