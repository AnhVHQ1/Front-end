import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {RxCross2} from 'react-icons/rx'

const CompareProduct = () => {
  return (
    <>
        <Meta title={'Compare Products'}/>
        <BreadCrumb title='Compare Products'/>
        <div className="compare-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <RxCross2 size={'2em'} className="position-absolute cross"/>
                            <div className="product-card-img">
                                <img src="/images/product-compare-1.jpg" alt="" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">R Whites Lemonade 2L</h5>
                                <h6 className="price">$1.15</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>R.White</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Category:</h5>
                                        <p>Drinks</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Energy:</h5>
                                        <p>47kJ/11kcal</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Fat:</h5>
                                        <p>0g</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Saturated Fat:</h5>
                                        <p>0g</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Sugar:</h5>
                                        <p>2.4g</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Salt:</h5>
                                        <p>0.03g</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <RxCross2 size={'2em'} className="position-absolute cross"/>
                            <div className="product-card-img">
                                <img src="/images/product-compare-1.jpg" alt="" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">R Whites Lemonade 2L</h5>
                                <h6 className="price">$1.15</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>R.White</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Category:</h5>
                                        <p>Drinks</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Energy:</h5>
                                        <p>47kJ/11kcal</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Fat:</h5>
                                        <p>0g</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Saturated Fat:</h5>
                                        <p>0g</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Sugar:</h5>
                                        <p>2.4g</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Salt:</h5>
                                        <p>0.03g</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CompareProduct