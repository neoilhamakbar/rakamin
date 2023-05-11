import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";
function Home(){
    const url = `https://645ce54fe01ac610589682c0.mockapi.io/products?page=1&limit=10`

    let products = useAxiosGet(url)
    let content = null

    if (products.error) {
        content = <p>Data Tidak Ditemukan</p>
    }

    if (products.loading) {
        content = <Loader></Loader>       
    }
    
    if (products.data) {
        content =
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductCard product={product}/>
                </div>
            )     
    }

    return(
        <div className="p-3">
            <h1 className="font-bold text-2xl p-2">Pencarian Terpopuler</h1>
                {content}
        </div>
    )
}

export default Home