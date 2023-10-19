"use client"
import { imagesType, oneProductType } from '@/components/utils/ProductsDataArrayAndType'
import React, { FC } from 'react'
import { client } from '../../../../sanity/lib/client';
import Image from 'next/image';
import  imageUrlBuilder  from "@sanity/image-url";

const builder: any = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
}


const ProductDetail:FC<{item:oneProductType}> = ({item}) => {

  return (
    <div>
        <div>
            <div className='w-28'>
                {
                    item.image.map((item:imagesType,index:number)=>(
                        <div key={index}>
                            <Image height={1000} width={1000} src={urlFor(item).width(1000).height(1000).url()} alt={item.alt} />
                        </div>
                    ))
                }
            </div>


            <div></div>



        </div>



        <div></div>


    </div>
  )
}

export default ProductDetail