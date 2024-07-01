import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { Checkbox, Radio } from 'antd';
import { Prices } from '../components/Prices';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/getcategory`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter(c => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
   if(!checked.length || !radio.length) getAllProduct();
 
  }, [checked.length,radio.length]);


  useEffect(() => {
   if(checked.length || radio.length)  filterProduct();
   
  }, [checked, radio]);


  // get filter produt


const filterProduct = async() => {
  try{
const {data}= await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`,{checked, radio});

setProducts(data?.products)

  }
  catch(error){
  console.log(error)

  }

}

  return (
    <Layout title="All Products- Best Offer">
      <div className="row mt-3">
        <div className="col-md-3">
          <h4 className='text-center'>Filter By Category</h4>
          {categories?.map(c => (
            <div key={c._id} className="d-flex-column">
              <Checkbox onChange={(e) => handleFilter(e.target.checked, c._id)}>
                {c.name}
              </Checkbox>
            </div>
          ))}
           <h4 className='text-center mt-4'>Filter By Price</h4>
        
            <div className="d-flex-column">
              <Radio.Group onChange={e => setRadio(e.target.value)}>
            {Prices?.map(p => (
            <div key = {p._id}>
              <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}

              </Radio.Group>
             
            </div>

            <div className="d-flex flex-column"></div>
            <button className='btn btn-danger' onClick={() => window.location.reload()}>RESET FILTER</button>

        </div>
        <div className="col-md-9">
          <h1 className='text-center'>All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div key={p._id} className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0,30)}</p>
                  <p className="card-text">${p.price}</p>
                  <button className='btn btn-primary ms-1'>More Details</button>
                  <button className='btn btn-secondary ms-1'>ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
