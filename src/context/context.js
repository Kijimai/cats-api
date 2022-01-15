import React, { useState, useEffect, useContext } from "react"
import axios from "axios"

const authAxios = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images/search",
  headers: {
    "x-api-key": `${process.env.REACT_APP_API_KEY}`,
  },
})

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cats, setCats] = useState([])
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState({ show: false, message: "" })
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    await authAxios
      .get(`?limit=${amount}&size=small`)
      .then(({ data }) => {
        setCats(data)
        console.log(cats)
        setIsLoading(false)
        // setCats({ list: data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const imageCount = e.target[0].value
    console.log(imageCount)
    setAmount(imageCount)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{ cats, handleSubmit, isLoading, error }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { useGlobalContext, AppContext, AppProvider }
