import React, { useState } from "react"
import { useGlobalContext } from "../../context/context"

const Form = () => {
  const { handleSubmit } = useGlobalContext()

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="imageCount">ImageCount</label>
        <select name="images" id="imageCount">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="form-group">
      
      </div>
      <div className="form-group"></div>
      <button>Click</button>
    </form>
  )
}

export default Form
