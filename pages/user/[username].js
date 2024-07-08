import { useRouter } from 'next/router'

const DynamicPage = () => {
  const { query } = useRouter()
  return (
    <div>
      <h1>This ian and Dynamic page [username] {query.username}</h1>
    </div>
  )
}

export default DynamicPage
