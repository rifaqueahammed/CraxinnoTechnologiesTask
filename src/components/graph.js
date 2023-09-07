import React from "react";
import { Line } from "@ant-design/charts";
import { useSelector } from "react-redux";

function Graph() {
  const data = useSelector((state) => state.account.initialBalance);
  const config = {
    data,
    height: 300,
    xField: "month",
    yField: "initialBalance",
    point: {
      size: 2,
      shape: "diamond",
    },
    tooltip: {
      formatter: (datum) => {
        return { name: "Value", value: datum.value };
      },
      customContent: (title, data) => {
        return (
          <div>
            {data.map((item, index) => (
              <div key={index} className="tooltip-chart">
                <span className="tooltip-item-name">{item.title}</span>
                <span className="tooltip-item-value">{item.value}</span>
              </div>
            ))}
          </div>
        );
      },
      showMarkers: true,
      showContent: true,
      position: "right",
      showCrosshairs: true,
    },
  };

  return (
    <div className="w-full">
      <Line {...config} />
    </div>
  );
}

export default Graph;
