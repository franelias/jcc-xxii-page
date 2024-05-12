import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";

import NavItem from "./components/NavItem";
import Layout, { Content, Footer } from "antd/es/layout/layout";
import { Menu, Breadcrumb } from "antd";
import Header from "./components/Header";

function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState<boolean>(false);

  useEffect(() => {
    const currentPage = pageRef.current;
    if (currentPage) {
      currentPage.addEventListener("scroll", () => {
        if (currentPage.scrollTop > 0 && !showHeader) {
          setShowHeader(true);
        } else if (currentPage.scrollTop === 0 && showHeader) {
          setShowHeader(false);
        }
      });
    }
  }, [showHeader]);



  return (
    <Layout>
      <Header />

      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default App;
