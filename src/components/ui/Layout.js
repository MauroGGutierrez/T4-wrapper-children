import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import "./Layout.css"


const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
        <div className="children-container">
          { children }
        </div>;
      <Footer />
    </div>
  )
}

export default Layout;