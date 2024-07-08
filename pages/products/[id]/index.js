import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const SingleProduct = () => {
  const router = useRouter()
  const [product, setProducts] = useState(null)

  async function fetchData(id) {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()

      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (router.query.id) {
      fetchData(router.query.id)
    }
  }, [router.query.id])

  return (
    <div>
      <h1>Welcome to single product page</h1>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  )
}

export default SingleProduct
