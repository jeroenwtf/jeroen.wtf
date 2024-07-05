import { getYesterdayDate, getYesterdayTimestamp } from "helpers/date";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import colors from "tailwindcss/colors";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function FooterChart(){
  const [chartSeriesData, setChartSeriesData] = useState([]);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const yesterdayDate = getYesterdayDate();
    const yesterdayTimestamp = getYesterdayTimestamp();

    fetch(`https://ns.jeroen.wtf/api/v1/entries/sgv.json?count=1000&find[dateString][$gte]=${yesterdayDate}`)
      .then(response => response.json())
      .then(data => {
        const lastDaySeries = data.filter(series => series.date > yesterdayTimestamp).reverse();
        const values = lastDaySeries.map(series => series.sgv)

        setChartSeriesData(values)
      })
  }, [])

  if (chartSeriesData.length == 0) {
    return null
  }

  const options = {
    chart: {
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false
      },
    },
    annotations: {
      yaxis: [
        {
          y: 70,
          y2: 180,
          borderColor: 'transparent',
          fillColor: resolvedTheme === "dark" ? colors.zinc[900] : colors.zinc[300],
          opacity: 0.1,
        }
      ],
    },
    tooltip: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 3
    },
    yaxis: {
      min: 0,
      max: function(max) { 
        return max > 200 ? max : 200
      },
      show: false,
    },
    colors: resolvedTheme === "dark" ? [colors.zinc[700]] : [colors.zinc[200]]
  }

  const series = [{
    data: chartSeriesData
  }]

  return(
    <>
      <ApexChart type="line" options={options} series={series} height={500} width="100%" />
    </>
  )
}
