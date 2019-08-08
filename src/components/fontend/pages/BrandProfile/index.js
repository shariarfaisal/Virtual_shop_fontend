import React,{useState,useEffect} from 'react'
import Layout from '../../Layout';
import Axios from 'axios';
import link from '../../../link';
import BrandInfo from './BrandInfo'
import CategoryDisplay from './CategoryDisplay'
import ProductDisplay from './ProductDisplay'


const getBrand = async (id,setBrand) => {
  const brand = await Axios.get(`${link}/api/shop/${id}`)
  if(brand.data){
    setBrand(brand.data);
  }
}

const getProducts = async (setProducts) => {
  const products = await Axios.get(`${link}/api/product`)
  if(products.data){
    setProducts(products.data);
  }
}

const categoryFilter = (categories,products) => {
  return categories.filter(cat => {
    return products.find(i => i.category === cat._id)
  })
}

const getCategories = async (setCategories) => {
  const categories = await Axios.get(`${link}/api/category`)
  if(categories.data){
    setCategories(categories.data);
  }
}

const productFilter = (products,brandId) => {
  return  products.filter(i => {
    return i.shop._id === brandId
  })
}

const productFilterWithCategory = (products,brandId,categoryId) => {
  return  products.filter(i => {
    console.log(i.category,categoryId);
    return (i.shop._id === brandId) && (i.category === categoryId)
  })
}

const BrandProfile = ({match}) => {
  const [brand,setBrand] = useState(null);
  const [categories,setCategories] = useState(null);
  const [products,setProducts] = useState([])
  useEffect(() => {
    getBrand(match.params.id,setBrand);
    getProducts(setProducts)
    getCategories(setCategories)
  },[])

  return (
    <Layout>
      <div className="row">
        <div className="col-12 col-md-10 mx-auto">
          {brand && <div className="card border-0">
            <BrandInfo {...brand}/>
            <div className="card-body row">
              <CategoryDisplay
                products={products}
                categories={categories}
                categoryFilter={categoryFilter}
                productFilter={productFilter}
                brandId={match.params.id}
               />
              <ProductDisplay
                products={products}
                categoryId={match.params.categoryId}
                productFilter={productFilter}
                brandId={match.params.id}
                productFilterWithCategory={productFilterWithCategory}
              />
            </div>
          </div>}
        </div>
      </div>
    </Layout>
  )
}



export default BrandProfile
