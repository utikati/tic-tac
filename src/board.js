import React, { useState, useEffect } from "react";
import {
  Grid,
  Group,
  Center,
  Button,
  Divider,
  Box,
  Select,
} from "@mantine/core";

export default function Board() {
  const [btn, setBtn] = useState(["", "", "", "", "", "", "", "", ""]);

  const [value, setValue] = useState("X");
  const [stateOfButton, setStateOfButton] = useState(true);
  const [machineSelect, setMachineSelect] = useState("");
  const [play, setPlay] = useState(false);

  const checkList = (position) => {
    if (btn[position] === "") {
      return true;
    } else {
      return false;
    }
  };

  const checkFullList = () => {
    if (
      btn[0] !== "" &&
      btn[1] !== "" &&
      btn[2] !== "" &&
      btn[3] !== "" &&
      btn[4] !== "" &&
      btn[5] !== "" &&
      btn[6] !== "" &&
      btn[7] !== "" &&
      btn[8] !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkWinLines = (e) => {
    let i = 0;

    while (i < 8) {
      if (
        btn[i] === btn[i + 1] &&
        btn[i] === btn[i + 2] &&
        btn[i] !== "" &&
        btn[i + 1] !== "" &&
        btn[i + 2] !== ""
      ) {
        setPlay(false);
        alert(`${btn[i]} wins!`);
        handleClick();
        return false;
      }
      i = i + 3;
    }
    return true;
  };

  const checkWinDiagonals = () => {
    if (
      btn[0] === btn[4] &&
      btn[0] === btn[8] &&
      btn[0] !== "" &&
      btn[4] !== "" &&
      btn[8] !== ""
    ) {
      setPlay(false);
      alert(`${btn[0]} wins!`);
      handleClick();
      return false;
    }
    if (
      btn[2] === btn[4] &&
      btn[2] === btn[6] &&
      btn[2] !== "" &&
      btn[4] !== "" &&
      btn[6] !== ""
    ) {
      setPlay(false);
      alert(`${btn[2]} wins!`);
      handleClick();
      return false;
    }
    return true;
  };

  const checkWinColumns = () => {
    for (let i = 0; i < 3; i++) {
      if (btn[i] === btn[i + 3] && btn[i] === btn[i + 6] && btn[i] !== "") {
        setPlay(false);
        alert(`${btn[i]} wins!`);
        handleClick();
        return false;
      }
    }
    return true;
  };

  const handleClick = (e) => {
    setStateOfButton(!stateOfButton);
    setPlay(false);
    setBtn(["", "", "", "", "", "", "", "", ""]);
  };

  const insertValue = (position, value) => {
    if (checkList(position)) {
      setBtn((prevState) => {
        return {
          ...prevState,
          [position]: value,
        };
      });
    }
  };

  const pcMove = () => {
    if (play) {
      let val = true;
      while (val) {
        let random = Math.floor(Math.random() * 9);

        if (checkList(random)) {
          insertValue(random, machineSelect);
          setBtn((prevState) => {
            return {
              ...prevState,
              [random]: machineSelect,
            };
          });
          val = false;
          setPlay(false);
        }
        if (checkFullList()) {
          setPlay(false);
          val = false;
        }
      }
    }
  };

  useEffect(() => {
    let a = true,
      b = true,
      c = true;
    a = checkWinLines();
    b = checkWinDiagonals();
    c = checkWinColumns();
    if (a && b && c) {
      if (
        btn[0] !== "" &&
        btn[1] !== "" &&
        btn[2] !== "" &&
        btn[3] !== "" &&
        btn[4] !== "" &&
        btn[5] !== "" &&
        btn[6] !== "" &&
        btn[7] !== "" &&
        btn[8] !== ""
      ) {
        setPlay(false);
        alert("Draw!");

        handleClick();
      }
    }
    if (play) {
      pcMove();
    }
  }, [btn]);

  return (
    <div>
      <Box>
        <Select
          label="Chose X or O"
          value={value}
          onChange={setValue}
          data={[
            { value: "X", label: "X" },
            { value: "O", label: "0" },
          ]}
          disabled={!stateOfButton}
        />
        <Button
          sx={(theme) => ({
            marginTop: "3px",
          })}
          disabled={!stateOfButton}
          onClick={() => {
            setStateOfButton(false);
            value === "X" ? setMachineSelect("O") : setMachineSelect("X");
            setPlay(false);
            handleClick();
          }}
        >
          Start Game
        </Button>
      </Box>
      <Center
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <Grid
          number={3}
          sx={(theme) => ({
            height: "100%",
            marginTop: "auto",
            marginBottom: "auto",
          })}
        >
          <Grid.Col span={12} align="center">
            <Divider size="xs" />
          </Grid.Col>
          <Grid.Col span={4} align="center">
            <Button
              onClick={() => {
                if (btn[0] === "") {
                  setPlay(true);
                  insertValue(0, value);
                } else {
                  alert("This position is already taken");
                }
              }}
              size="xl"
              disabled={stateOfButton}
            >
              {btn[0]}
            </Button>
          </Grid.Col>
          <Grid.Col span={4} align="center">
            <Button
              size="xl"
              disabled={stateOfButton}
              onClick={() => {
                if (btn[1] === "") {
                  setPlay(true);
                  insertValue(1, value);
                } else {
                  alert("This position is already taken");
                }
              }}
            >
              {btn[1]}
            </Button>
          </Grid.Col>
          <Grid.Col span={4} align="center">
            <Button
              size="xl"
              disabled={stateOfButton}
              onClick={() => {
                if (btn[2] === "") {
                  setPlay(true);
                  insertValue(2, value);
                } else {
                  alert("This position is already taken");
                }
              }}
            >
              {btn[2]}
            </Button>
          </Grid.Col>
          <Grid.Col span={12} align="center">
            <Divider size="xs" />
          </Grid.Col>

          <Grid.Col span={4} align="center">
            <Button
              size="xl"
              disabled={stateOfButton}
              onClick={() => {
                if (btn[3] === "") {
                  setPlay(true);
                  insertValue(3, value);
                } else {
                  alert("This position is already taken");
                }
              }}
            >
              {btn[3]}
            </Button>
          </Grid.Col>
          <Grid.Col span={4} align="center">
            <Button
              size="xl"
              disabled={stateOfButton}
              onClick={() => {
                if (btn[4] === "") {
                  setPlay(true);
                  insertValue(4, value);
                } else {
                  alert("This position is already taken");
                }
              }}
            >
              {btn[4]}
            </Button>
          </Grid.Col>
          <Grid.Col span={4} align="center">
            <Button
              size="xl"
              disabled={stateOfButton}
              onClick={() => {
                if (btn[5] === "") {
                  setPlay(true);
                  insertValue(5, value);
                } else {
                  alert("This position is already taken");
                }
              }}
            >
              {btn[5]}
            </Button>
          </Grid.Col>

          <Grid.Col span={12} align="center">
            <Divider size="xs" />
          </Grid.Col>
          <Grid.Col span={4} align="center">
            <Button
              size="xl"
              disabled={stateOfButton}
              onClick={() => {
                if (btn[6] === "") {
                  setPlay(true);
                  insertValue(6, value);
                } else {
                  alert("This position is already taken");
                }
              }}
            >
              {btn[6]}
            </Button>
          </Grid.Col>
          <Grid.Col span={4} align="center">
            <Button
              size="xl"
              disabled={stateOfButton}
              onClick={() => {
                if (btn[7] === "") {
                  setPlay(true);
                  insertValue(7, value);
                } else {
                  alert("This position is already taken");
                }
              }}
            >
              {btn[7]}
            </Button>
          </Grid.Col>
          <Grid.Col span={4} align="center">
            <Button
              size="xl"
              disabled={stateOfButton}
              onClick={() => {
                if (btn[8] === "") {
                  setPlay(true);
                  insertValue(8, value);
                } else {
                  alert("This position is already taken");
                }
              }}
            >
              {btn[8]}
            </Button>
          </Grid.Col>
          <Grid.Col span={12} align="center">
            <Divider size="xs" />
          </Grid.Col>
        </Grid>
      </Center>
      <Center>
        <Button
          onClick={() => {
            handleClick();
            setPlay(false);
          }}
        >
          Restart Game
        </Button>
      </Center>
    </div>
  );
}
