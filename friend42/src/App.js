import styled from "styled-components";
import DataTest from "./axiosTest";

const Hello = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

function App() {
  return (
    <div>
      <Hello>app</Hello>
      <DataTest />
    </div>
  );
}

export default App;
