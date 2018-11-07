import React from "react";
import Dashboard from "../components/barGraph";
import { mount } from "enzyme";

describe("<Dashboard />", () => {
	describe("rendering", () => {
		let props, wrapper;

		beforeEach(() => {
			props = {
				dispatch: jest.fn()
			};

			wrapper = mount(<Dashboard {...props} />);
		});

		it("Should render without crashing", () => {
			wrapper;
		});
	});
});
