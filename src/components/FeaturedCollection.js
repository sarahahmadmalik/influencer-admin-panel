import Image from 'next/image'
import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useRouter } from 'next/router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function FeaturedCollection({collection}) {
    const [isSaved, setIsSaved] = useState(false);
    const [isAddedToBookmarks, setIsAddedToBookmarks] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
    const router = useRouter();

    const toggleFavorite = (e) => {
        e.stopPropagation();
        setIsFavorited(!isFavorited);
        if (!isFavorited) {
          setIsAddedToFavorites(true);
    
          setTimeout(() => {
            setIsAddedToFavorites(false);
          }, 3000);
        }
      };

    const toggleSave = (e) => {
        e.stopPropagation();
        setIsSaved(!isSaved);
        if(!isSaved){
            setIsAddedToBookmarks(true);
    
            setTimeout(() => {
              setIsAddedToBookmarks(false);
            }, 3000);
        }
      };

      const changePage = () => {
        router.push(`/Home/id?id=${collection.id}`);
      }
      

  return (
    <div className='featured-collection-card rounded-lg bg-white p-4 fontMonst w-[320px] mx-2 cursor-pointer my-2' onClick={changePage}>
        {isAddedToBookmarks && (
  <div className="added-to-bookmarks-message fontMonst">
    Added to bookmarks!
  </div>
)}
 {isAddedToFavorites && (
        <div className="added-to-bookmarks-message fontMonst">
          Added to favorites!
        </div>
      )}

        <div className='flex justify-between w-full'>
        <div className='flex'>
            <div className='relative rounded-full  h-[50px] w-[50px]'>
                <Image src={collection.img} alt='influencer image' fill objectFit='contain'/>
            </div>
            <div className="ml-3 flex flex-col justify-center">
                <h1 className='font-[600] text-[20px] leading-6'>{collection.name}</h1>
                <p className='text-[#4254FF4F] '>{collection.post}</p>
            </div>
            </div>
            <div className='flex items-start'>
      <button onClick={toggleSave}   >
      <svg width="2" height="2">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#FF5B84', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4254FF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <IconContext.Provider value={{ attr: {fill: "url('#gradient')"}}}>
        {isSaved ? (
          <FaBookmark size={20}  />
        ) : (
          <BsBookmark size={20} color='#4254FF' />
        )}
        </IconContext.Provider>
      </button>
      <button onClick={toggleFavorite} className="flex justify-center items-center ml-1 " >
      {isFavorited ? (
              <FavoriteIcon style={{ color: '#FF5B84' }} />
            ) : (
              <FavoriteBorderIcon style={{ color: '#FF5B84' }} />
            )}
          </button>
     
    </div>
        </div>
        <div className='my-4 '>
            <p>{collection.description}</p>
            <div className="my-3">
                <h1 className='uppercase mb-1'>Tags</h1>
                <div className='flex space-x-3 flex-wrap'>
                {collection.tags.map((tag,index) => {
                    return (
                        <p key={index} className='bg-[#EBEDFF] font-[400] py-1 px-3 rounded-full'>{tag}</p>
                    )
                })}
                </div>
            </div>
        </div>
        <div className='flex space-x-4 '>
        {collection.socialMedia.map((social, index) => {
  return (
    <div className='flex items-center ' key={index}>
      <div><Image src={social.img} width={15} height={15} className="mr-1"/></div>
      <p className={
        social.name === 'facebook'
          ? 'text-[#1198F6]'
          : social.name === 'instagram'
          ? 'text-[#FF0D4B]'
          : 'text-[#1D9BF0]'
      }>{social.count}</p>
    </div>
  );
})}

        </div>
    </div>
  )
}

export default FeaturedCollection