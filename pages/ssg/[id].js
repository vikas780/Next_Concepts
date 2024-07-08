const SingleProduct = (props) => {
  const { title } = props.data
  return (
    <div>
      <h1>Single product page </h1>
      <br />
      <h3>Title: {title} </h3>
    </div>
  )
}

// Jb SSG m Dynamic conent ki bari aati h like single prod to ssg bolta h ki mujhe sari ides do jo aa skti h and ssg sbhi id ka sataic page biuld time pr hre ready rakhta h

//ssg bolta h ki mujhe btao kitne id aaye ge
export async function getStaticPaths() {
  const res = await fetch(`https://dummyjson.com/products`)
  const data = await res.json()
  const allUser = data.products.map((prod) => prod.id)
  console.log('All USer', allUser)
  return {
    // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    paths: allUser.map((Pid) => ({ params: { id: `${Pid}` } })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json()
  console.log(data)
  return {
    props: {
      data,
    },
  }
}

export default SingleProduct
