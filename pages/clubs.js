import React from 'react'
import Card2 from '../components/Card2'
import Link from 'next/link'

const Clubs = () => {
    const clubs = [
        {
            image : '/cninjs.png',
            name: 'CODING NINJAS SRM',
            domains: ["Corporate", "Creatives", "Editorials", "Sponsorship", "Technical(AI/ML, Web & App Dev)"],
            insta: "https://instagram.com/coding.ninjas_srm?igshid=YmMyMTA2M2Y="
        },
        {
            image : '/dasc.png',
            name: 'DATASCIENCE COMMUNITY SRM',
            domains: ["Corporate", "Creatives", "Technical"],
            insta: "https://instagram.com/dscommunity_srm?igshid=YmMyMTA2M2Y="
        },
        {
            image : '/gfgs.png',
            name: 'GFG SRM',
            domains: ["Business", "Creatives", "Technical"],
            insta: "https://instagram.com/gfg_srmist?igshid=YmMyMTA2M2Y="
        },
        {
            image : '/githubs.png',
            name: 'DATASCIENCE COMMUNITY SRM',
            domains: ["Corporate", "Creatives", "Technical"],
            insta: "https://instagram.com/gfg_srmist?igshid=YmMyMTA2M2Y="
        },
        {
            image : '/iota.png',
            name: 'IoT ALLIANCE SRM',
            domains: ["AI/ML", "Web Dev", "App Dev", "Hardware"],
            insta: "https://instagram.com/iotalliance.srm?igshid=YmMyMTA2M2Y="
        },
        {
            image : '/kzillas.png',
            name: 'SRMKZILLA',
            domains: ["Corporate", "Events", "Editorials", "Technical"],
            insta: "https://instagram.com/srmkzilla?igshid=YmMyMTA2M2Y="
        },
        {
            image : '/scros.png',
            name: 'SRMSCRO',
            domains: ["Corporate", "Web Dev", "Design and Fabrication", "Computer Vision", "Flight Systems"],
            insta: "https://instagram.com/srmscro?igshid=YmMyMTA2M2Y="
        }
    ]
    return (
        <div className='background-radial-gradient'>
            <style jsx>
                {`
                  .background-radial-gradient {
                  background-color: hsl(218, 41%, 15%);
              background-image: radial-gradient(
              650px circle at 0% 0%,
              hsl(218, 41%, 35%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
              ),
              radial-gradient(
              1250px circle at 100% 100%,
              hsl(218, 41%, 45%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
              );
    }
          `}
            </style>
            <div className='flex align-center justify-start'>
                <Link href='/'><img className='p-4 cursor-pointer' src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png" /></Link>
            </div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {
                    clubs.map((club, i) => {
                        return (
                            <Card2 key={i} url={club.image} name={club.name} domains={club.domains} insta={club.insta}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Clubs