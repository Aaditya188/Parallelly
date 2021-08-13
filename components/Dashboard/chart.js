import Chart from "react-google-charts";
function chart() {
  return (
    <div className="chartme">
      <Chart
        width={"450px"}
        height={"300px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", "Current", "Last"],
          [0, 0, 0],
          [1, 10, 5],
          [2, 23, 15],
          [3, 17, 9],
          [4, 18, 10],
          [5, 9, 5],
          [6, 11, 3],
          [7, 27, 19]
        ]}
        options={{
          colors: ["#80bc67", "#4993c3"],
          chartArea: {
            width: "60%",
            height: "60%"
          },
          pointSize: 10,
          hAxis: {
            title: "Amount"
          },
          vAxis: {
            title: "Day"
          },
          animation: {
            startup: true,
            easing: "ease",
            duration: 1500
          },
          enableInteractivity: true
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default chart;
