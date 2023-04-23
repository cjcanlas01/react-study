import { Inter } from 'next/font/google'
import Head from 'next/head'
import Board from '../components/board'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`p-24 ${inter.className}`}
    >
      <Head>
        <title>TIC TAC TOE</title>
      </Head>

      <Board></Board>
    </main>
  )
}
