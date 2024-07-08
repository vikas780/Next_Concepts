import React from 'react'
import style from '../../styles/ssr.module.css'
import { useRouter } from 'next/router'
const ProductsServer = (props) => {
  const router = useRouter()
  const { products } = props.data
  console.log('Props', products)
  return (
    <div className={style.products}>
      <h1>Fetching Products on Server using SSR</h1>

      {products.map((prod) => {
        return <p key={prod.id}>{prod.title}</p>
      })}
      <button onClick={() => router.replace('/')}>Go to Home</button>
    </div>
  )
}

export async function getServerSideProps() {
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

export default ProductsServer
