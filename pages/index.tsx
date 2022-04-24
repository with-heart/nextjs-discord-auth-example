import type {NextPage} from 'next'
import {signIn, signOut, useSession} from 'next-auth/react'

const Home: NextPage = () => {
  const {data: session} = useSession()

  if (session) {
    return (
      <>
        You&apos;re signed in! Congratulations! <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Home
