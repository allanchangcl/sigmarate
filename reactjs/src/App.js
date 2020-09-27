import React from "react"
import "./App.css"
import CalcInterestForm from "./components/CalcInterestForm"

import { Layout } from "antd"
const { Header, Footer, Content } = Layout

const App = () => (
  <div className="App">
    <div className="container">
      <Layout>
        <Header>Sigmarate - Amortization</Header>
        <Layout>
          <Content>
            <CalcInterestForm />
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Express ReactJS Ant Design, Flask
        </Footer>
      </Layout>
    </div>
  </div>
)

export default App
