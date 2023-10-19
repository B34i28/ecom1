import Image from "next/image"
import Detailimg from '@/components/assets/images/detailimg.webp'


function Jewellery() {
  return (
    <div className="px-1 text-gray-800">
        <div className="flex justify-end font-bold text-4xl py-4">
            <h6 className="max-w-xs">Unique and Authentic Vintage DesignerJewellery</h6>
        </div>

        <div className="lg:flex grid justify-between py-4 mt-2">

            <div className="grid relative basis-1/2 gap-11 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
                <div className="absolute -z-50 inset-0 text-gray-300">
                    <h6 className="text-[7.3rem] leading-[5.9rem] font-bold">Diffrent from other</h6>
                </div>
                <div className="max-w-[13rem]">
                    <h6 className="font-semibold text-xl space-y-1">Using Good Quality Materials</h6>
                    <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className="max-w-[13rem]">
                    <h6 className="font-semibold text-xl space-y-1">100% Handmade Products</h6>
                    <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                <div className="max-w-[13rem]">
                    <h6 className="font-semibold text-xl space-y-1">Modern Fashion Design</h6>
                    <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                <div className="max-w-[13rem]">
                    <h6 className="font-semibold text-xl space-y-1">Discount for Bulk Orders</h6>
                    <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
            </div>



            <div className="flex basis-1/2 flex-col lg:flex-row mt-4 lg:mt-0">
                <div className="w-64">
                    <Image height={1000} width={1000} src={Detailimg} alt="detail Image" />
                </div>
                <div className="px-9">
                    <p className="text-lg max-w-[15rem] h-[80%] mt-4 lg:mt-0">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                    <button className="text-white bg-gray-900 font-semibold rounded-sm py-2 px-6">See All <br/>Product</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jewellery