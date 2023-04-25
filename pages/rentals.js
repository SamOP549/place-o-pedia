import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Rentals = () => {
  const res = {
    "status": "OK",
    "request_id": "75699ed0-7dab-4e61-8eb5-6aff6830ca06",
    "parameters": {
      "query": "rental",
      "language": "en",
      "region": "us",
      "lat": 12.823,
      "lng": 80.0444,
      "limit": 20
    },
    "data": [
      {
        "business_id": "0x3a52f71da3d5502f:0x6d9c1182905ddcbb",
        "google_id": "0x3a52f71da3d5502f:0x6d9c1182905ddcbb",
        "place_id": "ChIJL1DVox33UjoRu9xdkIIRnG0",
        "phone_number": null,
        "name": "SRI BIKE AND CAR RENTALS",
        "latitude": 12.8169109,
        "longitude": 80.0381218,
        "full_address": "R28Q+Q69 SRI BIKE AND CAR RENTALS, Bharathi Dasan St, Potheri, Thiruvanmiyur, Chennai, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 1,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f71da3d5502f:0x6d9c1182905ddcbb",
        "cid": "7898207098966498491",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJL1DVox33UjoRu9xdkIIRnG0&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "101133875411017898731",
        "owner_link": "https://maps.google.com/maps/contrib/101133875411017898731",
        "owner_name": "SRI BIKE AND CAR RENTALS",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car rental agency",
        "subtypes": [
          "Car rental agency"
        ],
        "photos_sample": [
          {
            "photo_id": "9FYVhgSCAWriye5gAxsARA",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=9FYVhgSCAWriye5gAxsARA&cb_client=search.gws-prod.gps&w=86&h=86&yaw=191.52182&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.817050059013475,
            "longitude": 80.03815089227305,
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
        "photo_count": 1,
        "about": null,
        "address": "R28Q+Q69, Bharathi Dasan St, Potheri, Thiruvanmiyur, Chennai, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, Thiruvanmiyur",
        "street_address": "R28Q+Q69, Bharathi Dasan St",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7495f6fd9eb:0x9ed1267966f2649c",
        "google_id": "0x3a52f7495f6fd9eb:0x9ed1267966f2649c",
        "place_id": "ChIJ69lvX0n3UjoRnGTyZnkm0Z4",
        "phone_number": null,
        "name": "SHREE CAR AND BIKE RENTAL",
        "latitude": 12.8175748,
        "longitude": 80.0396332,
        "full_address": "SHREE CAR AND BIKE RENTAL, No 1, Kakkan St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 6,
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
        "website": "https://shree-car-and-bike-rental.business.site",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7495f6fd9eb:0x9ed1267966f2649c",
        "cid": "11443970430985200796",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ69lvX0n3UjoRnGTyZnkm0Z4&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "100742721703402696334",
        "owner_link": "https://maps.google.com/maps/contrib/100742721703402696334",
        "owner_name": "SHREE CAR AND BIKE RENTAL",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car rental agency",
        "subtypes": [
          "Car rental agency"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMHw1V5hQEzTiEj5fU1HU89qeo8XV9ToVJZTNWq",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMHw1V5hQEzTiEj5fU1HU89qeo8XV9ToVJZTNWq",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMHw1V5hQEzTiEj5fU1HU89qeo8XV9ToVJZTNWq=w973-h548-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.817611699999999,
            "longitude": 80.0396465,
            "type": "photo",
            "photo_datetime_utc": "2021-03-11T00:00:00.000Z",
            "photo_timestamp": 1615420800
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 6
        },
        "photo_count": 12,
        "about": null,
        "address": "No 1, Kakkan St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "No 1, Kakkan St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f79436cb57b7:0x91e9f686a4709bbf",
        "google_id": "0x3a52f79436cb57b7:0x91e9f686a4709bbf",
        "place_id": "ChIJt1fLNpT3UjoRv5twpIb26ZE",
        "phone_number": "+917010301503",
        "name": "AM BIKE & CAR RENTAL",
        "latitude": 12.8192156,
        "longitude": 80.0382077,
        "full_address": "AM BIKE & CAR RENTAL, Kambar St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 4,
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
            "9 AM–9 PM"
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
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f79436cb57b7:0x91e9f686a4709bbf",
        "cid": "10514205863218027455",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJt1fLNpT3UjoRv5twpIb26ZE&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "105251319660008363461",
        "owner_link": "https://maps.google.com/maps/contrib/105251319660008363461",
        "owner_name": "AM BIKE & CAR RENTAL",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car rental agency",
        "subtypes": [
          "Car rental agency"
        ],
        "photos_sample": [
          {
            "photo_id": "M7AYZLFwtehSysU_vPLK8w",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=M7AYZLFwtehSysU_vPLK8w&cb_client=search.gws-prod.gps&w=86&h=86&yaw=231.85857&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.819242237564813,
            "longitude": 80.03824248871534,
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
          "5": 4
        },
        "photo_count": 4,
        "about": null,
        "address": "Kambar St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "Kambar St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f78e0731d141:0xacaef84d8fcb33bc",
        "google_id": "0x3a52f78e0731d141:0xacaef84d8fcb33bc",
        "place_id": "ChIJQdExB473UjoRvDPLj034rqw",
        "phone_number": null,
        "name": "FRIENDS CAR AND BIKE RENTAL",
        "latitude": 12.8295225,
        "longitude": 80.0510474,
        "full_address": "FRIENDS CAR AND BIKE RENTAL, ZOHO CORPORATION, SRM Nagar, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f78e0731d141:0xacaef84d8fcb33bc",
        "cid": "12443155832479888316",
        "reviews_link": null,
        "owner_id": "103340230601616852154",
        "owner_link": "https://maps.google.com/maps/contrib/103340230601616852154",
        "owner_name": "FRIENDS CAR AND BIKE RENTAL",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car rental agency",
        "subtypes": [
          "Car rental agency"
        ],
        "photos_sample": null,
        "reviews_per_rating": null,
        "photo_count": 0,
        "about": null,
        "address": "ZOHO CORPORATION, SRM Nagar, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "SRM Nagar",
        "street_address": "ZOHO CORPORATION",
        "city": null,
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f726ab78d84b:0x2a967a9762c8ab3a",
        "google_id": "0x3a52f726ab78d84b:0x2a967a9762c8ab3a",
        "place_id": "ChIJS9h4qyb3UjoROqvIYpd6lio",
        "phone_number": null,
        "name": "Dss motors",
        "latitude": 12.819769899999999,
        "longitude": 80.0381833,
        "full_address": "R29Q+W73 Dss motors, Pillayar Koil St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "7 AM–9 PM"
          ],
          "Friday": [
            "7 AM–9 PM"
          ],
          "Saturday": [
            "7 AM–9 PM"
          ],
          "Sunday": [
            "7 AM–9 PM"
          ],
          "Monday": [
            "7 AM–9 PM"
          ],
          "Tuesday": [
            "7 AM–9 PM"
          ],
          "Wednesday": [
            "7 AM–9 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f726ab78d84b:0x2a967a9762c8ab3a",
        "cid": "3068774986715540282",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJS9h4qyb3UjoROqvIYpd6lio&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "116439932403283850545",
        "owner_link": "https://maps.google.com/maps/contrib/116439932403283850545",
        "owner_name": "Dss motors",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car rental agency",
        "subtypes": [
          "Car rental agency"
        ],
        "photos_sample": [
          {
            "photo_id": "b7btmosAkpTYu15HNapJ1g",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=b7btmosAkpTYu15HNapJ1g&cb_client=search.gws-prod.gps&w=86&h=86&yaw=242.86111&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.819787206529906,
            "longitude": 80.03821792655037,
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
        "photo_count": 1,
        "about": null,
        "address": "R29Q+W73, Pillayar Koil St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "R29Q+W73, Pillayar Koil St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f723acee45db:0xe77c191ccb5e28ac",
        "google_id": "0x3a52f723acee45db:0xe77c191ccb5e28ac",
        "place_id": "ChIJ20XurCP3UjoRrCheyxwZfOc",
        "phone_number": null,
        "name": "Krish travels",
        "latitude": 12.8160834,
        "longitude": 80.03048419999999,
        "full_address": "Krish travels, Matha kovil, 5, th cross street, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f723acee45db:0xe77c191ccb5e28ac",
        "cid": "16680234731335198892",
        "reviews_link": null,
        "owner_id": "117885469104559722768",
        "owner_link": "https://maps.google.com/maps/contrib/117885469104559722768",
        "owner_name": "Krish travels",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car rental agency",
        "subtypes": [
          "Car rental agency"
        ],
        "photos_sample": null,
        "reviews_per_rating": null,
        "photo_count": 0,
        "about": null,
        "address": "Matha kovil, 5, th cross street, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "Matha kovil, 5, th cross street",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f77769a86969:0x4a0b72e5fa0f876b",
        "google_id": "0x3a52f77769a86969:0x4a0b72e5fa0f876b",
        "place_id": "ChIJaWmoaXf3UjoRa4cP-uVyC0o",
        "phone_number": "+918643841820",
        "name": "AR bike and car rental",
        "latitude": 12.8203863,
        "longitude": 80.0411833,
        "full_address": "AR bike and car rental, SRM back gate, near blueberry cake shop, Potheri, Chennai, Tamil Nadu 603203, India",
        "review_count": 34,
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
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f77769a86969:0x4a0b72e5fa0f876b",
        "cid": "5335484515618883435",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJaWmoaXf3UjoRa4cP-uVyC0o&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "115160056485886337446",
        "owner_link": "https://maps.google.com/maps/contrib/115160056485886337446",
        "owner_name": "AR bike and car rental",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car leasing service",
        "subtypes": [
          "Car leasing service"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMzCno_lYq93dpCbrHIdIgeipcRzSg9hg-nJdkv",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMzCno_lYq93dpCbrHIdIgeipcRzSg9hg-nJdkv",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMzCno_lYq93dpCbrHIdIgeipcRzSg9hg-nJdkv=w1080-h608-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.820432,
            "longitude": 80.0411471,
            "type": "photo",
            "photo_datetime_utc": "2021-12-01T00:00:00.000Z",
            "photo_timestamp": 1638316800
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 34
        },
        "photo_count": 7,
        "about": null,
        "address": "SRM back gate, near blueberry cake shop, Potheri, Chennai, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "SRM back gate, near blueberry cake shop",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7acfe187fe9:0xfaa77dfb59cde76c",
        "google_id": "0x3a52f7acfe187fe9:0xfaa77dfb59cde76c",
        "place_id": "ChIJ6X8Y_qz3UjoRbOfNWft9p_o",
        "phone_number": "+917010043078",
        "name": "Friends enterprises and Bike, car rental",
        "latitude": 12.817610799999999,
        "longitude": 80.03964909999999,
        "full_address": "Friends enterprises and Bike, car rental, No 18, Kakkan St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 24,
        "rating": 4.8,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "7 AM–11 PM"
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
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7acfe187fe9:0xfaa77dfb59cde76c",
        "cid": "18061543349089593196",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ6X8Y_qz3UjoRbOfNWft9p_o&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "111499598870419177138",
        "owner_link": "https://maps.google.com/maps/contrib/111499598870419177138",
        "owner_name": "Friends enterprises and Bike, car rental",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car leasing service",
        "subtypes": [
          "Car leasing service"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOmoM07--ZWpurrsur2-BTJVnwBvfxlpRri5w7-",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOmoM07--ZWpurrsur2-BTJVnwBvfxlpRri5w7-",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOmoM07--ZWpurrsur2-BTJVnwBvfxlpRri5w7-=w4608-h3456-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.817610799999999,
            "longitude": 80.03964909999999,
            "type": "photo",
            "photo_datetime_utc": "2020-11-21T00:00:00.000Z",
            "photo_timestamp": 1605916800
          }
        ],
        "reviews_per_rating": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 21
        },
        "photo_count": 19,
        "about": null,
        "address": "No 18, Kakkan St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "No 18, Kakkan St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7a5b36fd0ad:0x78ce5677bed6ba35",
        "google_id": "0x3a52f7a5b36fd0ad:0x78ce5677bed6ba35",
        "place_id": "ChIJrdBvs6X3UjoRNbrWvndWzng",
        "phone_number": null,
        "name": "Arun Arun",
        "latitude": 12.811636499999999,
        "longitude": 80.01990889999999,
        "full_address": "R269+MX3 Arun Arun, Bajanai Koil St, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7a5b36fd0ad:0x78ce5677bed6ba35",
        "cid": "8704990202056587829",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJrdBvs6X3UjoRNbrWvndWzng&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "114609740192176208777",
        "owner_link": "https://maps.google.com/maps/contrib/114609740192176208777",
        "owner_name": "Arun Arun",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car rental agency",
        "subtypes": [
          "Car rental agency"
        ],
        "photos_sample": null,
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 1
        },
        "photo_count": 0,
        "about": null,
        "address": "R269+MX3, Bajanai Koil St, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "R269+MX3, Bajanai Koil St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f783983b3659:0x77641c8410308f09",
        "google_id": "0x3a52f783983b3659:0x77641c8410308f09",
        "place_id": "ChIJWTY7mIP3UjoRCY8wEIQcZHc",
        "phone_number": null,
        "name": "DRK TRAVELS",
        "latitude": 12.8107911,
        "longitude": 80.02504139999999,
        "full_address": "DRK TRAVELS, Perumal Koil St, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 2,
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
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f783983b3659:0x77641c8410308f09",
        "cid": "8603032541717368585",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJWTY7mIP3UjoRCY8wEIQcZHc&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "102369962209549352249",
        "owner_link": "https://maps.google.com/maps/contrib/102369962209549352249",
        "owner_name": "DRK TRAVELS",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car rental agency",
        "subtypes": [
          "Car rental agency"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNUuKflKCcz6x2Z103nYB9uuiUn1RfPfTfcNg0y",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNUuKflKCcz6x2Z103nYB9uuiUn1RfPfTfcNg0y",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNUuKflKCcz6x2Z103nYB9uuiUn1RfPfTfcNg0y=w973-h638-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8107904,
            "longitude": 80.025048,
            "type": "photo",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
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
        "about": null,
        "address": "Perumal Koil St, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "Perumal Koil St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7d517a9c567:0x3e5798adcaf3f91b",
        "google_id": "0x3a52f7d517a9c567:0x3e5798adcaf3f91b",
        "place_id": "ChIJZ8WpF9X3UjoRG_nzyq2YVz4",
        "phone_number": null,
        "name": "Chennai rent house",
        "latitude": 12.8200402,
        "longitude": 80.0417061,
        "full_address": "R2CR+2M8 Chennai rent house, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7d517a9c567:0x3e5798adcaf3f91b",
        "cid": "4492227025527109915",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJZ8WpF9X3UjoRG_nzyq2YVz4&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "105387608722030871611",
        "owner_link": "https://maps.google.com/maps/contrib/105387608722030871611",
        "owner_name": "Chennai rent house",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Housing complex",
        "subtypes": [
          "Housing complex"
        ],
        "photos_sample": [
          {
            "photo_id": "TPk-HOSc46jJbrxJC0UAwg",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=TPk-HOSc46jJbrxJC0UAwg&cb_client=search.gws-prod.gps&w=86&h=86&yaw=24.077549&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.819827518690966,
            "longitude": 80.04160863342472,
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
        "photo_count": 1,
        "about": null,
        "address": "R2CR+2M8, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2CR+2M8",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7598cda13cb:0x84f9fe83d2473048",
        "google_id": "0x3a52f7598cda13cb:0x84f9fe83d2473048",
        "place_id": "ChIJyxPajFn3UjoRSDBH0oP--YQ",
        "phone_number": null,
        "name": "Kandhan rental house",
        "latitude": 12.8182055,
        "longitude": 80.0380972,
        "full_address": "Kandhan rental house, 33, Thiruvalluvar St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 8,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7598cda13cb:0x84f9fe83d2473048",
        "cid": "9581969524329492552",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJyxPajFn3UjoRSDBH0oP--YQ&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "102807315349290998685",
        "owner_link": "https://maps.google.com/maps/contrib/102807315349290998685",
        "owner_name": "Kandhan rental house",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Housing complex",
        "subtypes": [
          "Housing complex"
        ],
        "photos_sample": [
          {
            "photo_id": "ezNxEdUcL6SX0IvbIsOJkQ",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ezNxEdUcL6SX0IvbIsOJkQ&cb_client=search.gws-prod.gps&w=86&h=86&yaw=40.606003&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.818163454617782,
            "longitude": 80.03806023387399,
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
          "5": 8
        },
        "photo_count": 1,
        "about": null,
        "address": "33, Thiruvalluvar St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "33, Thiruvalluvar St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f76497bc9fbb:0xda9bbd35cd6b1c89",
        "google_id": "0x3a52f76497bc9fbb:0xda9bbd35cd6b1c89",
        "place_id": "ChIJu5-8l2T3UjoRiRxrzTW9m9o",
        "phone_number": null,
        "name": "Friends bike and car rental",
        "latitude": 12.827268799999999,
        "longitude": 80.0437687,
        "full_address": "Friends bike and car rental, Samudeswarinagar, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76497bc9fbb:0xda9bbd35cd6b1c89",
        "cid": "15752392160435707017",
        "reviews_link": null,
        "owner_id": "106176513868295908841",
        "owner_link": "https://maps.google.com/maps/contrib/106176513868295908841",
        "owner_name": "Friends bike and car rental",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car leasing service",
        "subtypes": [
          "Car leasing service"
        ],
        "photos_sample": [
          {
            "photo_id": "JcSr73RWIVOabP9Brr27Zg",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=JcSr73RWIVOabP9Brr27Zg&cb_client=search.gws-prod.gps&w=86&h=86&yaw=236.12631&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.827346677836626,
            "longitude": 80.0438876787588,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 1,
        "about": null,
        "address": "Samudeswarinagar, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "Samudeswarinagar",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f9f85bbe9fed:0x30ff0b88a9306c90",
        "google_id": "0x3a52f9f85bbe9fed:0x30ff0b88a9306c90",
        "place_id": "ChIJ7Z--W_j5UjoRkGwwqYgL_zA",
        "phone_number": "+919445200718",
        "name": "VJ power tools & construction equipment for rentel",
        "latitude": 12.7925962,
        "longitude": 80.0263947,
        "full_address": "VJ power tools & construction equipment for rentel, 3/1, singaravelan street, near IOB BANK, NH-2, Maraimalai Nagar, Tamil Nadu 603209, India",
        "review_count": 39,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "8:30 AM–6:30 PM"
          ],
          "Friday": [
            "8:30 AM–6:30 PM"
          ],
          "Saturday": [
            "8:30 AM–6:30 PM"
          ],
          "Sunday": [
            "8:30 AM–6:30 PM"
          ],
          "Monday": [
            "8:30 AM–6:30 PM"
          ],
          "Tuesday": [
            "8:30 AM–6:30 PM"
          ],
          "Wednesday": [
            "8:30 AM–6:30 PM"
          ]
        },
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f9f85bbe9fed:0x30ff0b88a9306c90",
        "cid": "3530553314463739024",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ7Z--W_j5UjoRkGwwqYgL_zA&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "109175242998969346621",
        "owner_link": "https://maps.google.com/maps/contrib/109175242998969346621",
        "owner_name": "VJ power tools & construction equipment for rentel",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Equipment rental agency",
        "subtypes": [
          "Equipment rental agency"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOvxjc39jM_ZVSg_zUBw14pXhpKw8FJH8lGBH_Z",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOvxjc39jM_ZVSg_zUBw14pXhpKw8FJH8lGBH_Z",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOvxjc39jM_ZVSg_zUBw14pXhpKw8FJH8lGBH_Z=w3456-h4608-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.792525399999999,
            "longitude": 80.0263524,
            "type": "photo",
            "photo_datetime_utc": "2023-04-22T00:00:00.000Z",
            "photo_timestamp": 1682121600
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 39
        },
        "photo_count": 14,
        "about": null,
        "address": "3/1, singaravelan street, near IOB BANK, NH-2, Maraimalai Nagar, Tamil Nadu 603209, India",
        "order_link": null,
        "price_level": null,
        "district": "NH-2",
        "street_address": "3/1, singaravelan street, near IOB BANK",
        "city": "Maraimalai Nagar",
        "zipcode": "603209",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f76d750b941b:0x1441d15f99f89970",
        "google_id": "0x3a52f76d750b941b:0x1441d15f99f89970",
        "place_id": "ChIJG5QLdW33UjoRcJn4mV_RQRQ",
        "phone_number": "+917397383098",
        "name": "Moni Bike And Car Rental",
        "latitude": 12.820369999999999,
        "longitude": 80.0410749,
        "full_address": "Moni Bike And Car Rental, Potheri Lk Rd, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 57,
        "rating": 3.8,
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
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76d750b941b:0x1441d15f99f89970",
        "cid": "1459677962780055920",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJG5QLdW33UjoRcJn4mV_RQRQ&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "107058904542800039439",
        "owner_link": "https://maps.google.com/maps/contrib/107058904542800039439",
        "owner_name": "Moni Bike And Car Rental",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Motorcycle rental agency",
        "subtypes": [
          "Motorcycle rental agency"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNfruvMlzRbwk8MTzQ2kFPmRIiy8nOh-5idBhE-",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNfruvMlzRbwk8MTzQ2kFPmRIiy8nOh-5idBhE-",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNfruvMlzRbwk8MTzQ2kFPmRIiy8nOh-5idBhE-=w404-h364-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8203748,
            "longitude": 80.0410711,
            "type": "photo",
            "photo_datetime_utc": "2018-03-01T00:00:00.000Z",
            "photo_timestamp": 1519862400
          }
        ],
        "reviews_per_rating": {
          "1": 10,
          "2": 2,
          "3": 7,
          "4": 9,
          "5": 29
        },
        "photo_count": 6,
        "about": {
          "summary": null,
          "details": {
            "Accessibility": {
              "Wheelchair accessible entrance": false
            }
          }
        },
        "address": "Potheri Lk Rd, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "Potheri Lk Rd",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7faf6c242d5:0x9b9ae7a0b1e97b35",
        "google_id": "0x3a52f7faf6c242d5:0x9b9ae7a0b1e97b35",
        "place_id": "ChIJ1ULC9vr3UjoRNXvpsaDnmps",
        "phone_number": "+919841859555",
        "name": "Shree Car and Bike Rentals",
        "latitude": 12.820466099999999,
        "longitude": 80.041483,
        "full_address": "R2CR+5HQ Shree Car and Bike Rentals, Bajanai Kovil St, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 2,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "5:01 AM–11:01 PM"
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
            "5:01 AM–11:01 PM"
          ],
          "Tuesday": [
            "5:01 AM–11:01 PM"
          ],
          "Wednesday": [
            "5:01 AM–11:01 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7faf6c242d5:0x9b9ae7a0b1e97b35",
        "cid": "11212528899657923381",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ1ULC9vr3UjoRNXvpsaDnmps&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "106965858659420678281",
        "owner_link": "https://maps.google.com/maps/contrib/106965858659420678281",
        "owner_name": "Shree Car and Bike Rentals",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Transportation service",
        "subtypes": [
          "Transportation service"
        ],
        "photos_sample": [
          {
            "photo_id": "BsFyhrgJuNDq8mI3-tUNCQ",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=BsFyhrgJuNDq8mI3-tUNCQ&cb_client=search.gws-prod.gps&w=86&h=86&yaw=241.92105&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.820496494659748,
            "longitude": 80.04154143120748,
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
          "5": 2
        },
        "photo_count": 1,
        "about": null,
        "address": "R2CR+5HQ, Bajanai Kovil St, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2CR+5HQ, Bajanai Kovil St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f739062052f9:0x1f808c6a77df147",
        "google_id": "0x3a52f739062052f9:0x1f808c6a77df147",
        "place_id": "ChIJ-VIgBjn3UjoRR_F9p8YI-AE",
        "phone_number": null,
        "name": "ZAFE Commercial Properties",
        "latitude": 12.8356512,
        "longitude": 80.0482988,
        "full_address": "ZAFE Commercial Properties, Veerabadran Nagar, Thailavaram, Tamil Nadu 603203, India",
        "review_count": 2,
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
            "9 AM–9 PM"
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
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f739062052f9:0x1f808c6a77df147",
        "cid": "141873037568766279",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ-VIgBjn3UjoRR_F9p8YI-AE&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "111183871377346922906",
        "owner_link": "https://maps.google.com/maps/contrib/111183871377346922906",
        "owner_name": "ZAFE Commercial Properties",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Office space rental agency",
        "subtypes": [
          "Office space rental agency"
        ],
        "photos_sample": [
          {
            "photo_id": "7u0VQxQOCW_Hi09MYFko-A",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=7u0VQxQOCW_Hi09MYFko-A&cb_client=search.gws-prod.gps&w=86&h=86&yaw=255.98666&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.8357202659692,
            "longitude": 80.04858262663832,
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
          "5": 2
        },
        "photo_count": 1,
        "about": null,
        "address": "Veerabadran Nagar, Thailavaram, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "Veerabadran Nagar",
        "city": "Thailavaram",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f71772dad5e9:0xdc3dc4b646a75480",
        "google_id": "0x3a52f71772dad5e9:0xdc3dc4b646a75480",
        "place_id": "ChIJ6dXachf3UjoRgFSnRrbEPdw",
        "phone_number": "+917010957759",
        "name": "Sai Bike and Car Rental",
        "latitude": 12.817610799999999,
        "longitude": 80.03964909999999,
        "full_address": "Sai Bike and Car Rental, 10, Kakkan St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 23,
        "rating": 4.8,
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
        "website": "http://www.sairental.com",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f71772dad5e9:0xdc3dc4b646a75480",
        "cid": "15870056949071959168",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ6dXachf3UjoRgFSnRrbEPdw&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "111305053178330268538",
        "owner_link": "https://maps.google.com/maps/contrib/111305053178330268538",
        "owner_name": "Sai Bike and Car Rental",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Bicycle rental service",
        "subtypes": [
          "Bicycle rental service"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPfYCvAX7CaIY8FBfykw1sSSjIEa6n5gylNUgId",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPfYCvAX7CaIY8FBfykw1sSSjIEa6n5gylNUgId",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPfYCvAX7CaIY8FBfykw1sSSjIEa6n5gylNUgId=w1440-h808-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.817610799999999,
            "longitude": 80.03964909999999,
            "type": "photo",
            "photo_datetime_utc": "2022-03-28T00:00:00.000Z",
            "photo_timestamp": 1648425600
          }
        ],
        "reviews_per_rating": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 22
        },
        "photo_count": 38,
        "about": null,
        "address": "10, Kakkan St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "10, Kakkan St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7fdaf11578d:0x892f9db3f3843e9f",
        "google_id": "0x3a52f7fdaf11578d:0x892f9db3f3843e9f",
        "place_id": "ChIJjVcRr_33UjoRnz6E87OdL4k",
        "phone_number": null,
        "name": "Friend's Bike Rental",
        "latitude": 12.820899599999999,
        "longitude": 80.0416996,
        "full_address": "R2CR+9M4 Friend's Bike Rental, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 6,
        "rating": 4.7,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "8 AM–9:30 PM"
          ],
          "Friday": [
            "8 AM–9:30 PM"
          ],
          "Saturday": [
            "8 AM–9:30 PM"
          ],
          "Sunday": [
            "8 AM–9:30 PM"
          ],
          "Monday": [
            "8 AM–9:30 PM"
          ],
          "Tuesday": [
            "8 AM–9:30 PM"
          ],
          "Wednesday": [
            "8 AM–9:30 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7fdaf11578d:0x892f9db3f3843e9f",
        "cid": "9885293103311765151",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJjVcRr_33UjoRnz6E87OdL4k&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "117170662016930452705",
        "owner_link": "https://maps.google.com/maps/contrib/117170662016930452705",
        "owner_name": "Friend's Bike Rental",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Shopping mall",
        "subtypes": [
          "Shopping mall"
        ],
        "photos_sample": [
          {
            "photo_id": "mm_W6HdnQg11Esjk6r486w",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=mm_W6HdnQg11Esjk6r486w&cb_client=search.gws-prod.gps&w=86&h=86&yaw=0.7434214&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.820888980062113,
            "longitude": 80.0416994586735,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 4
        },
        "photo_count": 1,
        "about": null,
        "address": "R2CR+9M4, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar",
        "street_address": "R2CR+9M4",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f75ef0c14919:0x23e8f0a35c0b4a4c",
        "google_id": "0x3a52f75ef0c14919:0x23e8f0a35c0b4a4c",
        "place_id": "ChIJGUnB8F73UjoRTEoLXKPw6CM",
        "phone_number": null,
        "name": "Sai Travels",
        "latitude": 12.8208048,
        "longitude": 80.0821654,
        "full_address": "Sai Travels, No-2, Swathi Nagar, Perumattunallur Main Road, Guduvancheri, India",
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
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f75ef0c14919:0x23e8f0a35c0b4a4c",
        "cid": "2587582570338929228",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJGUnB8F73UjoRTEoLXKPw6CM&q=rental&authuser=0&hl=en&gl=US",
        "owner_id": "115731858665497397730",
        "owner_link": "https://maps.google.com/maps/contrib/115731858665497397730",
        "owner_name": "Sai Travels",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Car rental agency",
        "subtypes": [
          "Car rental agency"
        ],
        "photos_sample": [
          {
            "photo_id": "E_Es2rABCtwd9DQ4tDiDMg",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=E_Es2rABCtwd9DQ4tDiDMg&cb_client=search.gws-prod.gps&w=86&h=86&yaw=24.75025&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.82067852522033,
            "longitude": 80.08210569742165,
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
        "photo_count": 1,
        "about": null,
        "address": "No-2, Swathi Nagar, Perumattunallur Main Road, Guduvancheri, India",
        "order_link": null,
        "price_level": null,
        "district": "Annai Meenakshi Nagar",
        "street_address": "No-2, Swathi Nagar, Perumattunallur Main Road",
        "city": "Guduvancheri",
        "zipcode": null,
        "state": "Tamil Nadu",
        "country": "IN"
      }
    ]
  }
  const [places, setPlaces] = useState(res.data)

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

export default Rentals