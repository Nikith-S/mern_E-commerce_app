import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory () {

const [categories, setCategories] = useState([])

const getcategories = async () => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/getcategory`)
        setCategories(data?.category)
    }
    catch(error){
        console.log(error);
    }
}

useEffect(() => {
    getcategories();
},[])

return categories;

}