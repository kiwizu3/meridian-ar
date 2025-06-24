export function reverseDataArrays(seriesData: any[]) {
  return seriesData.map((series) => ({
    ...series,
    data: series?.data?.reverse(),
  }));
}
