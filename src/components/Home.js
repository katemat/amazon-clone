import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Barefoot Investor 2019 Update: The Only Money Guide You'll Ever Need"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51gksI6yl0L._SX378_BO1,204,203,200_.jpg"
          />
          <Product
            title="Kenwood kMix Stand Mixer, 1000 W, Black"
            price={538.76}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="LEGO Super Mario Adventures with Mario Starter Course 71360 Building Kit"
            price={59.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91YDrKVKjHL._AC_SX679_.jpg"
          />
          <Product
            title="Wireless Earbuds, TaoTronics Bluetooth Headphones Smart AI Noise Reduction Technology for Clear Calls"
            price={56.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/717fORr2gdL._AC_SY606_.jpg"
          />
          <Product
            title="ASAKUKI Aromatherapy Essential Oils"
            price={25.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/817q0P4-n1L._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Panasonic Touch Screen LUMIX DMCG7 4K Camera + 14-42mm F3.5-5.6 + 45-150mm F4.0-5.6 Lens, Black (DMC-G7WGN-K)"
            price={930.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81aDrCqnv8L._AC_SX569_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
