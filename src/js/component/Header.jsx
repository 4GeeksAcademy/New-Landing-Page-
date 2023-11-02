import React from 'react'

const Header = () => {
  return (
    <div className='p-5 my-4 bg-light rounded-3'>
      <div className='container-fluid bg-light'>
        <h1 className='display-4'>Welocme to Marawan's landing Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          quaerat saepe fuga maxime asperiores sit tempora molestiae
          repellendus, iste natus, voluptatum quos minima delectus eius facilis
          quis repudiandae minus tempore!
        </p>
        <button className='btn btn-primary' type='button'>
          Call to action ✨🎊
        </button>
      </div>
    </div>
  )
}

export default Header