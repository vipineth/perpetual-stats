import { ArrowSmRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import TableAvatar from "./TableAvatar";

export default function TradingPairs({ heading = "", data }) {
  return (
    <div className="">
      <h3 className="py-5 text-lg font-bold text-gray-700">{heading}</h3>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <THead />
                {data?.map((d, i) => (
                  <TBody {...d} key={i} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TBody(props) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr key={props.id}>
        <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
          <TableAvatar icon={props.icon} />
        </td>
        <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
          {props.symbol}
        </td>
        <td className="px-6 py-3 whitespace-nowrap text-md text-gray-800">
          {props.volumeUSD}
        </td>
        <td className="px-6 py-3 whitespace-nowrap text-md text-gray-800">
          {props.feesUSD}
        </td>
        <td className="px-6 py-3 whitespace-nowrap text-md text-gray-800">
          {props.tradeCount}
        </td>
        <td className="px-6 py-3 whitespace-nowrap text-md text-gray-800">
          <span className="sm:ml-3">
            <Link href={`/asset/${props.symbol.toLowerCase()}`}>
              <a
                type="button"
                className="inline-flex items-center px-4 py-2 rounded-md border-transparent bg-green-600 text-sm font-medium text-white hover:bg-green-800"
              >
                More Stats
                <ArrowSmRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Link>
          </span>
        </td>
      </tr>
    </tbody>
  );
}

function THead() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Icon
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Asset
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Trade Volume (24h)
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Fees Collected (24h)
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Number of Trades (24h)
        </th>
        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">Trade Now</span>
        </th>
      </tr>
    </thead>
  );
}
