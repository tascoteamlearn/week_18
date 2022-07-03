import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"

//Action
import { getAllProduct } from '../Redux/Actions/productAction'

//Bootstrap 
import {Card, Button, Carousel} from 'react-bootstrap'

export default function Home() {
  const dispatch = useDispatch()

  const product = useSelector(state => state.product)

  const [productList, setProductList] = useState([])
  
  useEffect(()=>{
    dispatch(getAllProduct())
  },[])

  useEffect(()=>{
    if (product.listProduct && product.listProduct.length > 0) {
      const filterData = product.listProduct.filter((e,i)=> i < 10)
      setProductList(filterData)
    }
  },[product])



  return (
    <div className='container' >
        <h1 className='text-center' >Home</h1>
        <div className='mt-5 d-flex' style={{gap:"10px", flexWrap:"wrap"}}>
          {
            productList &&
            productList.length > 0 &&
            productList.map((item, index)=>{
              return (
                <Card style={{ width: '18rem' }} key={index}>
                  <Carousel>
                    {
                      item.images &&
                      item.images.length > 0 &&
                      item.images.map((e,i)=>{
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={e}
                              alt="product image"
                            />
                          </Carousel.Item>
                        )
                      })
                    }
                  </Carousel>
                  <Card.Body>
                    <Card.Title style={{textTransform:"capitalize"}}>{item.title}</Card.Title>
                    <Card.Text>
                      {
                        item.description
                      }
                    </Card.Text>
                    <Card.Text>
                      $
                      {
                        item.price
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            })
          }
        </div>
    </div>
  )
}
