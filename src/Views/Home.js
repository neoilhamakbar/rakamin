import React from "react";
// import HelloWorld from '../Components/HelloWorld'
// import CounterExample from '../Components/CounterExample';
function Home(){
    const { id } = useParams()
    const url = `https://645ce54fe01ac610589682c0.mockapi.io/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })
    
    let content = null
    
    return(
        <div className="p-3">
            <h1 className="font-bold text-2xl">Pencarian terpopuler</h1>
        {content}
        </div>
    )
}


export default Home