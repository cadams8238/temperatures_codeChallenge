import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import styles from './styles/graph.module.css';

export default function barGraph() {
// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
  return (
    <div className={styles.barGraph}>
      <ResponsiveBar
        data={[
          {
            "date": "9-13-2018",
            "Max Temp": 212,
            "maximumColor": "hsl(164, 70%, 50%)",
            "Min Temp": 139,
            "minimumColor": "hsl(176, 70%, 50%)"
          },
          {
            "date": "9-12-2018",
            "Max Temp": 212,
            "maximumColor": "hsl(164, 70%, 50%)",
            "Min Temp": 139,
            "minimumColor": "hsl(176, 70%, 50%)"
          },
          {
            "date": "9-11-2018",
            "Max Temp": 212,
            "maximumColor": "hsl(164, 70%, 50%)",
            "Min Temp": 139,
            "minimumColor": "hsl(176, 70%, 50%)"
          },
          {
            "date": "9-10-2018",
            "Max Temp": 212,
            "maximumColor": "hsl(164, 70%, 50%)",
            "Min Temp": 139,
            "minimumColor": "hsl(176, 70%, 50%)"
          },
          {
            "date": "9-09-2018",
            "Max Temp": 212,
            "maximumColor": "hsl(164, 70%, 50%)",
            "Min Temp": 139,
            "minimumColor": "hsl(176, 70%, 50%)"
          },
          {
            "date": "9-08-2018",
            "Max Temp": 212,
            "maximumColor": "hsl(164, 70%, 50%)",
            "Min Temp": 139,
            "minimumColor": "hsl(176, 70%, 50%)"
          },
          {
            "date": "9-07-2018",
            "Max Temp": 212,
            "maximumColor": "hsl(164, 70%, 50%)",
            "Minimum": 139,
            "minimumColor": "hsl(176, 70%, 50%)"
          }
        ]}
        keys={[
          "Min Temp",
          "Max Temp"
        ]}
        indexBy="date"
        margin={{
          "top": 50,
          "right": 125,
          "bottom": 80,
          "left": 60
        }}
        padding={0.3}
        groupMode="grouped"
        colors="oranges"
        axisBottom={{
          "orient": "bottom",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": -40
        }}
        axisLeft={{
          "orient": "left",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0
        }}
        enableLabel={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        theme={{
          tooltip: {
            container: {
              fontSize: '13px',
              background: '#fff'
            }
          },
          labels: {
            textColor: '#fff'
          }
        }}
        legends={[
          {
            "dataFrom": "keys",
            "anchor": "bottom-right",
            "direction": "column",
            "justify": true,
            "translateX": 109,
            "translateY": 0,
            "itemWidth": 100,
            "itemHeight": 15,
            "itemsSpacing": 0,
            "symbolSize": 15,
            "itemDirection": "right-to-left"
          }
        ]}
      />
    </div>
  )
}