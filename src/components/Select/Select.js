import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Selector
        value={value}
        onChange={onChange}
        style={{
          width: `${Math.ceil(displayedValue.length)}em`,
        }}
      >
        {children}
      </Selector>
      <Icon
        id="chevron-down"
        strokeWidth={2}
        style={{
          position: "absolute",
          right: "12px",
          top: "10px",
          display: "inline",
        }}
      ></Icon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  position: relative;
  width: fit-content;
  padding: 0;
  margin: 0;

  &:hover {
    color: ${COLORS.black};
  }
`;

const Selector = styled.select`
  color: inherit;
  display: inline;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px;
  width: fit-content;
  font: 400 16px Roboto, sans-serif;
  border: transparent;
  margin: 0;
  appearance: none;
`;

export default Select;
