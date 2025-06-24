import { getDescription } from "@/utility/tooltipUtils";

export function ChartTooltip(chartContext: any): void {
  const legendItems = chartContext.el.querySelectorAll(
    '.apexcharts-legend-series',
  );

  legendItems.forEach((legendItem: any, index: any) => {
    let tooltip: HTMLDivElement | null = null;

    legendItem.addEventListener('mouseenter', function () {
      tooltip = document.createElement('div');
      tooltip.className = 'custom-tooltip';
      tooltip.style.position = 'absolute';
      tooltip.style.pointerEvents = 'none';
      tooltip.style.transform = 'translate(-50%, -100%)';

      const seriesName = chartContext.w.globals.seriesNames[index];
      const description = getDescription(seriesName);

      tooltip.innerHTML = `
        <div class="rounded-lg mb-2 max-w-72">
          <div class="p-2 bg-[#E5DCFB] rounded-t-lg">
            <p class="text-black font-secondary font-normal text-sm">
              ${seriesName}
            </p>
          </div>
          <div class="p-2 bg-white rounded-b-lg">
            <p class="text-black font-secondary font-normal text-sm">
              ${description}
            </p>
          </div>
        </div>
      `;

      document.body.appendChild(tooltip);

      const rect = legendItem.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      tooltip.style.left = `${rect.left + rect.width / 2 + scrollLeft}px`;
      tooltip.style.top = `${rect.top + scrollTop}px`;
    });

    legendItem.addEventListener('mouseleave', function () {
      if (tooltip) {
        document.body.removeChild(tooltip);
        tooltip = null;
      }
    });

    legendItem.addEventListener('click', function () {
      if (tooltip) {
        document.body.removeChild(tooltip);
        tooltip = null;
      }
    });
  });
}