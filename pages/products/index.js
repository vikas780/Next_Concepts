import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Products = () => {
  const router = useRouter()
  const { data, error } = useSWR('https://dummyjson.com/products', fetcher)
  console.log(data)
  if (!data) {
    return <h1>Loading...! </h1>
  }

  // const [product, setProducts] = useState([])
  // const router = useRouter()
  // async function fetchData() {
  //   try {
  //     const res = await fetch('https://dummyjson.com/products')
  //     const data = await res.json()
  //     console.log(data.products)
  //     setProducts(data.products)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div>
      <h1>Products page</h1>
      {data.products.map((prod) => {
        const { id, title } = prod
        return (
          <div key={id}>
            <li>{title}</li>
            <Link href={`/products/${id}`}> view</Link>
          </div>
        )
      })}

      <button onClick={() => router.replace('/')}>Go to Home</button>
    </div>
  )
}

export default Products
