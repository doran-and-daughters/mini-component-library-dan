/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let BarContainer;
  switch (size.toLocaleLowerCase()) {
    case "large":
      BarContainer = LargeBarContainer;
      break;
    case "medium":
      BarContainer = MediumBarContainer;
      break;
    case "small":
      BarContainer = SmallBarContainer;
      break;
    default:
      throw new Error(`Unrecognized ProgressBar size "${size}".`);
  }

  return (
    <BarContainer role="progressbar" aria-valuenow={value}>
      <Bar value={value}></Bar>
    </BarContainer>
  );
};

const BaseBarContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const LargeBarContainer = styled(BaseBarContainer)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;

const MediumBarContainer = styled(BaseBarContainer)`
  height: 12px;
  border-radius: 4px;
`;

const SmallBarContainer = styled(BaseBarContainer)`
  height: 8px;
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${({ value }) => value}%;
  height: 100%;

  ${LargeBarContainer} & {
    border-radius: ${({ value }) =>
      value === 100 ? "6px" : value > 98 ? "6px 3px 3px 6px" : "6px 0 0 6px"};
  }

  ${MediumBarContainer} & {
    border-radius: ${({ value }) =>
      value === 100 ? "4px" : value > 98 ? "4px 2px 2px 4px" : "4px 0 0 4px"};
  }

  ${SmallBarContainer} & {
    border-radius: ${({ value }) =>
      value === 100 ? "4px" : value > 98 ? "4px 2px 2px 4px" : "4px 0 0 4px"};
  }
`;

export default ProgressBar;
