import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Attractions = () => {
  const res= {
    "status": "OK",
    "request_id": "dcfd89c8-6c5d-4d57-8ebb-e8c809d7ab08",
    "parameters": {
      "query": "attractions",
      "language": "en",
      "region": "us",
      "lat": 12.823,
      "lng": 80.0444,
      "limit": 20
    },
    "data": [
      {
        "business_id": "0x3a52f70ca724becb:0x3c1c4acf78787e54",
        "google_id": "0x3a52f70ca724becb:0x3c1c4acf78787e54",
        "place_id": "ChIJy74kpwz3UjoRVH54eM9KHDw",
        "phone_number": null,
        "name": "Potheri pond",
        "latitude": 12.8190175,
        "longitude": 80.0417851,
        "full_address": "R29R+JP3 Potheri pond, Pillayar Koil St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 5,
        "rating": 2.8,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f70ca724becb:0x3c1c4acf78787e54",
        "cid": "4331419196563422804",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJy74kpwz3UjoRVH54eM9KHDw&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "107714438442315477866",
        "owner_link": "https://maps.google.com/maps/contrib/107714438442315477866",
        "owner_name": "Potheri pond",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMzHVDG96z3AE05KqPIu_8wriAAqEH6-l1V2q6t",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMzHVDG96z3AE05KqPIu_8wriAAqEH6-l1V2q6t",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMzHVDG96z3AE05KqPIu_8wriAAqEH6-l1V2q6t=w4000-h3000-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.81901748544649,
            "longitude": 80.04178508163773,
            "type": "photo",
            "photo_datetime_utc": "2022-05-14T00:00:00.000Z",
            "photo_timestamp": 1652486400
          }
        ],
        "reviews_per_rating": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "photo_count": 13,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "R29R+JP3, Pillayar Koil St, Potheri, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "R29R+JP3, Pillayar Koil St",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7f26ef8e00d:0x841a130c9a217960",
        "google_id": "0x3a52f7f26ef8e00d:0x841a130c9a217960",
        "place_id": "ChIJDeD4bvL3UjoRYHkhmgwTGoQ",
        "phone_number": null,
        "name": "Banyan Tree",
        "latitude": 12.8283601,
        "longitude": 80.0486901,
        "full_address": "Banyan Tree, 1136, Potheri, SRM Nagar, Kumaran Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 3,
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
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7f26ef8e00d:0x841a130c9a217960",
        "cid": "9518941707247384928",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJDeD4bvL3UjoRYHkhmgwTGoQ&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "109205318158219014838",
        "owner_link": "https://maps.google.com/maps/contrib/109205318158219014838",
        "owner_name": "Banyan Tree",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipONo3GnpN5j-Y_NVOBY4Fu-QwEbUU8boB-uqRzX",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipONo3GnpN5j-Y_NVOBY4Fu-QwEbUU8boB-uqRzX",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipONo3GnpN5j-Y_NVOBY4Fu-QwEbUU8boB-uqRzX=w2448-h3264-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.828360062442695,
            "longitude": 80.0486900731957,
            "type": "photo",
            "photo_datetime_utc": "2023-03-01T00:00:00.000Z",
            "photo_timestamp": 1677628800
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 3
        },
        "photo_count": 10,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "1136, Potheri, SRM Nagar, Kumaran Nagar, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri, SRM Nagar, Kumaran Nagar",
        "street_address": "1136",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7dabe952889:0xe2e5f49f585deef1",
        "google_id": "0x3a52f7dabe952889:0xe2e5f49f585deef1",
        "place_id": "ChIJiSiVvtr3UjoR8e5dWJ_05eI",
        "phone_number": null,
        "name": "THAILAVARAM Mountain",
        "latitude": 12.8332225,
        "longitude": 80.0427797,
        "full_address": "R2MV+74J THAILAVARAM Mountain, Potheri, Thailavaram, Tamil Nadu 603203, India",
        "review_count": 7,
        "rating": 3.3,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7dabe952889:0xe2e5f49f585deef1",
        "cid": "16349742987457982193",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJiSiVvtr3UjoR8e5dWJ_05eI&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "117554532680829329020",
        "owner_link": "https://maps.google.com/maps/contrib/117554532680829329020",
        "owner_name": "THAILAVARAM Mountain",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPEt8AFOiiJxADit3NXeaIW4dlWZnV6ef8jVmbj",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPEt8AFOiiJxADit3NXeaIW4dlWZnV6ef8jVmbj",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPEt8AFOiiJxADit3NXeaIW4dlWZnV6ef8jVmbj=w720-h540-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8332059,
            "longitude": 80.0427756,
            "type": "photo",
            "photo_datetime_utc": "2022-04-17T00:00:00.000Z",
            "photo_timestamp": 1650153600
          }
        ],
        "reviews_per_rating": {
          "1": 2,
          "2": 0,
          "3": 2,
          "4": 0,
          "5": 3
        },
        "photo_count": 13,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "R2MV+74J, Potheri, Thailavaram, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": "Potheri",
        "street_address": "R2MV+74J",
        "city": "Thailavaram",
        "zipcode": null,
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f74c8bc4413f:0xa8e72ba83867382c",
        "google_id": "0x3a52f74c8bc4413f:0xa8e72ba83867382c",
        "place_id": "ChIJP0HEi0z3UjoRLDhnOKgr56g",
        "phone_number": null,
        "name": "ஸ்ரீ காட்டுபாக்கம் அங்காளபரமேஸ்வரி பிடாரி இளங்காளியம்மன்",
        "latitude": 12.8341665,
        "longitude": 80.0311735,
        "full_address": "R2MJ+MF7 ஸ்ரீ காட்டுபாக்கம் அங்காளபரமேஸ்வரி பிடாரி இளங்காளியம்மன், Kattupakkam, Tamil Nadu 603203, India",
        "review_count": 1,
        "rating": 1,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f74c8bc4413f:0xa8e72ba83867382c",
        "cid": "12170744519492843564",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJP0HEi0z3UjoRLDhnOKgr56g&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "114767858016126215431",
        "owner_link": "https://maps.google.com/maps/contrib/114767858016126215431",
        "owner_name": "ஸ்ரீ காட்டுபாக்கம் அங்காளபரமேஸ்வரி பிடாரி இளங்காளியம்மன்",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipMOvonvkTSFbhk3A7VpQ8NIOne3xoW-xsTJEwxY",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMOvonvkTSFbhk3A7VpQ8NIOne3xoW-xsTJEwxY",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMOvonvkTSFbhk3A7VpQ8NIOne3xoW-xsTJEwxY=w2076-h4608-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8341029,
            "longitude": 80.0311038,
            "type": "photo",
            "photo_datetime_utc": "2022-04-10T00:00:00.000Z",
            "photo_timestamp": 1649548800
          }
        ],
        "reviews_per_rating": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "photo_count": 3,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "R2MJ+MF7, Kattupakkam, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "R2MJ+MF7",
        "city": "Kattupakkam",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f767caa0156d:0x6471af58b31bb8b",
        "google_id": "0x3a52f767caa0156d:0x6471af58b31bb8b",
        "place_id": "ChIJbRWgymf3UjoRi7sxi_UaRwY",
        "phone_number": null,
        "name": "Lake sunset view point lite",
        "latitude": 12.8054513,
        "longitude": 80.0245948,
        "full_address": "R24F+5RQ Lake sunset view point lite, Kattankulathur, Tamil Nadu 603203, India",
        "review_count": 3,
        "rating": 4.3,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f767caa0156d:0x6471af58b31bb8b",
        "cid": "452359929478626187",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJbRWgymf3UjoRi7sxi_UaRwY&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "105962446931720445816",
        "owner_link": "https://maps.google.com/maps/contrib/105962446931720445816",
        "owner_name": "Lake sunset view point lite",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPJDeTF538eUG5FnRXWExuZ-vUfIFSDN5-OgYpZ",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPJDeTF538eUG5FnRXWExuZ-vUfIFSDN5-OgYpZ",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPJDeTF538eUG5FnRXWExuZ-vUfIFSDN5-OgYpZ=w4000-h6000-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.805231299999999,
            "longitude": 80.02509839999999,
            "type": "photo",
            "photo_datetime_utc": "2021-10-30T00:00:00.000Z",
            "photo_timestamp": 1635552000
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 1
        },
        "photo_count": 3,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "R24F+5RQ, Kattankulathur, Tamil Nadu 603203, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "R24F+5RQ",
        "city": "Kattankulathur",
        "zipcode": "603203",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f78c2978cecb:0x8439668960afd7d",
        "google_id": "0x3a52f78c2978cecb:0x8439668960afd7d",
        "place_id": "ChIJy854KYz3UjoRff0KlmiWQwg",
        "phone_number": null,
        "name": "Kilambakkam Lake",
        "latitude": 12.8765317,
        "longitude": 80.0691107,
        "full_address": "V3G9+JJ9 Kilambakkam Lake, Vandalur, Tamil Nadu 600048, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f78c2978cecb:0x8439668960afd7d",
        "cid": "595484951681105277",
        "reviews_link": null,
        "owner_id": "112063375252031175895",
        "owner_link": "https://maps.google.com/maps/contrib/112063375252031175895",
        "owner_name": "Kilambakkam Lake",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "UVqbIGEJenp6FuymaYK74Q",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=UVqbIGEJenp6FuymaYK74Q&cb_client=search.gws-prod.gps&w=86&h=86&yaw=166.52672&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.8776088806022,
            "longitude": 80.06884596494343,
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
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "V3G9+JJ9, Vandalur, Tamil Nadu 600048, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "V3G9+JJ9",
        "city": "Vandalur",
        "zipcode": "600048",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f936a213389f:0x34319e6c1dee9f6c",
        "google_id": "0x3a52f936a213389f:0x34319e6c1dee9f6c",
        "place_id": "ChIJnzgTojb5UjoRbJ_uHWyeMTQ",
        "phone_number": null,
        "name": "Yogi babu",
        "latitude": 12.796695099999999,
        "longitude": 80.0269699,
        "full_address": "Q2WG+QRV Yogi babu, Maraimalai Nagar, Tamil Nadu 603209, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f936a213389f:0x34319e6c1dee9f6c",
        "cid": "3760961351026909036",
        "reviews_link": null,
        "owner_id": "116800097208861644715",
        "owner_link": "https://maps.google.com/maps/contrib/116800097208861644715",
        "owner_name": "Yogi babu",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "lDiAE5cBh0XsDw7eGgb3Tw",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=lDiAE5cBh0XsDw7eGgb3Tw&cb_client=search.gws-prod.gps&w=86&h=86&yaw=216.00813&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.796906315301205,
            "longitude": 80.02712731256142,
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
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "Q2WG+QRV, Maraimalai Nagar, Tamil Nadu 603209, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "Q2WG+QRV",
        "city": "Maraimalai Nagar",
        "zipcode": "603209",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52519f0ae6dde7:0x311df2b5993586ca",
        "google_id": "0x3a52519f0ae6dde7:0x311df2b5993586ca",
        "place_id": "ChIJ593mCp9RUjoRyoY1mbXyHTE",
        "phone_number": null,
        "name": "Kelambakkam - thaiyur mini waterfall",
        "latitude": 12.7794212,
        "longitude": 80.1899406,
        "full_address": "Q5HQ+QX8 Kelambakkam - thaiyur mini waterfall, Kelambakkam, Tamil Nadu 603103, India",
        "review_count": 120,
        "rating": 4.2,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52519f0ae6dde7:0x311df2b5993586ca",
        "cid": "3539251743956502218",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ593mCp9RUjoRyoY1mbXyHTE&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "107514530703250992240",
        "owner_link": "https://maps.google.com/maps/contrib/107514530703250992240",
        "owner_name": "Kelambakkam - thaiyur mini waterfall",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOcTeaBY6g9j1_GABd3q5a6JI3BxcbSBxw67AHv",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOcTeaBY6g9j1_GABd3q5a6JI3BxcbSBxw67AHv",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOcTeaBY6g9j1_GABd3q5a6JI3BxcbSBxw67AHv=w1965-h1280-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.77942121712683,
            "longitude": 80.1899406045326,
            "type": "photo",
            "photo_datetime_utc": "2023-01-18T00:00:00.000Z",
            "photo_timestamp": 1674000000
          }
        ],
        "reviews_per_rating": {
          "1": 5,
          "2": 6,
          "3": 16,
          "4": 26,
          "5": 67
        },
        "photo_count": 155,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "Q5HQ+QX8, Kelambakkam, Tamil Nadu 603103, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "Q5HQ+QX8",
        "city": "Kelambakkam",
        "zipcode": "603103",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7873512bfd9:0xd708c3a70ecba268",
        "google_id": "0x3a52f7873512bfd9:0xd708c3a70ecba268",
        "place_id": "ChIJ2b8SNYf3UjoRaKLLDqfDCNc",
        "phone_number": null,
        "name": "Otteri bird watching lake",
        "latitude": 12.891255899999999,
        "longitude": 80.08100089999999,
        "full_address": "V3RJ+GC2 Otteri bird watching lake, Vandalur, Tamil Nadu 600048, India",
        "review_count": 1,
        "rating": 5,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7873512bfd9:0xd708c3a70ecba268",
        "cid": "15494849640243372648",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ2b8SNYf3UjoRaKLLDqfDCNc&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "112491673914820005363",
        "owner_link": "https://maps.google.com/maps/contrib/112491673914820005363",
        "owner_name": "Otteri bird watching lake",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNEuyBR0MR_jLO6ukjl-vMsgeijFwM0JDKb5O8q",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNEuyBR0MR_jLO6ukjl-vMsgeijFwM0JDKb5O8q",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNEuyBR0MR_jLO6ukjl-vMsgeijFwM0JDKb5O8q=w4000-h1800-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8912537,
            "longitude": 80.08100089999999,
            "type": "photo",
            "photo_datetime_utc": "2022-04-02T00:00:00.000Z",
            "photo_timestamp": 1648857600
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 1
        },
        "photo_count": 4,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "V3RJ+GC2, Vandalur, Tamil Nadu 600048, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "V3RJ+GC2",
        "city": "Vandalur",
        "zipcode": null,
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f9390cc30cff:0xc95f02ad7e06c78b",
        "google_id": "0x3a52f9390cc30cff:0xc95f02ad7e06c78b",
        "place_id": "ChIJ_wzDDDn5UjoRi8cGfq0CX8k",
        "phone_number": null,
        "name": "Kondangi Lake view Point",
        "latitude": 12.752189699999999,
        "longitude": 80.0901287,
        "full_address": "Q32R+V3C Kondangi Lake view Point, Kondangi, Tamil Nadu 603209, India",
        "review_count": 375,
        "rating": 4.6,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f9390cc30cff:0xc95f02ad7e06c78b",
        "cid": "14510319468577998731",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ_wzDDDn5UjoRi8cGfq0CX8k&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "117147147637400809556",
        "owner_link": "https://maps.google.com/maps/contrib/117147147637400809556",
        "owner_name": "Kondangi Lake view Point",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOr9w_L4OA_GrezjOmFIWnaCtnaV1JV5Kdw7UXZ",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOr9w_L4OA_GrezjOmFIWnaCtnaV1JV5Kdw7UXZ",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOr9w_L4OA_GrezjOmFIWnaCtnaV1JV5Kdw7UXZ=w4080-h2296-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.752211599161031,
            "longitude": 80.0903472689061,
            "type": "photo",
            "photo_datetime_utc": "2022-02-01T00:00:00.000Z",
            "photo_timestamp": 1643673600
          }
        ],
        "reviews_per_rating": {
          "1": 5,
          "2": 3,
          "3": 24,
          "4": 86,
          "5": 257
        },
        "photo_count": 1022,
        "about": {
          "summary": null,
          "details": {
            "Accessibility": {
              "Wheelchair accessible entrance": false,
              "Wheelchair accessible parking lot": false
            },
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "Q32R+V3C, Kondangi, Tamil Nadu 603209, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "Q32R+V3C",
        "city": "Kondangi",
        "zipcode": "603209",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7253cdb8d5b:0x3e14b35f09073eaa",
        "google_id": "0x3a52f7253cdb8d5b:0x3e14b35f09073eaa",
        "place_id": "ChIJW43bPCX3UjoRqj4HCV-zFD4",
        "phone_number": null,
        "name": "Floodgate of Urapakkam lake",
        "latitude": 12.853676799999999,
        "longitude": 80.0711036,
        "full_address": "V33C+C4C Floodgate of Urapakkam lake, Uthasuryan Nagar, Udhayasuriyan Nagar, Guduvancheri, Tamil Nadu 603210, India",
        "review_count": 1,
        "rating": 1,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7253cdb8d5b:0x3e14b35f09073eaa",
        "cid": "4473397550640479914",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJW43bPCX3UjoRqj4HCV-zFD4&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "103129626036698873749",
        "owner_link": "https://maps.google.com/maps/contrib/103129626036698873749",
        "owner_name": "Floodgate of Urapakkam lake",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipO1oX0tRCdGPnL_8utEmy4uYj64BHJuHAll884",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipO1oX0tRCdGPnL_8utEmy4uYj64BHJuHAll884",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipO1oX0tRCdGPnL_8utEmy4uYj64BHJuHAll884=w4000-h2250-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.853676833612917,
            "longitude": 80.0711035760933,
            "type": "photo",
            "photo_datetime_utc": "2022-12-13T00:00:00.000Z",
            "photo_timestamp": 1670889600
          }
        ],
        "reviews_per_rating": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "photo_count": 9,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "V33C+C4C, Uthasuryan Nagar, Udhayasuriyan Nagar, Guduvancheri, Tamil Nadu 603210, India",
        "order_link": null,
        "price_level": null,
        "district": "Uthasuryan Nagar, Udhayasuriyan Nagar",
        "street_address": "V33C+C4C",
        "city": "Guduvancheri",
        "zipcode": "603210",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f72e6737f673:0x15912a6d1e3a5e62",
        "google_id": "0x3a52f72e6737f673:0x15912a6d1e3a5e62",
        "place_id": "ChIJc_Y3Zy73UjoRYl46Hm0qkRU",
        "phone_number": null,
        "name": "ELEPHANT Point",
        "latitude": 12.8780773,
        "longitude": 80.0911051,
        "full_address": "V3HR+6CQ ELEPHANT Point, Vandalur, Tamil Nadu 600048, India",
        "review_count": 30,
        "rating": 4.5,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f72e6737f673:0x15912a6d1e3a5e62",
        "cid": "1554069994566475362",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJc_Y3Zy73UjoRYl46Hm0qkRU&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "104268313026219767845",
        "owner_link": "https://maps.google.com/maps/contrib/104268313026219767845",
        "owner_name": "ELEPHANT Point",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNVZshP1I5-0W5Acg67h7PdkJtJhmCyOtNRch4w",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNVZshP1I5-0W5Acg67h7PdkJtJhmCyOtNRch4w",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNVZshP1I5-0W5Acg67h7PdkJtJhmCyOtNRch4w=w1536-h2048-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8780773,
            "longitude": 80.0911051,
            "type": "photo",
            "photo_datetime_utc": "2022-08-12T00:00:00.000Z",
            "photo_timestamp": 1660262400
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 2,
          "3": 2,
          "4": 6,
          "5": 20
        },
        "photo_count": 65,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "V3HR+6CQ, Vandalur, Tamil Nadu 600048, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "V3HR+6CQ",
        "city": "Vandalur",
        "zipcode": "600048",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a525f59bd657781:0x89d5376c9161e450",
        "google_id": "0x3a525f59bd657781:0x89d5376c9161e450",
        "place_id": "ChIJgXdlvVlfUjoRUORhkWw31Yk",
        "phone_number": null,
        "name": "Taj Mahal folks world",
        "latitude": 12.9249308,
        "longitude": 80.1000026,
        "full_address": "W4F2+X2C Taj Mahal folks world, Karummariamman Nagar, Vishnu Nagar, Tambaram, Chennai, Tamil Nadu 600045, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a525f59bd657781:0x89d5376c9161e450",
        "cid": "9931905492670604368",
        "reviews_link": null,
        "owner_id": "113362641664222518040",
        "owner_link": "https://maps.google.com/maps/contrib/113362641664222518040",
        "owner_name": "Taj Mahal folks world",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "s-1w6Juu4VrXkz-ZqwwZfw",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=s-1w6Juu4VrXkz-ZqwwZfw&cb_client=search.gws-prod.gps&w=86&h=86&yaw=307.66882&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.92490019812845,
            "longitude": 80.10004326913011,
            "type": "street_view",
            "photo_datetime_utc": "2023-04-28T00:00:00.000Z",
            "photo_timestamp": 1682640000
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 1,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "W4F2+X2C, Karummariamman Nagar, Vishnu Nagar, Tambaram, Chennai, Tamil Nadu 600045, India",
        "order_link": null,
        "price_level": null,
        "district": "Karummariamman Nagar, Vishnu Nagar, Tambaram",
        "street_address": "W4F2+X2C",
        "city": "Chennai",
        "zipcode": null,
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52fff853a625f7:0xe05445be7abc3596",
        "google_id": "0x3a52fff853a625f7:0xe05445be7abc3596",
        "place_id": "ChIJ9yWmU_j_UjoRljW8er5FVOA",
        "phone_number": null,
        "name": "Karumbakkam lake",
        "latitude": 12.707611799999999,
        "longitude": 80.0920091,
        "full_address": "P34V+X3 Karumbakkam lake, Melaiyur R.F., Tamil Nadu 603108, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52fff853a625f7:0xe05445be7abc3596",
        "cid": "16164621646944810390",
        "reviews_link": null,
        "owner_id": "116037489628146343739",
        "owner_link": "https://maps.google.com/maps/contrib/116037489628146343739",
        "owner_name": "Karumbakkam lake",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": null,
        "reviews_per_rating": null,
        "photo_count": 0,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "P34V+X3, Melaiyur R.F., Tamil Nadu 603108, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "P34V+X3",
        "city": "Melaiyur R.F.",
        "zipcode": "603108",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f74bf4938d53:0xbc475e244834c555",
        "google_id": "0x3a52f74bf4938d53:0xbc475e244834c555",
        "place_id": "ChIJU42T9Ev3UjoRVcU0SCReR7w",
        "phone_number": null,
        "name": "Seliyaman nagar",
        "latitude": 12.8743609,
        "longitude": 80.0750223,
        "full_address": "V3FG+P2R Seliyaman nagar, Vandalur, Tamil Nadu 600048, India",
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
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f74bf4938d53:0xbc475e244834c555",
        "cid": "13566915912400160085",
        "reviews_link": null,
        "owner_id": "116562064003832600107",
        "owner_link": "https://maps.google.com/maps/contrib/116562064003832600107",
        "owner_name": "Seliyaman nagar",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": null,
        "reviews_per_rating": null,
        "photo_count": 0,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "V3FG+P2R, Vandalur, Tamil Nadu 600048, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "V3FG+P2R",
        "city": "Vandalur",
        "zipcode": "600048",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a525919ba225c23:0x80a518cbdbe573c",
        "google_id": "0x3a525919ba225c23:0x80a518cbdbe573c",
        "place_id": "ChIJI1wiuhlZUjoRPFe-vYxRCgg",
        "phone_number": null,
        "name": "Lake view",
        "latitude": 12.8874661,
        "longitude": 80.17340779999999,
        "full_address": "V5PF+X9M Lake view, Sithalapakkam, Sathya Sai Nagar, Tamil Nadu 600126, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a525919ba225c23:0x80a518cbdbe573c",
        "cid": "579365166991169340",
        "reviews_link": null,
        "owner_id": "106548325792414642129",
        "owner_link": "https://maps.google.com/maps/contrib/106548325792414642129",
        "owner_name": "Lake view",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "Z9FvxmOBrr2wx5E_FjHijA",
            "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Z9FvxmOBrr2wx5E_FjHijA&cb_client=search.gws-prod.gps&w=86&h=86&yaw=113.89794&pitch=0&thumbfov=100",
            "photo_url_large": null,
            "video_thumbnail_url": null,
            "latitude": 12.887554464216988,
            "longitude": 80.17320322211228,
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
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "V5PF+X9M, Sithalapakkam, Sathya Sai Nagar, Tamil Nadu 600126, India",
        "order_link": null,
        "price_level": null,
        "district": "Sithalapakkam",
        "street_address": "V5PF+X9M",
        "city": "Sathya Sai Nagar",
        "zipcode": "600126",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f7994c60b693:0x645ac7a5e047d2c8",
        "google_id": "0x3a52f7994c60b693:0x645ac7a5e047d2c8",
        "place_id": "ChIJk7ZgTJn3UjoRyNJH4KXHWmQ",
        "phone_number": null,
        "name": "Sarus & Macaw",
        "latitude": 12.881884999999999,
        "longitude": 80.08471399999999,
        "full_address": "Sarus & Macaw, BREEDING CENTER, VANDALUR-NATIONAL ZOO, Kelambakkam - Vandalur Rd, Peerakankaranai, Tamil Nadu 600048, India",
        "review_count": 7,
        "rating": 4.4,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "9 AM–5 PM"
          ],
          "Friday": [
            "9 AM–5 PM"
          ],
          "Saturday": [
            "9 AM–5 PM"
          ],
          "Sunday": [
            "9 AM–5 PM"
          ],
          "Monday": [
            "9 AM–5 PM"
          ],
          "Tuesday": [
            "9 AM–5 PM"
          ],
          "Wednesday": [
            "Closed"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f7994c60b693:0x645ac7a5e047d2c8",
        "cid": "7231311666943087304",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJk7ZgTJn3UjoRyNJH4KXHWmQ&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "109877945536804172632",
        "owner_link": "https://maps.google.com/maps/contrib/109877945536804172632",
        "owner_name": "Sarus & Macaw",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPpR7j-zJjGw1kf5E-mYLX3hvpwlwa9aaS-yiwx",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPpR7j-zJjGw1kf5E-mYLX3hvpwlwa9aaS-yiwx",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPpR7j-zJjGw1kf5E-mYLX3hvpwlwa9aaS-yiwx=w519-h389-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.881804599999999,
            "longitude": 80.0847099,
            "type": "photo",
            "photo_datetime_utc": "2022-08-13T00:00:00.000Z",
            "photo_timestamp": 1660348800
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 2,
          "5": 4
        },
        "photo_count": 7,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "BREEDING CENTER, VANDALUR-NATIONAL ZOO, Kelambakkam - Vandalur Rd, Peerakankaranai, Tamil Nadu 600048, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "BREEDING CENTER, VANDALUR-NATIONAL ZOO, Kelambakkam - Vandalur Rd",
        "city": "Peerakankaranai",
        "zipcode": "600048",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a52f76c063146a3:0xb32c38565e804f12",
        "google_id": "0x3a52f76c063146a3:0xb32c38565e804f12",
        "place_id": "ChIJo0YxBmz3UjoREk-AXlY4LLM",
        "phone_number": null,
        "name": "Deers, Black Bucks",
        "latitude": 12.8820368,
        "longitude": 80.0869223,
        "full_address": "V3JP+RQ Deers, Black Bucks, Angulates, Peerakankaranai, Tamil Nadu 600048, India",
        "review_count": 3,
        "rating": 4.7,
        "timezone": "Asia/Calcutta",
        "working_hours": {
          "Thursday": [
            "9 AM–5 PM"
          ],
          "Friday": [
            "9 AM–5 PM"
          ],
          "Saturday": [
            "9 AM–5 PM"
          ],
          "Sunday": [
            "9 AM–5 PM"
          ],
          "Monday": [
            "9 AM–5 PM"
          ],
          "Tuesday": [
            "Closed"
          ],
          "Wednesday": [
            "9 AM–5 PM"
          ]
        },
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a52f76c063146a3:0xb32c38565e804f12",
        "cid": "12910756175368179474",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJo0YxBmz3UjoREk-AXlY4LLM&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "113869961106775715111",
        "owner_link": "https://maps.google.com/maps/contrib/113869961106775715111",
        "owner_name": "Deers, Black Bucks",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipOzN9tnQFwsZvS1BHFHbYgqEfEWt05CSiZId_tK",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipOzN9tnQFwsZvS1BHFHbYgqEfEWt05CSiZId_tK",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipOzN9tnQFwsZvS1BHFHbYgqEfEWt05CSiZId_tK=w519-h389-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.882302,
            "longitude": 80.0867928,
            "type": "photo",
            "photo_datetime_utc": "2022-08-12T00:00:00.000Z",
            "photo_timestamp": 1660262400
          }
        ],
        "reviews_per_rating": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 1,
          "5": 2
        },
        "photo_count": 27,
        "about": {
          "summary": null,
          "details": {
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "V3JP+RQ Angulates, Peerakankaranai, Tamil Nadu 600048, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "V3JP+RQ Angulates",
        "city": "Peerakankaranai",
        "zipcode": "600048",
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a525140ed2e01c7:0x959f47b9be2fa2ff",
        "google_id": "0x3a525140ed2e01c7:0x959f47b9be2fa2ff",
        "place_id": "ChIJxwEu7UBRUjoR_6IvvrlHn5U",
        "phone_number": null,
        "name": "Kayaking spot",
        "latitude": 12.8035214,
        "longitude": 80.24838989999999,
        "full_address": "R63X+C9 Kayaking spot, Kovalam, Tamil Nadu, India",
        "review_count": 0,
        "rating": null,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a525140ed2e01c7:0x959f47b9be2fa2ff",
        "cid": "10781414896033571583",
        "reviews_link": null,
        "owner_id": "101380544276596262534",
        "owner_link": "https://maps.google.com/maps/contrib/101380544276596262534",
        "owner_name": "Kayaking spot",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipNN6_Zw5l4HXE0-T_1ux8COQZSmoFxioNtn7m50",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipNN6_Zw5l4HXE0-T_1ux8COQZSmoFxioNtn7m50",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipNN6_Zw5l4HXE0-T_1ux8COQZSmoFxioNtn7m50=w1280-h1920-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.8028345,
            "longitude": 80.2485495,
            "type": "photo",
            "photo_datetime_utc": "2022-04-06T00:00:00.000Z",
            "photo_timestamp": 1649203200
          }
        ],
        "reviews_per_rating": null,
        "photo_count": 8,
        "about": null,
        "address": "R63X+C9, Kovalam, Tamil Nadu, India",
        "order_link": null,
        "price_level": null,
        "district": null,
        "street_address": "R63X+C9",
        "city": "Kovalam",
        "zipcode": null,
        "state": "Tamil Nadu",
        "country": "IN"
      },
      {
        "business_id": "0x3a525ffc92ae845b:0xc4ee56b4db927d80",
        "google_id": "0x3a525ffc92ae845b:0xc4ee56b4db927d80",
        "place_id": "ChIJW4SukvxfUjoRgH2S27RW7sQ",
        "phone_number": null,
        "name": "Kadaperi mountain",
        "latitude": 12.9358778,
        "longitude": 80.10454299999999,
        "full_address": "W4J4+289 Kadaperi mountain, Old State Bank Colony, Tambaram, Chennai, Tamil Nadu 600045, India",
        "review_count": 1,
        "rating": 4,
        "timezone": "Asia/Calcutta",
        "working_hours": null,
        "website": null,
        "verified": false,
        "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a525ffc92ae845b:0xc4ee56b4db927d80",
        "cid": "14190374810668924288",
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJW4SukvxfUjoRgH2S27RW7sQ&q=attractions&authuser=0&hl=en&gl=US",
        "owner_id": "108658313793850994955",
        "owner_link": "https://maps.google.com/maps/contrib/108658313793850994955",
        "owner_name": "Kadaperi mountain",
        "booking_link": null,
        "reservations_link": null,
        "business_status": "OPEN",
        "type": "Tourist attraction",
        "subtypes": [
          "Tourist attraction"
        ],
        "photos_sample": [
          {
            "photo_id": "AF1QipPTW5sOnF3kqc6Q5gpUchFgsVKb2579MIzSe3qP",
            "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPTW5sOnF3kqc6Q5gpUchFgsVKb2579MIzSe3qP",
            "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPTW5sOnF3kqc6Q5gpUchFgsVKb2579MIzSe3qP=w2268-h4032-k-no",
            "video_thumbnail_url": null,
            "latitude": 12.9358778,
            "longitude": 80.10454299999999,
            "type": "photo",
            "photo_datetime_utc": "2022-09-14T00:00:00.000Z",
            "photo_timestamp": 1663113600
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
            "Amenities": {
              "Good for kids": true
            }
          }
        },
        "address": "W4J4+289, Old State Bank Colony, Tambaram, Chennai, Tamil Nadu 600045, India",
        "order_link": null,
        "price_level": null,
        "district": "Old State Bank Colony, Tambaram",
        "street_address": "W4J4+289",
        "city": "Chennai",
        "zipcode": "600045",
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

export default Attractions