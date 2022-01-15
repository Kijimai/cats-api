import React from "react"
import { useGlobalContext } from "../../context/context"

const Images = () => {
  const { cats, isLoading } = useGlobalContext()

  if (isLoading) {
    return <div>LOADING</div>
  }

  return (
    <section className="section-images">
      <div className="inner-container">
        {cats.map((cat, index) => (
          <img key={index} className="cat-image" src={cat.url} alt="..." />
        ))}
      </div>
    </section>
  )
}

export default Images
