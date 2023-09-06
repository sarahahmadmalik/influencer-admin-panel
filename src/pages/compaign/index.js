import React from 'react';
import Head from "next/head";
import { Table, Button, Image } from 'antd';

function Compaign() {
  const data = [
    {
      id: 1,
      campaign: "FeastFest",
      brand: "Feastables",
      post: 24,
      created: "17 Aug 2023"
    },
    {
      id: 2,
      campaign: "FeastFest",
      brand: "Feastables",
      post: 24,
      created: "17 Aug 2023"
    },
    {
      id: 3,
      campaign: "FeastFest",
      brand: "Feastables",
      post: 24,
      created: "17 Aug 2023"
    },
    {
      id: 4,
      campaign: "FeastFest",
      brand: "Feastables",
      post: 24,
      created: "17 Aug 2023"
    },
    {
      id: 5,
      campaign: "FeastFest",
      brand: "Feastables",
      post: 24,
      created: "17 Aug 2023"
    },
    {
      id: 6,
      campaign: "FeastFest",
      brand: "Feastables",
      post: 24,
      created: "17 Aug 2023"
    },
    {
      id: 7,
      campaign: "FeastFest",
      brand: "Feastables",
      post: 24,
      created: "17 Aug 2023"
    },
    {
      id: 8,
      campaign: "FeastFest",
      brand: "Feastables",
      post: 24,
      created: "17 Aug 2023"
    },
    {
      id: 9,
      campaign: "FeastFest",
      brand: "Feastables",
      post: 24,
      created: "17 Aug 2023"
    },
    {
      id: 10,
      campaign: "FeastFest",
      brand: "Feastables",
      post: 24,
      created: "17 Aug 2023"
    }
  ];

  const columns = [
    {
      title:(
        <h1 className='font-[700] text-[#737074] fontMonst'>Compaign</h1>
      ),
      dataIndex: 'campaign',
      align: 'center',
      className: 'fontMonst',
    },
    {
        title:(
            <h1 className='font-[700] text-[#737074] fontMonst'>Brand</h1>
          ),
      dataIndex: 'brand',
      align: 'center',
      className: 'fontMonst',
    },
    {
        title:(
            <h1 className='font-[700] text-[#737074] fontMonst'>Post</h1>
          ),
      dataIndex: 'post',
      align: 'center',
      className: 'fontMonst',
    },
    {
        title:(
            <h1 className='font-[700] text-[#737074] fontMonst'>Created</h1>
          ),
      dataIndex: 'created',
      align: 'center',
      className: 'fontMonst',
    },
    {
      title: 'Actions',
      key: 'actions',
      align: 'center',
      className: 'fontMonst',
      render: () => (
        <Button style={{ background: '#AF1FFC', color: 'white', fontWeight: 600 }}>
          <Image src="/images/edit.svg" preview={false} />
        </Button>
      ),
    },
  ];

  return (
    <div className="h-full">
      <Head>
        <title>Compaign</title>
      </Head>
      <div className="bg-white h-full my-4 mx-2 rounded-md fontMonst py-5 px-5">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-[700] text-[24px] text-[#737074] text-center fontMonst">Compaign</h1>
          <button style={{ background: "linear-gradient(270.75deg, #FF5B84 -51.86%, #4254FF 107.54%)", color: 'white', fontWeight: 600 }} className="py-4 px-3 rounded-md">Add a new Compaign</button>
        </div>

        <div className='compaign my-4'>
          <Table
            dataSource={data}
            columns={columns}
            pagination={false}
            rowClassName={(record, index) => (index + 1) % 2 === 1 ? 'bg-[#AF1FFC17] ' : ''}
            className="fontMonst"
            
          />
        </div>
      </div>
    </div>
  )
}

export default Compaign;
