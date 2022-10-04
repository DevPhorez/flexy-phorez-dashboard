import * as React from 'react'
import ReactDOM from "react-dom/client";

import ReactApexChart from "react-apexcharts";

function TotalSales () {
	
	const [state] = React.useState({
		series: [25, 35, 35],
		options: {
			labels: [2021, 2020, 2019],
			chart: {
				type: 'donut',
			},
			dataLabels: {
				enabled: false,
			},
			colors: ['var(--info)', 'var(--warning)', 'rgba(119, 126, 137, 0.1)'],
			legend: {
				show: true,
				position: 'bottom'
			},
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
				}
			}]
		},
	})
	
	
	return (
		<div className='d-flex justify-content-center'>
			<ReactApexChart options={state.options} series={state.series} type="donut" width={303} height={300}/>
		</div>
	)
}

export default TotalSales