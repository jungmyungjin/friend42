import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  min-height: 300px;
  min-width: 300px;
  a{
    height: 60px;
    width: 140px;
  }
  @media only screen and (max-width: 799px) {
    background-image: url("images/login.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 100%;
    width: 100%;
  }
`;

const LoginBtn = styled.button`
  // 버튼 초기화
  border: 0;
  outline: 0;
  cursor: pointer;
  
  background-color: rgba(255,255,255,0.5);
  // 위치
  position: absolute;
  bottom: 10%;
  
  // login 글자 가운데 정렬
  display: flex;
  justify-content: center;
  align-items: center;
  
  // 박스 크기
  height: inherit;
  width: inherit;
  border-radius: 50px;

  // 그림자
  -webkit-box-shadow: 0px 11px 19px 7px rgba(255,255,255,0.32);
  box-shadow: 0px 11px 19px 7px rgba(255,255,255,0.32);
  
  span{
    font-size: 30px;
    color:white;
  }
`;

function Login()
{
  return (
    <Container>
      <Link to={`/main`}>
        <LoginBtn>
          <span>Login</span>
        </LoginBtn>
      </Link>
  </Container>);
}


export default Login;