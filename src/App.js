import logo from "./logo.svg";
import "./App.css";
import Board from "./board";
import TitleBoard from "./title";
import { Center, Title } from "@mantine/core";

function App() {
  return (
    <div>
      <Center>
        <TitleBoard />
      </Center>

      <Center>
        <Board />
      </Center>
    </div>
  );
}

export default App;
