import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCountTodoContext } from "../../context/CounterContext";

const Container = styled.div`
  padding: 24px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
`;

const DelButtn = styled.button`
  margin-left: 10px;
  padding: 6px 12px;
  background-color: #ff4d4f;
  color: #000000;

  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  width: 240px;
  padding: 16px;
  border-radius: 12px;
  background-color: #f4f4f4;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Category = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #555;
`;

const Task = styled.p`
  font-size: 18px;
  margin: 0;
`;

const ToDoList = () => {
  const { state } = useCountTodoContext();
  const [list, setList] = useState([]);

  function deleteTodo() {
    if (list.length == 0) {
      alert("삭제할 항목이 없습니다.");
      return;
    }
    localStorage.removeItem("todoList");
    setList([]);
    alert("전체 항목이 삭제되었습니다.");
  }

  useEffect(() => {
    const stored = localStorage.getItem("todoList");
    if (stored) {
      setList(JSON.parse(stored));
    }
  }, []);

  return (
    <Container>
      <TitleRow>
        <Title>To Do List</Title>

        {list.length > 0 && (
          <Title>
            Total: {list.length}
            <DelButtn onClick={deleteTodo}>전체 삭제</DelButtn>
          </Title>
        )}
      </TitleRow>
      <CardContainer>
        {list.length > 0 ? (
          list.map((item, index) => (
            <Card key={index}>
              <Category>{item.category}</Category>
              <Task>{item.task}</Task>
            </Card>
          ))
        ) : (
          <p>No tasks yet.</p>
        )}
      </CardContainer>
    </Container>
  );
};

export default ToDoList;
