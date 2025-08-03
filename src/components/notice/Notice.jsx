import React from "react";
import dummy from "../../data/dummy.json";
import styled from "styled-components";

const Layout = styled.div`
  width: 1000px;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 20px;
`;

const notice = () => {
  return (
    <Layout>
      <h2>공지사항</h2>
      <ul>
        {dummy.map((item) => (
          <li key={item.id} style={{ marginBottom: "20px" }}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <p>
              <strong>{item.writer}</strong> | {item.date}
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default notice;
