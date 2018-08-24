import styled from "styled-components";
import {COLORS} from "../../../constants/colors";

export const CartWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 600px;
  margin: 10px 0;
  box-sizing: border-box;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.lightGray};
`;
