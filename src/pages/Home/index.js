import React, { useState } from 'react';
import { Select, Input, Button } from 'antd';
import {
  DownOutlined, // Ant Design icon for dropdown arrow
  SearchOutlined, // Ant Design icon for search button
} from '@ant-design/icons';
const { Option } = Select;
import Link from 'next/link'

import Head from "next/head";
import FeaturedCollection from './../../components/FeaturedCollection';
import Image from 'next/image';

function Index() {
    const [activeButton, setActiveButton] = useState('Search by Profile');

    const handleButtonClick = (buttonText) => {
      setActiveButton(buttonText);
    };

  
  // Function to handle the first dropdown change
  const handleSocialMediaChange = (value) => {
    // Handle the selected social media option
    console.log('Selected Social Media:', value);
  };
  
  // Function to handle the second dropdown change (Followers)
  const handleFollowersChange = (value) => {
    // Handle the selected followers option
    console.log('Selected Followers:', value);
  };
  
  // Function to handle the search button click
  const handleSearch = () => {
    // Perform search operation here
    console.log('Search Button Clicked');
  };
  
    const collections = [
        {
            id: 1,
            name: "Bessie Rechards",
            post: "Social Worker",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodua.",
            img: '/images/img1.svg',
            tags: [
                'Social work', 'Work', 'Social'
            ],
            socialMedia: [
                {
                    name: 'facebook',
                    img: "/images/facebook.svg",
                    count: "12.3K"
                }, {
                    name: 'instagram',
                    img: "/images/instaColored.svg",
                    count: "12.3K"
                }, {
                    name: 'twitter',
                    img: "/images/twitterColored.svg",
                    count: "12.3K"
                },
            ]
        },
        {
            id: 2,
            name: "Bessie Rechards",
            post: "Social Worker",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodua.",
            img: '/images/1img2.svg',
            tags: [
                'Social work', 'Work', 'Social'
            ],
            socialMedia: [
                {
                    name: 'facebook',
                    img: "/images/facebook.svg",
                    count: "12.3K"
                }, {
                    name: 'instagram',
                    img: "/images/instaColored.svg",
                    count: "12.3K"
                }, {
                    name: 'twitter',
                    img: "/images/twitterColored.svg",
                    count: "12.3K"
                },
            ]
        },
        {
            id: 3,
            name: "Bessie Rechards",
            post: "Social Worker",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodua.",
            img: '/images/img3.svg',
            tags: [
                'Social work', 'Work', 'Social'
            ],
            socialMedia: [
                {
                    name: 'facebook',
                    img: "/images/facebook.svg",
                    count: "12.3K"
                }, {
                    name: 'instagram',
                    img: "/images/instaColored.svg",
                    count: "12.3K"
                }, {
                    name: 'twitter',
                    img: "/images/twitterColored.svg",
                    count: "12.3K"
                },
            ]
        },
        {
            id: 4,
            name: "Bessie Rechards",
            post: "Social Worker",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodua.",
            img: '/images/img4.svg',
            tags: [
                'Social work', 'Work', 'Social'
            ],
            socialMedia: [
                {
                    name: 'facebook',
                    img: "/images/facebook.svg",
                    count: "12.3K"
                }, {
                    name: 'instagram',
                    img: "/images/instaColored.svg",
                    count: "12.3K"
                }, {
                    name: 'twitter',
                    img: "/images/twitterColored.svg",
                    count: "12.3K"
                },
            ]
        }, {
            id: 5,
            name: "Bessie Rechards",
            post: "Social Worker",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodua.",
            img: '/images/img5.svg',
            tags: [
                'Social work', 'Work', 'Social'
            ],
            socialMedia: [
                {
                    name: 'facebook',
                    img: "/images/facebook.svg",
                    count: "12.3K"
                }, {
                    name: 'instagram',
                    img: "/images/instaColored.svg",
                    count: "12.3K"
                }, {
                    name: 'twitter',
                    img: "/images/twitterColored.svg",
                    count: "12.3K"
                },
            ]
        }, {
            id: 6,
            name: "Bessie Rechards",
            post: "Social Worker",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodua.",
            img: '/images/img6.svg',
            tags: [
                'Social work', 'Work', 'Social'
            ],
            socialMedia: [
                {
                    name: 'facebook',
                    img: "/images/facebook.svg",
                    count: "12.3K"
                }, {
                    name: 'instagram',
                    img: "/images/instaColored.svg",
                    count: "12.3K"
                }, {
                    name: 'twitter',
                    img: "/images/twitterColored.svg",
                    count: "12.3K"
                },
            ]
        },
    ];


    return (
        <div className="h-full bg-[#FAF9FD] ">
            <Head>
                <title>Create Discovery</title>
            </Head>
            <div className=" bg-[#FAF9FD]  my-4 mx-2  py-4  ">

    <div className="flex fontRob   bg-white rounded-md p-2 w-full ">
      <div className="flex   py-2 px-2 fontRob bg-[#AF1FFC24] rounded-md ">
      <button
          className={`py-1 px-2 ${
            activeButton === 'Search by Profile' ? 'gradient-bg rounded-md' : ''
          }`}
          onClick={() => handleButtonClick('Search by Profile')}
        >
          Search by Profile
        </button>
        <button
          className={`py-1 px-2  ${
            activeButton === 'Search by Filter' ? 'gradient-bg rounded-md' : ''
          }`}
          onClick={() => handleButtonClick('Search by Filter')}
        >
          Search by Filter
        </button>
        <button
          className={`py-3 px-2  ${
            activeButton === 'Marketplace' ? 'gradient-bg rounded-md' : ''
          }`}
          onClick={() => handleButtonClick('Marketplace')}
        >
          Marketplace
        </button>
      </div>

      <div className='flex  '>
      <Select
      className={`py-3 pr-5 pl-2 social  rounded-md ` }
      defaultValue="instagram"
      onChange={handleSocialMediaChange}
      suffixIcon={<Image src="/images/dropdown.svg" width={8} height={8} />}
      dropdownClassName="dropdown-style"
    >
          <Option value="facebook" className="flex justify-center relative p-5">
        <Image src="/images/facebook.svg" fill objectFit="contain" /> 
      </Option>
      <Option value="instagram" className="flex justify-center relative p-3">
      <Image src="/images/instaColored.svg" fill objectFit="contain" /> 
      </Option>
      <Option value="twitter">
      <Image src="/images/twitterColored.svg" fill objectFit="contain" /> 
      </Option>
    </Select>
    <Select
      className={`py-3 px-2  rounded-md fontRob text-[#737074] `}
      options={[
        { label: 'Followers', value: 'followers' },
      ]}
      defaultValue="followers"
      onChange={handleFollowersChange}
      suffixIcon={<DownOutlined />}
      dropdownClassName="dropdown-style"
      
    />
      </div>

      <div className="flex ">
      <Input
      className="py-3 px-2 fontRob "
      placeholder="Enter a keyword"
      prefix={<SearchOutlined />}
    />
    <button className="gradient-bg py-3 px-2 rounded-md flex">Get Result</button>
      </div>
    </div>

    <div className="flex items-center w-full">
        <div className="flex  space-x-2 fontRob">
            {/* Dropdown 1: Audience location */}
            <Select
              className="py-3 px-2  filter  rounded-md"
              placeholder="Audience location"
              suffixIcon={<Image src="/images/dropdown.svg" width={8} height={8} />}
              dropdownClassName="dropdown-style"
            >
              {/* Options for Audience location */}
              {/* ... */}
            </Select>

            {/* Dropdown 2: Audience age */}
            <Select
              className="py-3 px-2 filter  rounded-md"
              placeholder="Audience age"
              suffixIcon={<Image src="/images/dropdown.svg" width={8} height={8} />}
              dropdownClassName="dropdown-style"
            >
              {/* Options for Audience age */}
              {/* ... */}
            </Select>

            {/* Dropdown 3: Audience Gender */}
            <Select
              className="py-3 px-2 filter  rounded-md"
              placeholder="Audience Gender"
              suffixIcon={<Image src="/images/dropdown.svg" width={8} height={8} />}
              dropdownClassName="dropdown-style"
            >
              {/* Options for Audience Gender */}
              {/* ... */}
            </Select>

            {/* Dropdown 4: Creator brand affinities */}
            <Select
              className="py-3 px-2 filter rounded-md"
              placeholder="Creator brand affinities"
              suffixIcon={<Image src="/images/dropdown.svg" width={8} height={8} />}
              dropdownClassName="dropdown-style"
            >
              {/* Options for Creator brand affinities */}
              {/* ... */}
            </Select>

            {/* Dropdown 5: Creators interest */}
            <Select
              className="py-3 px-2 filter rounded-md"
              placeholder="Creators interest"
              suffixIcon={<Image src="/images/dropdown.svg" width={8} height={8} />}
              dropdownClassName="dropdown-style"
            >
              {/* Options for Creators interest */}
              {/* ... */}
            </Select>
           
          </div>

          <Link href="#" className="text-[#AF1FFC]">
              More...
            </Link>
          
        </div>

                <div className=''>
                    <div>
                        <h1 className='font-[700] text-[24px] fontMonst mx-2'>Featured Collection</h1>
                    </div>
                    <div className="flex items-start  flex-wrap  my-3">
                        {
                        collections.map((collection, index) => (
                            <FeaturedCollection key={index}
                                collection={collection}/>
                        ))
                    } </div>

                </div>
            </div>

        </div>
    )
}

export default Index
