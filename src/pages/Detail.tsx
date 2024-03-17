import React, { useEffect, useState } from 'react'
import { ProductDetail } from '../models/ProductDetail'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

type Props = {}

const Detail = (props: Props) => {
    const [productDetail, setProductDetail] = useState<ProductDetail | null>(null)
    const param = useParams()

    const getProductDetailApi = async () => {
        const res = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${param.id}`
        })
        setProductDetail(res.data.content)
    }

    useEffect(() => {
        getProductDetailApi()
    }, [param.id])

  return (
    <div className='container'>
        <div className="row">
            <div className="col-3">
                <img className='w-100' src={productDetail?.image} alt="..." />
            </div>
            <div className="col-9">
                <h3>{productDetail?.name}</h3>
                <p>{productDetail?.description}</p>
                {
                    productDetail?.size.map((size) => {
                        return <button className='btn btn-primary m-2' key={size}>{size}</button>
                    })
                }
                <button className='btn btn-dark'>Add to cart <i className='fa fa-cart-plus'></i></button>
            </div>
        </div>
        <div>
            <h3>Related Product</h3>
            <div className="row">
                {productDetail?.relatedProducts.map((prod) => {
                    return <div className="col-3">
                    <ProductCard prod={prod}/>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Detail