import {
  Avatar,
  Box,
  Button,
  Collapse,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { FormGroupInput } from "../../shared/components/inputs";
import { useSearchForm } from "./home-hooks";
import SearchIcon from "@mui/icons-material/Search";
import {
  UserLocation,
  UserName,
  UserNickname,
} from "../../shared/components/Typography";
import { useFetch } from "../../shared/api/api";
import { useState } from "react";

const Container = styled(Box)({
  backgroundColor: "white",
  display: "grid",
  placeContent: "center",
  alignItems: "center",
  height: "100%",
  overflow: "auto",
});
const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "500px",
  gap: "15px",
  marginBottom: "140px",
});
const IconWrapper = styled(Box)({
  marginLeft: "10px",
  marginRight: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const FieldWrapper = styled(Box)({
  width: "80%",
  height: "45px",
});
const ButtonWrapper = styled(Box)({
  width: "20%",
});
const ResultsContainer = styled(Box)({
  display: "flex",
  gap: "25px",
  marginTop: "20px",
});
const SearchField = styled(FormGroupInput)({
  height: "100%",
  padding: 0,
});
const UserAvatar = styled(Avatar)({
  width: "100px",
  height: "100px",
});

const UserItem = ({ avatarUrl, name }): JSX.Element => {
  return (
    <ResultsContainer>
      <UserAvatar src={avatarUrl} />
      <Stack gap={"9px"}>
        <UserName>{name}</UserName>
        <UserNickname>{name}</UserNickname>
        <UserLocation>North West, Main Av.</UserLocation>
      </Stack>
    </ResultsContainer>
  );
};
export const HomeView = (): JSX.Element => {
  const { control, handleSubmit } = useSearchForm();
  const [search, setSearch] = useState<string>();
  const { data, loading, error } = useFetch({
    skip: !search,
    query: search,
  });

  const totalResults = data?.total_count;
  const items = data?.items;
  const isAvailableData = items?.length > 0;
  if (error) {
    console.log("error", error);
  }

  const onSubmitForm = handleSubmit(
    (data) => {
      console.log("data", data);
      setSearch(data?.search);
    },
    (onError) => {
      console.log("err", onError);
    }
  );

  return (
    <Container component={"form"} onSubmit={onSubmitForm}>
      <Wrapper>
        <FieldWrapper>
          <SearchField
            startAdornment={
              <IconWrapper>
                <SearchIcon color="primary" />
              </IconWrapper>
            }
            color="success"
            name="search"
            control={control}
            placeholder="Type something..."
          />
        </FieldWrapper>
        <ButtonWrapper>
          <Button type="submit" variant="contained" size="large">
            Search
          </Button>
        </ButtonWrapper>
      </Wrapper>

      {/* Search Results */}
      <Collapse in={!loading}>
        {!loading ? (
          isAvailableData && (
            <Typography variant="button" color={"grey"}>
              SEARCH RESULTS: {totalResults}
            </Typography>
          )
        ) : (
          <Typography variant="button" color={"grey"}>
            LOADING RESULTS
          </Typography>
        )}
        {items?.map((user) => (
          <UserItem avatarUrl={user?.avatar_url} name={user?.login} />
        ))}
      </Collapse>
    </Container>
  );
};
