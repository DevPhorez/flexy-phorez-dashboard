import * as React from 'react'
import ReactDOM from "react-dom/client";

import ReactApexChart from "react-apexcharts";

function CustomersApexChart () {
	
	const [state] = React.useState({
		series: [{
			name: "فروش ماهیانه",
			data: [1, 19, 3, 13, 2, 19]
		}],
		options: {
			chart: {
				height: 350,
				type: 'line',
				toolbar: false
			},
			dataLabels: {
				enabled: false
			},
			colors: ['#fff'],
			stroke: {
				width: 2,
				curve: 'smooth'
			},
			grid: {
				row: {
					colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					opacity: 0
				},
			},
			xaxis: {
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false,
				},
				labels: {
					show: false,
					formatter: function (val) {
						return val;
					}
				}
			},
			yaxis: {
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false,
				},
				labels: {
					show: false,
					formatter: function (val) {
						return val;
					}
				}
			},
		},
	})
	
	
	return (
		<ReactApexChart options={state.options} series={state.series} type="line" height={110} width={'100%'} />
	)
}

export default CustomersApexChart