import styled from "styled-components";
import MainProfile from "./MainProfile";
import MainFriends from "./MainFriends";
import {getPostById, getPosts} from "../apiPost";

const Container = styled.div`
  background-color: antiquewhite;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  ////align-items: center;
  overflow: hidden;
`;

function Main()
{
  const data = getPostById("mjung");
  console.log(data);
  return (<Container>
  <MainProfile/>
    <MainFriends/>

  </Container>);
}


export default Main;