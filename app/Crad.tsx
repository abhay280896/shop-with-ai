"use client";
import { Star } from "lucide-react";
import Image from "next/image";

const Crad = ({products}) => {
  return (
    <div className="flex justify-between flex-wrap gap-y-4 m-7">
        {products
          .slice(0, 10)
          .map(
            ({
              id,
              title,
              description,
              price,
              rating,
              returnPolicy,
              thumbnail,
            }) => (
              <div
                className="border border-white rounded-xs w-62.5 flex flex-col gap-y-2.5  p-2.5"
                key={id}
              >
                {/* <Image src={thumbnail} alt={title} width={500} height={500} /> */}
                <h3 className="text-center text-[15px]">{title}</h3>
                {/* <p className="text-left text-[13px]">{description}</p>
                <div className="flex">
                  <Star fill="yellow" stroke="yellow" className="w-3.5" />
                  <span className="mx-0.5">{rating}</span>
                </div>
                <p>Price: ₹{price}</p>
                <p>{returnPolicy}</p> */}
              </div>
            ),
          )}
      </div>
  )
}

export default Crad
