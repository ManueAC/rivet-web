import { styled, Typography } from "@mui/material";
import { BLACK_TEXT, GRAY_LIGHT_COLOR, PRIMARY_COLOR } from "../constants";

export const UserName = styled(Typography)({
  fontSize: "15px",
  color: PRIMARY_COLOR,
  textTransform: "capitalize",
  textDecoration: "underline",
});
export const UserNickname = styled(Typography)({
  fontSize: "12px",
  color: BLACK_TEXT,
});
export const UserLocation = styled(Typography)({
  fontSize: "12px",
  color: GRAY_LIGHT_COLOR,
  textTransform: "capitalize",
});
