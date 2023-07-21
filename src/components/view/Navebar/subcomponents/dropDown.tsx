import { NavebarItemType } from "@/components/utils/NavebarArrayAndTypes"
import Link from "next/link"
import { FC } from "react"

const DropDown:FC<{item: NavebarItemType}> =({item}) =>{
  return (
    <ul>
        {item.dropDownData?.map((item:NavebarItemType,index:number)=>(
            <li className="hover:ml-2 group-hover:duration-300 -translate-y-7 group-hover:translate-y-0">
                <Link href={item.href}>{item.label}</Link>
            </li>
        ))}
    </ul>
  )
}

export default DropDown