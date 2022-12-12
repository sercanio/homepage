import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sercan Ateş | Personal Blog & Portfolio</title>
        <meta
          name="description"
          content="Sercan Ateş's personal blog & portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-400 w-screen h-screen">
        <h1 className="text-4xl text-white">Hello World</h1>
      </main>

      <footer></footer>
    </div>
  )
}
