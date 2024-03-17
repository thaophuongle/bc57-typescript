import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

type Props = {}

const HomeTemplate = (props: Props) => {
  return (
    <>
        <Header/>
        <section style={{minHeight: 550}}>
            <Outlet/>
        </section>
        <footer className='bg-dark text-white text-center p-3'>
            Footer
        </footer>
    </>
  )
}

export default HomeTemplate