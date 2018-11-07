import React from "react";
import SearchForm from "../components/searchForm";
import { mount } from "enzyme";

describe("SearchForm component", () => {
	let props, wrapper;

	beforeEach(() => {
		props = {
			updateSearchTerm: undefined,
			fetchData: undefined,
			searchTerm: undefined
		};

		wrapper = mount(<SearchForm {...props} />);
	});

	it("Should render without crashing", () => {
		wrapper;
	});

	it("Should render a form", () => {
		expect(wrapper.find("form")).toHaveLength(1);
	});

	it("Should call function passed in on button click", () => {
		const updateSearchTerm = jest.fn(),
			fetchData = jest.fn(),
			searchTerm = "",
			component = mount(
				<SearchForm
					updateSearchTerm={updateSearchTerm}
					fetchData={fetchData}
					searchTerm={searchTerm}
				/>
			);

		component.find("button").simulate("click");
		expect(fetchData).toBeCalled();
	});
});
