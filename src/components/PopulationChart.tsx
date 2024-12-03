import "devextreme/dist/css/dx.light.css";
import Chart, {
  ArgumentAxis,
  Label,
  Legend,
  Series,
} from "devextreme-react/chart";
import { populations } from "../data/populations";

const PopulationChart = () => {
  return (
    <Chart
      title="World Population by Decade"
      dataSource={populations}
      id="chart"
    >
      <ArgumentAxis tickInterval={10}>
        <Label format="decimal" />
      </ArgumentAxis>

      <Series
        type="bar"
        color="#ffaa66"
        valueField="value" // Specifies which data source field provides values for series points. (Default Value: 'val')
        argumentField="year" // Specifies which data source field provides arguments for series points. (Default Value: 'arg')
        name="My populations" // Specifies the name that identifies the series. it used in legend for showing series's name
      />
      <Series
        type="bar"
        color="#ffaa66"
        valueField="value" // Specifies which data source field provides values for series points. (Default Value: 'val')
        argumentField="year" // Specifies which data source field provides arguments for series points. (Default Value: 'arg')
        name="My populations2" // Specifies the name that identifies the series. it used in legend for showing series's name
      />

      <Series
        type="bar"
        color="#ffaa66"
        valueField="value" // Specifies which data source field provides values for series points. (Default Value: 'val')
        argumentField="year" // Specifies which data source field provides arguments for series points. (Default Value: 'arg')
        name="My populations3" // Specifies the name that identifies the series. it used in legend for showing series's name
      />
      <Legend
        //visible={false}
        position="outside"
        horizontalAlignment="center"
        verticalAlignment="top"
        orientation="vertical"
        columnCount={2}
        columnItemSpacing={20}
        rowItemSpacing={30}
        hoverMode="includePoints"
      />
    </Chart>
  );
};

export default PopulationChart;
