import React from 'react'
import './About.css';
const About = () => {
  return (
    <>
    <h1 className="region-title">Select a region to plant a tree.</h1>

    <div className='aboutContainer'>

    <div className='northAmerica'>
    <a href=' https://onetreeplanted.org/collections/north-america' id='northAmercia'>
    <img alt="North America" src="images/northamerica.jpeg"/></a>
    </div>

    <div className='latinAmerica'>
    <a href='https://onetreeplanted.org/collections/latin-america' id='latinAmerica'>
    <img alt="Latin America" src="images/latinamerica.jpeg"/>
    </a>
    </div>

    <div className='europe'>
    <a href='https://onetreeplanted.org/collections/europe' id='europe'>
    <img alt="Europe" src="images/europe.jpeg"/></a>
    </div>

    <div className='asia'>
    <a href='https://onetreeplanted.org/collections/asia' id='asia'>
    <img alt="Asia" src="images/asia.jpeg"/></a>
    </div>

    <div className='africa'>
    <a href='https://onetreeplanted.org/collections/africa'id='Africa'><img alt="Africa" src="images/africa.jpeg"/></a>
    </div>

    <div className='pacific'>
    <a href='https://onetreeplanted.org/collections/the-pacific' id='pacific'>
    <img alt="Pacific" src="images/pacific.jpeg"/></a>
    </div>
    </div>
    </>
  )
}

export default About