import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Banks = () => {
  const res = {
    "status": "OK",
    "request_id": "ca9f97cb-8292-4ce7-a024-948b26eed485",
    "parameters": {
      "query": "banks",
      "language": "en",
      "region": "us",
      "lat": 12.823,
      "lng": 80.0444,
      "limit": 20
    },
    "data": [
      {
        "business_id": "0x3a52f76a9142f527:0x683803c146d41141",
        "google_id": "0x3a52f76a9142f527:0x683803c146d41141",
        "place_id": "ChIJJ_VCkWr3UjoRQRHURsEDOGg",
        "phone_number": "+919426792001",
        "name": "HDFC Bank",
        "latitude": 12.8245656,
        "longitude": 80.04650699999999,
        "full_address": "HDFC Bank, Potheri Kattankulathur, SRM Nagar, Chennai, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10 AM–4 PM"
          ],
          "Friday": [
            "10 AM–4 PM"
          ],
          "Saturday": [
            "10 AM–4 PM"
          ],
          "Sunday": [
            "9 AM–5 PM"
          ],
          "Monday": [
            "10 AM–4 PM"
          ],
          "Tuesday": [
            "10 AM–4 PM"
          ],
          "Wednesday": [
            "10 AM–4 PM"
          ]
        },
        "website": "https://near-me.hdfcbank.com/branch-atm-locator/hdfc-bank-srm-institute-of-science-technology-banks-srm-nagar-chennai-170674/Home",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76a9142f527:0x683803c146d41141",
        "cid": "7509756507292176705",
        "reviews_link": null,
        "owner_id": "114826491663766837327",
        "owner_link": "https://maps.google.com/maps/contrib/114826491663766837327",
        "owner_name": "HDFC Bank",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bank",
        "subtypes": [
          "Bank"
        ],
        "photos_sample": null,
        "reviews_per_rating": null,
        "photo_count": 0,
        "about": null,
        "address": "Potheri Kattankulathur, SRM Nagar, Chennai, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "Potheri Kattankulathur",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f73c71cc4ea3:0x2463365de4838c3e",
        "google_id": "0x3a52f73c71cc4ea3:0x2463365de4838c3e",
        "place_id": "ChIJo07McTz3UjoRPoyD5F02YyQ",
        "phone_number": null,
        "name": "ICICI BANK ATM",
        "latitude": 12.817291299999999,
        "longitude": 80.0404057,
        "full_address": "ICICI BANK ATM, & P.O, 56, Pillayar Koil St, Potheri, theri, Kattankulathur, Tamil Nadu 603203, India",
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
        "website": "http://www.icicibank.com",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f73c71cc4ea3:0x2463365de4838c3e",
        "cid": "2621999184953445438",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJo07McTz3UjoRPoyD5F02YyQ&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "104946973341975610265",
        "owner_link": "https://maps.google.com/maps/contrib/104946973341975610265",
        "owner_name": "ICICI BANK ATM",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bank",
        "subtypes": [
          "Bank",
          "Financial institution",
          "Loan agency",
          "Private sector bank",
          "Savings bank"
        ],
        "photos_sample": [
          {
            "photo_id": "ZGz6MMuVRGNJadWoLleaZw",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ZGz6MMuVRGNJadWoLleaZw&cb_client=search.gws-prod.gps&w=86&h=86&yaw=144.59207&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.817412460440103,
            "longitude": 80.04031736951355,
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
        "about": null,
        "address": "& P.O, 56, Pillayar Koil St, Potheri, theri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, theri",
        "street_address": "& P.O, 56, Pillayar Koil St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f76c51e6cabb:0x3d30ca7de9afb0bd",
        "google_id": "0x3a52f76c51e6cabb:0x3d30ca7de9afb0bd",
        "place_id": "ChIJu8rmUWz3UjoRvbCv6X3KMD0",
        "phone_number": null,
        "name": "Tamilnad Mercantile Bank ATM",
        "latitude": 12.818824,
        "longitude": 80.0367069,
        "full_address": "Tamilnad Mercantile Bank ATM, No.8, Thiruvallur Street,Near SRM University, Potheri, Tamil Nadu 603203, India",
        "review_count": 5,
        "rating": 4.4,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10 AM–5 PM"
          ],
          "Friday": [
            "10 AM–5 PM"
          ],
          "Saturday": [
            "10 AM–5 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "10 AM–5 PM"
          ],
          "Tuesday": [
            "10 AM–5 PM"
          ],
          "Wednesday": [
            "10 AM–5 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76c51e6cabb:0x3d30ca7de9afb0bd",
        "cid": "4409246677336043709",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJu8rmUWz3UjoRvbCv6X3KMD0&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "103859086844863358858",
        "owner_link": "https://maps.google.com/maps/contrib/103859086844863358858",
        "owner_name": "Tamilnad Mercantile Bank ATM",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bank",
        "subtypes": [
          "Bank",
          "ATM"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNNVGXJkIk8OUB09CRotPyX-z1BywtA5hww7Ym6",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNNVGXJkIk8OUB09CRotPyX-z1BywtA5hww7Ym6",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNNVGXJkIk8OUB09CRotPyX-z1BywtA5hww7Ym6=w1080-h1920-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8188686,
            "longitude": 80.03673169999999,
            "type": "photo",
            "photo_datetime_utc": "2017-12-24T00:00:00.000Z",
            "photo_timestamp": 1514073600
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 1,
          "3": 0,
          "4": 0,
          "5": 4
        },
        "photo_count": 4,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Drive-through": true
            }
          }
        },
        "address": "No.8, Thiruvallur Street,Near SRM University, Potheri, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "No.8, Thiruvallur Street,Near SRM University, Potheri",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f72706744303:0x252eb651f60ec187",
        "google_id": "0x3a52f72706744303:0x252eb651f60ec187",
        "place_id": "ChIJA0N0Bif3UjoRh8EO9lG2LiU",
        "phone_number": null,
        "name": "ICICI BANK ATM",
        "latitude": 12.822913199999999,
        "longitude": 80.0458527,
        "full_address": "ICICI BANK ATM, SRM Institute Of Science And Technology, GST Road Kattankolathur, Potheri, Chennai, Tamil Nadu 603503, India",
        "review_count": 0,
        "rating": null,
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
        "website": "http://www.icicibank.com",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f72706744303:0x252eb651f60ec187",
        "cid": "2679279291468792199",
        "reviews_link": null,
        "owner_id": "109808814761967350568",
        "owner_link": "https://maps.google.com/maps/contrib/109808814761967350568",
        "owner_name": "ICICI BANK ATM",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bank",
        "subtypes": [
          "Bank",
          "Financial institution",
          "Loan agency",
          "Private sector bank",
          "Savings bank"
        ],
        "photos_sample": null,
        "reviews_per_rating": null,
        "photo_count": 0,
        "about": null,
        "address": "SRM Institute Of Science And Technology, GST Road Kattankolathur, Potheri, Chennai, Tamil Nadu 603503, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "SRM Institute Of Science And Technology, GST Road Kattankolathur",
        "city": "Chennai",
        "zipcode": "603503",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7f666c982bd:0x58a70d0bba8c57ec",
        "google_id": "0x3a52f7f666c982bd:0x58a70d0bba8c57ec",
        "place_id": "ChIJvYLJZvb3UjoR7FeMugsNp1g",
        "phone_number": "+912268461208",
        "name": "HDFC Bank",
        "latitude": 12.824733,
        "longitude": 80.0466357,
        "full_address": "HDFC Bank, Potheri Kattankulathur, SRM Nagar, Chennai, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10 AM–4 PM"
          ],
          "Friday": [
            "10 AM–4 PM"
          ],
          "Saturday": [
            "10 AM–4 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "10 AM–4 PM"
          ],
          "Tuesday": [
            "10 AM–4 PM"
          ],
          "Wednesday": [
            "10 AM–4 PM"
          ]
        },
        "website": "https://near-me.hdfcbank.com/branch-atm-locator/hdfc-bank-srm-institute-of-science-technology-banks-srm-nagar-chennai-170674/Home",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7f666c982bd:0x58a70d0bba8c57ec",
        "cid": "6388088940473898988",
        "reviews_link": null,
        "owner_id": "106314693349969347016",
        "owner_link": "https://maps.google.com/maps/contrib/106314693349969347016",
        "owner_name": "HDFC Bank",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bank",
        "subtypes": [
          "Bank",
          "Financial institution",
          "Loan agency",
          "Private sector bank"
        ],
        "photos_sample": null,
        "reviews_per_rating": null,
        "photo_count": 0,
        "about": null,
        "address": "Potheri Kattankulathur, SRM Nagar, Chennai, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "Potheri Kattankulathur",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f77331e9ab21:0x84650b300c84b6c7",
        "google_id": "0x3a52f77331e9ab21:0x84650b300c84b6c7",
        "place_id": "ChIJIavpMXP3UjoRx7aEDDALZYQ",
        "phone_number": null,
        "name": "INDIAN BANK",
        "latitude": 12.822854999999999,
        "longitude": 80.045863,
        "full_address": "R2FW+48X INDIAN BANK, OPP TO POTHERI RLY STN,SRM UNIVERSITY, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 12,
        "rating": 1.8,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f77331e9ab21:0x84650b300c84b6c7",
        "cid": "9540043686650623687",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJIavpMXP3UjoRx7aEDDALZYQ&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "105982208458192473029",
        "owner_link": "https://maps.google.com/maps/contrib/105982208458192473029",
        "owner_name": "INDIAN BANK",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bank",
        "subtypes": [
          "Bank"
        ],
        "photos_sample": null,
        "reviews_per_rating": {
          "1": 9,
          "2": 0,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "photo_count": 0,
        "about": null,
        "address": "R2FW+48X, OPP TO POTHERI RLY STN,SRM UNIVERSITY, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2FW+48X, OPP TO POTHERI RLY STN,SRM UNIVERSITY",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f70d8b75e36d:0x7f64e0cfe67c4d8",
        "google_id": "0x3a52f70d8b75e36d:0x7f64e0cfe67c4d8",
        "place_id": "ChIJbeN1iw33UjoR2MRn_gxO9gc",
        "phone_number": null,
        "name": "Bank Of India",
        "latitude": 12.8272833,
        "longitude": 80.0426054,
        "full_address": "R2GV+W29 Bank Of India, Potheri, SRM Nagar, Thailavaram, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 1,
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
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f70d8b75e36d:0x7f64e0cfe67c4d8",
        "cid": "573731820251104472",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJbeN1iw33UjoR2MRn_gxO9gc&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "104343460694615874336",
        "owner_link": "https://maps.google.com/maps/contrib/104343460694615874336",
        "owner_name": "Bank Of India",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "ATM",
        "subtypes": [
          "ATM"
        ],
        "photos_sample": [
          {
            "photo_id": "5ZWmhxPUIaHY1qdHDxvIFg",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=5ZWmhxPUIaHY1qdHDxvIFg&cb_client=search.gws-prod.gps&w=86&h=86&yaw=91.25147&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.827286039266427,
            "longitude": 80.04247679951195,
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
          "5": 0
        },
        "photo_count": 2,
        "about": null,
        "address": "R2GV+W29, Potheri, SRM Nagar, Thailavaram, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2GV+W29",
        "city": "Thailavaram",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f77369da2c57:0xc0f6079cf4736167",
        "google_id": "0x3a52f77369da2c57:0xc0f6079cf4736167",
        "place_id": "ChIJVyzaaXP3UjoRZ2Fz9JwH9sA",
        "phone_number": null,
        "name": "City Union Bank",
        "latitude": 12.8218862,
        "longitude": 80.0469768,
        "full_address": "City Union Bank, SRM University Building, Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 3,
        "rating": 3.3,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f77369da2c57:0xc0f6079cf4736167",
        "cid": "13904309270250479975",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJVyzaaXP3UjoRZ2Fz9JwH9sA&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "109322708548622990719",
        "owner_link": "https://maps.google.com/maps/contrib/109322708548622990719",
        "owner_name": "City Union Bank",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "ATM",
        "subtypes": [
          "ATM"
        ],
        "photos_sample": null,
        "reviews_per_rating": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 1,
          "5": 1
        },
        "photo_count": 0,
        "about": null,
        "address": "SRM University Building, Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "SRM University Building, Mahatma Gandhi Rd",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f772cfb69edb:0x84d2575027d6374d",
        "google_id": "0x3a52f772cfb69edb:0x84d2575027d6374d",
        "place_id": "ChIJ2562z3L3UjoRTTfWJ1BX0oQ",
        "phone_number": null,
        "name": "City Union Bank - Tambaram extension Branch",
        "latitude": 12.822669699999999,
        "longitude": 80.0443061,
        "full_address": "R2FV+3P7 City Union Bank - Tambaram extension Branch, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 20,
        "rating": 2.4,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10 AM–5 PM"
          ],
          "Friday": [
            "10 AM–5 PM"
          ],
          "Saturday": [
            "10 AM–5 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "10 AM–5 PM"
          ],
          "Tuesday": [
            "10 AM–5 PM"
          ],
          "Wednesday": [
            "10 AM–5 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f772cfb69edb:0x84d2575027d6374d",
        "cid": "9570808159893075789",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ2562z3L3UjoRTTfWJ1BX0oQ&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "102376682350418506700",
        "owner_link": "https://maps.google.com/maps/contrib/102376682350418506700",
        "owner_name": "City Union Bank - Tambaram extension Branch",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bank",
        "subtypes": [
          "Bank"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMF2psWFgrQS24n7_9k9m59a_uf0obswUPz1R2d",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMF2psWFgrQS24n7_9k9m59a_uf0obswUPz1R2d",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMF2psWFgrQS24n7_9k9m59a_uf0obswUPz1R2d=w4160-h3120-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8227953,
            "longitude": 80.0443063,
            "type": "photo",
            "photo_datetime_utc": "2017-07-16T00:00:00.000Z",
            "photo_timestamp": 1500163200
          }
        ],
        "reviews_per_rating": {
          "1": 12,
          "2": 1,
          "3": 1,
          "4": 0,
          "5": 6
        },
        "photo_count": 9,
        "about": {
          "summary": null,
          "details": {
            "Accessibility": {
              "Wheelchair accessible entrance": false
            }
          }
        },
        "address": "R2FV+3P7, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2FV+3P7",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52fd0bb45ec643:0x163817e7bb441c0d",
        "google_id": "0x3a52fd0bb45ec643:0x163817e7bb441c0d",
        "place_id": "ChIJQ8ZetAv9UjoRDRxEu-cXOBY",
        "phone_number": null,
        "name": "Jana Small Finance Bank Ltd",
        "latitude": 12.8187669,
        "longitude": 80.04017549999999,
        "full_address": "Jana Small Finance Bank Ltd, ground, Plot No 2, Grand Southern Trunk Rd, Alagesan Nagar, Tamil Nadu 603001, India",
        "review_count": 5,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "9 AM–4 PM"
          ],
          "Friday": [
            "9 AM–4 PM"
          ],
          "Saturday": [
            "9 AM–12:30 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "9 AM–4 PM"
          ],
          "Tuesday": [
            "9 AM–4 PM"
          ],
          "Wednesday": [
            "9 AM–4 PM"
          ]
        },
        "website": "https://www.janabank.com",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52fd0bb45ec643:0x163817e7bb441c0d",
        "cid": "1601055951576898573",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJQ8ZetAv9UjoRDRxEu-cXOBY&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "101516025232523607625",
        "owner_link": "https://maps.google.com/maps/contrib/101516025232523607625",
        "owner_name": "Jana Small Finance Bank Ltd",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bank",
        "subtypes": [
          "Bank",
          "ATM",
          "Business banking service",
          "Private sector bank",
          "Savings bank"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipM7mBdkQxCkXFFtfDM52L5_0qmOqHdObNP-4IRa",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipM7mBdkQxCkXFFtfDM52L5_0qmOqHdObNP-4IRa",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipM7mBdkQxCkXFFtfDM52L5_0qmOqHdObNP-4IRa=w4000-h1824-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.680525078908582,
            "longitude": 79.98143516092878,
            "type": "photo",
            "photo_datetime_utc": "2020-08-03T00:00:00.000Z",
            "photo_timestamp": 1596412800
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 5
        },
        "photo_count": 3,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Drive-through": true
            }
          }
        },
        "address": "ground, Plot No 2, Grand Southern Trunk Rd, Alagesan Nagar, Tamil Nadu 603001, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, Alagesan Nagar",
        "street_address": "ground, Plot No 2, Grand Southern Trunk Rd",
        "city": "Kattankulathur",
        "zipcode": "603001",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f70ee9bb1fe5:0x56c7615a095fa696",
        "google_id": "0x3a52f70ee9bb1fe5:0x56c7615a095fa696",
        "place_id": "ChIJ5R-76Q73UjoRlqZfCVphx1Y",
        "phone_number": null,
        "name": "Canara Bank ATM",
        "latitude": 12.830643799999999,
        "longitude": 80.046151,
        "full_address": "Canara Bank ATM, 140, G S T ROAD, Kanchipuram District, Guduvancheri, Tamil Nadu 603202, India",
        "review_count": 5,
        "rating": 3.4,
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
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f70ee9bb1fe5:0x56c7615a095fa696",
        "cid": "6253073646959437462",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ5R-76Q73UjoRlqZfCVphx1Y&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "113358128809768537487",
        "owner_link": "https://maps.google.com/maps/contrib/113358128809768537487",
        "owner_name": "Canara Bank ATM",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "ATM",
        "subtypes": [
          "ATM"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMZCdAfYhh5_1V_WZ726ged4Rj6e5dvUGBGbFyX",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMZCdAfYhh5_1V_WZ726ged4Rj6e5dvUGBGbFyX",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMZCdAfYhh5_1V_WZ726ged4Rj6e5dvUGBGbFyX=w3000-h4000-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.830643823209034,
            "longitude": 80.04615097304534,
            "type": "photo",
            "photo_datetime_utc": "2023-03-12T00:00:00.000Z",
            "photo_timestamp": 1678579200
          }
        ],
        "reviews_per_rating": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 2,
          "5": 1
        },
        "photo_count": 11,
        "about": null,
        "address": "140, G S T ROAD, Kanchipuram District, Guduvancheri, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": "Pandian Nagar, SRM Nagar",
        "street_address": "140, G S T ROAD, Kanchipuram District",
        "city": "Guduvancheri",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f70dd873529d:0x5c16cd8276579288",
        "google_id": "0x3a52f70dd873529d:0x5c16cd8276579288",
        "place_id": "ChIJnVJz2A33UjoRiJJXdoLNFlw",
        "phone_number": null,
        "name": "State Bank Of INDIA ATM",
        "latitude": 12.828887,
        "longitude": 80.0443231,
        "full_address": "R2HV+HP4 State Bank Of INDIA ATM, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 5,
        "rating": 3.6,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10 AM–6 PM"
          ],
          "Friday": [
            "10 AM–6 PM"
          ],
          "Saturday": [
            "10 AM–6 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "10 AM–6 PM"
          ],
          "Tuesday": [
            "10 AM–6 PM"
          ],
          "Wednesday": [
            "10 AM–6 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f70dd873529d:0x5c16cd8276579288",
        "cid": "6635717061191897736",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJnVJz2A33UjoRiJJXdoLNFlw&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "112073709413019614436",
        "owner_link": "https://maps.google.com/maps/contrib/112073709413019614436",
        "owner_name": "State Bank Of INDIA ATM",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "ATM",
        "subtypes": [
          "ATM"
        ],
        "photos_sample": [
          {
            "photo_id": "H-gU3pOv2sAOY-lLSrnqeA",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=H-gU3pOv2sAOY-lLSrnqeA&cb_client=search.gws-prod.gps&w=86&h=86&yaw=116.47726&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.82893739569196,
            "longitude": 80.0442193309697,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 1
        },
        "photo_count": 2,
        "about": null,
        "address": "R2HV+HP4, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2HV+HP4",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f712b2a624e5:0x3903d30fbc46f3bd",
        "google_id": "0x3a52f712b2a624e5:0x3903d30fbc46f3bd",
        "place_id": "ChIJ5SSmshL3UjoRvfNGvA_TAzk",
        "phone_number": null,
        "name": "SBI INTOUCH",
        "latitude": 12.823173299999999,
        "longitude": 80.041602,
        "full_address": "R2FR+7J9 SBI INTOUCH, SRM Nagar, SRM UNIVERSITY, near central library, Tamil Nadu 603203, India",
        "review_count": 11,
        "rating": 4.8,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "10 AM–4 PM"
          ],
          "Friday": [
            "10 AM–4 PM"
          ],
          "Saturday": [
            "10 AM–4 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "10 AM–4 PM"
          ],
          "Tuesday": [
            "10 AM–4 PM"
          ],
          "Wednesday": [
            "10 AM–4 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f712b2a624e5:0x3903d30fbc46f3bd",
        "cid": "4108359349628761021",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ5SSmshL3UjoRvfNGvA_TAzk&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "117697467982429508408",
        "owner_link": "https://maps.google.com/maps/contrib/117697467982429508408",
        "owner_name": "SBI INTOUCH",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bank",
        "subtypes": [
          "Bank"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPpL-zbyhop2H25HSnQQkyKeHZbxDXDXKBGKpO6",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPpL-zbyhop2H25HSnQQkyKeHZbxDXDXKBGKpO6",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPpL-zbyhop2H25HSnQQkyKeHZbxDXDXKBGKpO6=w3120-h4160-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.823173331964595,
            "longitude": 80.04160198143092,
            "type": "photo",
            "photo_datetime_utc": "2018-06-10T00:00:00.000Z",
            "photo_timestamp": 1528588800
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 9
        },
        "photo_count": 17,
        "about": {
          "summary": null,
          "details": {
            "Service options": {
              "Drive-through": true
            }
          }
        },
        "address": "R2FR+7J9, SRM Nagar, SRM UNIVERSITY, near central library, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2FR+7J9, SRM Nagar, SRM UNIVERSITY, near central library",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7c6e1aee5b7:0x40e270796b83e5e0",
        "google_id": "0x3a52f7c6e1aee5b7:0x40e270796b83e5e0",
        "place_id": "ChIJt-Wu4cb3UjoR4OWDa3lw4kA",
        "phone_number": null,
        "name": "State Bank Atm",
        "latitude": 12.8232065,
        "longitude": 80.0421963,
        "full_address": "R2FR+7VP State Bank Atm, Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7c6e1aee5b7:0x40e270796b83e5e0",
        "cid": "4675423029961156064",
        "reviews_link": null,
        "owner_id": "112043760141665706112",
        "owner_link": "https://maps.google.com/maps/contrib/112043760141665706112",
        "owner_name": "State Bank Atm",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "ATM",
        "subtypes": [
          "ATM"
        ],
        "photos_sample": null,
        "reviews_per_rating": null,
        "photo_count": 0,
        "about": null,
        "address": "R2FR+7VP, Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2FR+7VP, Mahatma Gandhi Rd",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f71300000001:0x78f09c381869dfe",
        "google_id": "0x3a52f71300000001:0x78f09c381869dfe",
        "place_id": "ChIJAQAAABP3UjoR_p2GgcMJjwc",
        "phone_number": null,
        "name": "City Union Bank",
        "latitude": 12.8258884,
        "longitude": 80.0395205,
        "full_address": "R2GQ+9R2 City Union Bank, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f71300000001:0x78f09c381869dfe",
        "cid": "544664815231475198",
        "reviews_link": null,
        "owner_id": "104727946491091457407",
        "owner_link": "https://maps.google.com/maps/contrib/104727946491091457407",
        "owner_name": "City Union Bank",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "ATM",
        "subtypes": [
          "ATM"
        ],
        "photos_sample": null,
        "reviews_per_rating": null,
        "photo_count": 0,
        "about": null,
        "address": "R2GQ+9R2, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "R2GQ+9R2",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f76ddc867c89:0x438dfdda071f5041",
        "google_id": "0x3a52f76ddc867c89:0x438dfdda071f5041",
        "place_id": "ChIJiXyG3G33UjoRQVAfB9r9jUM",
        "phone_number": "+919072601529",
        "name": "CSB Bank Guduvancherry Branch & ATM",
        "latitude": 12.837852,
        "longitude": 80.05431899999999,
        "full_address": "CSB Bank Guduvancherry Branch & ATM, First Floor, Plot No. 24A K K Nagar, Guduvancherry, Third Main Rd, adj. to Royal Women'S Hotel, Guduvancheri, Tamil Nadu 603202, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "9:30 AM–4 PM"
          ],
          "Friday": [
            "9:30 AM–4 PM"
          ],
          "Saturday": [
            "9:30 AM–4 PM"
          ],
          "Sunday": [
            "Closed"
          ],
          "Monday": [
            "9:30 AM–4 PM"
          ],
          "Tuesday": [
            "9:30 AM–4 PM"
          ],
          "Wednesday": [
            "9:30 AM–4 PM"
          ]
        },
        "website": "https://www.csb.co.in",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76ddc867c89:0x438dfdda071f5041",
        "cid": "4867825885121564737",
        "reviews_link": null,
        "owner_id": "103193301987387677276",
        "owner_link": "https://maps.google.com/maps/contrib/103193301987387677276",
        "owner_name": "CSB Bank Guduvancherry Branch & ATM",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bank",
        "subtypes": [
          "Bank",
          "ATM"
        ],
        "photos_sample": [
          {
            "photo_id": "JYYNrZAAokntjs_-_00aIw",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=JYYNrZAAokntjs_-_00aIw&cb_client=search.gws-prod.gps&w=86&h=86&yaw=90.101456&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.837852265770893,
            "longitude": 80.05416506614283,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-26T00:00:00.000Z",
            "photo_timestamp": 1682467200
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 1,
        "about": null,
        "address": "First Floor, Plot No. 24A K K Nagar, Guduvancherry, Third Main Rd, adj. to Royal Women'S Hotel, Guduvancheri, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "First Floor, Plot No. 24A K K Nagar, Guduvancherry, Third Main Rd, adj. to Royal Women'S Hotel",
        "city": "Guduvancheri",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f772cfd796a3:0x89bc826d19bd1129",
        "google_id": "0x3a52f772cfd796a3:0x89bc826d19bd1129",
        "place_id": "ChIJo5bXz3L3UjoRKRG9GW2CvIk",
        "phone_number": null,
        "name": "City Union Bank - CUB ATM",
        "latitude": 12.8226613,
        "longitude": 80.0444031,
        "full_address": "R2FV+3Q6 City Union Bank - CUB ATM, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 12,
        "rating": 3,
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
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f772cfd796a3:0x89bc826d19bd1129",
        "cid": "9924951083912597801",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJo5bXz3L3UjoRKRG9GW2CvIk&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "118050024718392150080",
        "owner_link": "https://maps.google.com/maps/contrib/118050024718392150080",
        "owner_name": "City Union Bank - CUB ATM",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "ATM",
        "subtypes": [
          "ATM"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipO9dVpGg1nw9M8URER2Ri5pZ8ctnhqxPgWF4cTr",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipO9dVpGg1nw9M8URER2Ri5pZ8ctnhqxPgWF4cTr",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipO9dVpGg1nw9M8URER2Ri5pZ8ctnhqxPgWF4cTr=w3120-h4160-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8227952,
            "longitude": 80.0444033,
            "type": "photo",
            "photo_datetime_utc": "2017-07-16T00:00:00.000Z",
            "photo_timestamp": 1500163200
          }
        ],
        "reviews_per_rating": {
          "1": 2,
          "2": 3,
          "3": 3,
          "4": 1,
          "5": 3
        },
        "photo_count": 3,
        "about": null,
        "address": "R2FV+3Q6, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2FV+3Q6",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f71300000001:0xdc0e04d31147c09a",
        "google_id": "0x3a52f71300000001:0xdc0e04d31147c09a",
        "place_id": "ChIJAQAAABP3UjoRmsBHEdMEDtw",
        "phone_number": null,
        "name": "State Bank of India ATM",
        "latitude": 12.8258884,
        "longitude": 80.0395205,
        "full_address": "State Bank of India ATM, Potheri, Kanchipuram, NH-45, Chennai Trichy Highway, Grand Southern Trunk Road, Kattankulathur, Tamil Nadu 603202, India",
        "review_count": 7,
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
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f71300000001:0xdc0e04d31147c09a",
        "cid": "15856616642592620698",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJAQAAABP3UjoRmsBHEdMEDtw&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "104593208747513309656",
        "owner_link": "https://maps.google.com/maps/contrib/104593208747513309656",
        "owner_name": "State Bank of India ATM",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "ATM",
        "subtypes": [
          "ATM"
        ],
        "photos_sample": null,
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 3,
          "4": 1,
          "5": 3
        },
        "photo_count": 0,
        "about": null,
        "address": "Potheri, Kanchipuram, NH-45, Chennai Trichy Highway, Grand Southern Trunk Road, Kattankulathur, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "Potheri, Kanchipuram, NH-45, Chennai Trichy Highway, Grand Southern Trunk Road",
        "city": "Kattankulathur",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f70ef1a4bc9f:0x635a76b89e368bc6",
        "google_id": "0x3a52f70ef1a4bc9f:0x635a76b89e368bc6",
        "place_id": "ChIJn7yk8Q73UjoRxos2nrh2WmM",
        "phone_number": "+919426792001",
        "name": "HDFC Bank ATM",
        "latitude": 12.830902799999999,
        "longitude": 80.0456366,
        "full_address": "HDFC Bank ATM, 3, GST Rd, Thailavaram, Singaperumalkoil, Kanchipuram, Tamil Nadu 603101, India",
        "review_count": 0,
        "rating": null,
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
        "website": "https://near-me.hdfcbank.com/branch-atm-locator/hdfc-bank-atm-singaperumalkoil-atm-singaperumalkoil-kanchipuram-15613/Home",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f70ef1a4bc9f:0x635a76b89e368bc6",
        "cid": "7159165092959259590",
        "reviews_link": null,
        "owner_id": "100434683357020748480",
        "owner_link": "https://maps.google.com/maps/contrib/100434683357020748480",
        "owner_name": "HDFC Bank ATM",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "ATM",
        "subtypes": [
          "ATM"
        ],
        "photos_sample": [
          {
            "photo_id": "yMv-KJVw12AEhsvce8nRNQ",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=yMv-KJVw12AEhsvce8nRNQ&cb_client=search.gws-prod.gps&w=86&h=86&yaw=211.32706&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.830999210851557,
            "longitude": 80.04569678391891,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 1,
        "about": null,
        "address": "3, GST Rd, Thailavaram, Singaperumalkoil, Kanchipuram, Tamil Nadu 603101, India",
        "order_link": null,
        "price_level": null,
        "district": "Pandian Nagar",
        "street_address": "3, GST Rd, Thailavaram, Singaperumalkoil",
        "city": "Kanchipuram",
        "zipcode": "603101",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f76b8a9c23a9:0xa8f3ddd9c3dc3483",
        "google_id": "0x3a52f76b8a9c23a9:0xa8f3ddd9c3dc3483",
        "place_id": "ChIJqSOcimv3UjoRgzTcw9nd86g",
        "phone_number": null,
        "name": "TMB Bank",
        "latitude": 12.818800099999999,
        "longitude": 80.03669479999999,
        "full_address": "R29P+GMG TMB Bank, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 5,
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
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76b8a9c23a9:0xa8f3ddd9c3dc3483",
        "cid": "12174318145076212867",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJqSOcimv3UjoRgzTcw9nd86g&q=banks&authuser=0&hl=en&gl=US",
        "owner_id": "114806208438956814335",
        "owner_link": "https://maps.google.com/maps/contrib/114806208438956814335",
        "owner_name": "TMB Bank",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "ATM",
        "subtypes": [
          "ATM"
        ],
        "photos_sample": [
          {
            "photo_id": "YszOByjF3eRY6tHAYNPesQ",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=YszOByjF3eRY6tHAYNPesQ&cb_client=search.gws-prod.gps&w=86&h=86&yaw=218.43394&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.818861618545798,
            "longitude": 80.03674486620234,
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
          "5": 1
        },
        "photo_count": 2,
        "about": null,
        "address": "R29P+GMG, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "R29P+GMG",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      }
    ]
  }

  const [places, setPlaces] = useState(res.data)

  useEffect(() => {
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

export default Banks