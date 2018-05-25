/*
* A bar chart in the shortlist.
*/
import React from 'react';
import PropTypes from 'prop-types';
import {
    XYPlot,
    VerticalBarSeries,
} from 'react-vis';

export const BarChart = ({ data }) => (
    <div>
        <XYPlot
            xDomain={[0, 2]}
            width={240}
            height={40}
            margin={{left: 0, right: 0, top: 10, bottom: 10}}
        >
            <VerticalBarSeries
                data={data}
                colorType="literal"
            />
        </XYPlot>
    </div>
)

BarChart.propTypes = {
    data: PropTypes.array,
};

//export default BarChart;
