import { NavebarItemType ,NavebarArray } from "@/components/utils/NavebarArrayAndTypes"
import Link from "next/link"
import { FC } from "react"
import {HiOutlineChevronDown} from 'react-icons/hi'
import { useState } from "react";

const Expand:FC<{item:NavebarItemType}> = ({item}) => {
    const [isExpanded, setExpanded] = useState<boolean>(false);
    const [isTimeOut , setTimeOut] = useState<boolean>(false);

    function handleExpand(){
        setExpanded(!isExpanded)
        setTimeout(() => {
            setTimeOut(!isTimeOut);
        }, 100);
    }

    return (
        <li className={`${isExpanded ? "h-48":"h-12"} duration-300 list-none`}>
            <div onClick={handleExpand} className="px-3 py-2 flex duration-300 rounded-md hover:bg-purple-400 list-none justify-between">
                <Link href={item.href}>{item.label}</Link>
                {item.isDorpDown? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} />:""}
            </div>
            <div className="flex flex-col space-y-1 mt-2">
                {isTimeOut && item.dropDownData?.map((subItem:NavebarItemType, index:number) => (
                    <Link key={index} href={subItem.href} className="hover:bg-gray-50 rounded-md py-1 px-5 duration-300">
                        {subItem.label}
                    </Link>
                ))}
            </div>
        </li>
    )
}

export default Expand