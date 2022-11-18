import React from "react"
import { Box ,Collapse} from "@chakra-ui/react"
import Chart from "chart.js/auto"
import { Line} from "react-chartjs-2"
import { defaults } from 'chart.js'
import PropTypes from 'prop-types'

defaults.font.family = 'Montserrat'
defaults.font.weight = 'bold'
function LineChart ({xlabel,ylabel,title,enter}){
  const data={
    labels: ylabel,
    datasets: [
      {
        label: title,
        data: xlabel,
        borderColor: 'rgb(255, 122, 232)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ]
  }
  return (
      <Collapse in={enter} animateOpacity >
      <Line data={data} />
      </Collapse>
  )
}
LineChart.propTypes={
  xlabel:PropTypes.array,
  ylabel:PropTypes.array,
  title:PropTypes.string,
}
LineChart.defaultProps={
  ylabel : ["12.00", "12.01", "12.02", "12.03", "12.04", "12.05"],
  xlabel: [0, 10, 5, 2, 20, 30, 45],
  title : "grafik",
}


export default LineChart