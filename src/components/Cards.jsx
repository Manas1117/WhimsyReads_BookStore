import React from 'react'

const Cards = ({items}) => {
    
    return (
        <div>
            <div className="card  mx-3 my-9 bg-base-100 w-96 shadow-2xl dark:bg-slate-800   dark:hover:bg-slate-700 dark:shadow-md dark:shadow-slate-500 cursor-pointer hover:scale-110 duration-500 hover:bg-base-200">
                <figure className='h-56'>
                    <img
                        src= {items.image} className='object-contain w-full h-full'
                        alt= "" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex">
                        <div className='flex object-contain text-wrap w-[90vw] text-lg font-extrabold'>{items.name}</div>
                        <div className="badge badge-secondary">{items.Category}</div>
                    </h2>
                    <p className='mx-1'>{items.title}</p>
                    <div className="card-actions justify-start">
                        <div className="badge bg-orange-600 text-white badge-outline">BuyNow</div>
                        <div className="badge badge-outline">${items.Price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
