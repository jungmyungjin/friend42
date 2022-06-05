import styled from "styled-components";
import CardExampleCard from "../Components/Card";
import ScrollContainer from 'react-indiana-drag-scroll'


const Container = styled.div`
  background-color: aqua;
  width:800px;
  height: 200px;
  //display: flex;
  
`;

const GroupName = styled.span`
  display: inline-block;
  padding : 8px;
  background-color:yellowgreen;
  font-weight: bolder;
`;

const List = styled.span`
  display: flex;
  background-color: blueviolet;
  align-items: flex-start;
  
  & div{
    margin-right: 10px;
  }
`

function MainFriends() {
  return (<Container>
    <GroupName>groupName</GroupName>
    <ScrollContainer className="scroll-container" >
      <List>
        <CardExampleCard/>
        <CardExampleCard/>
        <CardExampleCard/>
        <CardExampleCard/>
        <CardExampleCard/>
      </List>
    </ScrollContainer>
  </Container>
);
}

export default  MainFriends;