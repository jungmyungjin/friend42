import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import {useRecoilState} from "recoil";
import {textState} from "./AtomState";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
`



function CardExampleCard()
{
  const [loginUser, setLoginUser] = useRecoilState(textState);

  return (
  <Container>
    <Card>
      <Card.Content>
        <Card.Header>{loginUser}</Card.Header>
        <Card.Meta>
          <span>online</span>
        </Card.Meta>
        <Card.Description>Hello every body!</Card.Description>
      </Card.Content>
      <Card.Content extra>c1r2s3</Card.Content>
    </Card>
  </Container>);
}

export default CardExampleCard;
