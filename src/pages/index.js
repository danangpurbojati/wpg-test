import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Trip from '../components/Trip'

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Trip />
            <Post />
        </Layout>
    )
}

export default Home
