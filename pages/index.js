import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => {

    return (
        <Layout title="Home">
            <Link href="/about"><a>About</a></Link>
        </Layout>
    )
}

export default Index