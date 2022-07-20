import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"

//Action
import { getAllProduct, addToCart } from '../Redux/Actions/productAction'

//Bootstrap 
import {Card, Button, Carousel, Pagination} from 'react-bootstrap'

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

  const handleClickProduct = (item) =>{
    // console.log("see item", item)
    dispatch(addToCart(item))
  }
  const allproduct = useSelector(state=> state.product.listProduct)
  const [activePage, setaActivePage]= useState(1)
  const [items, setItems] = useState([])

  useEffect(()=>{
    if (allproduct) {
      let holdItems = []
      for (let number = 1; number <= Math.ceil(allproduct.length/12); number++) {
        holdItems.push(
          <div
            key={number} 
            active={number === activePage} 
            style={{
              backgroundColor:"white",
              padding:"5px"
            }}
            onClick={(e)=> {
              setaActivePage(number)
              const recentData = allproduct
              const filterData = recentData.slice(10*(number-1), 10*number)
              setProductList(filterData)
            }}
          >
            {number}
          </div>
        );
      }
      setItems(holdItems)
    }
  },[allproduct, items])
  


  return (
    <div className='container' >
        <h1 className='text-center' >Home</h1>
        <div className='mt-5 d-flex' style={{gap:"10px", flexWrap:"wrap"}}>
          {
            productList &&
            productList.length > 0 &&
            productList.map((item, index)=>{
              return (
                <Card style={{ width: '18rem' }} key={index} onClick={()=>handleClickProduct(item)} >
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
        <div style={{display:"flex", gap:"10px"}}>{items}</div>
    </div>
  )
}
