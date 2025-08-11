export function checkForNegativeValues(data: any[]): boolean {
  return data?.some((series) =>
    series?.data?.some((value: number) => value < 0),
  );
}
