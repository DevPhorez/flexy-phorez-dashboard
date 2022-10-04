import * as React from 'react'
import ReactDOM from "react-dom/client";

import ReactApexChart from "react-apexcharts";

function MonthlyEarningsApexChart () {
	
	const [state] = React.useState({
		series: [{
			name: 'درآمد ماهانه',
			data: [6, 10, 9, 11, 9, 10, 12, 10, 9, 10, 11, 12, 13]
		}],
		options: {
			chart: {
				height: 150,
				type: 'bar',
				toolbar: false,
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				bar: {
					columnWidth: 30,
				}
			},
			colors: ["rgba(255, 255, 255, 0.6)"],
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
		<ReactApexChart options={state.options} series={state.series} type="bar" height={110} width={'100%'} />
	)
}

export default MonthlyEarningsApexChart