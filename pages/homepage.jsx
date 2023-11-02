import Layout from '@/components/Layout'
import Table from '@/components/Table'
import React from 'react'

const Homepage = () => {
  return (
    <div>
    <Layout>
      <h1 className="text-3xl text-center mt-4">Members</h1>
      <Table/>
    </Layout>
  </div>
  )
}

export default Homepage