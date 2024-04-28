import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  if (!["large", "small"].includes(size.toLocaleLowerCase()))
    throw new Error(`Unrecognized IconInput size "${size}".`);

  const isLarge = size.toLocaleLowerCase() === "large";
  const isSearch = label.toLocaleLowerCase().includes("search");

  let Input;
  if (isLarge) {
    Input = LargeInput;
  } else {
    Input = SmallInput;
  }

  return (
    <Wrapper>
      <Input
        width={width}
        type={isSearch ? "search" : "text"}
        placeholder={placeholder}
      />
      <Icon
        id={icon}
        size={isLarge ? 24 : 16}
        strokeWidth={isLarge ? 2 : 1}
        style={{ position: "absolute", top: isLarge ? 6 : 4, zIndex: "-1" }}
      ></Icon>
      <VisuallyHidden as="label" htmlFor={Input}>
        {label}
      </VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  border-block-end: 2px solid ${COLORS.gray700};
  position: relative;
  width: fit-content;

  &:hover {
    color: ${COLORS.black};
    border-block-end: 2px solid ${COLORS.black};
  }
`;

const BaseInput = styled.input`
  font-weight: 700;
  line-height: 1.2;
  font-family: Roboto, sans-serif;
  border: none;
  background-color: transparent;
  outline-offset: 4px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const LargeInput = styled(BaseInput)`
  font-size: 1.125rem;
  height: 36px;
  width: ${({ width }) => width + 24}px;
  padding-left: 32px;
  padding-top: 6px;
`;

const SmallInput = styled(BaseInput)`
  font-size: 0.875rem;
  height: 24px;
  width: ${({ width }) => width + 16}px;
  padding-left: 24px;
  padding-top: 3px;
`;

export default IconInput;
