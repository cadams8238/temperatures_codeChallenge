import React from "react";
import BarGraph from "../components/barGraph";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("<BarGraph />", () => {
	const data = [
		{
			date: "1/31",
			"Max Temp": 45,
			"Min Temp": 28
		},
		{
			date: "2/1",
			"Max Temp": 45,
			"Min Temp": 28
		}
	];

	it("Should render without crashing", () => {
		shallow(<BarGraph graphData={data} />);
	});

	it("Snapshot test", () => {
		const tree = renderer.create(<BarGraph graphData={data} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
