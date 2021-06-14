import React, { useEffect, useState } from "react"

import Bubbles from "./Bubbles"
import ColorList from "./ColorList"

// import { editColorService, deleteColorService } from '../services/colorServices'
import fetchColorService from '../services/fetchColorService'
import { axiosWithAuth } from "../helpers/axiosWithAuth"

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    fetchColorService()
  }, [])

  const toggleEdit = (value) => {
    setEditing(value);
  }

  const saveEdit = (editColor) => {
  }

  const deleteColor = (colorToDelete) => {
  }

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  )
}

export default BubblePage

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
