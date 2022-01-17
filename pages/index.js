import Login from './login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}
