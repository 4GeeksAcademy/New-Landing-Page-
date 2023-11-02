import React from 'react'

const Card = ({ imageSrc, title }) => {
  return (
    <div className='col-sm-12 col-md-4 col-lg-3'>
      <div className='card text-center'>
        <img
          src={imageSrc}
          className='card-img-top'
          alt='placeholder'
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='#' className='btn btn-primary'>
            Find out more!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card