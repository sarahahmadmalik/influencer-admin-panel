import React from 'react';
import Image from 'next/image';

function Influencer({ data}) {
  return (
    <div className="flex flex-col w-full space-y-4 mb-4 rounded-md py-5 px-5 fontMonst">
    <div>
    <div className="flex items-center">
      <div className="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden">
        <Image src={data.img} alt={`${data.name}'s Profile`} fill objectFit="contain" />
      </div>
      <div className="ml-2">
        <h2 className="text-[18px] font-[700]">{data.name}</h2>
        <p className="text-[14px]">@{data.username}</p>
        <p className="font-[400] text-[14px] pl-1">{data.bio}</p>
      </div>
      </div>
      <div className="flex items-center space-x-4 my-3">
          <div className="flex items-center">
            <Image src='/images/location.svg' alt="Location Icon" width={10} height={10} />
            <span className="ml-1">{data.location}</span>
          </div>
          <div className="flex items-center">
            <Image src='/images/gender.svg' alt="Gender Icon" width={10} height={10} />
            <span className="ml-1">{data.gender}</span>
          </div>
          <div className="flex items-center">
            <Image src='/images/regular.svg' alt="Type Icon" width={10} height={10} />
            <span className="ml-1">{data.type}</span>
          </div>
        </div>
        </div>
        
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
      {data.socialMedia.map((social) => (
  <div
    key={social.icon}
    className="flex items-center rounded-lg py-3 px-4"
    style={{ backgroundColor: social.bg }}
  >
    <Image src={social.icon} alt={`${social} Icon`} width={25} height={25} />
    <span className="ml-3 font-[600]  text-[16px]">{social.amount}</span>
  </div>
))}

      </div>
    </div>
  );
}

export default Influencer;
