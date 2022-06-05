import styled from "styled-components";
import MainProfile from "./MainProfile";
import MainFriends from "./MainFriends";
// import ScrollContainer from 'react-indiana-drag-scroll'


const Container = styled.div`
  background-color: antiquewhite;
  display: flex;
  width : 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

function Main()
{

  return (<Container>
  <MainProfile/>
    <MainFriends/>
    <MainFriends/>
    <MainFriends/>
  </Container>);
}


export default Main;