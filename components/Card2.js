import React from 'react'
import Link from 'next/link'

const Card2 = (props) => {
    return (
        <div>
            <div class="rounded overflow-hidden shadow-lg p-3 bg-black card">
                <div className='content'>
                    <img class="card_image" src={props.url} alt="" />
                    <div class="px-2 py-4">
                        <div class="font-bold text-xl mb-2 text-white">{props.name}</div>
                        <p class="text-white text-base mb-2">
                            {props.description}
                        </p>
                        <div className='flex align-center justify-between text-white mb-2'>
                            <p className='italic'>Domains</p>
                        </div>
                        {
                            props.domains.map(domain => {
                                return (
                                    <p className='text-white'>{domain}</p>
                                )
                            })
                        }
                        <Link href={props.insta} target="_blank"><button type="submit" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Instagram</button></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card2