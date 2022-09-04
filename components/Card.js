import React from 'react'

const Card = (props) => {
    const baseURL = "https://maps.googleapis.com/maps/api/place/photo"
    const maxWidth = "384"
    const maxHeight = "256"
    let photoReference = props.reference;
    const key = "AIzaSyCAq2GEWL-EgAPbfKWLrzEFkLe1PjAUBO8";
    let finalURL = baseURL + "?maxwidth=" + maxWidth + "&maxheight=" + maxHeight + "&photo_reference=" + photoReference + "&key=" + key
    return (
        <div>
            

            <div className="rounded overflow-hidden shadow-lg p-3 bg-black card">
                <div className='content'>
                <img className="card_image" src={finalURL} alt="" />
                <div className="px-2 py-4">
                    <div className="font-bold text-xl mb-2 text-white">{props.name}</div>
                    <p className="text-white text-base mb-2">
                        {props.address}
                    </p>
                    <div className='flex align-center justify-between text-white mb-2'>
                        <p className='italic'>Rating</p>
                        <p>{props.rating} out of 5</p>
                    </div>
                    <p className='text-blue-700 mb-2'>{props.noOfRatings} reviews</p>
                    <form action="http://maps.google.com/maps" method="get" target="_blank">
                        <input type="hidden" name="saddr" value="SRM Institute of Science and Technology" />
                        <input type="hidden" name="daddr" value={props.name} />
                        <button type="submit" value='Get directions' className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Directions</button>
                    </form>
                </div>
                </div>

            </div>

        </div>

    )
}

export default Card