import React from 'react'
import { useRouter } from 'next/router'

const ProductsStatic = (props) => {
  const router = useRouter()
  const { products } = props.data
  console.log('Props', products)
  return (
    <div>
      <h1>Fetching Products on Server using SSG</h1>
      {products.map((prod) => {
        return <li key={prod.id}>{prod.title}</li>
      })}
      <button onClick={() => router.replace('/')}>Go to Home</button>
    </div>
  )
}

export async function getStaticProps() {
  console.log('This is fron getServerSideProps function')
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  return {
    props: {
      // props is must you can't change its name
      data,
    },
  }
}

export default ProductsStatic
