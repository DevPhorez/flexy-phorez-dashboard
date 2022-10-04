import * as React from 'react'
import ReactDOM from "react-dom/client";

import ReactApexChart from "react-apexcharts";

function RevenueUpdatesApexChart () {
	
	let fa = require("apexcharts/dist/locales/fa.json")
	
	const [state] = React.useState({
		series: [
			{
				name: "درآمد",
				data: [0, 5, 6, 8, 25, 9, 11, 24]
			},
			{
				name: "هزینه ها",
				data: [0, 3, 1, 2, 8, 1, 5, 1]
			}
		],
		options: {
			colors: ['var(--info)', 'var(--warning)'],
			chart: {
				height: 350,
				type: 'line',
				toolbar: false,
				locales: [fa],
				defaultLocale: 'fa',
			},
			
			stroke: {
				width: 3,
				curve: 'smooth'
			},
			dataLabels: {
				enabled: true,
				style: {
					colors: ['#51bfa0']
				},
			},
			xaxis: {
				type: 'datetime',
				categories: ['1/11', '2/11', '3/11', '4/11', '5/11', '6/11', '7/11', '8/11'],
				tickAmount: 8,
				labels: {
					datetimeFormatter: {
						year: 'yyyy',
						month: 'MMMM \'yy',
						day: 'dd \ MMMM',
						hour: 'HH:mm'
					}
				},
			},
			fill: {
				colors: ['#F44336']
			},
			yaxis: {
				min: 0,
				max: 30
			}
		},
	})
	
	
		return (
			<ReactApexChart options={state.options} series={state.series} type="line" height={350} />
		)
}

export default RevenueUpdatesApexChart