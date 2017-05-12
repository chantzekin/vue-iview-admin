//
//

export default {
  // user
  token: state => state.user.token,
  name: state => state.user.name,

  // dashboard
  statisticsNumbers: state => state.dashboard.numbers,
  regionChartData: state => state.dashboard.regionChartData,
  ageChartData: state => state.dashboard.ageChartData,
  osChartData: state => state.dashboard.osChartData,
  terminalChartData: state => state.dashboard.terminalChartData
}

