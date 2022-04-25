import type {NextPage} from 'next'
import {signIn, signOut, useSession} from 'next-auth/react'
import Image from 'next/image'

const Home: NextPage = () => {
  const {data: session} = useSession()

  if (session) {
    const {user} = session

    return (
      <>
        {user?.image && (
          <Image
            src={user.image}
            alt=""
            width={38}
            height={38}
            style={{borderRadius: '50%'}}
          />
        )}
        Hello, {user?.name}!<br />
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
