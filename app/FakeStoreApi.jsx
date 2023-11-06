import { useState, useEffect } from "react"
import "./apiStore.css"

export default function fakeStoreApi() {
    const [filtered, setFiltered] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")
    useEffect(getApi, [searchQuery])

    function getApi() {
      const apiUrl = 'https://fakestoreapi.com/products'; 

      fetch(apiUrl)
        .then(response => response.json())
        .then(products => {
            const filter = products.filter((el) => {return (el.title.toLowerCase().includes(searchQuery.toLowerCase()))})
            const currentFilter = filter.map((product, index) => {
            return (<div class ="item">
              <p>{product.title}</p>
              <p>{product.price}</p>
              <img style={{width: "100px"}} src={product.image} alt={product.title} />
            </div>)})
          setFiltered(currentFilter)
        })
    }
  useEffect(getApi, [])

    function handleChange(event){
      setSearchQuery(event.target.value)
    }

  return (
    <div>
      <h2>API Store:</h2>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <div class="container">{filtered}</div>
    </div>
  )
}