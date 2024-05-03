import React from 'react'

function Cards({url,name}) {
  return (
    <div className="cards-type">
    <div className="img-card">
        <img src={url} alt="logo" />
    </div>
    <div className="desc-card">
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adi
            pisicing elit. Doloremque, voluptates. A
        </p>
    </div>
</div>
  )
}

export default Cards