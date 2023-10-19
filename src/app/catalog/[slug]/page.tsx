import { oneProductType, responseType } from "@/components/utils/ProductsDataArrayAndType";
import ProductDetail from "@/components/view/ProductDetail/page";


async function fetchPreviewData(slug : string){
    let res = await fetch(`https://syjf68x8.api.sanity.io/v2023-07-21/data/query/production?query=*%5B_type+%3D%3D+%22${slug}%22%5D`)
    return res.json
    
};


const Catalog = async ( {params} : { params : {slug:string} } ) => {
    let data: any = await fetchPreviewData(params.slug)
    
    return (
    <div>
        {/* <ProductDetail item={data.result[0]} /> */}
        {params.slug}
    </div>
    )
}

export default Catalog