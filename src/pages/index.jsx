import React from 'react'
import Influencer from './../components/Influencer';
import Performance from './../components/Performance';
import Head from "next/head";

function Index() {
  const data = {
    name: "James Williams",
    img: "/images/userImage.svg",
    username: "Jamws-will-89",
    bio: "Living one day at a time, with a fresh-baked cookie. Okay. And with a coffee. And maybe some...",
    location: "United States",
    gender: "male",
    type: "regular",
    socialMedia: [
      { icon: '/images/facebook.svg', amount: 34000, bg: '#AF1FFC0F' },
      { icon: '/images/instagram.svg', amount: 35000, bg: '#FFB30114' },
      { icon: '/images/twitter.svg', amount: 37000, bg: '#A2D8FA29' },
      { icon: '/images/ticktok.svg', amount: 3400, bg: '#0000000A' },
      { icon: '/images/youtube.svg', amount: 35000, bg: '#AF1FFC0F' },
      { icon: '/images/pinterest.svg', amount: 37000, bg: '#FF00000A' },
    ]
    
  }

  return (
    <div>
       <Head>
        <title>Create Discovery</title>
      </Head>
      <div className="bg-white my-4 mx-3 rounded-md flex">
        <Influencer data={data}/>
        <Performance/>
      </div>
    </div>
  )
}

export default Index