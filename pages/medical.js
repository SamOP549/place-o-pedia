import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Medical = () => {
  const res = {
    "status": "OK",
    "request_id": "5da13142-3abc-4661-9c3b-5c59e921f9de",
    "parameters": {
      "query": "medical",
      "language": "en",
      "region": "us",
      "lat": 12.823,
      "lng": 80.0444,
      "limit": 20
    },
    "data": [
      {
        "business_id": "0x3a52f77473ee65f3:0xdcbde78bb43bb57f",
        "google_id": "0x3a52f77473ee65f3:0xdcbde78bb43bb57f",
        "place_id": "ChIJ82Xuc3T3UjoRf7U7tIvnvdw",
        "phone_number": "+917010886074",
        "name": "AAN Healthcare Clinic",
        "latitude": 12.835128599999999,
        "longitude": 80.05502969999999,
        "full_address": "AAN Healthcare Clinic, 54, Shivaji Nagar, Vallanchery Main Rd, Chennai, Tamil Nadu 603202, India",
        "review_count": 2,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "7–10 PM"
          ],
          "Friday": [
            "7–10 PM"
          ],
          "Saturday": [
            "7–10 PM"
          ],
          "Sunday": [
            "7–10 PM"
          ],
          "Monday": [
            "7–10 PM"
          ],
          "Tuesday": [
            "7–10 PM"
          ],
          "Wednesday": [
            "7–10 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f77473ee65f3:0xdcbde78bb43bb57f",
        "cid": "15906124046152742271",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ82Xuc3T3UjoRf7U7tIvnvdw&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "103608046436753674016",
        "owner_link": "https://maps.google.com/maps/contrib/103608046436753674016",
        "owner_name": "AAN Healthcare Clinic",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical clinic",
        "subtypes": [
          "Medical clinic"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMapTw7KbhN_5SlJwEin0tlXGXhWKYxoZpiO0C3",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMapTw7KbhN_5SlJwEin0tlXGXhWKYxoZpiO0C3",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMapTw7KbhN_5SlJwEin0tlXGXhWKYxoZpiO0C3=w1920-h1080-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.835111099999999,
            "longitude": 80.0551258,
            "type": "photo",
            "photo_datetime_utc": "2022-12-15T00:00:00.000Z",
            "photo_timestamp": 1671062400
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 2
        },
        "photo_count": 9,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Restroom": true
            },
            "Crowd": {
              "LGBTQ+ friendly": true
            },
            "Planning": {
              "Tests limited to certain patients": false,
              "Appointment required for Covid Test": false,
              "Referral required": false
            },
            "Payments": {
              "Google Pay": true
            }
          }
        },
        "address": "54, Shivaji Nagar, Vallanchery Main Rd, Chennai, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "54, Shivaji Nagar, Vallanchery Main Rd",
        "city": "Chennai",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7b42e5a4799:0x422818ea1dc28e4c",
        "google_id": "0x3a52f7b42e5a4799:0x422818ea1dc28e4c",
        "place_id": "ChIJmUdaLrT3UjoRTI7CHeoYKEI",
        "phone_number": null,
        "name": "Medical Shop",
        "latitude": 12.819994999999999,
        "longitude": 80.0312792,
        "full_address": "Medical Shop, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 4,
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
            "Closed"
          ],
          "Monday": [
            "10 AM–6 PM"
          ],
          "Tuesday": [
            "Open 24 hours"
          ],
          "Wednesday": [
            "Open 24 hours"
          ]
        },
        "website": "https://medicalsupplystorem.business.site",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7b42e5a4799:0x422818ea1dc28e4c",
        "cid": "4767087599372373580",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJmUdaLrT3UjoRTI7CHeoYKEI&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "117082532630426000263",
        "owner_link": "https://maps.google.com/maps/contrib/117082532630426000263",
        "owner_name": "Medical Shop",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical supply store",
        "subtypes": [
          "Medical supply store"
        ],
        "photos_sample": [
          {
            "photo_id": "_CTGopcY6HZW0r6mUGlf2w",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_CTGopcY6HZW0r6mUGlf2w&cb_client=search.gws-prod.gps&w=86&h=86&yaw=152.4202&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.820141682642872,
            "longitude": 80.03120062319316,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 1,
          "5": 0
        },
        "photo_count": 1,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "Same-day delivery": true
            }
          }
        },
        "address": "Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": null,
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7302c72f90f:0xa3e975d3b0af04b1",
        "google_id": "0x3a52f7302c72f90f:0xa3e975d3b0af04b1",
        "place_id": "ChIJD_lyLDD3UjoRsQSvsNN16aM",
        "phone_number": "+919840785516",
        "name": "Sakthi Medical",
        "latitude": 12.8183248,
        "longitude": 80.0391089,
        "full_address": "Sakthi Medical, Perumal Koil St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 3,
        "rating": 3.7,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "9 AM–11:30 PM"
          ],
          "Friday": [
            "9 AM–11:30 PM"
          ],
          "Saturday": [
            "9 AM–11:30 PM"
          ],
          "Sunday": [
            "9 AM–11:30 PM"
          ],
          "Monday": [
            "9 AM–11:30 PM"
          ],
          "Tuesday": [
            "9 AM–11:30 PM"
          ],
          "Wednesday": [
            "9 AM–11:30 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7302c72f90f:0xa3e975d3b0af04b1",
        "cid": "11811101049818645681",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJD_lyLDD3UjoRsQSvsNN16aM&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "114963852357711174861",
        "owner_link": "https://maps.google.com/maps/contrib/114963852357711174861",
        "owner_name": "Sakthi Medical",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Pharmacy",
        "subtypes": [
          "Pharmacy"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNyrnnLfcsnMqd1KlDlqZcGdOLNWY3w-5Omlb2Q",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNyrnnLfcsnMqd1KlDlqZcGdOLNWY3w-5Omlb2Q",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNyrnnLfcsnMqd1KlDlqZcGdOLNWY3w-5Omlb2Q=w1032-h477-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8182504,
            "longitude": 80.0391982,
            "type": "photo",
            "photo_datetime_utc": "2021-02-16T00:00:00.000Z",
            "photo_timestamp": 1613433600
          }
        ],
        "reviews_per_rating": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 2
        },
        "photo_count": 7,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "Same-day delivery": true
            }
          }
        },
        "address": "Perumal Koil St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "Perumal Koil St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f70b3303e307:0xdac927b559c87fa6",
        "google_id": "0x3a52f70b3303e307:0xdac927b559c87fa6",
        "place_id": "ChIJB-MDMwv3UjoRpn_IWbUnydo",
        "phone_number": null,
        "name": "SRM Medical Dean Quarters",
        "latitude": 12.8235902,
        "longitude": 80.0497158,
        "full_address": "R2FX+CVP SRM Medical Dean Quarters, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 4,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f70b3303e307:0xdac927b559c87fa6",
        "cid": "15765175630436007846",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJB-MDMwv3UjoRpn_IWbUnydo&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "106008992656338803767",
        "owner_link": "https://maps.google.com/maps/contrib/106008992656338803767",
        "owner_name": "SRM Medical Dean Quarters",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical Center",
        "subtypes": [
          "Medical Center"
        ],
        "photos_sample": null,
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 1,
          "5": 0
        },
        "photo_count": 0,
        "about": null,
        "address": "R2FX+CVP, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2FX+CVP",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f772cbd30c77:0x5860375009d4ac01",
        "google_id": "0x3a52f772cbd30c77:0x5860375009d4ac01",
        "place_id": "ChIJdwzTy3L3UjoRAazUCVA3YFg",
        "phone_number": "+914427478000",
        "name": "SRM Medical College Hospital and Research Centre",
        "latitude": 12.822887399999999,
        "longitude": 80.0438965,
        "full_address": "SRM Medical College Hospital and Research Centre, Mahatma Gandhi Rd, Potheri, SRM Nagar, District, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 6,
        "rating": 4.7,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "8 AM–10 PM"
          ],
          "Friday": [
            "8 AM–10 PM"
          ],
          "Saturday": [
            "8 AM–10 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "8 AM–10 PM"
          ],
          "Tuesday": [
            "8 AM–10 PM"
          ],
          "Wednesday": [
            "8 AM–10 PM"
          ]
        },
        "website": "http://srmhospital.co.in",
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f772cbd30c77:0x5860375009d4ac01",
        "cid": "6368150690003725313",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJdwzTy3L3UjoRAazUCVA3YFg&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "117404902843690053178",
        "owner_link": "https://maps.google.com/maps/contrib/117404902843690053178",
        "owner_name": "SRM Medical College Hospital and Research Centre",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical Center",
        "subtypes": [
          "Medical Center"
        ],
        "photos_sample": null,
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 0,
          "5": 5
        },
        "photo_count": 0,
        "about": {
          "summary": null,
          "details": {
            "Accessibility": {
              "Wheelchair accessible entrance": true,
              "Wheelchair accessible restroom": true
            },
            "Amenities": {
              "Restroom": true
            }
          }
        },
        "address": "Mahatma Gandhi Rd, Potheri, SRM Nagar, District, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar, District",
        "street_address": "Mahatma Gandhi Rd",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f76d2205ed91:0x5809e1ca5bf7dfe7",
        "google_id": "0x3a52f76d2205ed91:0x5809e1ca5bf7dfe7",
        "place_id": "ChIJke0FIm33UjoR59_3W8rhCVg",
        "phone_number": "+918608255202",
        "name": "BIG SAVE MEDICALS",
        "latitude": 12.8202248,
        "longitude": 80.0408741,
        "full_address": "BIG SAVE MEDICALS, no-66 ground floor, pillayar koil street, srm university Back Gate Potheri -603 203, dt, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76d2205ed91:0x5809e1ca5bf7dfe7",
        "cid": "6343849809370669031",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJke0FIm33UjoR59_3W8rhCVg&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "107176935226313584491",
        "owner_link": "https://maps.google.com/maps/contrib/107176935226313584491",
        "owner_name": "BIG SAVE MEDICALS",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical supply store",
        "subtypes": [
          "Medical supply store"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOpm08u2rx6HC_kgPQInnl9T7owi_pEAiIHSiPi",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOpm08u2rx6HC_kgPQInnl9T7owi_pEAiIHSiPi",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOpm08u2rx6HC_kgPQInnl9T7owi_pEAiIHSiPi=w3264-h2448-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8202079,
            "longitude": 80.0408908,
            "type": "photo",
            "photo_datetime_utc": "2018-05-01T00:00:00.000Z",
            "photo_timestamp": 1525132800
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 1
        },
        "photo_count": 8,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Delivery": true,
              "In-store shopping": true,
              "Same-day delivery": true
            }
          }
        },
        "address": "no-66 ground floor, pillayar koil street, srm university Back Gate Potheri -603 203, dt, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "no-66 ground floor, pillayar koil street, srm university Back Gate Potheri -603 203, dt",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f74754f620a3:0xd5edbd74d44ed055",
        "google_id": "0x3a52f74754f620a3:0xd5edbd74d44ed055",
        "place_id": "ChIJoyD2VEf3UjoRVdBO1HS97dU",
        "phone_number": null,
        "name": "Dr. Arun Kumar",
        "latitude": 12.824930199999999,
        "longitude": 80.04694769999999,
        "full_address": "Dr. Arun Kumar, General Medcine OPD, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "9 AM–9 PM"
          ],
          "Friday": [
            "9 AM–9 PM"
          ],
          "Saturday": [
            "9 AM–9 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "9 AM–9 PM"
          ],
          "Tuesday": [
            "9 AM–9 PM"
          ],
          "Wednesday": [
            "9 AM–9 PM"
          ]
        },
        "website": "https://drarunkumar44791.getmy.clinic",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f74754f620a3:0xd5edbd74d44ed055",
        "cid": "15415185409034866773",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJoyD2VEf3UjoRVdBO1HS97dU&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "109465742384671252991",
        "owner_link": "https://maps.google.com/maps/contrib/109465742384671252991",
        "owner_name": "Dr. Arun Kumar",
        "booking_link": "https://remedoapp.com/rweb/doctors/drarunkumar44791?param=booking",
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "General practitioner",
        "subtypes": [
          "General practitioner",
          "Diabetes center",
          "Diabetologist",
          "Health consultant",
          "Internal medicine ward",
          "Medical Center",
          "Medical examiner"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOF7k8w78aQUPZaB6lnMAmXCNrQHz1WiwreEyLz",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOF7k8w78aQUPZaB6lnMAmXCNrQHz1WiwreEyLz",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOF7k8w78aQUPZaB6lnMAmXCNrQHz1WiwreEyLz=w400-h400-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8253033,
            "longitude": 80.0469435,
            "type": "photo",
            "photo_datetime_utc": "2023-04-06T00:00:00.000Z",
            "photo_timestamp": 1680739200
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 1
        },
        "photo_count": 1,
        "about": {
          "summary": null,
          "details": {
            "Crowd": {
              "LGBTQ+ friendly": true
            }
          }
        },
        "address": "General Medcine OPD, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "General Medcine OPD",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f75e17b13e73:0xd07d2d309e30da0",
        "google_id": "0x3a52f75e17b13e73:0xd07d2d309e30da0",
        "place_id": "ChIJcz6xF173UjoRoA3jCdPSBw0",
        "phone_number": null,
        "name": "ARAM MEDICAL CENTRE",
        "latitude": 12.804355699999999,
        "longitude": 80.0302799,
        "full_address": "ARAM MEDICAL CENTRE, Elango Adigal Salai, Maraimalai Nagar, Tamil Nadu 603209, India",
        "review_count": 3,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "9 AM–9:30 PM"
          ],
          "Friday": [
            "9 AM–9:30 PM"
          ],
          "Saturday": [
            "9 AM–9:30 PM"
          ],
          "Sunday": [
            "9:30 AM–9:30 PM"
          ],
          "Monday": [
            "9 AM–9:30 PM"
          ],
          "Tuesday": [
            "9 AM–9:30 PM"
          ],
          "Wednesday": [
            "9 AM–9:30 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f75e17b13e73:0xd07d2d309e30da0",
        "cid": "938950851175845280",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJcz6xF173UjoRoA3jCdPSBw0&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "104667454662681859233",
        "owner_link": "https://maps.google.com/maps/contrib/104667454662681859233",
        "owner_name": "ARAM MEDICAL CENTRE",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical clinic",
        "subtypes": [
          "Medical clinic"
        ],
        "photos_sample": [
          {
            "photo_id": "zE_b8T9Q_UVcfMvUVwOASA",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=zE_b8T9Q_UVcfMvUVwOASA&cb_client=search.gws-prod.gps&w=86&h=86&yaw=341.96832&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.804230284498502,
            "longitude": 80.03032176777042,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 3
        },
        "photo_count": 3,
        "about": null,
        "address": "Elango Adigal Salai, Maraimalai Nagar, Tamil Nadu 603209, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "Elango Adigal Salai",
        "city": "Maraimalai Nagar",
        "zipcode": "603209",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7b0224212ad:0xe754fa5f84357692",
        "google_id": "0x3a52f7b0224212ad:0xe754fa5f84357692",
        "place_id": "ChIJrRJCIrD3UjoRknY1hF_6VOc",
        "phone_number": "+919444730904",
        "name": "Nanba Multispeciality Hospital",
        "latitude": 12.8332239,
        "longitude": 80.0547948,
        "full_address": "R3M3+7WM Nanba Multispeciality Hospital, Vallanchery Main Rd, Guduvancheri, Tamil Nadu 603202, India",
        "review_count": 1,
        "rating": 4,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7b0224212ad:0xe754fa5f84357692",
        "cid": "16669223408951981714",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJrRJCIrD3UjoRknY1hF_6VOc&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "104096619888882312862",
        "owner_link": "https://maps.google.com/maps/contrib/104096619888882312862",
        "owner_name": "Nanba Multispeciality Hospital",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical clinic",
        "subtypes": [
          "Medical clinic"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMRC9rBr0shjzPsPRjsKk30_ofwxO5ipQP5JcF5",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMRC9rBr0shjzPsPRjsKk30_ofwxO5ipQP5JcF5",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMRC9rBr0shjzPsPRjsKk30_ofwxO5ipQP5JcF5=w4560-h2160-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.833228223809286,
            "longitude": 80.05477909032572,
            "type": "photo",
            "photo_datetime_utc": "2021-03-14T00:00:00.000Z",
            "photo_timestamp": 1615680000
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 1,
          "5": 0
        },
        "photo_count": 4,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Restroom": true
            }
          }
        },
        "address": "R3M3+7WM, Vallanchery Main Rd, Guduvancheri, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "R3M3+7WM, Vallanchery Main Rd",
        "city": "Guduvancheri",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f65af1461c85:0xc25e844fa5fcadb8",
        "google_id": "0x3a52f65af1461c85:0xc25e844fa5fcadb8",
        "place_id": "ChIJhRxG8Vr2UjoRuK38pU-EXsI",
        "phone_number": "+914447432350",
        "name": "SRM Medical College Hospital And Research Centre",
        "latitude": 12.820865699999999,
        "longitude": 80.0481732,
        "full_address": "SRM Medical College Hospital And Research Centre, Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603211, India",
        "review_count": 243,
        "rating": 4.2,
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
            "Open 24 hours"
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
        "website": "https://www1.srmist.edu.in/medical-college-hospital-research-centre",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f65af1461c85:0xc25e844fa5fcadb8",
        "cid": "14005777368790904248",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJhRxG8Vr2UjoRuK38pU-EXsI&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "108850486331830826574",
        "owner_link": "https://maps.google.com/maps/contrib/108850486331830826574",
        "owner_name": "SRM Medical College Hospital And Research Centre",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hospital",
        "subtypes": [
          "Hospital"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNrgXMcSQ15WDnvFU7R53xA710UQ4F6DFAw3fc",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNrgXMcSQ15WDnvFU7R53xA710UQ4F6DFAw3fc",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNrgXMcSQ15WDnvFU7R53xA710UQ4F6DFAw3fc=w4032-h3024-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.82086573431626,
            "longitude": 80.04817321992219,
            "type": "photo",
            "photo_datetime_utc": "2020-09-02T00:00:00.000Z",
            "photo_timestamp": 1599004800
          }
        ],
        "reviews_per_rating": {
          "1": 33,
          "2": 3,
          "3": 14,
          "4": 24,
          "5": 169
        },
        "photo_count": 138,
        "about": {
          "summary": null,
          "details": {
            "Highlights": {
              "COVID-19 testing center": true
            },
            "Accessibility": {
              "Wheelchair accessible entrance": true
            },
            "Planning": {
              "Tests limited to certain patients": false
            }
          }
        },
        "address": "Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603211, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "Mahatma Gandhi Rd",
        "city": "Kattankulathur",
        "zipcode": "603211",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f75bb32b8179:0x25e3bb69ff6e6c24",
        "google_id": "0x3a52f75bb32b8179:0x25e3bb69ff6e6c24",
        "place_id": "ChIJeYErs1v3UjoRJGxu_2m74yU",
        "phone_number": null,
        "name": "Green Leaf Health Care",
        "latitude": 12.8154317,
        "longitude": 80.02682639999999,
        "full_address": "Green Leaf Health Care, 33 a, Chelliamman Kovil N St, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "5:30–9 PM"
          ],
          "Friday": [
            "5:30–9 PM"
          ],
          "Saturday": [
            "5:30–9 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "5:30–9 PM"
          ],
          "Tuesday": [
            "5:30–9 PM"
          ],
          "Wednesday": [
            "5:30–9 PM"
          ]
        },
        "website": "https://green-leaf-health-care.business.site",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f75bb32b8179:0x25e3bb69ff6e6c24",
        "cid": "2730231863048039460",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJeYErs1v3UjoRJGxu_2m74yU&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "115806827494052974319",
        "owner_link": "https://maps.google.com/maps/contrib/115806827494052974319",
        "owner_name": "Green Leaf Health Care",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Pediatric clinic",
        "subtypes": [
          "Pediatric clinic"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMvmpeOsoBu8flvjgQXzgBUkhE_0KLAJbnfNiAT",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMvmpeOsoBu8flvjgQXzgBUkhE_0KLAJbnfNiAT",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMvmpeOsoBu8flvjgQXzgBUkhE_0KLAJbnfNiAT=w5218-h3472-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8154335,
            "longitude": 80.0268768,
            "type": "photo",
            "photo_datetime_utc": "2023-04-13T00:00:00.000Z",
            "photo_timestamp": 1681344000
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 1
        },
        "photo_count": 5,
        "about": {
          "summary": null,
          "details": {
            "Accessibility": {
              "Wheelchair accessible restroom": false,
              "Wheelchair accessible seating": false
            },
            "Payments": {
              "Google Pay": true
            }
          }
        },
        "address": "33 a, Chelliamman Kovil N St, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "33 a, Chelliamman Kovil N St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f70338aa5f75:0x4040d5aa70e825c3",
        "google_id": "0x3a52f70338aa5f75:0x4040d5aa70e825c3",
        "place_id": "ChIJdV-qOAP3UjoRwyXocKrVQEA",
        "phone_number": "+919092012423",
        "name": "Royal Medical Shop",
        "latitude": 12.8416936,
        "longitude": 80.0433535,
        "full_address": "R2RV+M8H Royal Medical Shop, Vallalar Nagar, Thailavaram, Tamil Nadu 603202, India",
        "review_count": 2,
        "rating": 3,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f70338aa5f75:0x4040d5aa70e825c3",
        "cid": "4629935344952288707",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJdV-qOAP3UjoRwyXocKrVQEA&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "106440262806619309706",
        "owner_link": "https://maps.google.com/maps/contrib/106440262806619309706",
        "owner_name": "Royal Medical Shop",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Pharmacy",
        "subtypes": [
          "Pharmacy"
        ],
        "photos_sample": [
          {
            "photo_id": "VYdO2odxS2i_hR6CAw2x4Q",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=VYdO2odxS2i_hR6CAw2x4Q&cb_client=search.gws-prod.gps&w=86&h=86&yaw=35.538765&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.84164329398501,
            "longitude": 80.04331664384463,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 1
        },
        "photo_count": 1,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Drive-through": true
            }
          }
        },
        "address": "R2RV+M8H, Vallalar Nagar, Thailavaram, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": "Vallalar Nagar",
        "street_address": "R2RV+M8H",
        "city": "Thailavaram",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f75d6f7296f7:0xcf1641d81bf23d9d",
        "google_id": "0x3a52f75d6f7296f7:0xcf1641d81bf23d9d",
        "place_id": "ChIJ95Zyb133UjoRnT3yG9hBFs8",
        "phone_number": "+918220864191",
        "name": "Aarthi Clinic",
        "latitude": 12.809422399999999,
        "longitude": 80.03035609999999,
        "full_address": "R25J+Q49 Aarthi Clinic, Sadhasivam Rd, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f75d6f7296f7:0xcf1641d81bf23d9d",
        "cid": "14922186811776318877",
        "reviews_link": null,
        "owner_id": "113342537519142585157",
        "owner_link": "https://maps.google.com/maps/contrib/113342537519142585157",
        "owner_name": "Aarthi Clinic",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical clinic",
        "subtypes": [
          "Medical clinic"
        ],
        "photos_sample": [
          {
            "photo_id": "lN_-9_lQEuIAgKWRIPlgxw",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=lN_-9_lQEuIAgKWRIPlgxw&cb_client=search.gws-prod.gps&w=86&h=86&yaw=229.5705&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.809447304903612,
            "longitude": 80.03038607872749,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 1,
        "about": null,
        "address": "R25J+Q49, Sadhasivam Rd, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "R25J+Q49, Sadhasivam Rd",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f75e04c5d4ef:0xc1f0b5262540a617",
        "google_id": "0x3a52f75e04c5d4ef:0xc1f0b5262540a617",
        "place_id": "ChIJ79TFBF73UjoRF6ZAJSa18ME",
        "phone_number": null,
        "name": "Sri Sai Clinic",
        "latitude": 12.8087846,
        "longitude": 80.030563,
        "full_address": "Sri Sai Clinic, No 2 , c5 block, MIG, 1st cross Street, sadasivam road, kattankulathur, Chengalpattu, Tamil Nadu 603203, India",
        "review_count": 25,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "5:30–9:30 PM"
          ],
          "Friday": [
            "5:30–9:30 PM"
          ],
          "Saturday": [
            "5:30–9:30 PM"
          ],
          "Sunday": [
            "5:30–9:30 PM"
          ],
          "Monday": [
            "5:30–9:30 PM"
          ],
          "Tuesday": [
            "5:30–9:30 PM"
          ],
          "Wednesday": [
            "5:30–9:30 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f75e04c5d4ef:0xc1f0b5262540a617",
        "cid": "13974868819169027607",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ79TFBF73UjoRF6ZAJSa18ME&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "112098882797251452909",
        "owner_link": "https://maps.google.com/maps/contrib/112098882797251452909",
        "owner_name": "Sri Sai Clinic",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical Center",
        "subtypes": [
          "Medical Center"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMVk-1g0b8WFbYHAFPQMBSWS9IijJ-HbJ1qBauu",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMVk-1g0b8WFbYHAFPQMBSWS9IijJ-HbJ1qBauu",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMVk-1g0b8WFbYHAFPQMBSWS9IijJ-HbJ1qBauu=w4640-h3472-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.808793699999999,
            "longitude": 80.0305218,
            "type": "photo",
            "photo_datetime_utc": "2022-08-25T00:00:00.000Z",
            "photo_timestamp": 1661385600
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 25
        },
        "photo_count": 3,
        "about": null,
        "address": "No 2 , c5 block, MIG, 1st cross Street, sadasivam road, kattankulathur, Chengalpattu, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "No 2 , c5 block, MIG, 1st cross Street, sadasivam road, kattankulathur",
        "city": "Chengalpattu",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f9e26dd116f1:0xaf9459c8e17818ae",
        "google_id": "0x3a52f9e26dd116f1:0xaf9459c8e17818ae",
        "place_id": "ChIJ8RbRbeL5UjoRrhh44chZlK8",
        "phone_number": "+919791136981",
        "name": "Vanavil Medical Centre",
        "latitude": 12.7988611,
        "longitude": 80.0239162,
        "full_address": "Vanavil Medical Centre, MIG-20, Vallal orhi street, NH-1 Maraimalai Nagar, Chennai, Tamil Nadu 603209, India",
        "review_count": 116,
        "rating": 3.9,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10 AM–9 PM"
          ],
          "Friday": [
            "10 AM–9 PM"
          ],
          "Saturday": [
            "10 AM–9 PM"
          ],
          "Sunday": [
            "9 AM–1 PM"
          ],
          "Monday": [
            "10 AM–9 PM"
          ],
          "Tuesday": [
            "10 AM–9 PM"
          ],
          "Wednesday": [
            "10 AM–9 PM"
          ]
        },
        "website": "http://www.vanavilmedicalcentre.in",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f9e26dd116f1:0xaf9459c8e17818ae",
        "cid": "12651835972501641390",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ8RbRbeL5UjoRrhh44chZlK8&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "109537418927297986337",
        "owner_link": "https://maps.google.com/maps/contrib/109537418927297986337",
        "owner_name": "Vanavil Medical Centre",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hospital",
        "subtypes": [
          "Hospital",
          "Day care center",
          "Fertility clinic",
          "Obstetrician-gynecologist",
          "Medical Center",
          "Pregnancy care center"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipN0T95lek2EnrNcgbQH6gAYAgJBJ_QFQkzzAco",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipN0T95lek2EnrNcgbQH6gAYAgJBJ_QFQkzzAco",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipN0T95lek2EnrNcgbQH6gAYAgJBJ_QFQkzzAco=w768-h1024-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.798926199999999,
            "longitude": 80.02395779999999,
            "type": "photo",
            "photo_datetime_utc": "2021-09-21T00:00:00.000Z",
            "photo_timestamp": 1632182400
          }
        ],
        "reviews_per_rating": {
          "1": 27,
          "2": 3,
          "3": 2,
          "4": 6,
          "5": 78
        },
        "photo_count": 27,
        "about": {
          "summary": null,
          "details": {
            "Accessibility": {
              "Wheelchair accessible entrance": true
            }
          }
        },
        "address": "MIG-20, Vallal orhi street, NH-1 Maraimalai Nagar, Chennai, Tamil Nadu 603209, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "MIG-20, Vallal orhi street, NH-1 Maraimalai Nagar",
        "city": "Chennai",
        "zipcode": "603209",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7e627c0e1c9:0xbb7ceb37e198f9c1",
        "google_id": "0x3a52f7e627c0e1c9:0xbb7ceb37e198f9c1",
        "place_id": "ChIJyeHAJ-b3UjoRwfmY4TfrfLs",
        "phone_number": null,
        "name": "Subhiksha Medicals",
        "latitude": 12.8023133,
        "longitude": 80.0250428,
        "full_address": "No.9, Subhiksha Medicals, 6, Grand Southern Trunk Rd, Big Vinjiyambakkam, Singaperumal Koil, Tamil Nadu 603204, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7e627c0e1c9:0xbb7ceb37e198f9c1",
        "cid": "13509931607445273025",
        "reviews_link": null,
        "owner_id": "106041189443911089883",
        "owner_link": "https://maps.google.com/maps/contrib/106041189443911089883",
        "owner_name": "Subhiksha Medicals",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical Center",
        "subtypes": [
          "Medical Center"
        ],
        "photos_sample": null,
        "reviews_per_rating": null,
        "photo_count": 0,
        "about": null,
        "address": "No.9, 6, Grand Southern Trunk Rd, Big Vinjiyambakkam, Singaperumal Koil, Tamil Nadu 603204, India",
        "order_link": null,
        "price_level": null,
        "district": "Big Vinjiyambakkam",
        "street_address": "No.9, 6, Grand Southern Trunk Rd",
        "city": "Singaperumal Koil",
        "zipcode": "603204",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7acc3b17c57:0xef3722fa2071504a",
        "google_id": "0x3a52f7acc3b17c57:0xef3722fa2071504a",
        "place_id": "ChIJV3yxw6z3UjoRSlBxIPoiN-8",
        "phone_number": null,
        "name": "Sri Ram Clinic",
        "latitude": 12.8454131,
        "longitude": 80.0608922,
        "full_address": "Sri Ram Clinic, 94, Chennai - Theni Hwy, Guduvancheri, Chennai, Tamil Nadu 603202, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10:30 AM–1 PM",
            "5:30–8:30 PM"
          ],
          "Friday": [
            "10:30 AM–1 PM",
            "5:30–8:30 PM"
          ],
          "Saturday": [
            "10:30 AM–1 PM",
            "5:30–8:30 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "10:30 AM–1 PM",
            "5:30–8:30 PM"
          ],
          "Tuesday": [
            "10:30 AM–1 PM",
            "5:30–8:30 PM"
          ],
          "Wednesday": [
            "10:30 AM–1 PM",
            "5:30–8:30 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7acc3b17c57:0xef3722fa2071504a",
        "cid": "17237284556465328202",
        "reviews_link": null,
        "owner_id": "111285039809960095352",
        "owner_link": "https://maps.google.com/maps/contrib/111285039809960095352",
        "owner_name": "Sri Ram Clinic",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical clinic",
        "subtypes": [
          "Medical clinic"
        ],
        "photos_sample": [
          {
            "photo_id": "v87LLvs2FCyfR59KQyhoPg",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=v87LLvs2FCyfR59KQyhoPg&cb_client=search.gws-prod.gps&w=86&h=86&yaw=296.28494&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.845320990780287,
            "longitude": 80.06108347914126,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-26T00:00:00.000Z",
            "photo_timestamp": 1682467200
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 2,
        "about": null,
        "address": "94, Chennai - Theni Hwy, Guduvancheri, Chennai, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": "Guduvancheri",
        "street_address": "94, Chennai - Theni Hwy",
        "city": "Chennai",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7857850e9d5:0xacc187f93a1892c0",
        "google_id": "0x3a52f7857850e9d5:0xacc187f93a1892c0",
        "place_id": "ChIJ1elQeIX3UjoRwJIYOvmHwaw",
        "phone_number": null,
        "name": "Appa Amma Clinic Medical Laboratory",
        "latitude": 12.8450394,
        "longitude": 80.0609851,
        "full_address": "Appa Amma Clinic Medical Laboratory, 15, Grand Southern Trunk Rd, Nandivaram, Kamarajapuram, Urapakkam, Chengalpattu, Tamil Nadu 603210, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "7:30 AM–10:30 PM"
          ],
          "Friday": [
            "7:30 AM–10:30 PM"
          ],
          "Saturday": [
            "7:30 AM–10:30 PM"
          ],
          "Sunday": [
            "5–10:30 PM"
          ],
          "Monday": [
            "7:30 AM–10:30 PM"
          ],
          "Tuesday": [
            "7:30 AM–10:30 PM"
          ],
          "Wednesday": [
            "7:30 AM–10:30 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7857850e9d5:0xacc187f93a1892c0",
        "cid": "12448380349520057024",
        "reviews_link": null,
        "owner_id": "115669572420844217734",
        "owner_link": "https://maps.google.com/maps/contrib/115669572420844217734",
        "owner_name": "Appa Amma Clinic Medical Laboratory",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical clinic",
        "subtypes": [
          "Medical clinic"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNlCJ4Cq1v7Q33i-9PIkDBEdrMtiMVdI74EF7QL",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNlCJ4Cq1v7Q33i-9PIkDBEdrMtiMVdI74EF7QL",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNlCJ4Cq1v7Q33i-9PIkDBEdrMtiMVdI74EF7QL=w4624-h3468-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.845002299999999,
            "longitude": 80.061022,
            "type": "photo",
            "photo_datetime_utc": "2022-09-03T00:00:00.000Z",
            "photo_timestamp": 1662163200
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 7,
        "about": null,
        "address": "15, Grand Southern Trunk Rd, Nandivaram, Kamarajapuram, Urapakkam, Chengalpattu, Tamil Nadu 603210, India",
        "order_link": null,
        "price_level": null,
        "district": "Nandivaram, Kamarajapuram, Urapakkam",
        "street_address": "15, Grand Southern Trunk Rd",
        "city": "Chengalpattu",
        "zipcode": "603210",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7cb928fe959:0xe6062749b8149ed6",
        "google_id": "0x3a52f7cb928fe959:0xe6062749b8149ed6",
        "place_id": "ChIJWemPksv3UjoR1p4UuEknBuY",
        "phone_number": null,
        "name": "Medical shop",
        "latitude": 12.808816799999999,
        "longitude": 80.02875759999999,
        "full_address": "R25H+GGC Medical shop, Kavanur, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7cb928fe959:0xe6062749b8149ed6",
        "cid": "16574978676158144214",
        "reviews_link": null,
        "owner_id": "117609665570243953093",
        "owner_link": "https://maps.google.com/maps/contrib/117609665570243953093",
        "owner_name": "Medical shop",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Pharmacy",
        "subtypes": [
          "Pharmacy"
        ],
        "photos_sample": [
          {
            "photo_id": "3G8N4tROioBDIgiPwYrMaQ",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3G8N4tROioBDIgiPwYrMaQ&cb_client=search.gws-prod.gps&w=86&h=86&yaw=46.606586&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.808761172583651,
            "longitude": 80.02869726058456,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 1,
        "about": null,
        "address": "R25H+GGC, Kavanur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "R25H+GGC",
        "city": "Kavanur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f73f8ea71a1f:0xfa7386232bcaf87a",
        "google_id": "0x3a52f73f8ea71a1f:0xfa7386232bcaf87a",
        "place_id": "ChIJHxqnjj_3UjoRevjKKyOGc_o",
        "phone_number": "+919840507020",
        "name": "Dr. Gomathi MBBS, DDVL, M. S. E.N.T",
        "latitude": 12.841040999999999,
        "longitude": 80.057322,
        "full_address": "Dr. Gomathi MBBS, DDVL, M. S. E.N.T, 10, Nakeeran Street, Guduvancheri, Tamil Nadu 603202, India",
        "review_count": 15,
        "rating": 3.9,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "9:30 AM–1 PM",
            "5:30–9:30 PM"
          ],
          "Friday": [
            "9 AM–1 PM",
            "5:30–9:30 PM"
          ],
          "Saturday": [
            "9:30 AM–1 PM",
            "5:30–9:30 PM"
          ],
          "Sunday": [
            "9:30 AM–1 PM",
            "5:30–9:30 PM"
          ],
          "Monday": [
            "9:30 AM–1 PM",
            "5:30–9:30 PM"
          ],
          "Tuesday": [
            "9:30 AM–1 PM",
            "5:30–9:30 PM"
          ],
          "Wednesday": [
            "9:30 AM–1 PM",
            "5:30–9:30 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f73f8ea71a1f:0xfa7386232bcaf87a",
        "cid": "18046915617420408954",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJHxqnjj_3UjoRevjKKyOGc_o&q=medical&authuser=0&hl=en&gl=US",
        "owner_id": "100338775745743036399",
        "owner_link": "https://maps.google.com/maps/contrib/100338775745743036399",
        "owner_name": "Dr. Gomathi MBBS, DDVL, M. S. E.N.T",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Medical clinic",
        "subtypes": [
          "Medical clinic"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNzGzJH2rYceXHCFnz26zTy7zN873ll4XGh2vxm",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNzGzJH2rYceXHCFnz26zTy7zN873ll4XGh2vxm",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNzGzJH2rYceXHCFnz26zTy7zN873ll4XGh2vxm=w774-h1032-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8410791,
            "longitude": 80.0573383,
            "type": "photo",
            "photo_datetime_utc": "2019-06-16T00:00:00.000Z",
            "photo_timestamp": 1560643200
          }
        ],
        "reviews_per_rating": {
          "1": 4,
          "2": 0,
          "3": 0,
          "4": 1,
          "5": 10
        },
        "photo_count": 3,
        "about": null,
        "address": "10, Nakeeran Street, Guduvancheri, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "10, Nakeeran Street",
        "city": "Guduvancheri",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN"
      }
    ]
  }

  const [places, setPlaces] = useState(res.data)
  console.log(places)

  useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'dbee5e4f74msh9f3cd8db535ed9bp146c9ejsned6da298e26a',
    //     'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
    //   }
    // };

    // fetch('https://local-business-data.p.rapidapi.com/search?query=medical   &limit=20&lat=12.8230&lng=80.0444&zoom=13&language=en&region=us', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
  }, [])

  return (
    <div className='background-radial-gradient'>
      <script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_aCe-7AKhthiQVCSMHQBP83jPS4nIaQk&libraries=places&callback=initMap">
      </script>
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
              <Card key={place.name} name={place.name} address={place.full_address} photos={place.photos_sample} rating={place.rating} noOfRatings={place.user_ratings_total} reference={Array.isArray(place.photos) ? place.photos[0].photo_reference : ''} tags={place.types} />
            )
          })
        }

      </div>
    </div>
  )
}

export default Medical