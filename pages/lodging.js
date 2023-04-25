import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Lodging = () => {
  const res = {
    "status": "OK",
    "request_id": "a7d93a37-4804-4154-801f-b4bcbb357f6e",
    "parameters": {
      "query": "hotels",
      "language": "en",
      "region": "us",
      "lat": 12.823,
      "lng": 80.0444,
      "limit": 20
    },
    "data": [
      {
        "business_id": "0x3a52f712b1145d45:0x227f3715f0556bbb",
        "google_id": "0x3a52f712b1145d45:0x227f3715f0556bbb",
        "place_id": "ChIJRV0UsRL3UjoRu2tV8BU3fyI",
        "phone_number": "+914447432000",
        "name": "SRM Hotel Pv Ltd - Maraimalai Nagar, Chennai",
        "latitude": 12.823878299999999,
        "longitude": 80.0413274,
        "full_address": "SRM Hotel Pv Ltd - Maraimalai Nagar, Chennai, GST Road, Intra College Rd, near SRM Institute of Science and Technology, Maraimalai Nagar, SRM Nagar, Chennai, Tamil Nadu 603203, India",
        "review_count": 2178,
        "rating": 3.9,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.srmhotels.com/chennai",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f712b1145d45:0x227f3715f0556bbb",
        "cid": "2485766086697774011",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJRV0UsRL3UjoRu2tV8BU3fyI&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "105570247041653207481",
        "owner_link": "https://maps.google.com/maps/contrib/105570247041653207481",
        "owner_name": "SRM Hotel Pv Ltd - Maraimalai Nagar, Chennai",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipO7NvN594m018flZXndFPmTXWTfrHns1CNQKJuO",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipO7NvN594m018flZXndFPmTXWTfrHns1CNQKJuO",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipO7NvN594m018flZXndFPmTXWTfrHns1CNQKJuO=w4000-h2250-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.823878313660032,
            "longitude": 80.04132737303594,
            "type": "photo",
            "photo_datetime_utc": "2021-11-01T00:00:00.000Z",
            "photo_timestamp": 1635724800
          }
        ],
        "reviews_per_rating": {
          "1": 145,
          "2": 104,
          "3": 405,
          "4": 692,
          "5": 832
        },
        "photo_count": 742,
        "about": {
          "summary": "Set next to a university campus, this unfussy hotel is an 11-minute walk from Potheri train station and 8 km from Vandalur Arignar Anna Zoological Park. The relaxed, warmly decorated rooms feature satellite TV. Suites add separate living rooms. Room service is offered 24 hours. Amenities include an outdoor pool, a 24-hour cafe and an international restaurant, along with a bar. There's also a fitness centre.",
          "details": null
        },
        "address": "GST Road, Intra College Rd, near SRM Institute of Science and Technology, Maraimalai Nagar, SRM Nagar, Chennai, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, Maraimalai Nagar, SRM Nagar",
        "street_address": "GST Road, Intra College Rd, near SRM Institute of Science and Technology",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.5,
          "Things to do": 2.7,
          "Transit": 4.5,
          "Airports": 2.9
        },
        "hotel_amenities": {
          "Free breakfast": true
        },
        "hotel_stars": 2,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52f79645a65267:0x19e5502e9f5e5db1",
        "google_id": "0x3a52f79645a65267:0x19e5502e9f5e5db1",
        "place_id": "ChIJZ1KmRZb3UjoRsV1eny5Q5Rk",
        "phone_number": "+919840641877",
        "name": "Hotel Sera Grand by Verbatim Hospitality",
        "latitude": 12.806821,
        "longitude": 80.0284149,
        "full_address": "Hotel Sera Grand by Verbatim Hospitality, No:3,CMDA Town Centre Maraimalai Nagar,GST Road NH-45 Maraimalai Nagar, Chennai, Tamil Nadu 603203, India",
        "review_count": 525,
        "rating": 3.9,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "http://www.seragrandhotel.com",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f79645a65267:0x19e5502e9f5e5db1",
        "cid": "1865985781787418033",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJZ1KmRZb3UjoRsV1eny5Q5Rk&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "106667896314212672530",
        "owner_link": "https://maps.google.com/maps/contrib/106667896314212672530",
        "owner_name": "Hotel Sera Grand by Verbatim Hospitality",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNvhCINWfJWSib5GKtz-u7sR44gHQ3LosuwabtO",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNvhCINWfJWSib5GKtz-u7sR44gHQ3LosuwabtO",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNvhCINWfJWSib5GKtz-u7sR44gHQ3LosuwabtO=w1024-h768-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.806957800000001,
            "longitude": 80.0284784,
            "type": "photo",
            "photo_datetime_utc": "2022-01-01T00:00:00.000Z",
            "photo_timestamp": 1640995200
          }
        ],
        "reviews_per_rating": {
          "1": 49,
          "2": 29,
          "3": 77,
          "4": 153,
          "5": 217
        },
        "photo_count": 220,
        "about": null,
        "address": "No:3,CMDA Town Centre Maraimalai Nagar,GST Road NH-45 Maraimalai Nagar, Chennai, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "No:3,CMDA Town Centre Maraimalai Nagar,GST Road NH-45 Maraimalai Nagar",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.4,
          "Things to do": 2.6,
          "Transit": 4.8,
          "Airports": 3.1
        },
        "hotel_amenities": {
          "Free Wi-Fi": true,
          "Free breakfast": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52f73270d49e6d:0x17ef115d62a52b5",
        "google_id": "0x3a52f73270d49e6d:0x17ef115d62a52b5",
        "place_id": "ChIJbZ7UcDL3UjoRtVIq1hXxfgE",
        "phone_number": "+911246201615",
        "name": "Flagship Elite Residency",
        "latitude": 12.811442999999999,
        "longitude": 80.0371047,
        "full_address": "Flagship Elite Residency, 11/69, Near By SRM Haspital,potheri,kattankulathur kattankulathur, Chennai, Tamil Nadu 603203, India",
        "review_count": 3,
        "rating": 1,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.oyorooms.com/205051",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f73270d49e6d:0x17ef115d62a52b5",
        "cid": "107788517193175733",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJbZ7UcDL3UjoRtVIq1hXxfgE&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "112144833942974464952",
        "owner_link": "https://maps.google.com/maps/contrib/112144833942974464952",
        "owner_name": "Flagship Elite Residency",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNTXulm5T-VsCY_uH0C3L0HSoqMNOQ3nzrfIaC2",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNTXulm5T-VsCY_uH0C3L0HSoqMNOQ3nzrfIaC2",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNTXulm5T-VsCY_uH0C3L0HSoqMNOQ3nzrfIaC2=w640-h427-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.811544999999999,
            "longitude": 80.0371143,
            "type": "photo",
            "photo_datetime_utc": "2023-04-15T00:00:00.000Z",
            "photo_timestamp": 1681516800
          }
        ],
        "reviews_per_rating": {
          "1": 3,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "photo_count": 34,
        "about": null,
        "address": "11/69, Near By SRM Haspital,potheri,kattankulathur kattankulathur, Chennai, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "11/69, Near By SRM Haspital,potheri,kattankulathur kattankulathur",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 2.9,
          "Things to do": 2.7,
          "Transit": 4,
          "Airports": 2.6
        },
        "hotel_amenities": {
          "Free Wi-Fi": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52f792745ab633:0xbe9400ff05479f3a",
        "google_id": "0x3a52f792745ab633:0xbe9400ff05479f3a",
        "place_id": "ChIJM7ZadJL3UjoROp9HBf8AlL4",
        "phone_number": "+914422336677",
        "name": "V FIVE HOTEL",
        "latitude": 12.804438,
        "longitude": 80.0269221,
        "full_address": "V FIVE HOTEL, 23, MGR Salai, Chengalpattu, Grand Southern Trunk Rd, opposite Kattankulathur, R.S, Maraimalai Nagar, Tamil Nadu 603203, India",
        "review_count": 165,
        "rating": 4.5,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.vfivehotel.com",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f792745ab633:0xbe9400ff05479f3a",
        "cid": "13732602259064725306",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJM7ZadJL3UjoROp9HBf8AlL4&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "113288342500480801606",
        "owner_link": "https://maps.google.com/maps/contrib/113288342500480801606",
        "owner_name": "V FIVE HOTEL",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "https://images.trvl-media.com/lodging/89000000/88730000/88726200/88726158/0d8cd589_z.jpg",
            "photo_url": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwnT90ABHnBFpGhZS6hwKjAeq-labry3CRCPv8iugFTQtl77Lir5ZIpK24xCDkCU-KJQlvlolga8vilOPjounJAXRzv9ZugH81JNRdfGhiCMjhHX1dzxnyrqjNV6YYZQkWasGSEySPEf02zlXVJz10-o94udNuu_JOXyL48kiu-32zgrVx274YcN",
            "photo_url_large": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwnT90ABHnBFpGhZS6hwKjAeq-labry3CRCPv8iugFTQtl77Lir5ZIpK24xCDkCU-KJQlvlolga8vilOPjounJAXRzv9ZugH81JNRdfGhiCMjhHX1dzxnyrqjNV6YYZQkWasGSEySPEf02zlXVJz10-o94udNuu_JOXyL48kiu-32zgrVx274YcN=w1000-h562-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8045324,
            "longitude": 80.02699609999999,
            "type": "photo",
            "photo_datetime_utc": "2023-03-13T00:00:00.000Z",
            "photo_timestamp": 1678665600
          }
        ],
        "reviews_per_rating": {
          "1": 7,
          "2": 2,
          "3": 9,
          "4": 27,
          "5": 120
        },
        "photo_count": 117,
        "about": null,
        "address": "23, MGR Salai, Chengalpattu, Grand Southern Trunk Rd, opposite Kattankulathur, R.S, Maraimalai Nagar, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "R.S",
        "street_address": "23, MGR Salai, Chengalpattu, Grand Southern Trunk Rd, opposite Kattankulathur",
        "city": "Maraimalai Nagar",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.4,
          "Things to do": 2.6,
          "Transit": 4.8,
          "Airports": 3.1
        },
        "hotel_amenities": null,
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a525d7fa75bd2cf:0x3972dc165edd13d9",
        "google_id": "0x3a525d7fa75bd2cf:0x3972dc165edd13d9",
        "place_id": "ChIJz9Jbp39dUjoR2RPdXhbccjk",
        "phone_number": "+911246201615",
        "name": "OYO J2 Service Apartment",
        "latitude": 12.8114153,
        "longitude": 80.03708259999999,
        "full_address": "Ward 197, Zone, OYO J2 Service Apartment, CMWSSB Division 197, 15, Sholinganallur, Chennai, Tamil Nadu 600119, India",
        "review_count": 90,
        "rating": 2.6,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.oyorooms.com/189456",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a525d7fa75bd2cf:0x3972dc165edd13d9",
        "cid": "4139612996145845209",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJz9Jbp39dUjoR2RPdXhbccjk&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "118202799801301536238",
        "owner_link": "https://maps.google.com/maps/contrib/118202799801301536238",
        "owner_name": "OYO J2 Service Apartment",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMSmMfvwlT5AJ8LcqYe-kHri8FgccQBG3Z9UH8m",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMSmMfvwlT5AJ8LcqYe-kHri8FgccQBG3Z9UH8m",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMSmMfvwlT5AJ8LcqYe-kHri8FgccQBG3Z9UH8m=w640-h427-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8115467,
            "longitude": 80.037095,
            "type": "photo",
            "photo_datetime_utc": "2023-02-16T00:00:00.000Z",
            "photo_timestamp": 1676505600
          }
        ],
        "reviews_per_rating": {
          "1": 50,
          "2": 4,
          "3": 2,
          "4": 4,
          "5": 30
        },
        "photo_count": 45,
        "about": null,
        "address": "Ward 197, Zone, CMWSSB Division 197, 15, Sholinganallur, Chennai, Tamil Nadu 600119, India",
        "order_link": null,
        "price_level": null,
        "district": "Sholinganallur",
        "street_address": "Ward 197, Zone, CMWSSB Division 197, 15",
        "city": "Chennai",
        "zipcode": "600119",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 2.9,
          "Things to do": 2.7,
          "Transit": 4,
          "Airports": 2.6
        },
        "hotel_amenities": {
          "Free Wi-Fi": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52f71e92e5bb47:0x58b97df69fd34d8c",
        "google_id": "0x3a52f71e92e5bb47:0x58b97df69fd34d8c",
        "place_id": "ChIJR7vlkh73UjoRjE3Tn_Z9uVg",
        "phone_number": "+917448939627",
        "name": "Sanns Tropicana Hotel",
        "latitude": 12.8396976,
        "longitude": 80.05566429999999,
        "full_address": "New No: 7, Sanns Tropicana Hotel, 2, Vishveswa Iyer Street, Srinivasapuram, Guduvancheri, Tamil Nadu 603202, India",
        "review_count": 93,
        "rating": 4.1,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "http://www.sannstropicana.com",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f71e92e5bb47:0x58b97df69fd34d8c",
        "cid": "6393279644225981836",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJR7vlkh73UjoRjE3Tn_Z9uVg&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "100266330181088485966",
        "owner_link": "https://maps.google.com/maps/contrib/100266330181088485966",
        "owner_name": "Sanns Tropicana Hotel",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMtmRkLaWCPO0Rv7zWpUfuLg7jfMlQlUWGFQAKI",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMtmRkLaWCPO0Rv7zWpUfuLg7jfMlQlUWGFQAKI",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMtmRkLaWCPO0Rv7zWpUfuLg7jfMlQlUWGFQAKI=w738-h563-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8396505,
            "longitude": 80.0556414,
            "type": "photo",
            "photo_datetime_utc": "2021-12-11T00:00:00.000Z",
            "photo_timestamp": 1639180800
          }
        ],
        "reviews_per_rating": {
          "1": 10,
          "2": 5,
          "3": 8,
          "4": 13,
          "5": 57
        },
        "photo_count": 48,
        "about": null,
        "address": "New No: 7, 2, Vishveswa Iyer Street, Srinivasapuram, Guduvancheri, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": "Srinivasapuram",
        "street_address": "New No: 7, 2, Vishveswa Iyer Street",
        "city": "Guduvancheri",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.3,
          "Things to do": 2.7,
          "Transit": 4.8,
          "Airports": 3.1
        },
        "hotel_amenities": {
          "Free Wi-Fi": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52f7bc0b4a09af:0x3c8e231c9c7e5a79",
        "google_id": "0x3a52f7bc0b4a09af:0x3c8e231c9c7e5a79",
        "place_id": "ChIJrwlKC7z3UjoReVp-nBwjjjw",
        "phone_number": "+911246201615",
        "name": "Flagship Grand Residency",
        "latitude": 12.8116392,
        "longitude": 80.036981,
        "full_address": "Flagship Grand Residency, 11/69, Kattankulathur Main Rd, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 6,
        "rating": 1.7,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.oyorooms.com/199537",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7bc0b4a09af:0x3c8e231c9c7e5a79",
        "cid": "4363463694760172153",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJrwlKC7z3UjoReVp-nBwjjjw&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "104756697725815048385",
        "owner_link": "https://maps.google.com/maps/contrib/104756697725815048385",
        "owner_name": "Flagship Grand Residency",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "Mo6SY1bVfgmjsnyZknUm5A",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Mo6SY1bVfgmjsnyZknUm5A&cb_client=search.gws-prod.gps&w=86&h=86&yaw=319.64435&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.811363276428512,
            "longitude": 80.03722144729105,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": {
          "1": 5,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 1
        },
        "photo_count": 2,
        "about": null,
        "address": "11/69, Kattankulathur Main Rd, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "11/69, Kattankulathur Main Rd",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 2.9,
          "Things to do": 2.7,
          "Transit": 4,
          "Airports": 2.6
        },
        "hotel_amenities": {
          "Free Wi-Fi": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52fbe6d6714259:0x858dd7098dce970a",
        "google_id": "0x3a52fbe6d6714259:0x858dd7098dce970a",
        "place_id": "ChIJWUJx1ub7UjoRCpfOjQnXjYU",
        "phone_number": "+914467414243",
        "name": "Welcomhotel By ITC Hotels, GST Road, Chennai - Premium Business Hotel on GST Road | Near Mahindra World City",
        "latitude": 12.764826999999999,
        "longitude": 80.00576459999999,
        "full_address": "Welcomhotel By ITC Hotels, GST Road, Chennai - Premium Business Hotel on GST Road | Near Mahindra World City, 1, GST Road, Singaperumal Koil, Maraimalai Nagar, Tamil Nadu 603209, India",
        "review_count": 4622,
        "rating": 4.2,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.itchotels.com/in/en/welcomhotelgstroad-chennai",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52fbe6d6714259:0x858dd7098dce970a",
        "cid": "9623584414794422026",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJWUJx1ub7UjoRCpfOjQnXjYU&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "112690081877448122489",
        "owner_link": "https://maps.google.com/maps/contrib/112690081877448122489",
        "owner_name": "Welcomhotel By ITC Hotels, GST Road, Chennai - Premium Business Hotel on GST Road | Near Mahindra World City",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipO_C00PZYvzNoqTT8fFi2LzKOLkUckYztMOH7MS",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipO_C00PZYvzNoqTT8fFi2LzKOLkUckYztMOH7MS",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipO_C00PZYvzNoqTT8fFi2LzKOLkUckYztMOH7MS=w8688-h5792-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.7649615,
            "longitude": 80.005768,
            "type": "photo",
            "photo_datetime_utc": "2021-10-16T00:00:00.000Z",
            "photo_timestamp": 1634342400
          }
        ],
        "reviews_per_rating": {
          "1": 158,
          "2": 127,
          "3": 492,
          "4": 1544,
          "5": 2301
        },
        "photo_count": 4905,
        "about": {
          "summary": "This upmarket hotel is less than 1 km from Singaperumal Koil train station and 4 km from the businesses at Mahindra World City. The understated rooms provide Wi-Fi access, flat-screen TVs and minibars, as well as tea and coffeemaking facilities. Club rooms grant access to a private lounge. Suites add living areas, and upgraded suites feature dining areas. Parking is free. An airy buffet restaurant features a terrace. There's also a cafe, a bar, and a grill next to an outdoor pool. Other amenities include a gym, a spa and a ballroom, as well as billiard and snooker tables.",
          "details": null
        },
        "address": "1, GST Road, Singaperumal Koil, Maraimalai Nagar, Tamil Nadu 603209, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "1, GST Road, Singaperumal Koil",
        "city": "Maraimalai Nagar",
        "zipcode": "603209",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.3,
          "Things to do": 2.8,
          "Transit": 4.1,
          "Airports": 2.6
        },
        "hotel_amenities": {
          "Free Wi-Fi": true
        },
        "hotel_stars": 5,
        "hotel_review_summary": {
          "Rooms": {
            "score": 3.8,
            "summary": [
              "Guests liked the large, clean rooms, though some commented maintenance could be improved",
              "Guests liked the quiet rooms",
              "Some guests mentioned bathroom cleanliness could be improved"
            ]
          },
          "Location": {
            "score": 3.9,
            "summary": [
              "Sightseeing nearby"
            ]
          },
          "Service & facilities": {
            "score": 4.1,
            "summary": [
              "Guests appreciated the friendly staff",
              "Some guests said management & housekeeping could be improved"
            ]
          }
        }
      },
      {
        "business_id": "0x3a52f1b80ce3fcdf:0x4b0ed0a8ecb8975a",
        "google_id": "0x3a52f1b80ce3fcdf:0x4b0ed0a8ecb8975a",
        "place_id": "ChIJ3_zjDLjxUjoRWpe47KjQDks",
        "phone_number": "+914467118500",
        "name": "Mercure Chennai Sriperumbudur",
        "latitude": 12.854771699999999,
        "longitude": 79.94156679999999,
        "full_address": "Mercure Chennai Sriperumbudur, Cp 8 Sipcot Industrial Park Oragadam Sriperumbudur, Chennai, Tamil Nadu 602105, India",
        "review_count": 2793,
        "rating": 4.5,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=9249&merchantid=seo-maps-IN-9249&sourceid=aw-cen&y_source=1_MTUzNjI1ODItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f1b80ce3fcdf:0x4b0ed0a8ecb8975a",
        "cid": "5408489626463147866",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ3_zjDLjxUjoRWpe47KjQDks&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "106032318269434214825",
        "owner_link": "https://maps.google.com/maps/contrib/106032318269434214825",
        "owner_name": "Mercure Chennai Sriperumbudur",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "https://images.trvl-media.com/lodging/19000000/18110000/18108500/18108440/da3e8e22_z.jpg",
            "photo_url": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwkxjbUREM3KvmJzJPdJ3yL379pnX7iGOPrtNOXcNCg2rMiakQssHzJzW3ndVlbXL60-uCRSBoanMPXr2vmF8DmZILoAn-OQYuOyKJFf24QdnZZR68kGZgy5ZSeg8E5Dpa7uwbXdm_uzNatJvfCEviTT96gcdLXW0ArhJpqZiml_O-fqkR9qsJc",
            "photo_url_large": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwkxjbUREM3KvmJzJPdJ3yL379pnX7iGOPrtNOXcNCg2rMiakQssHzJzW3ndVlbXL60-uCRSBoanMPXr2vmF8DmZILoAn-OQYuOyKJFf24QdnZZR68kGZgy5ZSeg8E5Dpa7uwbXdm_uzNatJvfCEviTT96gcdLXW0ArhJpqZiml_O-fqkR9qsJc=w1000-h750-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8544012,
            "longitude": 79.9415762,
            "type": "photo",
            "photo_datetime_utc": "2023-03-14T00:00:00.000Z",
            "photo_timestamp": 1678752000
          }
        ],
        "reviews_per_rating": {
          "1": 55,
          "2": 42,
          "3": 178,
          "4": 600,
          "5": 1918
        },
        "photo_count": 2116,
        "about": {
          "summary": "Simple, modern rooms & suites in a relaxed hotel with a restaurant, a sports bar & an outdoor pool.",
          "details": null
        },
        "address": "Cp 8 Sipcot Industrial Park Oragadam Sriperumbudur, Chennai, Tamil Nadu 602105, India",
        "order_link": null,
        "price_level": null,
        "district": "Oragadam Industrial Corridor",
        "street_address": "Cp 8 Sipcot Industrial Park Oragadam Sriperumbudur",
        "city": "Chennai",
        "zipcode": "602105",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 2.8,
          "Things to do": 2.6,
          "Transit": 3.9,
          "Airports": 2.5
        },
        "hotel_amenities": {
          "Free Wi-Fi": true,
          "Free breakfast": true
        },
        "hotel_stars": 4,
        "hotel_review_summary": {
          "Rooms": {
            "score": 4.55,
            "summary": [
              "Guests liked the clean, well-maintained rooms",
              "Guests liked the clean bathrooms, though some said they could be improved",
              "Rooms had views"
            ]
          },
          "Location": {
            "score": 4.35,
            "summary": [
              "Easily accessible by car"
            ]
          },
          "Service & facilities": {
            "score": 4.9,
            "summary": [
              "Guests appreciated the friendly, professional staff",
              "Guests liked the hotel management, reception & housekeeping",
              "Guests enjoyed the pool"
            ]
          }
        }
      },
      {
        "business_id": "0x3a52fb078fc7de9b:0xf41e3dca4e051e9e",
        "google_id": "0x3a52fb078fc7de9b:0xf41e3dca4e051e9e",
        "place_id": "ChIJm97Hjwf7UjoRnh4FTso9HvQ",
        "phone_number": "+914445406699",
        "name": "Fairfield by Marriott Chennai Mahindra World City",
        "latitude": 12.7383495,
        "longitude": 80.0024054,
        "full_address": "Fairfield by Marriott Chennai Mahindra World City, Near, Main Entrance, Mahindra World City, Chennai, Tamil Nadu 603002, India",
        "review_count": 2331,
        "rating": 4.1,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.marriott.com/en-us/hotels/maafh-fairfield-by-marriott-chennai-mahindra-world-city/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52fb078fc7de9b:0xf41e3dca4e051e9e",
        "cid": "17590565133657382558",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJm97Hjwf7UjoRnh4FTso9HvQ&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "105165763911045224193",
        "owner_link": "https://maps.google.com/maps/contrib/105165763911045224193",
        "owner_name": "Fairfield by Marriott Chennai Mahindra World City",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel",
          "Meeting planning service"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPYd3ROpyUfjqoeLlauVvuFwXPHePrgV6npn_l1",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPYd3ROpyUfjqoeLlauVvuFwXPHePrgV6npn_l1",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPYd3ROpyUfjqoeLlauVvuFwXPHePrgV6npn_l1=w1440-h810-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.7381812,
            "longitude": 80.0021416,
            "type": "photo",
            "photo_datetime_utc": "2022-01-13T00:00:00.000Z",
            "photo_timestamp": 1642032000
          }
        ],
        "reviews_per_rating": {
          "1": 100,
          "2": 102,
          "3": 339,
          "4": 746,
          "5": 1044
        },
        "photo_count": 1775,
        "about": {
          "summary": "A 5-minute walk from Mahindra World City industrial hub, this cool, casual hotel in a functional modern building is 12 km from SRM University. Warm, relaxed rooms offer free Wi-Fi, flat-screens and minifridges, as well as tea and coffeemaking facilities. Room service is on offer 24/7 Free perks include parking and a breakfast buffet served in the funky dining room. There's a colourful, contemporary restaurant and a trendy lobby bar, as well as a 24-hour fitness area and a business centre.",
          "details": null
        },
        "address": "Near, Main Entrance, Mahindra World City, Chennai, Tamil Nadu 603002, India",
        "order_link": null,
        "price_level": null,
        "district": "Mahindra World City",
        "street_address": "Near, Main Entrance",
        "city": "Chennai",
        "zipcode": "603002",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.5,
          "Things to do": 2.7,
          "Transit": 2.8,
          "Airports": 2.4
        },
        "hotel_amenities": {
          "Free Wi-Fi": true,
          "Free breakfast": true
        },
        "hotel_stars": 4,
        "hotel_review_summary": {
          "Rooms": {
            "score": 3.45,
            "summary": [
              "Some guests commented the rooms were small & maintenance could be improved",
              "Guests liked the comfortable beds",
              "Some guests mentioned the bathrooms could be improved"
            ]
          },
          "Location": {
            "score": 4.8
          },
          "Service & facilities": {
            "score": 4.55,
            "summary": [
              "Guests appreciated the friendly, professional staff",
              "Guests spoke highly of the reception staff & housekeeping"
            ]
          }
        }
      },
      {
        "business_id": "0x3a52f64dd329552b:0x23d67e45f3c649dc",
        "google_id": "0x3a52f64dd329552b:0x23d67e45f3c649dc",
        "place_id": "ChIJK1Up0032UjoR3EnG80V-1iM",
        "phone_number": "+914427465946",
        "name": "Lifotel Suites KK INN by Crossway",
        "latitude": 12.851992599999999,
        "longitude": 80.0673528,
        "full_address": "Lifotel Suites KK INN by Crossway, 175, behind NPR Thirumana Mandapam, Mahalakshmi Nagar, Nandivaram-Guduvancheri, Tamil Nadu 603202, India",
        "review_count": 370,
        "rating": 4,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.lifotel.com/kkinn",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f64dd329552b:0x23d67e45f3c649dc",
        "cid": "2582390275251259868",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJK1Up0032UjoR3EnG80V-1iM&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "105467680501463743866",
        "owner_link": "https://maps.google.com/maps/contrib/105467680501463743866",
        "owner_name": "Lifotel Suites KK INN by Crossway",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "https://cdn.worldota.net/t/1024x768/content/55/6f/556f8596074efca57cb35baae99fa89d80f7f288.jpeg",
            "photo_url": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwmww8WTHOL2XoqI1LRmGAs1rk-rdOmhdsLnqCUKwBgXMLob_aKFsBVQ3_Y0j7A3jQKKtiFCQbOmK602SfeTcCOXss9qc809wuTWMHQHAynMYa5OtwhuUJOI7AJapRLWpD4L8pEdI2lm5nKSc_AJhcLH68cCQFC_i3b9w8v_BX37IDd0PzggF-g",
            "photo_url_large": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwmww8WTHOL2XoqI1LRmGAs1rk-rdOmhdsLnqCUKwBgXMLob_aKFsBVQ3_Y0j7A3jQKKtiFCQbOmK602SfeTcCOXss9qc809wuTWMHQHAynMYa5OtwhuUJOI7AJapRLWpD4L8pEdI2lm5nKSc_AJhcLH68cCQFC_i3b9w8v_BX37IDd0PzggF-g=w1024-h768-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.852005,
            "longitude": 80.0672943,
            "type": "photo",
            "photo_datetime_utc": "2023-01-17T00:00:00.000Z",
            "photo_timestamp": 1673913600
          }
        ],
        "reviews_per_rating": {
          "1": 23,
          "2": 16,
          "3": 55,
          "4": 125,
          "5": 151
        },
        "photo_count": 202,
        "about": null,
        "address": "175, behind NPR Thirumana Mandapam, Mahalakshmi Nagar, Nandivaram-Guduvancheri, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": "Mahalakshmi Nagar",
        "street_address": "175, behind NPR Thirumana Mandapam",
        "city": "Nandivaram-Guduvancheri",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.3,
          "Things to do": 2.8,
          "Transit": 4.6,
          "Airports": 3
        },
        "hotel_amenities": null,
        "hotel_stars": 3,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52f75edc95fffb:0xd8903211b0927f20",
        "google_id": "0x3a52f75edc95fffb:0xd8903211b0927f20",
        "place_id": "ChIJ-_-V3F73UjoRIH-SsBEykNg",
        "phone_number": "+919176657108",
        "name": "Hotel Vassi Palaze",
        "latitude": 12.8059561,
        "longitude": 80.0278828,
        "full_address": "R24H+94J Hotel Vassi Palaze, PLOT NO 3 CMDA TOWN CENTRE KATTANKULATHUR, Maraimalai Nagar, Tamil Nadu 603203, India",
        "review_count": 636,
        "rating": 3.6,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f75edc95fffb:0xd8903211b0927f20",
        "cid": "15605027760396992288",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ-_-V3F73UjoRIH-SsBEykNg&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "106448533699650567624",
        "owner_link": "https://maps.google.com/maps/contrib/106448533699650567624",
        "owner_name": "Hotel Vassi Palaze",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "https://cdn.worldota.net/t/1024x768/content/96/bc/96bcaa53025fc7d7c1922548fb54ae3e509d9deb.jpeg",
            "photo_url": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwmeVaBx2TycqphbkkE5ZpSbG_Ju2syaZVhafgyTM_xUCNkZAxVeM0QG7s2eGNmGM_5rFiYtpoLumB4Ye_Y6HKnUy-zAPDXwtq_fpgFd_ou5TpX7zcY-T_BJHA3bHEunOMXPCHIkfrRFUtOdb6QBOrpLP089_-LMdOLHItwsL971NSFZhl-_ekrZ",
            "photo_url_large": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwmeVaBx2TycqphbkkE5ZpSbG_Ju2syaZVhafgyTM_xUCNkZAxVeM0QG7s2eGNmGM_5rFiYtpoLumB4Ye_Y6HKnUy-zAPDXwtq_fpgFd_ou5TpX7zcY-T_BJHA3bHEunOMXPCHIkfrRFUtOdb6QBOrpLP089_-LMdOLHItwsL971NSFZhl-_ekrZ=w1024-h768-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8060466,
            "longitude": 80.0279516,
            "type": "photo",
            "photo_datetime_utc": "2022-09-11T00:00:00.000Z",
            "photo_timestamp": 1662854400
          }
        ],
        "reviews_per_rating": {
          "1": 78,
          "2": 50,
          "3": 123,
          "4": 168,
          "5": 217
        },
        "photo_count": 358,
        "about": null,
        "address": "R24H+94J, PLOT NO 3 CMDA TOWN CENTRE KATTANKULATHUR, Maraimalai Nagar, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "R24H+94J, PLOT NO 3 CMDA TOWN CENTRE KATTANKULATHUR",
        "city": "Maraimalai Nagar",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.4,
          "Things to do": 2.6,
          "Transit": 4.8,
          "Airports": 3.1
        },
        "hotel_amenities": {
          "Free Wi-Fi": true
        },
        "hotel_stars": 3,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52f61457dbdc1f:0x5e2571e266b7193d",
        "google_id": "0x3a52f61457dbdc1f:0x5e2571e266b7193d",
        "place_id": "ChIJH9zbVxT2UjoRPRm3ZuJxJV4",
        "phone_number": "+914466289999",
        "name": "Kalyan Grand - a business hotel",
        "latitude": 12.8736119,
        "longitude": 80.0785367,
        "full_address": "Kalyan Grand - a business hotel, 247, Grand Southern Trunk Rd, Next to Vandalur Zoo, Chennai, Tamil Nadu 600048, India",
        "review_count": 4405,
        "rating": 4.2,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.kalyangrand.com",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f61457dbdc1f:0x5e2571e266b7193d",
        "cid": "6783953630903343421",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJH9zbVxT2UjoRPRm3ZuJxJV4&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "108179698486987944329",
        "owner_link": "https://maps.google.com/maps/contrib/108179698486987944329",
        "owner_name": "Kalyan Grand - a business hotel",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPpvUf9ZXsj6FAYzgGmsSxuyvYXm2LyCLDZ0xEF",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPpvUf9ZXsj6FAYzgGmsSxuyvYXm2LyCLDZ0xEF",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPpvUf9ZXsj6FAYzgGmsSxuyvYXm2LyCLDZ0xEF=w5760-h3840-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8735658,
            "longitude": 80.0782067,
            "type": "photo",
            "photo_datetime_utc": "2021-06-15T00:00:00.000Z",
            "photo_timestamp": 1623715200
          }
        ],
        "reviews_per_rating": {
          "1": 214,
          "2": 140,
          "3": 486,
          "4": 1439,
          "5": 2126
        },
        "photo_count": 2284,
        "about": {
          "summary": "A kilometre from Arignar Anna Zoological Park, this vibrant business hotel is 3 km from Vandalur railway station, 12 km from companies in Madras Export Processing Zone and 18 km from Chennai International Airport. Brightly decorated rooms with a modern vibe feature free Wi-Fi, flat-screen TVs, minibars, and tea and coffeemaking equipment. All have desks, sitting areas, and glass-enclosed bathrooms. Suites add living areas. Room service is available 24/7. Amenities include a fitness room, a business centre and event space. There's also a colourful restaurant, a hip bar and an airy lounge; a breakfast buffet is offered for a fee.",
          "details": null
        },
        "address": "247, Grand Southern Trunk Rd, Next to Vandalur Zoo, Chennai, Tamil Nadu 600048, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "247, Grand Southern Trunk Rd, Next to Vandalur Zoo",
        "city": "Chennai",
        "zipcode": "600048",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.5,
          "Things to do": 3.2,
          "Transit": 4.5,
          "Airports": 3.1
        },
        "hotel_amenities": {
          "Free Wi-Fi": true,
          "Free breakfast": true
        },
        "hotel_stars": 3,
        "hotel_review_summary": {
          "Rooms": {
            "score": 4.1,
            "summary": [
              "Guests liked the clean rooms",
              "Guests liked the clean bathrooms, though some said they could be improved"
            ]
          },
          "Location": {
            "score": 4.5,
            "summary": [
              "Easily accessible by car",
              "Sightseeing nearby"
            ]
          },
          "Service & facilities": {
            "score": 4.45,
            "summary": [
              "Guests appreciated the friendly, professional staff",
              "Guests enjoyed the fitness center"
            ]
          }
        }
      },
      {
        "business_id": "0x3a52f77048b6055f:0xdaf601ab7a0a8178",
        "google_id": "0x3a52f77048b6055f:0xdaf601ab7a0a8178",
        "place_id": "ChIJXwW2SHD3UjoReIEKeqsB9to",
        "phone_number": "+911246201615",
        "name": "OYO J2 Service Apartment",
        "latitude": 12.811585899999999,
        "longitude": 80.03701939999999,
        "full_address": "OYO J2 Service Apartment, Potheri, Chennai, Tamil Nadu 603203, India",
        "review_count": 30,
        "rating": 2.3,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.oyorooms.com/183323",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f77048b6055f:0xdaf601ab7a0a8178",
        "cid": "15777800180537655672",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJXwW2SHD3UjoReIEKeqsB9to&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "116775774891999289191",
        "owner_link": "https://maps.google.com/maps/contrib/116775774891999289191",
        "owner_name": "OYO J2 Service Apartment",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOWkL99Bz0GvApZjltljHzBvkbOFYiuJzAKwtsO",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOWkL99Bz0GvApZjltljHzBvkbOFYiuJzAKwtsO",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOWkL99Bz0GvApZjltljHzBvkbOFYiuJzAKwtsO=w3840-h1728-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.811553799999999,
            "longitude": 80.0370164,
            "type": "photo",
            "photo_datetime_utc": "2023-03-03T00:00:00.000Z",
            "photo_timestamp": 1677801600
          }
        ],
        "reviews_per_rating": {
          "1": 16,
          "2": 3,
          "3": 3,
          "4": 2,
          "5": 6
        },
        "photo_count": 4,
        "about": null,
        "address": "Potheri, Chennai, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "Potheri",
        "city": "Chennai",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 2.9,
          "Things to do": 2.7,
          "Transit": 4,
          "Airports": 2.6
        },
        "hotel_amenities": {
          "Free Wi-Fi": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52f7be632d2669:0x5731b84f0a9cf127",
        "google_id": "0x3a52f7be632d2669:0x5731b84f0a9cf127",
        "place_id": "ChIJaSYtY773UjoRJ_GcCk-4MVc",
        "phone_number": "+911246201615",
        "name": "OYO Flagship 28658 The Swarg Residence",
        "latitude": 12.843545299999999,
        "longitude": 80.07035979999999,
        "full_address": "7,7a, OYO Flagship 28658 The Swarg Residence, TGP PARADISE, Mahalakshmi Nagar Extension 7, Chennai, Tamil Nadu 603202, India",
        "review_count": 344,
        "rating": 3.7,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.oyorooms.com/h/49681/?latitude=12.843556&longitude=80.070361",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7be632d2669:0x5731b84f0a9cf127",
        "cid": "6283005604778537255",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJaSYtY773UjoRJ_GcCk-4MVc&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "106156571083908314010",
        "owner_link": "https://maps.google.com/maps/contrib/106156571083908314010",
        "owner_name": "OYO Flagship 28658 The Swarg Residence",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNC5GA24j3yVo1jM7cNBmqXaugPSPaeoyjb77c_",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNC5GA24j3yVo1jM7cNBmqXaugPSPaeoyjb77c_",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNC5GA24j3yVo1jM7cNBmqXaugPSPaeoyjb77c_=w640-h427-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8434966,
            "longitude": 80.0703441,
            "type": "photo",
            "photo_datetime_utc": "2023-04-17T00:00:00.000Z",
            "photo_timestamp": 1681689600
          }
        ],
        "reviews_per_rating": {
          "1": 63,
          "2": 23,
          "3": 36,
          "4": 44,
          "5": 178
        },
        "photo_count": 58,
        "about": {
          "summary": "A 10-minute walk from the shore of Nandivaram Lake, this unassuming budget hotel is 3 km from Guduvancheri train station and 7 km from Arignar Anna Zoological Park. Simply decorated rooms feature air conditioners, ceiling fans and TVs, plus en suite wet rooms. Amenities include a restaurant and event space. Breakfast, parking and Wi-Fi are available. A generator is on-site.",
          "details": null
        },
        "address": "7,7a, TGP PARADISE, Mahalakshmi Nagar Extension 7, Chennai, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": "Mahalakshmi Nagar Extension 7",
        "street_address": "7,7a, TGP PARADISE",
        "city": "Chennai",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 2.7,
          "Things to do": 2.8,
          "Transit": 2.7,
          "Airports": 2.8
        },
        "hotel_amenities": {
          "Free Wi-Fi": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52f951770b41d9:0x1a51d7940d18a09d",
        "google_id": "0x3a52f951770b41d9:0x1a51d7940d18a09d",
        "place_id": "ChIJ2UELd1H5UjoRnaAYDZTXURo",
        "phone_number": "+917305081971",
        "name": "Hotel Bakya Slot - Rooms & Party Halls, Maraimalai Nagar",
        "latitude": 12.7981071,
        "longitude": 80.022643,
        "full_address": "Hotel Bakya Slot - Rooms & Party Halls, Maraimalai Nagar, HIG-41, Vallal MGR Salai, Grand Southern Trunk Rd, Maraimalai Nagar, Tamil Nadu 603209, India",
        "review_count": 361,
        "rating": 4.2,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.bakyaslot.com",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f951770b41d9:0x1a51d7940d18a09d",
        "cid": "1896533948974538909",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ2UELd1H5UjoRnaAYDZTXURo&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "111923666103478287132",
        "owner_link": "https://maps.google.com/maps/contrib/111923666103478287132",
        "owner_name": "Hotel Bakya Slot - Rooms & Party Halls, Maraimalai Nagar",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel",
          "Banquet hall",
          "Extended stay hotel",
          "Group accommodation",
          "Guest house",
          "Lodge",
          "Lodging",
          "Restaurant",
          "Serviced accommodation"
        ],
        "photos_sample": [
          {
            "photo_id": "https://images.trvl-media.com/lodging/89000000/88260000/88257100/88257089/d8ba1cd1_z.jpg",
            "photo_url": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwn5BoHEbplhlMixWRTI2H_lxWrmxsrqYnuWVyelQ5Kgcd1H7xxZzD8gRIuXU8iR5bu4mSKJqDdnUuq7rz3UgsEsI4PeiuqWf7He8Dq1J0ZGUr0eHmRZ6Rkn5AJrhIznvfF1UqVPVDAuTvQ7asvSLD-b74pm-zYIMuabBbVUA0icoM5cNiPTrEQ_",
            "photo_url_large": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwn5BoHEbplhlMixWRTI2H_lxWrmxsrqYnuWVyelQ5Kgcd1H7xxZzD8gRIuXU8iR5bu4mSKJqDdnUuq7rz3UgsEsI4PeiuqWf7He8Dq1J0ZGUr0eHmRZ6Rkn5AJrhIznvfF1UqVPVDAuTvQ7asvSLD-b74pm-zYIMuabBbVUA0icoM5cNiPTrEQ_=w1000-h666-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.798155699999999,
            "longitude": 80.02267379999999,
            "type": "photo",
            "photo_datetime_utc": "2023-03-06T00:00:00.000Z",
            "photo_timestamp": 1678060800
          }
        ],
        "reviews_per_rating": {
          "1": 24,
          "2": 17,
          "3": 34,
          "4": 73,
          "5": 213
        },
        "photo_count": 243,
        "about": {
          "summary": "In a building with a modern exterior, this informal hotel off the NH32 is 7 minutes away on foot from Maraimalai Nagar Kamarajar railway station and 5 km from the striking Padalathri Temple. The streamlined rooms with wood furnishings provide flat-screen TVs and air conditioning. A down-to-earth restaurant and a modest lobby lounge feature quirky murals. Parking, Wi-Fi and breakfast are available.",
          "details": null
        },
        "address": "HIG-41, Vallal MGR Salai, Grand Southern Trunk Rd, Maraimalai Nagar, Tamil Nadu 603209, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "HIG-41, Vallal MGR Salai, Grand Southern Trunk Rd",
        "city": "Maraimalai Nagar",
        "zipcode": "603209",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.3,
          "Things to do": 2.6,
          "Transit": 5,
          "Airports": 2.9
        },
        "hotel_amenities": {
          "Free Wi-Fi": true,
          "Free breakfast": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52ed760f149a77:0x2a39cacee370efc6",
        "google_id": "0x3a52ed760f149a77:0x2a39cacee370efc6",
        "place_id": "ChIJd5oUD3btUjoRxu9w487KOSo",
        "phone_number": "+914467140505",
        "name": "Fairfield by Marriott Sriperumbudur",
        "latitude": 12.9327542,
        "longitude": 79.90544849999999,
        "full_address": "Fairfield by Marriott Sriperumbudur, Sf No 153/6A Sipcot Industrial Park, Sriperumbudur, Tamil Nadu 602106, India",
        "review_count": 1406,
        "rating": 4.4,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.marriott.com/en-us/hotels/maafi-fairfield-by-marriott-sriperumbudur/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52ed760f149a77:0x2a39cacee370efc6",
        "cid": "3042686013193383878",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJd5oUD3btUjoRxu9w487KOSo&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "100433174941947891752",
        "owner_link": "https://maps.google.com/maps/contrib/100433174941947891752",
        "owner_name": "Fairfield by Marriott Sriperumbudur",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel",
          "Meeting planning service"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNPN0rDRZwnTduXGtSRqWYylY-wL5067buq6LRR",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNPN0rDRZwnTduXGtSRqWYylY-wL5067buq6LRR",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNPN0rDRZwnTduXGtSRqWYylY-wL5067buq6LRR=w2048-h1366-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.9332658,
            "longitude": 79.90553109999999,
            "type": "photo",
            "photo_datetime_utc": "2021-12-15T00:00:00.000Z",
            "photo_timestamp": 1639526400
          }
        ],
        "reviews_per_rating": {
          "1": 49,
          "2": 27,
          "3": 105,
          "4": 386,
          "5": 839
        },
        "photo_count": 1462,
        "about": {
          "summary": "Off the NH48, this refined hotel is 7 km from Sriperumbudur Lake and 9 km from the Hindu Adikesava Perumal Temple. Relaxed rooms feature free Wi-Fi and flat-screen TVs. All have minifridges, and tea and coffeemaking facilities. Some provide lake views. Room service is available 24/7. A bright, airy restaurant serves international cuisine. There’s also an outdoor pool and a fitness centre. A breakfast buffet is offered for a fee.",
          "details": null
        },
        "address": "Sf No 153/6A Sipcot Industrial Park, Sriperumbudur, Tamil Nadu 602106, India",
        "order_link": null,
        "price_level": null,
        "district": "Mambakkam",
        "street_address": "Sf No 153/6A Sipcot Industrial Park",
        "city": "Sriperumbudur",
        "zipcode": "602106",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 2.5,
          "Things to do": 2.2,
          "Transit": 3.1,
          "Airports": 2.1
        },
        "hotel_amenities": {
          "Free Wi-Fi": true,
          "Free breakfast": true
        },
        "hotel_stars": 4,
        "hotel_review_summary": {
          "Rooms": {
            "score": 3.95,
            "summary": [
              "Guests liked the clean rooms, though some commented they were small",
              "Some guests mentioned the bathrooms could be improved"
            ]
          },
          "Location": {
            "score": 3.85
          },
          "Service & facilities": {
            "score": 4.2,
            "summary": [
              "Guests appreciated the friendly staff",
              "Guests enjoyed the pool & fitness center"
            ]
          }
        }
      },
      {
        "business_id": "0x3a52f7a61f739abb:0x81d3c6dc93d3d807",
        "google_id": "0x3a52f7a61f739abb:0x81d3c6dc93d3d807",
        "place_id": "ChIJu5pzH6b3UjoRB9jTk9zG04E",
        "phone_number": "+911246201615",
        "name": "SPOT ON Hotel Le Palace",
        "latitude": 12.849253899999999,
        "longitude": 80.0634767,
        "full_address": "No.1b &1c, SPOT ON Hotel Le Palace, Pms towers, 1B&1C Hotel Le Palace, viswanathapuram main road, Guduvancheri, Tamil Nadu 603202, India",
        "review_count": 11,
        "rating": 2.8,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.oyorooms.com/80485",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7a61f739abb:0x81d3c6dc93d3d807",
        "cid": "9355039501653891079",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJu5pzH6b3UjoRB9jTk9zG04E&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "102665146846491106954",
        "owner_link": "https://maps.google.com/maps/contrib/102665146846491106954",
        "owner_name": "SPOT ON Hotel Le Palace",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "JSpHZ8VNkPuts602ySaEDg",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=JSpHZ8VNkPuts602ySaEDg&cb_client=search.gws-prod.gps&w=86&h=86&yaw=76.90695&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.849230194433073,
            "longitude": 80.06337215746639,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-29T00:00:00.000Z",
            "photo_timestamp": 1682726400
          }
        ],
        "reviews_per_rating": {
          "1": 5,
          "2": 0,
          "3": 1,
          "4": 2,
          "5": 3
        },
        "photo_count": 1,
        "about": null,
        "address": "No.1b &1c, Pms towers, 1B&1C Hotel Le Palace, viswanathapuram main road, Guduvancheri, Tamil Nadu 603202, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "No.1b &1c, Pms towers, 1B&1C Hotel Le Palace, viswanathapuram main road",
        "city": "Guduvancheri",
        "zipcode": "603202",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.2,
          "Things to do": 2.8,
          "Transit": 4.8,
          "Airports": 3
        },
        "hotel_amenities": {
          "Free Wi-Fi": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a52fb18cfe2c103:0x63214162351d55b1",
        "google_id": "0x3a52fb18cfe2c103:0x63214162351d55b1",
        "place_id": "ChIJA8Hizxj7UjoRsVUdNWJBIWM",
        "phone_number": "+911246201615",
        "name": "Super OYO Flagship Jp Residency",
        "latitude": 12.7682234,
        "longitude": 79.9924169,
        "full_address": "Super OYO Flagship Jp Residency, 99, Perumalpattu - Kottamedu Rd, Thirukkachur, Chennai, Tamil Nadu 603204, India",
        "review_count": 176,
        "rating": 3.8,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.oyorooms.com/83073",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52fb18cfe2c103:0x63214162351d55b1",
        "cid": "7143062374040032689",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJA8Hizxj7UjoRsVUdNWJBIWM&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "104973334076574944259",
        "owner_link": "https://maps.google.com/maps/contrib/104973334076574944259",
        "owner_name": "Super OYO Flagship Jp Residency",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOo6Zy9GsPBZ44yge9vPjZ_2c9L1h9wqsD6aQ9R",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOo6Zy9GsPBZ44yge9vPjZ_2c9L1h9wqsD6aQ9R",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOo6Zy9GsPBZ44yge9vPjZ_2c9L1h9wqsD6aQ9R=w759-h427-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.7682267,
            "longitude": 79.9924796,
            "type": "photo",
            "photo_datetime_utc": "2021-06-28T00:00:00.000Z",
            "photo_timestamp": 1624838400
          }
        ],
        "reviews_per_rating": {
          "1": 28,
          "2": 9,
          "3": 20,
          "4": 34,
          "5": 85
        },
        "photo_count": 51,
        "about": null,
        "address": "99, Perumalpattu - Kottamedu Rd, Thirukkachur, Chennai, Tamil Nadu 603204, India",
        "order_link": null,
        "price_level": null,
        "district": "Thirukkachur",
        "street_address": "99, Perumalpattu - Kottamedu Rd",
        "city": "Chennai",
        "zipcode": "603204",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 2.7,
          "Things to do": 2.5,
          "Transit": 3.2,
          "Airports": 2.4
        },
        "hotel_amenities": {
          "Free Wi-Fi": true,
          "Free breakfast": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      },
      {
        "business_id": "0x3a525fd96f408f7d:0x73a7c9067a4b81bc",
        "google_id": "0x3a525fd96f408f7d:0x73a7c9067a4b81bc",
        "place_id": "ChIJfY9Ab9lfUjoRvIFLegbJp3M",
        "phone_number": "+911246201615",
        "name": "Collection O 76868 Grace Residency",
        "latitude": 12.9805732,
        "longitude": 80.16399559999999,
        "full_address": "Collection O 76868 Grace Residency, 1, Airport Rd, Meenambakkam, Chennai, Tamil Nadu 600016, India",
        "review_count": 158,
        "rating": 3.2,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": "https://www.oyorooms.com//hotels-in-Chennai/?locale=en",
        "verified": true,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a525fd96f408f7d:0x73a7c9067a4b81bc",
        "cid": "8333850665131147708",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJfY9Ab9lfUjoRvIFLegbJp3M&q=hotels&authuser=0&hl=en&gl=US",
        "owner_id": "118214868138868563550",
        "owner_link": "https://maps.google.com/maps/contrib/118214868138868563550",
        "owner_name": "Collection O 76868 Grace Residency",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Hotel",
        "subtypes": [
          "Hotel"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOakULFW-XKu7staeq6BgISjpI93WBpIuJmj2PR",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOakULFW-XKu7staeq6BgISjpI93WBpIuJmj2PR",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOakULFW-XKu7staeq6BgISjpI93WBpIuJmj2PR=w8000-h6000-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.980565299999999,
            "longitude": 80.1639974,
            "type": "photo",
            "photo_datetime_utc": "2022-07-18T00:00:00.000Z",
            "photo_timestamp": 1658102400
          }
        ],
        "reviews_per_rating": {
          "1": 39,
          "2": 17,
          "3": 17,
          "4": 49,
          "5": 36
        },
        "photo_count": 76,
        "about": {
          "summary": "Catering to Indian nationals only and connected to a metro station, this unassuming budget hotel is 10 km from Guindy National Park and 16 km from Arignar Anna Zoological Park. It's 2 km from Chennai International Airport. Simply furnished rooms feature air conditioning, kettles and flat-screen TVs, as well as en suite wet rooms. Breakfast, lunch and dinner are available, as are Wi-Fi and parking.",
          "details": null
        },
        "address": "1, Airport Rd, Meenambakkam, Chennai, Tamil Nadu 600016, India",
        "order_link": null,
        "price_level": null,
        "district": "Meenambakkam",
        "street_address": "1, Airport Rd",
        "city": "Chennai",
        "zipcode": "600016",
        "state": "Tamil Nadu",
        "country": "IN",
        "hotel_location_rating": {
          "Overall": 3.6,
          "Things to do": 3.7,
          "Transit": 4.8,
          "Airports": 5
        },
        "hotel_amenities": {
          "Free Wi-Fi": true
        },
        "hotel_stars": null,
        "hotel_review_summary": null
      }
    ]
  }
  const [places, setPlaces] = useState(res.data)

  useEffect(() => {
    // console.log(places)

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'dbee5e4f74msh9f3cd8db535ed9bp146c9ejsned6da298e26a',
    //     'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
    //   }
    // };
    
    // fetch('https://local-business-data.p.rapidapi.com/search?query=Hotels&limit=20&lat=12.8230&lng=80.0444&zoom=13&language=en&region=us', options)
    //   .then(response => response.json())
    //   .then(response => setPlaces(response.data))
    //   .catch(err => console.error(err));
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
          places?.map((place, i) => {
            return (
              <Card key={i} name={place.name} address={place.full_address} photos={place.photos_sample} rating={place.rating} noOfRatings={place.user_ratings_total} reference={Array.isArray(place.photos) ? place.photos[0].photo_reference : ''} tags={place.types} />
            )
          })
        }

      </div>
    </div>
  )
}

export default Lodging