import * as React from "react";
import { shallow } from "enzyme";
import { Table } from "./table";

describe("pagesmemberslistcomponents (table) tests", () => {
  it("should render as expected when passing required properties", () => {
    // Arrange
    const props = {
      members: [
        {
          id: 1,
          name: "María",
          avatarUrl: "maria.png"
        },
        {
          id: 2,
          name: "Pedro",
          avatarUrl: "pedro.png"
        }
      ]
    };
    // Act
    const component = shallow(<Table {...props} />);
    // Assert
    expect(component).toMatchSnapshot();
  });
});
