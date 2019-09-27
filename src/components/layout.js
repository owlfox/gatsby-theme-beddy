import React from "react"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
const Layout = (props) => (
  <div>
    <Header title={props.title}></Header>
      {props.children}
    <Footer></Footer>
  </div>
)

export default Layout

