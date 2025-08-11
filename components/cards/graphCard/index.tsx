import React, { ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import Counter from './counter';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type cardDataProps = {
  title: string;
  value: number | string;
};

export interface GraphCardProps {
  cardData: cardDataProps[];
  icon?: ReactElement;
  image?: StaticImageData;
  classNames?: string;
  chartData?: any;
}

export default function GraphCard(props: Readonly<GraphCardProps>) {
  const { cardData, icon, image, classNames, chartData } = props;
  return (
    <div className="pt-4">
      {icon}
      <div className="flex flex-row justify-between">
        {cardData.map((data: cardDataProps, index:number) => (
          <div className="mt-4 flex flex-col gap-2" key={`${index.toString()}`}>
            <p
              className={`font-secondary font-normal text-sm text-white max-w-40 ${classNames}`}
            >
              {data.title}
            </p>
            {typeof data.value === 'number' && (
              <Counter
                targetValue={data.value}
                increment={data.title === 'Total customer base' ? 9111 : 1}
              />
            )}
            {typeof data.value === 'string' && (
              <p className="font-secondary font-bold text-4xl text-lightGreen">
                {data.value}
              </p>
            )}
          </div>
        ))}
      </div>
      {chartData && (
        <Chart
          options={chartData?.lineGraphData}
          series={chartData?.getSeriesData}
          type="line"
          height={200}
          width="100%"
        />
      )}
    </div>
  );
}
