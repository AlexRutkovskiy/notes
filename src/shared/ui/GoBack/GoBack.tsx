'use client'

import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

import { TRANSLATE } from "@/shared/utils/consts"

export const GoBack = () => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.back()} 
            className="flex items-center gap-3 cursor-pointer"
        >
            <IoMdArrowRoundBack />            
            <div>
                {TRANSLATE.UTILS.BACK}
            </div>
        </div>
    )
}