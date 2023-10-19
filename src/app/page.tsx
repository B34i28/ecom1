import NewsLetter from "@/components/view/Newsletter/page";
import { responseType } from "@/components/utils/ProductsDataArrayAndType";
import Hero from "@/components/view/Hero/page";
import Jewellery from "@/components/view/Jewellery/page";
import ProductType from "@/components/view/ProductType/page";
import ProductsR from "@/components/view/ProductsR/page";
import ProductDetail from "@/components/view/ProductDetail/page";
import { data } from "autoprefixer";

async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`, {
    next: {
      revalidate: 60
    }
  });

  if(!res.ok){
    throw new Error("Faild to Fetch")
  }

  return res.json();
}


export default async function Home() {
  let { result }: responseType = await fetchAllProductsData();
  return (
    <div>
      <Hero/>
      <ProductType/>
      <ProductsR ProductData = {result} />
      <Jewellery />
      <NewsLetter />
    </div>
  )
}
