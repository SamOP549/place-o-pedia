import React from 'react'
import Link from 'next/link'

const Card2 = (props) => {
    return (
        <div>
            <div className="rounded overflow-hidden shadow-lg p-3 bg-black card">
                <div className='content'>
                    <img className="card_image" src={props.url} alt="" />
                    <div className="px-2 py-4">
                        <div className="font-bold text-xl mb-2 text-white">{props.name}</div>
                        <div className='flex align-center justify-between text-white mb-1'>
                            <p className='italic'>Domains</p>
                        </div>
                        {
                            props.domains.map(domain => {
                                return (
                                    <p className='text-white'>{domain}</p>
                                )
                            })
                        }
                        <Link href={props.insta} target="_blank"><button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white mt-2 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Instagram</button></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card2