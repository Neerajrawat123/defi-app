import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CoinMarkets = {
  'id': string,
  "symbol": string,
  "name": string,
  "image": string,
  "current_price": number,
  "market_cap": number,
  "market_cap_rank": number,
  "fully_diluted_valuation": number,
  "total_volume": number,
  "high_24h": number,
  "low_24h": number,
  "price_change_24h": number,
  "price_change_percentage_24h": number,
  "market_cap_change_24h": number,
  "market_cap_change_percentage_24h": number,
  "circulating_supply": number,
  "total_supply": number,
  "max_supply": number,
  "ath": number,
  "ath_change_percentage": number,
  "ath_date": string,
  "atl": number,
  "atl_change_percentage": number,
  "atl_date": string,
  "roi": null,
  "last_updated": string
}

interface Props {
  coin: CoinMarkets[]
}

function Coins({coin}:Props) {
  console.log(coin)
  return (
    <div className='w-full'>
        <div className='w-10/12 m-auto  '>
        <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-200">
              <tr>
                <th className="px-3 py-4">#</th>
                <th className="px-3 py-4"></th>
                <th className="px-3 py-4">Coin</th>
                <th className="px-3 py-4">Price</th>
                <th className="px-3 py-4">Market Cap</th>
                <th className="px-3 py-4">Total Volume</th>
                <th className="px-3 py-4">24h </th>
              </tr>
            </thead>
            <tbody>
              {coin.map((coin) => (
                <tr className="border-b dark:border-neutral-200" key={coin.id}>
                  <td className="whitespace-nowrap px-3 py-4">
                    {coin.market_cap_rank}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <Image
                      src={coin.image }
                      alt={"coin image"}
                      width={30}
                      height={30}
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <Link href={`/coins/${coin.id}`}>
                      {coin.name}{" "}
                      <span className="text-neutral-500">{coin.symbol}</span>
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    $ {coin.current_price.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    $ {coin.market_cap.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    $ {coin.total_volume.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    {coin.price_change_percentage_24h.toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Coins