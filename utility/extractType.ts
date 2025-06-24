import { checkForNegativeValues } from './checkForNegativeValues';

// Utility function to extract the type based on the selected item
export const extractType = (item: string): string => {
  if (item?.includes('Times')) return 'Times';
  if (item?.includes('%')) return '%';
  if (
    item?.includes('Rs') &&
    !item?.includes('Rs. Mn') &&
    !item?.includes('Rs. million')
  )
    return 'Rs.';
  if (item?.includes('Rs. Mn')) return 'Rs. Mn';
  if (item?.includes('m3')) return 'm3';
  if (item?.includes('Kg')) return 'Kg';
  if (item?.includes('GJ')) return 'GJ';
  if (item?.includes('tCo2e')) return 'tCo2e';
  if (item?.includes('Number')) return 'Number';
  if (item?.includes('Hours')) return 'Hours';
  return '';
};

export const generateYAxisConfig = (
  selectedItems: string[],
  seriesDataVal: any,
) => {
  const config: any = [];
  const yAxisMap = new Map<string, number>();

  const negativeValuesCheck = checkForNegativeValues(seriesDataVal);

  const createYAxisConfig = (
    seriesVal: any,
    type: string,
    isOpposite: boolean,
  ) => ({
    seriesName: seriesVal,
    min: negativeValuesCheck ? undefined : 0,
    forceNiceScale: true,
    opposite: isOpposite,
    title: {
      text: type,
      rotate: -90,
      offsetX: isOpposite ? 6 : -4,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontWeight: 500,
      },
    },
    labels: {
      show: true,
      align: 'right',
      minWidth: 0,
      maxWidth: 300,
      style: {
        colors: '#fff',
        fontSize: '11px',
        fontWeight: 500,
      },
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
    axisBorder: {
      show: true,
      color: '#fff',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      color: '#fff',
      offsetX: 0,
      offsetY: 0,
    },
  });

  const uniqueTypes = Array.from(
    new Set<string>(selectedItems.map(extractType)),
  );

  selectedItems?.forEach((item) => {
    const itemType = extractType(item);

    const firstVal = selectedItems?.find((val) =>
      val?.includes(uniqueTypes[0]),
    );
    const secondVal = selectedItems?.find((val) =>
      val?.includes(uniqueTypes[1]),
    );

    if (!yAxisMap.has(itemType)) {
      const seriesVal = item.includes(uniqueTypes?.[0]) ? firstVal : secondVal;
      const isOpposite = seriesVal === secondVal && uniqueTypes?.length > 1;
      config.push(createYAxisConfig(seriesVal, itemType, isOpposite));
      yAxisMap.set(itemType, config.length - 1);
    } else {
      config.push({
        seriesName: item.includes(uniqueTypes[0]) ? firstVal : secondVal,
        show: false,
      });
    }
  });

  return config;
};
