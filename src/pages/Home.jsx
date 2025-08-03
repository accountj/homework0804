import styled from "styled-components";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import InsertToDo from "../components/todo/InsertToDo";
import ToDoList from "../components/todo/ToDoList";
import Notice from "../components/notice/Notice";
import { Route, Routes } from "react-router-dom";
import ColorSetting from "../components/settings/ColorSetting";
import { useState } from "react";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: lightgray; */
  background-color: ${(props) => props.bgColor};

  display: grid;
  grid-template-rows: 250px 1fr 100px;
  grid-template-columns: 1fr;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [bgColor, setBgColor] = useState("#ababab");
  const [navColor, setNavColor] = useState("#575757");
  const [footerColor, setFooterColor] = useState("#505050");
  const [btnColor, setBtnColor] = useState("#636363");

  return (
    <Layout bgColor={bgColor}>
      <Header bgColor={bgColor} navColor={navColor} />
      <MainDiv>
        <Routes>
          <Route path="/list" element={<ToDoList />}></Route>
          <Route
            path="/insert"
            element={<InsertToDo btnColor={btnColor} />}
          ></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route
            path="/settings"
            element={
              <ColorSetting
                bgColor={bgColor}
                navColor={navColor}
                footerColor={footerColor}
                btnColor={btnColor}
                onBgColorChange={setBgColor}
                onNavColorChange={setNavColor}
                onFooterColorChange={setFooterColor}
                onBtnColorChange={setBtnColor}
              />
            }
          ></Route>
        </Routes>
      </MainDiv>
      <Footer footerColor={footerColor} />
    </Layout>
  );
};

export default Home;
