import React, { useState } from "react";
import styled from "styled-components";
import { Actions, useCountTodoContext } from "../../context/CounterContext";

const Container = styled.div`
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 16px;
`;

const Select = styled.select`
  margin-right: 5px;
  padding: 8px;
  font-size: 16px;
`;

const AddInput = styled.input`
  margin-left: 10px;
  padding: 8px 16px;
  font-size: 16px;
  /* background-color: #636363; */
  background-color: ${(props) => props.btnColor};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
const InsertToDo = ({ btnColor }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Work");

  const handleChange = (e) => setTask(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const { dispatch } = useCountTodoContext();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const vo = {
      category,
      task,
    };

    if (!task) {
      alert("입력된 task가 없습니다 !");
      return;
    }

    const existing = localStorage.getItem("todoList");
    const voList = existing ? JSON.parse(existing) : [];

    voList.push(vo);
    localStorage.setItem("todoList", JSON.stringify(voList));

    dispatch({
      type: Actions.AddTodo,
      payload: vo,
    });

    alert("To Do List 에 저장되었습니다.");
    setTask("");
  };

  return (
    <Container>
      <Title>Add New Task</Title>
      <form onSubmit={handleSubmit}>
        <Select value={category} onChange={handleCategoryChange}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Others">Others</option>
        </Select>
        <Input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter your task"
        />
        <AddInput btnColor={btnColor} type="submit" value="Add" />
      </form>
    </Container>
  );
};

export default InsertToDo;
