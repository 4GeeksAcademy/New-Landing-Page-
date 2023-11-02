import React from 'react'
import Navbar from './Navbar.jsx'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'


const Home = () => {
	return (
		<div className='contianer-fluid'>
		  <Navbar />
		  <div className='container'>
			<Header />
			<div className='row g-4'>
			  <Card imageSrc='https://picsum.photos/id/158/500/325' title='Party Time' />
			  <Card imageSrc='https://picsum.photos/id/165/500/325' title='Peaceful field'/>
			  <Card imageSrc='https://picsum.photos/id/201/500/325' title='Nerdy Photo'/>
			  <Card imageSrc='https://picsum.photos/id/302/500/325' title='Grey Scale'/>
			</div>
		  </div>
		  <Footer />
		</div>
	  )
};

export default Home
