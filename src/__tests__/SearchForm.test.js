import React from "react";
import SearchForm from "../components/searchForm";
import { mount } from "enzyme";

describe("<SearchForm />", () => {
	describe("rendering", () => {
		let props, wrapper;

		beforeEach(() => {
			props = {
				updateSearchTerm: jest.fn(),
				fetchData: jest.fn(),
				searchTerm: ""
			};

			wrapper = mount(<SearchForm {...props} />);
		});

		it("Should render without crashing", () => {
			wrapper;
		});

		it("Should render a form", () => {
			expect(wrapper.find("form")).toHaveLength(1);
		});

		it("Should contain an input element", () => {
			expect(wrapper.find("input")).toHaveLength(1);
		});

		it("Should contain a button element", () => {
			expect(wrapper.find("button")).toHaveLength(1);
		});

		describe("props", () => {
			it("should receive 3 props", () => {
				expect(Object.keys(wrapper.props()).length).toBe(3);
			});

			it("should receive updateSearchTerm function", () => {
				expect(wrapper.props().updateSearchTerm).toBe(props.updateSearchTerm);
			});

			it("should receive fetchData function", () => {
				expect(wrapper.props().fetchData).toBe(props.fetchData);
			});

			it("should receive searchTerm value (string)", () => {
				expect(wrapper.props().searchTerm).toBe(props.searchTerm);
			});
		});
	});

	describe("behavior", () => {
		let props, component;

		beforeEach(() => {
			props = {
				updateSearchTerm: jest.fn(),
				fetchData: jest.fn(),
				searchTerm: ""
			};

			component = mount(<SearchForm {...props} />);
		});

		it("Should call function passed in on button click", () => {
			component.find("button").simulate("click");
			expect(props.fetchData).toBeCalled();
		});
	});
});
