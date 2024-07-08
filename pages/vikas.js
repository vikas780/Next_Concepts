import { useRouter } from 'next/router'

const VikasPages = () => {
  const router = useRouter()

  return (
    <div>
      <h1>Insside the Pages folder</h1>
      <button onClick={() => router.push(`/user/vikas`)}>
        open user/vikas
      </button>

      <button onClick={() => router.replace('/')}>Go to Home</button>
    </div>
  )
}

export default VikasPages
