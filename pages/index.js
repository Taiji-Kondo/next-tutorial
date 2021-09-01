import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../layouts/layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Next Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read{` `}
          <Link href="posts/first-post">
            <a>this page</a>
          </Link>
        </h1>

        <Image src="/images/profile.jpeg" width={144} height={144} alt="profile" />
      </main>
    </Layout>
  )
}

export default Home