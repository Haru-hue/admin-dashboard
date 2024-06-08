import Image from "next/image";
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Title,
} from "@tremor/react";
import { brandData } from "@/lib";

const BrandTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <Title>Top Channels</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Source</TableHeaderCell>
            <TableHeaderCell>Visitors</TableHeaderCell>
            <TableHeaderCell>Revenues</TableHeaderCell>
            <TableHeaderCell>Sales</TableHeaderCell>
            <TableHeaderCell>Conversion</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brandData.map((brand, key) => (
            <TableRow
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === brandData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <TableCell className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <Image src={brand.logo} alt="Brand" width={48} height={48} />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {brand.name}
                </p>
              </TableCell>

              <TableCell className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{brand.visitors}K</p>
              </TableCell>

              <TableCell className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">${brand.revenues}</p>
              </TableCell>

              <TableCell className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">{brand.sales}</p>
              </TableCell>

              <TableCell className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{brand.conversion}%</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BrandTable;