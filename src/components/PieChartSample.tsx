import { PieChart, Series, Label, Connector } from 'devextreme-react/pie-chart';
import { billionaires } from '../data/billionaires';

const PieChartSample = () => {
    return (
        <PieChart
            dataSource={billionaires}
            type="doughnut"
        >
            <Series
                argumentField="country"
                valueField="amount"
            >
                <Label
                    visible={true} // Make the label visible
                    format="percent" // Show the percentage
                    customizeText={(pointInfo) => {
                        console.log(pointInfo)
                        return `${pointInfo.argument}: ${(pointInfo.percent * 100).toFixed(2)}`;
                    }} // Optional: Customize the label text
                >
                    <Connector visible={true} /> {/* Add connector lines */}
                </Label>
            </Series>
        </PieChart>
    );
};

export default PieChartSample;