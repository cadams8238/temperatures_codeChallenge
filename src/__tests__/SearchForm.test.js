import React from "react";
import SearchForm from "../components/searchForm";
import { shallow, mount } from "enzyme";

describe("<SearchForm />", () => {
	it("Should render without crashing", () => {
		const updateSearchTerm = jest.fn(),
			fetchData = jest.fn(),
			searchTerm = "";
		shallow(
			<SearchForm
				updateSearchTerm={updateSearchTerm}
				fetchData={fetchData}
				searchTerm={searchTerm}
			/>
		);
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
		// console.log(component.debug());

		component.find("button").simulate("click");
		expect(fetchData).toBeCalled();
	});
});
