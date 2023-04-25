import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Food = () => {
  const res = {
    "status": "OK",
    "request_id": "317dc374-f56b-4afb-9fc8-8429027a5623",
    "parameters": {
      "query": "food",
      "language": "en",
      "region": "us",
      "lat": 12.823,
      "lng": 80.0444,
      "limit": 20
    },
    "data": [
      {
        "business_id": "0x3a52f7f745261de3:0x517f0080214415fb",
        "google_id": "0x3a52f7f745261de3:0x517f0080214415fb",
        "place_id": "ChIJ4x0mRff3UjoR-xVEIYAAf1E",
        "phone_number": null,
        "name": "GST Food Street",
        "latitude": 12.8333408,
        "longitude": 80.0488352,
        "full_address": "GST Food Street, GST FOOD STREET, Grand Southern Trunk Rd, Chennai, Tamil Nadu 603203, India",
        "review_count": 732,
        "rating": 4.1,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "9 AM–11 PM"
          ],
          "Friday": [
            "9 AM–11 PM"
          ],
          "Saturday": [
            "9 AM–11 PM"
          ],
          "Sunday": [
            "9 AM–11 PM"
          ],
          "Monday": [
            "9 AM–11 PM"
          ],
          "Tuesday": [
            "9 AM–11 PM"
          ],
          "Wednesday": [
            "9 AM–11 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7f745261de3:0x517f0080214415fb",
        "cid": "5872412989428340219",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ4x0mRff3UjoR-xVEIYAAf1E&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "100427713267956981704",
        "owner_link": "https://maps.google.com/maps/contrib/100427713267956981704",
        "owner_name": "GST Food Street",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Food court",
        "subtypes": [
          "Food court",
          "Restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPv9Hk1HbEk6LHtVHrASY23A93lR3XvW48DwGw-",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPv9Hk1HbEk6LHtVHrASY23A93lR3XvW48DwGw-",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPv9Hk1HbEk6LHtVHrASY23A93lR3XvW48DwGw-=w4000-h3000-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8333722,
            "longitude": 80.0488026,
            "type": "photo",
            "photo_datetime_utc": "2022-06-01T00:00:00.000Z",
            "photo_timestamp": 1654041600
          }
        ],
        "reviews_per_rating": {
          "1": 21,
          "2": 12,
          "3": 117,
          "4": 273,
          "5": 309
        },
        "photo_count": 246,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Curbside pickup": true,
              "No-contact delivery": true,
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Accessibility": {
              "Wheelchair accessible entrance": true
            }
          }
        },
        "address": "GST FOOD STREET, Grand Southern Trunk Rd, Chennai, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": "$$",
        "district": null,
        "street_address": "GST FOOD STREET, Grand Southern Trunk Rd",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7f61f2a7f03:0x57dde2ccdab0c2",
        "google_id": "0x3a52f7f61f2a7f03:0x57dde2ccdab0c2",
        "place_id": "ChIJA38qH_b3UjoRwrDazOLdVwA",
        "phone_number": "+919050347860",
        "name": "HR 05 Food Plaza",
        "latitude": 12.8204256,
        "longitude": 80.04262159999999,
        "full_address": "HR 05 Food Plaza, Unnamed Road, Pillayar Koil St, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 297,
        "rating": 4.5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "11 AM–11 PM"
          ],
          "Friday": [
            "11 AM–11 PM"
          ],
          "Saturday": [
            "11 AM–11 PM"
          ],
          "Sunday": [
            "11 AM–11 PM"
          ],
          "Monday": [
            "11 AM–11 PM"
          ],
          "Tuesday": [
            "11 AM–11 PM"
          ],
          "Wednesday": [
            "11 AM–11 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7f61f2a7f03:0x57dde2ccdab0c2",
        "cid": "24732289143058626",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJA38qH_b3UjoRwrDazOLdVwA&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "113226975518447195513",
        "owner_link": "https://maps.google.com/maps/contrib/113226975518447195513",
        "owner_name": "HR 05 Food Plaza",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Restaurant",
        "subtypes": [
          "Restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMd6yES4EI3tAXzTr8hOJF5CmQ-kiJ8EXJXDmEZ",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMd6yES4EI3tAXzTr8hOJF5CmQ-kiJ8EXJXDmEZ",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMd6yES4EI3tAXzTr8hOJF5CmQ-kiJ8EXJXDmEZ=w4096-h3072-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8204539,
            "longitude": 80.04261989999999,
            "type": "photo",
            "photo_datetime_utc": "2019-04-28T00:00:00.000Z",
            "photo_timestamp": 1556409600
          }
        ],
        "reviews_per_rating": {
          "1": 5,
          "2": 2,
          "3": 26,
          "4": 83,
          "5": 181
        },
        "photo_count": 46,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Accessibility": {
              "Wheelchair accessible parking lot": false,
              "Wheelchair accessible seating": false
            },
            "Offerings": {
              "Late-night food": true,
              "Small plates": true
            },
            "Dining options": {
              "Lunch": true,
              "Dinner": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            },
            "Payments": {
              "NFC mobile payments": true
            }
          }
        },
        "address": "Unnamed Road, Pillayar Koil St, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11gp4ky8yy&g2lbs=ADZRdkuYNbwKxPRhi2mNzqjuuZfTYOQvwmVrfIAwvMXt7slUA-0akvS6L1UFyhS7NYmv-9nnLrHYcxD9nWR25TKe2slcZdFJ2rbN6FOn2fHUxLVISBnXyEaHP9R93RZVGphYTMJFqBU1&hl=en-US&gl=us&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=gb8lZNPRC8Ou0PEPqrKHkAU&ei=gb8lZNPRC8Ou0PEPqrKHkAU&fo_s=OA%2CAH%2CSOE",
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "Unnamed Road, Pillayar Koil St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f77245c45a21:0x26b8e68a38a3e0f6",
        "google_id": "0x3a52f77245c45a21:0x26b8e68a38a3e0f6",
        "place_id": "ChIJIVrERXL3UjoR9uCjOIrmuCY",
        "phone_number": "+917397439697",
        "name": "Desi Wok",
        "latitude": 12.816314,
        "longitude": 80.03986979999999,
        "full_address": "Desi Wok, No. 4, Kakkan St, above Senthil Stores, opposite to ABODE VALLEY, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 4,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "7 AM–11 PM"
          ],
          "Friday": [
            "7 AM–11 PM"
          ],
          "Saturday": [
            "7 AM–11 PM"
          ],
          "Sunday": [
            "7 AM–11 PM"
          ],
          "Monday": [
            "7 AM–11 PM"
          ],
          "Tuesday": [
            "7 AM–11 PM"
          ],
          "Wednesday": [
            "7 AM–11 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f77245c45a21:0x26b8e68a38a3e0f6",
        "cid": "2790233450486161654",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJIVrERXL3UjoR9uCjOIrmuCY&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "111518636613598981913",
        "owner_link": "https://maps.google.com/maps/contrib/111518636613598981913",
        "owner_name": "Desi Wok",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Restaurant",
        "subtypes": [
          "Restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOfh00rubjBG9Z1T9dJXA7eHyS_ismPjWW8fs_X",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOfh00rubjBG9Z1T9dJXA7eHyS_ismPjWW8fs_X",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOfh00rubjBG9Z1T9dJXA7eHyS_ismPjWW8fs_X=w4608-h3456-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8163957,
            "longitude": 80.0396805,
            "type": "photo",
            "photo_datetime_utc": "2023-02-28T00:00:00.000Z",
            "photo_timestamp": 1677542400
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 1,
          "5": 0
        },
        "photo_count": 6,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Curbside pickup": true,
              "No-contact delivery": true,
              "Delivery": true,
              "Drive-through": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Highlights": {
              "Rooftop seating": true
            },
            "Offerings": {
              "All you can eat": true,
              "Halal food": true,
              "Organic dishes": true,
              "Small plates": true,
              "Vegan options": true,
              "Vegetarian options": true
            },
            "Dining options": {
              "Brunch": true,
              "Lunch": true,
              "Dinner": true,
              "Catering": true,
              "Seating": true
            },
            "Amenities": {
              "Gender-neutral restroom": true,
              "Good for kids": true,
              "High chairs": true,
              "Restroom": true,
              "Wi-Fi": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "LGBTQ+ friendly": true
            },
            "Planning": {
              "Accepts reservations": true
            },
            "Payments": {
              "Cash-only": true,
              "Debit cards": true,
              "Google Pay": true,
              "NFC mobile payments": true
            }
          }
        },
        "address": "No. 4, Kakkan St, above Senthil Stores, opposite to ABODE VALLEY, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11j8x399h_&g2lbs=ADZRdksrcHd-3Pn7CrnuFQ5R3VYgBR3ZlTT8nJx9_-LU8AJriZL2gtI6Ni9ZqCC4hU651Oo_1vDVpsAfPe4MmBz5DAB2q-Z7kKOTPlDqXHo1I91-swXNjJBwka7q9cnM99dwHiNe4yRu&hl=en-US&gl=us&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=gb8lZNPRC8Ou0PEPqrKHkAU&ei=gb8lZNPRC8Ou0PEPqrKHkAU&fo_s=OA%2CAH%2CSOE",
        "price_level": null,
        "district": "Potheri",
        "street_address": "No. 4, Kakkan St, above Senthil Stores, opposite to ABODE VALLEY",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7f8743164d9:0xd3b587c554ca39f7",
        "google_id": "0x3a52f7f8743164d9:0xd3b587c554ca39f7",
        "place_id": "ChIJ2WQxdPj3UjoR9znKVMWHtdM",
        "phone_number": "+917904983169",
        "name": "Mary Crown Fried chicken",
        "latitude": 12.8196733,
        "longitude": 80.03038699999999,
        "full_address": "Mary Crown Fried chicken, Vivekanandha Nagar, KONATHI VILLAGE MAIN Rd, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 40,
        "rating": 4.7,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "Open 24 hours"
          ],
          "Friday": [
            "Open 24 hours"
          ],
          "Saturday": [
            "Open 24 hours"
          ],
          "Sunday": [
            "7 AM–11:30 PM"
          ],
          "Monday": [
            "Open 24 hours"
          ],
          "Tuesday": [
            "Open 24 hours"
          ],
          "Wednesday": [
            "Open 24 hours"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7f8743164d9:0xd3b587c554ca39f7",
        "cid": "15255248594388269559",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ2WQxdPj3UjoR9znKVMWHtdM&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "117094548913529099105",
        "owner_link": "https://maps.google.com/maps/contrib/117094548913529099105",
        "owner_name": "Mary Crown Fried chicken",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Chicken restaurant",
        "subtypes": [
          "Chicken restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMbzagv9slcJJa_CBz37d4LQONfJoUDebAhmm2k",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMbzagv9slcJJa_CBz37d4LQONfJoUDebAhmm2k",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMbzagv9slcJJa_CBz37d4LQONfJoUDebAhmm2k=w1080-h1200-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.819688399999999,
            "longitude": 80.0305301,
            "type": "photo",
            "photo_datetime_utc": "2022-01-08T00:00:00.000Z",
            "photo_timestamp": 1641600000
          }
        ],
        "reviews_per_rating": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 33
        },
        "photo_count": 19,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Curbside pickup": true,
              "No-contact delivery": true,
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Offerings": {
              "Coffee": true,
              "Small plates": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            }
          }
        },
        "address": "Vivekanandha Nagar, KONATHI VILLAGE MAIN Rd, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "Vivekanandha Nagar, KONATHI VILLAGE MAIN Rd",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f70c282e6559:0x11d9ec7a694c9019",
        "google_id": "0x3a52f70c282e6559:0x11d9ec7a694c9019",
        "place_id": "ChIJWWUuKAz3UjoRGZBMaXrs2RE",
        "phone_number": "+919498035685",
        "name": "Restaurant The Seven Eleven",
        "latitude": 12.82893,
        "longitude": 80.04565099999999,
        "full_address": "Restaurant The Seven Eleven, Potheri, SRM Nagar, Thailavaram, Tamil Nadu 603203, India",
        "review_count": 112,
        "rating": 4.2,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "7 AM–11 PM"
          ],
          "Friday": [
            "7 AM–11 PM"
          ],
          "Saturday": [
            "7 AM–11 PM"
          ],
          "Sunday": [
            "7 AM–11 PM"
          ],
          "Monday": [
            "7 AM–11 PM"
          ],
          "Tuesday": [
            "7 AM–11 PM"
          ],
          "Wednesday": [
            "7 AM–11 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f70c282e6559:0x11d9ec7a694c9019",
        "cid": "1286319179087777817",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJWWUuKAz3UjoRGZBMaXrs2RE&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "101638759992540001241",
        "owner_link": "https://maps.google.com/maps/contrib/101638759992540001241",
        "owner_name": "Restaurant The Seven Eleven",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Restaurant",
        "subtypes": [
          "Restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPfQDkmbyj99b3UX4xIaKCrSU9EWknFSwFfUN8z",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPfQDkmbyj99b3UX4xIaKCrSU9EWknFSwFfUN8z",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPfQDkmbyj99b3UX4xIaKCrSU9EWknFSwFfUN8z=w4640-h3472-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.828896,
            "longitude": 80.04561850000002,
            "type": "photo",
            "photo_datetime_utc": "2022-03-18T00:00:00.000Z",
            "photo_timestamp": 1647561600
          }
        ],
        "reviews_per_rating": {
          "1": 4,
          "2": 6,
          "3": 19,
          "4": 22,
          "5": 61
        },
        "photo_count": 15,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Outdoor seating": true,
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Accessibility": {
              "Wheelchair accessible seating": false
            },
            "Offerings": {
              "All you can eat": true,
              "Coffee": true,
              "Small plates": true,
              "Vegan options": true,
              "Vegetarian options": true
            },
            "Dining options": {
              "Lunch": true,
              "Dinner": true,
              "Catering": true,
              "Seating": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            }
          }
        },
        "address": "Potheri, SRM Nagar, Thailavaram, Tamil Nadu 603203, India",
        "order_link": "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11dxlbkx7t&g2lbs=ADZRdksi8XapIw2OMJLx7hgzDtlHUakX8pXngbLo9IL9ntTspHCYTIelNJoA1iv_yawqMrBZxU2DV1ws90v7lNgGeih0jo1ffo-XtATEWASsc1WQF0OXw1u5zT7WdoZDbIXLMAuWqBtm&hl=en-US&gl=us&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=gb8lZNPRC8Ou0PEPqrKHkAU&ei=gb8lZNPRC8Ou0PEPqrKHkAU&fo_s=OA%2CAH%2CSOE",
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": null,
        "city": "Thailavaram",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7f8f1f7d9db:0x6183ddcfebd882e4",
        "google_id": "0x3a52f7f8f1f7d9db:0x6183ddcfebd882e4",
        "place_id": "ChIJ29n38fj3UjoR5ILY68_dg2E",
        "phone_number": "+919944933835",
        "name": "V BBQ 4 YOU",
        "latitude": 12.819779599999999,
        "longitude": 80.0380795,
        "full_address": "V BBQ 4 YOU, 18, Pillayar Koil St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 8,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "12–11:30 PM"
          ],
          "Friday": [
            "12–11:30 PM"
          ],
          "Saturday": [
            "12–11:30 PM"
          ],
          "Sunday": [
            "12–11:30 PM"
          ],
          "Monday": [
            "12–11:30 PM"
          ],
          "Tuesday": [
            "12–11:30 PM"
          ],
          "Wednesday": [
            "12–11:30 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7f8f1f7d9db:0x6183ddcfebd882e4",
        "cid": "7026703728712909540",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ29n38fj3UjoR5ILY68_dg2E&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "108737089535357639712",
        "owner_link": "https://maps.google.com/maps/contrib/108737089535357639712",
        "owner_name": "V BBQ 4 YOU",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Fast food restaurant",
        "subtypes": [
          "Fast food restaurant",
          "Shawarma restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipM0kbxUZqxfFRZSldJzlFJgz0NA_7z8N3Jll5qK",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipM0kbxUZqxfFRZSldJzlFJgz0NA_7z8N3Jll5qK",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipM0kbxUZqxfFRZSldJzlFJgz0NA_7z8N3Jll5qK=w2992-h4000-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8198241,
            "longitude": 80.0380933,
            "type": "photo",
            "photo_datetime_utc": "2021-09-22T00:00:00.000Z",
            "photo_timestamp": 1632268800
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 8
        },
        "photo_count": 15,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Dining options": {
              "Dinner": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            }
          }
        },
        "address": "18, Pillayar Koil St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11p047c53z&g2lbs=ADZRdksFwprogapbdK6Az5dowA9Fx8RRO3S_RXcu9Cr5PLux1sfNDMbJVX30h8NqOAn3LjJJD2SSOMlWjIrnZxRGhr_ijYTgxBDsKZzo5O2l3vqAUx7jg6dqVhpnOIDdP1cQBHyIyL7t&hl=en-US&gl=us&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=gb8lZNPRC8Ou0PEPqrKHkAU&ei=gb8lZNPRC8Ou0PEPqrKHkAU&fo_s=OA%2CAH%2CSOE",
        "price_level": null,
        "district": "Potheri",
        "street_address": "18, Pillayar Koil St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7d82ccaad0d:0x25874e9c5a95c0dd",
        "google_id": "0x3a52f7d82ccaad0d:0x25874e9c5a95c0dd",
        "place_id": "ChIJDa3KLNj3UjoR3cCVWpxOhyU",
        "phone_number": "+919626926923",
        "name": "Trivium Resto",
        "latitude": 12.817996899999999,
        "longitude": 80.03875049999999,
        "full_address": "Trivium Resto, Anna St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 14,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "11 AM–11:50 PM"
          ],
          "Friday": [
            "11 AM–11:50 PM"
          ],
          "Saturday": [
            "11 AM–11:50 PM"
          ],
          "Sunday": [
            "11 AM–11:50 PM"
          ],
          "Monday": [
            "11 AM–11:50 PM"
          ],
          "Tuesday": [
            "11 AM–11:50 PM"
          ],
          "Wednesday": [
            "11 AM–11:50 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7d82ccaad0d:0x25874e9c5a95c0dd",
        "cid": "2704216534700900573",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJDa3KLNj3UjoR3cCVWpxOhyU&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "104474109565555884263",
        "owner_link": "https://maps.google.com/maps/contrib/104474109565555884263",
        "owner_name": "Trivium Resto",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Fast food restaurant",
        "subtypes": [
          "Fast food restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNLHYW_KGIdYxuA8eKUrEVjWhxJ5BJ0s8PlTMoc",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNLHYW_KGIdYxuA8eKUrEVjWhxJ5BJ0s8PlTMoc",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNLHYW_KGIdYxuA8eKUrEVjWhxJ5BJ0s8PlTMoc=w4624-h2080-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.817880599999999,
            "longitude": 80.0388463,
            "type": "photo",
            "photo_datetime_utc": "2022-04-20T00:00:00.000Z",
            "photo_timestamp": 1650412800
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 14
        },
        "photo_count": 37,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Dining options": {
              "Lunch": true,
              "Dinner": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            },
            "Payments": {
              "NFC mobile payments": true
            }
          }
        },
        "address": "Anna St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "Anna St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f708c15382f5:0x9308618c229a6973",
        "google_id": "0x3a52f708c15382f5:0x9308618c229a6973",
        "place_id": "ChIJ9YJTwQj3UjoRc2maIoxhCJM",
        "phone_number": "+916381819870",
        "name": "Signal tod cafe",
        "latitude": 12.8327674,
        "longitude": 80.0489802,
        "full_address": "Signal tod cafe, omr food street, Guduvancheri, Tamil Nadu 603202, India",
        "review_count": 65,
        "rating": 3.9,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "11 AM–11 PM"
          ],
          "Friday": [
            "11 AM–11 PM"
          ],
          "Saturday": [
            "11 AM–11 PM"
          ],
          "Sunday": [
            "11 AM–11 PM"
          ],
          "Monday": [
            "11 AM–11 PM"
          ],
          "Tuesday": [
            "11 AM–11 PM"
          ],
          "Wednesday": [
            "11 AM–11 PM"
          ]
        },
        "website": "https://signal-tod-cafe.business.site",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f708c15382f5:0x9308618c229a6973",
        "cid": "10594825377892952435",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ9YJTwQj3UjoRc2maIoxhCJM&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "116034194792728108207",
        "owner_link": "https://maps.google.com/maps/contrib/116034194792728108207",
        "owner_name": "Signal tod cafe",
        "booking_link": "https://www.dineout.co.in/chennai/signal-tod-cafe-old-mahabalipuram-road-omr-south-west-chennai-110919",
        "reservations_link": "https://www.dineout.co.in/chennai/signal-tod-cafe-old-mahabalipuram-road-omr-south-west-chennai-110919",
        "business_status": "OPEN",
        "type": "Fast food restaurant",
        "subtypes": [
          "Fast food restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMWjK65YKOzw5DzYpvCF0uf4vJfcXz5lWdL-2PC",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMWjK65YKOzw5DzYpvCF0uf4vJfcXz5lWdL-2PC",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMWjK65YKOzw5DzYpvCF0uf4vJfcXz5lWdL-2PC=w750-h422-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8329007,
            "longitude": 80.0490442,
            "type": "photo",
            "photo_datetime_utc": "2019-08-17T00:00:00.000Z",
            "photo_timestamp": 1566000000
          }
        ],
        "reviews_per_rating": {
          "1": 7,
          "2": 1,
          "3": 12,
          "4": 18,
          "5": 27
        },
        "photo_count": 157,
        "about": {
          "summary": "Hip hangout with an understated ambiance offering international fast-food staples.",
          "details": {
            "Service options": {
              "No-contact delivery": true,
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Offerings": {
              "All you can eat": true,
              "Coffee": true,
              "Kids' menu": true,
              "Vegetarian options": true
            },
            "Dining options": {
              "Lunch": true,
              "Dinner": true,
              "Dessert": true,
              "Seating": true
            },
            "Amenities": {
              "Good for kids": true,
              "Restroom": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Family-friendly": true,
              "Groups": true
            },
            "Payments": {
              "Debit cards": true,
              "NFC mobile payments": true,
              "Credit cards": true
            }
          }
        },
        "address": "omr food street, Guduvancheri, Tamil Nadu 603202, India",
        "order_link": "https://www.google.com/maps/reserve/v/dine/c/rNt-41rxagI?source=pa&hl=en-US&gei=gb8lZNPRC8Ou0PEPqrKHkAU&sourceurl=https://www.google.com/search?tbm%3Dmap%26authuser%3D0%26hl%3Den%26gl%3Dus%26pb%3D!4m12!1m3!1d81048.19723723902!2d80.0444!3d12.823!2m3!1f0!2f0!3f0!3m2!1i1000!2i1000!4f13.1!7i20!10b1!12m10!1m1!18b1!2m3!5m1!6e2!20e3!10b1!16b1!17m1!3e1!19m4!2m3!1i360!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m6!1szT-iY4eaCM_hgAamjqzQDg!4m1!2i11886!7e81!12e5!18e15!24m74!1m24!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m13!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!22b0!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!11m1!3e1!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m4!1m2!3b1!5b1!4b1!89b1!26m4!2m3!1i80!2i92!4i8!27m4!2s12.823,%2B80.0444!4m2!3d12.823!4d80.0444!30m28!1m6!1m2!1i0!2i0!2m2!1i458!2i1000!1m6!1m2!1i1742!2i0!2m2!1i1000!2i1000!1m6!1m2!1i0!2i0!2m2!1i1000!2i20!1m6!1m2!1i0!2i673!2m2!1i1000!2i1000!34m18!2b1!3b1!4b1!6b1!8m6!1b1!3b1!4b1!5b1!6b1!7b1!9b1!12b1!14b1!20b1!23b1!25b1!26b1!37m1!1e81!42b1!47m0!49m5!3b1!6m1!1b1!7m1!1e3!50m4!2e2!3m2!1b1!3b1!61b1!67m2!7b1!10b1!69i629%26q%3Dfood",
        "price_level": null,
        "district": null,
        "street_address": "omr food street",
        "city": "Guduvancheri",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f75a5ca18f21:0x2109a420e48c73e4",
        "google_id": "0x3a52f75a5ca18f21:0x2109a420e48c73e4",
        "place_id": "ChIJIY-hXFr3UjoR5HOM5CCkCSE",
        "phone_number": "+919003456950",
        "name": "Viegas Foods",
        "latitude": 12.8299639,
        "longitude": 80.0469425,
        "full_address": "Viegas Foods, 8a, aadhiparashathi nager, thailavaramaram, Potheri, Chennai, Tamil Nadu 603203, India",
        "review_count": 3,
        "rating": 4.7,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://zoma.to/order/19429472",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f75a5ca18f21:0x2109a420e48c73e4",
        "cid": "2380614339222336484",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJIY-hXFr3UjoR5HOM5CCkCSE&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "106910249332303225572",
        "owner_link": "https://maps.google.com/maps/contrib/106910249332303225572",
        "owner_name": "Viegas Foods",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Fried chicken takeaway",
        "subtypes": [
          "Fried chicken takeaway"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPq__NLTJwSLsQu1cNSAqGVvpFIyFcsWBh3S0OW",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPq__NLTJwSLsQu1cNSAqGVvpFIyFcsWBh3S0OW",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPq__NLTJwSLsQu1cNSAqGVvpFIyFcsWBh3S0OW=w2136-h3642-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.829891499999999,
            "longitude": 80.0469275,
            "type": "photo",
            "photo_datetime_utc": "2022-11-17T00:00:00.000Z",
            "photo_timestamp": 1668643200
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 1,
          "5": 2
        },
        "photo_count": 7,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Curbside pickup": true,
              "No-contact delivery": true,
              "Delivery": true,
              "Drive-through": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Offerings": {
              "Small plates": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            }
          }
        },
        "address": "8a, aadhiparashathi nager, thailavaramaram, Potheri, Chennai, Tamil Nadu 603203, India",
        "order_link": "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11s2n3qv3q&g2lbs=ADZRdkvfOxFWxByLWhsuso14IFJM1GMYQdVsAznu2ltDvQD_yjqjl7DsoLNVvEIBymhP_YZ78pUoCESu4h9blMa1hNNQzfX38B40_7JvHzjBJI8i3iT2OkL9OePiQbTFAhYRJFQ_WtWn&hl=en-US&gl=us&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=gb8lZNPRC8Ou0PEPqrKHkAU&ei=gb8lZNPRC8Ou0PEPqrKHkAU&fo_s=OA%2CAH%2CSOE",
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "8a, aadhiparashathi nager, thailavaramaram",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f75cbcb553e9:0x1f537f32fd831c3f",
        "google_id": "0x3a52f75cbcb553e9:0x1f537f32fd831c3f",
        "place_id": "ChIJ6VO1vFz3UjoRPxyD_TJ_Ux8",
        "phone_number": "+919000155234",
        "name": "NAIDU'S FOOD COURT",
        "latitude": 12.828479699999999,
        "longitude": 80.04428519999999,
        "full_address": "NAIDU'S FOOD COURT, 61A Samundeswari Nagar, Thailavaram, Potheri, Chennai, Tamil Nadu 603203, India",
        "review_count": 47,
        "rating": 4.7,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f75cbcb553e9:0x1f537f32fd831c3f",
        "cid": "2257287695221070911",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ6VO1vFz3UjoRPxyD_TJ_Ux8&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "111518170171688778899",
        "owner_link": "https://maps.google.com/maps/contrib/111518170171688778899",
        "owner_name": "NAIDU'S FOOD COURT",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Restaurant",
        "subtypes": [
          "Restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMt4RQDHVJrwa_aeBhv8kCpKFI1bXYbeL0e0UCw",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMt4RQDHVJrwa_aeBhv8kCpKFI1bXYbeL0e0UCw",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMt4RQDHVJrwa_aeBhv8kCpKFI1bXYbeL0e0UCw=w4000-h1824-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.828530599999999,
            "longitude": 80.04423330000002,
            "type": "photo",
            "photo_datetime_utc": "2023-01-12T00:00:00.000Z",
            "photo_timestamp": 1673481600
          }
        ],
        "reviews_per_rating": {
          "1": 3,
          "2": 0,
          "3": 1,
          "4": 2,
          "5": 41
        },
        "photo_count": 8,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Offerings": {
              "Small plates": true
            },
            "Dining options": {
              "Lunch": true,
              "Dinner": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            },
            "Payments": {
              "NFC mobile payments": true
            }
          }
        },
        "address": "61A Samundeswari Nagar, Thailavaram, Potheri, Chennai, Tamil Nadu 603203, India",
        "order_link": "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11q42g_mtg&g2lbs=ADZRdksa0nxmRQ54wjjDO_4mVPrvWRmDuKAQ8VW8b5awZEVIMcA7nq8bYDI7OzPH2NVVx6TPvN7yfqh11zxqLXmsj7aBlFmXRtlBxEKReTNcE4YlDD7_YEdFLaQnOkuPDhtaCdbEYGhe&hl=en-US&gl=us&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=gb8lZNPRC8Ou0PEPqrKHkAU&ei=gb8lZNPRC8Ou0PEPqrKHkAU&fo_s=OA%2CAH%2CSOE",
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "61A Samundeswari Nagar, Thailavaram",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f70d2cfa4b99:0x20ac4fea8eb7213e",
        "google_id": "0x3a52f70d2cfa4b99:0x20ac4fea8eb7213e",
        "place_id": "ChIJmUv6LA33UjoRPiG3jupPrCA",
        "phone_number": "+919360071777",
        "name": "Subway",
        "latitude": 12.8234026,
        "longitude": 80.044614,
        "full_address": "Subway, Food Court, Campus 2, SRM University, Dr Radhakrishnan Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 582,
        "rating": 4,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10 AM–8:30 PM"
          ],
          "Friday": [
            "10 AM–8:30 PM"
          ],
          "Saturday": [
            "10 AM–8:30 PM"
          ],
          "Sunday": [
            "10 AM–8:30 PM"
          ],
          "Monday": [
            "10 AM–8:30 PM"
          ],
          "Tuesday": [
            "10 AM–8:30 PM"
          ],
          "Wednesday": [
            "10 AM–8:30 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f70d2cfa4b99:0x20ac4fea8eb7213e",
        "cid": "2354344574043234622",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJmUv6LA33UjoRPiG3jupPrCA&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "115675936291809651330",
        "owner_link": "https://maps.google.com/maps/contrib/115675936291809651330",
        "owner_name": "Subway",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Fast food restaurant",
        "subtypes": [
          "Fast food restaurant",
          "American restaurant",
          "Breakfast restaurant",
          "Takeout Restaurant",
          "Sandwich shop"
        ],
        "photos_sample": [
          {
            "photo_id": "http://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/k/j/p15-1493890395590af55ba33c9.jpg",
            "photo_url": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwkr0c4pA8nKOL8LefBvARJQ64nPV0wlt31mLzJp8TQh0ij4PeRGJu_dnqIV1OTu9qqHOkkdai0r7ahoi1Z_hXFUvXC9dKA1KCI6yr-6qwAGJ0LH-GeOBe9dRP3GyqXNR0xOqIfLw8-SaiFz7Qt8S1XqLwyCItK5EVtCvJuA0k8VHHeA9aEn7vne1Q",
            "photo_url_large": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwkr0c4pA8nKOL8LefBvARJQ64nPV0wlt31mLzJp8TQh0ij4PeRGJu_dnqIV1OTu9qqHOkkdai0r7ahoi1Z_hXFUvXC9dKA1KCI6yr-6qwAGJ0LH-GeOBe9dRP3GyqXNR0xOqIfLw8-SaiFz7Qt8S1XqLwyCItK5EVtCvJuA0k8VHHeA9aEn7vne1Q=w640-h480-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.823403299999999,
            "longitude": 80.04456619999999,
            "type": "photo",
            "photo_datetime_utc": "2021-10-28T00:00:00.000Z",
            "photo_timestamp": 1635379200
          }
        ],
        "reviews_per_rating": {
          "1": 30,
          "2": 18,
          "3": 87,
          "4": 213,
          "5": 234
        },
        "photo_count": 112,
        "about": {
          "summary": "Casual counter-serve chain for build-your-own sandwiches & salads, with health-conscious options.",
          "details": {
            "Service options": {
              "Curbside pickup": true,
              "No-contact delivery": true,
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Highlights": {
              "Fast service": true
            },
            "Accessibility": {
              "Wheelchair accessible entrance": true,
              "Wheelchair accessible parking lot": false,
              "Wheelchair accessible restroom": false,
              "Wheelchair accessible seating": false
            },
            "Offerings": {
              "Halal food": true,
              "Healthy options": true,
              "Quick bite": true,
              "Salad bar": true,
              "Vegetarian options": true
            },
            "Dining options": {
              "Breakfast": true,
              "Lunch": true,
              "Dinner": true,
              "Counter service": true,
              "Dessert": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Family-friendly": true,
              "Groups": true,
              "LGBTQ+ friendly": true
            },
            "Payments": {
              "Debit cards": true,
              "NFC mobile payments": true
            }
          }
        },
        "address": "Food Court, Campus 2, SRM University, Dr Radhakrishnan Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F1s04gsmq2&g2lbs=ADZRdkulVtyUqjDhqS_GJXdKmb3wAaJcjNfbxcclHwiAmmEbDskHI7e4j7TjLR3VdOKgDEGwGZaEsrueWFKTgQm4RWRaTUgA0-9cFWI6OSFZGbeIaNWlRvoV4QdSsLUbBJ6uEa-CcC1K&hl=en-US&gl=us&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=gb8lZNPRC8Ou0PEPqrKHkAU&ei=gb8lZNPRC8Ou0PEPqrKHkAU&fo_s=OA%2CAH%2CSOE",
        "price_level": "$$",
        "district": "Potheri, SRM Nagar",
        "street_address": "Food Court, Campus 2, SRM University, Dr Radhakrishnan Rd",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f760df44fae7:0x2e35d883c3453a9d",
        "google_id": "0x3a52f760df44fae7:0x2e35d883c3453a9d",
        "place_id": "ChIJ5_pE32D3UjoRnTpFw4PYNS4",
        "phone_number": "+916380654218",
        "name": "S A FOODS",
        "latitude": 12.8313983,
        "longitude": 80.054611,
        "full_address": "S A FOODS, No 75, Anna salai, Guduvancheri, Tamil Nadu 600056, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f760df44fae7:0x2e35d883c3453a9d",
        "cid": "3329805559938759325",
        "reviews_link": null,
        "owner_id": "108339625741213678498",
        "owner_link": "https://maps.google.com/maps/contrib/108339625741213678498",
        "owner_name": "S A FOODS",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Fast food restaurant",
        "subtypes": [
          "Fast food restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "qYgIfp6Amak5gorSWInG6w",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=qYgIfp6Amak5gorSWInG6w&cb_client=search.gws-prod.gps&w=86&h=86&yaw=6.037217&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.831339572044678,
            "longitude": 80.05460462979445,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 1,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Takeout": true,
              "Dine-in": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            }
          }
        },
        "address": "No 75, Anna salai, Guduvancheri, Tamil Nadu 600056, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "No 75, Anna salai",
        "city": "Guduvancheri",
        "zipcode": "600056",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f772d4849f23:0xa9364ba790c4a56d",
        "google_id": "0x3a52f772d4849f23:0xa9364ba790c4a56d",
        "place_id": "ChIJI5-E1HL3UjoRbaXEkKdLNqk",
        "phone_number": null,
        "name": "Sunny Days - SRM University Food Court",
        "latitude": 12.823105,
        "longitude": 80.04478399999999,
        "full_address": "Sunny Days - SRM University Food Court, SRM University, Food Court, Dr Radhakrishnan Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 57,
        "rating": 3.9,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "9:30 AM–9 PM"
          ],
          "Friday": [
            "9:30 AM–9 PM"
          ],
          "Saturday": [
            "9:30 AM–9 PM"
          ],
          "Sunday": [
            "10 AM–9 PM"
          ],
          "Monday": [
            "9:30 AM–9 PM"
          ],
          "Tuesday": [
            "9:30 AM–9 PM"
          ],
          "Wednesday": [
            "9:30 AM–9 PM"
          ]
        },
        "website": "http://sunnydays.business.site",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f772d4849f23:0xa9364ba790c4a56d",
        "cid": "12193016224212624749",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJI5-E1HL3UjoRbaXEkKdLNqk&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "112531709768828706376",
        "owner_link": "https://maps.google.com/maps/contrib/112531709768828706376",
        "owner_name": "Sunny Days - SRM University Food Court",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Fast food restaurant",
        "subtypes": [
          "Fast food restaurant",
          "Bistro",
          "Cafe",
          "Hot dog stand",
          "Ice cream shop",
          "Pasta shop"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOZjIFWHJBUuZE_4I_HfFI2dUIoymYtfOQ0Uvb6",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOZjIFWHJBUuZE_4I_HfFI2dUIoymYtfOQ0Uvb6",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOZjIFWHJBUuZE_4I_HfFI2dUIoymYtfOQ0Uvb6=w2048-h1152-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.823291039228724,
            "longitude": 80.04470030543385,
            "type": "photo",
            "photo_datetime_utc": "2018-10-12T00:00:00.000Z",
            "photo_timestamp": 1539302400
          }
        ],
        "reviews_per_rating": {
          "1": 2,
          "2": 3,
          "3": 13,
          "4": 21,
          "5": 18
        },
        "photo_count": 71,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Takeout": true,
              "Dine-in": true
            },
            "Offerings": {
              "Coffee": true
            },
            "Dining options": {
              "Dessert": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            },
            "Payments": {
              "Debit cards": true,
              "NFC mobile payments": true
            }
          }
        },
        "address": "SRM University, Food Court, Dr Radhakrishnan Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": "$$",
        "district": "Potheri, SRM Nagar",
        "street_address": "SRM University, Food Court, Dr Radhakrishnan Rd",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7088de962dd:0x105518ebdcdfcc55",
        "google_id": "0x3a52f7088de962dd:0x105518ebdcdfcc55",
        "place_id": "ChIJ3WLpjQj3UjoRVczf3OsYVRA",
        "phone_number": null,
        "name": "Food Park",
        "latitude": 12.833675699999999,
        "longitude": 80.0501075,
        "full_address": "R3M2+F2H Food Park, Munusamy Mudaliar Rd, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7088de962dd:0x105518ebdcdfcc55",
        "cid": "1176874278929288277",
        "reviews_link": null,
        "owner_id": "114378005330298837973",
        "owner_link": "https://maps.google.com/maps/contrib/114378005330298837973",
        "owner_name": "Food Park",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Restaurant",
        "subtypes": [
          "Restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "goINIdCzVKNYEi3apBs3hg",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=goINIdCzVKNYEi3apBs3hg&cb_client=search.gws-prod.gps&w=86&h=86&yaw=124.73327&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.833736914826696,
            "longitude": 80.05001694190764,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 1,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Takeout": true,
              "Dine-in": true
            },
            "Offerings": {
              "Small plates": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            }
          }
        },
        "address": "R3M2+F2H, Munusamy Mudaliar Rd, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "R3M2+F2H, Munusamy Mudaliar Rd",
        "city": null,
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f76c8a32980d:0xef06b3aa1ce125c9",
        "google_id": "0x3a52f76c8a32980d:0xef06b3aa1ce125c9",
        "place_id": "ChIJDZgyimz3UjoRySXhHKqzBu8",
        "phone_number": "+917695959239",
        "name": "Foodie sandwich",
        "latitude": 12.8198673,
        "longitude": 80.040408,
        "full_address": "Foodie sandwich, No 14, Pillaiyar Kovil Street, Pillayar West Kattankolathur, Potheri, Chennai, Tamil Nadu 603203, India",
        "review_count": 56,
        "rating": 4.3,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10 AM–10 PM"
          ],
          "Friday": [
            "10 AM–10 PM"
          ],
          "Saturday": [
            "10 AM–10 PM"
          ],
          "Sunday": [
            "10 AM–10 PM"
          ],
          "Monday": [
            "10 AM–10 PM"
          ],
          "Tuesday": [
            "10 AM–10 PM"
          ],
          "Wednesday": [
            "10 AM–10 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76c8a32980d:0xef06b3aa1ce125c9",
        "cid": "17223651368135370185",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJDZgyimz3UjoRySXhHKqzBu8&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "107508647813492435397",
        "owner_link": "https://maps.google.com/maps/contrib/107508647813492435397",
        "owner_name": "Foodie sandwich",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Sandwich shop",
        "subtypes": [
          "Sandwich shop",
          "Fast food restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMt4xNEb2DNbgTlY3dByNcu2cnLxrY8A3A1t0oZ",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMt4xNEb2DNbgTlY3dByNcu2cnLxrY8A3A1t0oZ",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMt4xNEb2DNbgTlY3dByNcu2cnLxrY8A3A1t0oZ=w4160-h3120-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8197993,
            "longitude": 80.0404806,
            "type": "photo",
            "photo_datetime_utc": "2017-09-23T00:00:00.000Z",
            "photo_timestamp": 1506124800
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 4,
          "3": 5,
          "4": 18,
          "5": 29
        },
        "photo_count": 11,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Accessibility": {
              "Wheelchair accessible entrance": false,
              "Wheelchair accessible parking lot": false,
              "Wheelchair accessible restroom": false,
              "Wheelchair accessible seating": false
            },
            "Offerings": {
              "Quick bite": true,
              "Small plates": true,
              "Vegetarian options": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            }
          }
        },
        "address": "No 14, Pillaiyar Kovil Street, Pillayar West Kattankolathur, Potheri, Chennai, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": "$$",
        "district": "Potheri",
        "street_address": "No 14, Pillaiyar Kovil Street, Pillayar West Kattankolathur, Potheri",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f776401894f9:0x2e9ed73ec2dfa592",
        "google_id": "0x3a52f776401894f9:0x2e9ed73ec2dfa592",
        "place_id": "ChIJ-ZQYQHb3UjoRkqXfwj7Xni4",
        "phone_number": "+917200362611",
        "name": "ANI FOODS",
        "latitude": 12.8172806,
        "longitude": 80.0403267,
        "full_address": "ANI FOODS, Potheri, Kakkan St, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f776401894f9:0x2e9ed73ec2dfa592",
        "cid": "3359359036622349714",
        "reviews_link": null,
        "owner_id": "103466496175296371796",
        "owner_link": "https://maps.google.com/maps/contrib/103466496175296371796",
        "owner_name": "ANI FOODS",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Restaurant",
        "subtypes": [
          "Restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMstC0kUfGOhiSlEoZmjEs-fq5JLYKSmbIT49iB",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMstC0kUfGOhiSlEoZmjEs-fq5JLYKSmbIT49iB",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMstC0kUfGOhiSlEoZmjEs-fq5JLYKSmbIT49iB=w1024-h768-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8173181,
            "longitude": 80.0403372,
            "type": "photo",
            "photo_datetime_utc": "2023-03-10T00:00:00.000Z",
            "photo_timestamp": 1678406400
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 3,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "Potheri, Kakkan St, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "Potheri, Kakkan St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f772f0b80689:0x21f2b79c258b41e1",
        "google_id": "0x3a52f772f0b80689:0x21f2b79c258b41e1",
        "place_id": "ChIJiQa48HL3UjoR4UGLJZy38iE",
        "phone_number": "+919884359618",
        "name": "SOLAI FOOD",
        "latitude": 12.8178545,
        "longitude": 80.0391466,
        "full_address": "SOLAI FOOD, No 3, Kakkan St, Potheri, Kanchipuram, Tamil Nadu 603102, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "12–3:30 PM",
            "6:30–10:30 PM"
          ],
          "Friday": [
            "12–3:30 PM",
            "6:30–10:30 PM"
          ],
          "Saturday": [
            "12–3:30 PM",
            "6:30–10:30 PM"
          ],
          "Sunday": [
            "12–3:30 PM",
            "6:30–10:30 PM"
          ],
          "Monday": [
            "12–3:30 PM",
            "6:30–10:30 PM"
          ],
          "Tuesday": [
            "12–3:30 PM",
            "6:30–10:30 PM"
          ],
          "Wednesday": [
            "12–3:30 PM",
            "6:30–10:30 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f772f0b80689:0x21f2b79c258b41e1",
        "cid": "2446219428888265185",
        "reviews_link": null,
        "owner_id": "103744868468881198670",
        "owner_link": "https://maps.google.com/maps/contrib/103744868468881198670",
        "owner_name": "SOLAI FOOD",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Restaurant",
        "subtypes": [
          "Restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNT6-LuB38fGjA47Ws8BCKgkIR_OuxlBXFYIqKe",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNT6-LuB38fGjA47Ws8BCKgkIR_OuxlBXFYIqKe",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNT6-LuB38fGjA47Ws8BCKgkIR_OuxlBXFYIqKe=w868-h1156-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8178071,
            "longitude": 80.0391264,
            "type": "photo",
            "photo_datetime_utc": "2023-03-03T00:00:00.000Z",
            "photo_timestamp": 1677801600
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 4,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Takeout": true,
              "Dine-in": true
            },
            "Offerings": {
              "Small plates": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            }
          }
        },
        "address": "No 3, Kakkan St, Potheri, Kanchipuram, Tamil Nadu 603102, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "No 3, Kakkan St",
        "city": "Kanchipuram",
        "zipcode": "603102",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f76d949b9c89:0x2cf25c72de9fe082",
        "google_id": "0x3a52f76d949b9c89:0x2cf25c72de9fe082",
        "place_id": "ChIJiZyblG33UjoRguCf3nJc8iw",
        "phone_number": "+919003249214",
        "name": "Tibetan Cafe",
        "latitude": 12.8189649,
        "longitude": 80.0408947,
        "full_address": "R29R+H9J Tibetan Cafe, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 177,
        "rating": 4.3,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "12–9 PM"
          ],
          "Friday": [
            "12–9 PM"
          ],
          "Saturday": [
            "12–9 PM"
          ],
          "Sunday": [
            "12–9 PM"
          ],
          "Monday": [
            "12–9 PM"
          ],
          "Tuesday": [
            "12–9 PM"
          ],
          "Wednesday": [
            "12–9 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76d949b9c89:0x2cf25c72de9fe082",
        "cid": "3238752730463854722",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJiZyblG33UjoRguCf3nJc8iw&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "109156555013269354531",
        "owner_link": "https://maps.google.com/maps/contrib/109156555013269354531",
        "owner_name": "Tibetan Cafe",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Fast food restaurant",
        "subtypes": [
          "Fast food restaurant",
          "Cafe",
          "Tibetan restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipO7gNKKN7qfos6UrKmHENR2pn5f-EMHjbeofVFP",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipO7gNKKN7qfos6UrKmHENR2pn5f-EMHjbeofVFP",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipO7gNKKN7qfos6UrKmHENR2pn5f-EMHjbeofVFP=w3472-h3472-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8189824,
            "longitude": 80.0408984,
            "type": "photo",
            "photo_datetime_utc": "2023-03-11T00:00:00.000Z",
            "photo_timestamp": 1678492800
          }
        ],
        "reviews_per_rating": {
          "1": 3,
          "2": 3,
          "3": 26,
          "4": 46,
          "5": 99
        },
        "photo_count": 27,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Accessibility": {
              "Wheelchair accessible entrance": false,
              "Wheelchair accessible parking lot": false
            },
            "Dining options": {
              "Dinner": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            }
          }
        },
        "address": "R29R+H9J, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11c5s3w16b&g2lbs=ADZRdktL8kWpNJfU6zBv-_yPHVfTP5yafs8V9OWQQniLh0VG-W7fatCHt-Wac5DNpt730StdDNZj-AKULtyANOf2q34jkgDJNlsOlygy-ecsXDnqY5_LssB0ynckigh-FIcTiqAox5g6&hl=en-US&gl=us&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=gb8lZNPRC8Ou0PEPqrKHkAU&ei=gb8lZNPRC8Ou0PEPqrKHkAU&fo_s=OA%2CAH%2CSOE",
        "price_level": null,
        "district": "Potheri",
        "street_address": "R29R+H9J",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f76da5a6e85b:0xf5af45d0cdf33aff",
        "google_id": "0x3a52f76da5a6e85b:0xf5af45d0cdf33aff",
        "place_id": "ChIJW-impW33UjoR_zrzzdBFr_U",
        "phone_number": null,
        "name": "Delhi 6",
        "latitude": 12.8199195,
        "longitude": 80.0406454,
        "full_address": "Delhi 6, Perumal Koil St, Near Aerospace Hanger, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 280,
        "rating": 3.7,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10 AM–10 PM"
          ],
          "Friday": [
            "10 AM–10 PM"
          ],
          "Saturday": [
            "10 AM–10 PM"
          ],
          "Sunday": [
            "10 AM–10 PM"
          ],
          "Monday": [
            "10 AM–10 PM"
          ],
          "Tuesday": [
            "10 AM–10 PM"
          ],
          "Wednesday": [
            "10 AM–10 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76da5a6e85b:0xf5af45d0cdf33aff",
        "cid": "17703445423327492863",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJW-impW33UjoR_zrzzdBFr_U&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "101390723928295164193",
        "owner_link": "https://maps.google.com/maps/contrib/101390723928295164193",
        "owner_name": "Delhi 6",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Fast food restaurant",
        "subtypes": [
          "Fast food restaurant",
          "Indian restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPYM6hu0vgLM3TiFd_HDv13_-F4hiPfzhqAujAn",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPYM6hu0vgLM3TiFd_HDv13_-F4hiPfzhqAujAn",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPYM6hu0vgLM3TiFd_HDv13_-F4hiPfzhqAujAn=w3000-h4000-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8199192,
            "longitude": 80.0406453,
            "type": "photo",
            "photo_datetime_utc": "2018-09-06T00:00:00.000Z",
            "photo_timestamp": 1536192000
          }
        ],
        "reviews_per_rating": {
          "1": 23,
          "2": 20,
          "3": 60,
          "4": 91,
          "5": 86
        },
        "photo_count": 55,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "Takeout": true,
              "Dine-in": true
            },
            "Highlights": {
              "Fast service": true
            },
            "Accessibility": {
              "Wheelchair accessible entrance": false,
              "Wheelchair accessible parking lot": false,
              "Wheelchair accessible restroom": false,
              "Wheelchair accessible seating": false
            },
            "Offerings": {
              "Quick bite": true,
              "Vegetarian options": true
            },
            "Dining options": {
              "Breakfast": true,
              "Lunch": true,
              "Dinner": true,
              "Catering": true,
              "Dessert": true,
              "Seating": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            },
            "Payments": {
              "Debit cards": true,
              "NFC mobile payments": true,
              "Credit cards": true
            }
          }
        },
        "address": "Perumal Koil St, Near Aerospace Hanger, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F124ynrwyw&g2lbs=ADZRdkvPJnkAiXQhPVAlSqtItqOq5j7PE-oMZafLluaAU8qk1tumCnJIWw2QMqWvnqCw0KjsFwrlt41VFHQHxZ4OEamZQfQ5ZcLywJiBG5FRF9cuLz06o7htODfYq6UAxATkS-w8ubtc&hl=en-US&gl=us&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=gb8lZNPRC8Ou0PEPqrKHkAU&ei=gb8lZNPRC8Ou0PEPqrKHkAU&fo_s=OA%2CAH%2CSOE",
        "price_level": null,
        "district": "Potheri",
        "street_address": "Perumal Koil St, Near Aerospace Hanger",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f78f8c8a5de7:0xc27a607ba2148118",
        "google_id": "0x3a52f78f8c8a5de7:0xc27a607ba2148118",
        "place_id": "ChIJ512KjI_3UjoRGIEUontgesI",
        "phone_number": null,
        "name": "STREET CHAAT",
        "latitude": 12.8333408,
        "longitude": 80.0488352,
        "full_address": "STREET CHAAT, GST FOOD STREET , No : C7A GST ROAD , THAILAVARAM, Guduvancheri, India",
        "review_count": 1,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "4–10 PM"
          ],
          "Friday": [
            "4–10 PM"
          ],
          "Saturday": [
            "4–10 PM"
          ],
          "Sunday": [
            "4–10 PM"
          ],
          "Monday": [
            "4–10 PM"
          ],
          "Tuesday": [
            "4–10 PM"
          ],
          "Wednesday": [
            "4–10 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f78f8c8a5de7:0xc27a607ba2148118",
        "cid": "14013619274633216280",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ512KjI_3UjoRGIEUontgesI&q=food&authuser=0&hl=en&gl=US",
        "owner_id": "115623182723550264084",
        "owner_link": "https://maps.google.com/maps/contrib/115623182723550264084",
        "owner_name": "STREET CHAAT",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Fast food restaurant",
        "subtypes": [
          "Fast food restaurant"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipM_H1tEC--d0k83zX9TyM6QQ8OdXFI5nqFv5ari",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipM_H1tEC--d0k83zX9TyM6QQ8OdXFI5nqFv5ari",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipM_H1tEC--d0k83zX9TyM6QQ8OdXFI5nqFv5ari=w4640-h3472-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8333722,
            "longitude": 80.0488026,
            "type": "photo",
            "photo_datetime_utc": "2023-02-02T00:00:00.000Z",
            "photo_timestamp": 1675296000
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 1
        },
        "photo_count": 3,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Takeout": true,
              "Dine-in": true
            },
            "Amenities": {
              "Good for kids": true
            },
            "Atmosphere": {
              "Casual": true
            },
            "Crowd": {
              "Groups": true
            }
          }
        },
        "address": "GST FOOD STREET , No : C7A GST ROAD , THAILAVARAM, Guduvancheri, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "GST FOOD STREET , No : C7A GST ROAD , THAILAVARAM",
        "city": "Guduvancheri",
        "zipcode": null,
        "state": "Tamil Nadu",
        "country": "IN"
      }
    ]
  }

  const [places, setPlaces] = useState(res.data)
  console.log(places)

  useEffect(() => {
    // getPlacesData
    //   .then((data) => {
    //     setPlaces(data.results);
    //   })
  }, [])

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
          places.map((place, i) => {
            return (
              <Card key={i} name={place.name} address={place.full_address} photos={place.photos_sample} rating={place.rating} noOfRatings={place.user_ratings_total} reference={Array.isArray(place.photos) ? place.photos[0].photo_reference : ''} tags={place.types} />
            )
          })
        }

      </div>
    </div>
  )
}

export default Food