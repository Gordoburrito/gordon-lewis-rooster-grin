import React from "react"


export const ColumnContainer = ({ children, columnNumber, ...other }) => {
  
  return (
    <div className = "container column-container" style={{ display: "grid", "--columns" : columnNumber ? columnNumber : "12" }}>
      {children}
    </div>
  )
}
