import React, { useState } from 'react';
import Image from 'next/image';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

function Performance() {
  const [showEyeOpen, setShowEyeOpen] = useState(true);

  const toggleEyeIcon = () => {
    setShowEyeOpen((prevShowEyeOpen) => !prevShowEyeOpen);
  };

  const iconStyle = {
    color: '#4254FF',
  };

  return (
    <div className="fontMonst py-4 w-full">
      <h1 className="font-[700] text-[18px] fontMonst">Performance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* First Grid Item */}
        <div className="rounded-md shadowDiv py-4 px-5">
          <div className="flex justify-between">
            <div>
              <p className="font-[700]">Total Views</p>
              <p className="text-[#737074]">1246,7700</p>
            </div>
            <div>
              <button className="bg-[#4254FF21]  py-1 px-3 rounded-md" onClick={toggleEyeIcon}>
              {showEyeOpen ? <EyeOutlined style={iconStyle} /> : <EyeInvisibleOutlined style={iconStyle} />}
              </button>
            </div>
          </div>
          <div>
            <Image src="/images/g1.svg" width={140} height={140} />
          </div>
        </div>

        {/* Second Grid Item */}
        <div className="rounded-md shadowDiv py-4 px-5">
          <div className="flex justify-between">
            <div>
              <p className="font-[700]">Engagement Rate</p>
              <p className="text-[#737074]">1246,7700</p>
            </div>
            <div className="ml-3">
              <button className="bg-[#FF5B8436] py-2 px-3 rounded-md">
                <Image src="/images/rate.svg" width={12} height={12} />
              </button>
            </div>
          </div>
          <div>
            <Image src="/images/g2.svg" width={140} height={140} />
          </div>
        </div>

        {/* Third Grid Item */}
        <div className="rounded-md shadowDiv py-4 px-5">
          <div className="flex justify-between">
            <div>
              <p className="font-[700]">Partnerships</p>
              <p className="text-[#737074]">1246,7700</p>
            </div>
            <div className="ml-3">
              <button className="bg-[#FF5B8436] py-2 px-3 rounded-md">
                <Image src="/images/partner.svg" width={12} height={12} />
              </button>
            </div>
          </div>
          <div>
            <Image src="/images/g2.svg" width={140} height={140} />
          </div>
        </div>

        {/* Fourth Grid Item */}
        <div className="rounded-md shadowDiv py-4 px-5">
          <div className="flex justify-between">
            <div>
              <p className="font-[700]">Total Views</p>
              <p className="text-[#737074]">1246,7700</p>
            </div>
            <div className="ml-3">
              <button className="bg-[#4254FF21] py-1 px-3 rounded-md" onClick={toggleEyeIcon}>
              {showEyeOpen ? <EyeOutlined style={iconStyle} /> : <EyeInvisibleOutlined style={iconStyle} />}
              </button>
            </div>
          </div>
          <div>
            <Image src="/images/g1.svg" width={140} height={140} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
