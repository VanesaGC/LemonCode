import * as React from "react";
import { shallow } from "enzyme";
import { Header } from "./header";

describe("pagesmemberslistcomponents (Header) tests", () => {
  it("should render as expected when is invoked", () => {
    // Arrange

    // Act
    const component = shallow(<Header />);
    // Assert
    expect(component).toMatchSnapshot();
  });
});
