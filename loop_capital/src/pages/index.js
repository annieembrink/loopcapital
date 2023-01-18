import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  console.log('props', props)
  return (
    <>
     <div>{props.wpDataJson.map(post => post.date)}</div>
    </>
  )
}

// pages/index.js
export async function getStaticProps({ preview = false }) {
  // const allPosts = await getAllPostsForHome(preview)


  // let martin = await fetch('https://swapi.dev/api/people/1/?format=json')
  let wpData = await fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/posts')
  let wpDataJson = await wpData.json()
  console.log('wpData', wpDataJson)

  console.log('where will this end up?')
  return {
    props: { wpDataJson: wpDataJson },
    // revalidate: 10,
  }
}




