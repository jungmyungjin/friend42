import styled from "styled-components";
import { Icon, Button, Input, Header } from "semantic-ui-react";

const Container = styled.div`
  background-color: black;
  width:800px;
`;

const Profile = styled.div`
  background-color: yellow;
  width: 800px;
  height: 200px;
  display: flex;

  @media only screen and (max-width: 800px) {
    background-color: chartreuse;
    display: flex;
    width: 100%;
    height: 200px;
  }
`;

const ProfileLeft = styled.div`
  //background-color: aquamarine;
  width: 50%;
  height: 100%;
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
`;
const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: fuchsia;
  width: 50%;
  height: 100%;
  div {
    display: flex;
    flex-direction: row;
  }
`;

const IconBell = () => <Icon circular color="yellow" size="big" name="bell" />;
const IconUserPlus = () => (
  <Icon circular color="yellow" size="big" name="user plus" />
);
const IconPlusSquare = () => (
  <Icon color="yellow" size="big" name="plus square" />
);
const ButtonGroupAdd = () => <Button> Group add </Button>;
const InputProfileMessage = () => (
  <Input placeholder="React 공부중이에요! 같이해요!" />
);
const HeaderProfileMessage = () => (
  <div>
    <Header size="small">React 공부중이에요! 같이해요!</Header>
  </div>
);

const HeaderLoginName = () => (
  <div>
    <Header as="h1">mjung</Header>
  </div>
);

function MainProfile() {
  return (
    <Container>
      <Profile>
        <ProfileLeft>
          <img src="/images/elliot.jpeg" />
          <HeaderLoginName />
          <InputProfileMessage />
        </ProfileLeft>
        <ProfileRight>
          <div>
            <IconBell />
            <IconUserPlus />
          </div>
          <div>
            <ButtonGroupAdd />
            <IconPlusSquare />
          </div>
        </ProfileRight>
      </Profile>
    </Container>
  );
}

export default MainProfile;
