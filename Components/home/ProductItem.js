import React from 'react'
import PropTypes from 'prop-types'
import reactLogo from '../../images/logo512.png'
import checkmarkImage from '../../images/checkmark.png'

const ProductItem = (props) => {
  const limitWords = (name) => {
    const word = name.slice(0, 30);
    return name.length > 30 ?  `${word}...` :  word
  }
  return (
    <div className='col-md-3 col-12 mb-4'>
      <div className="card">
        <img src={require(`../../${props.image}`)} className="card-img-top" alt="Product" style={{height: '250px', padding: '10px'}}/>
        <div className="card-body">
          <h5 className="card-title">{limitWords(props.name)}</h5>
          <div>
            <img src={require(`../../images/ratings/rating-${(props.rating.stars) * 10}.png`)} alt="Count" style={{ width: '100px', height: '20px' }} />
            <span className='small-text mx-2'>{props.rating.count}</span>
          </div>
          <div className='d-flex justify-content-between mt-1'>
            <div className="text-success large-text">
              ${(props.priceCents / 100).toFixed(2)}
            </div>
            <div style={{ textWrap: 'nowrap' }}>
              <img src={checkmarkImage} style={{ height: '20px' }} className='mx-1' alt="Verified Seller" />
              Verified Seller
            </div>
          </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className='d-flex justify-content-between'>
            <div className='text-success mt-2' style={{ textWrap: 'nowrap' }}>
              In stock
            </div>
            <button style={{ textWrap: 'nowrap' }} className="btn btn-primary">
              <i className="fa-solid fa-plus mr-2"></i>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
ProductItem.defaultProps = {
image: reactLogo,
rating: {
stars: 0,
count: 0
},
keywords: ['trending', 'cost effective', 'durable']
};
ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  rating: {
    stars: PropTypes.number,
    count: PropTypes.number
  },
  priceCents: PropTypes.number.isRequired,
  // keywords: PropTypes.array
};
// {
//   "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//   "image": "images/products/athletic-cotton-socks-6-pairs.jpg",
//   "name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
//   "rating": {
//     "stars": 4.5,
//     "count": 87
//   },
//   "priceCents": 1090,
//   "keywords": [
//     "socks",
//     "sports",
//     "apparel"
//   ]
// }

export default ProductItem
