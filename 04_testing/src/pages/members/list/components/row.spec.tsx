import * as React from "react";
import { shallow } from "enzyme";
import { Row } from "./row";

describe("pagesmemberslistcomponents (row) tests", () => {
  it("should render as expected when passing required properties", () => {
    // Arrange
    const props = {
      member: {
        id: 1,
        name: "María",
        avatarUrl: "maria.png"
      }
    };
    // Act
    const component = shallow(<Row {...props} />);
    // Assert
    expect(component).toMatchSnapshot();
  });
});
