import Layout from "../components/Layout"

import Link from 'next/link'

const About = () => {
    return (
        <Layout title="About">
            <Link href="/">Home</Link>
            <img src="/static/newlogo.png" alt="logo" height="200px" />
        </Layout>
    )
}

export default About