import {
  Box,
  InputBaseProps,
  OutlinedInput as MuiOutlinedInput,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

const Super = styled("span")<{ isError?: boolean }>(({ theme, isError }) => ({
  color: !isError ? theme.palette.primary.light : theme.palette.error.main,
}));

interface FormInputProps extends InputBaseProps {
  isBackgroundDisabled?: boolean;
}

interface LabelInputProps extends TypographyProps {
  isError?: boolean;
  required?: boolean;
}
export const LabelInput = ({
  children,
  required,
  isError = false,
  ...props
}: LabelInputProps): JSX.Element => (
  <Typography
    color="gray"
    sx={{
      py: "5px",
      ...(isError && {
        color: "error.main",
      }),
      ...props.sx,
    }}
    {...props}
  >
    {children} {required && <Super isError={isError}>*</Super>}
  </Typography>
);

/**
 * Input group with label and error.
 */
interface FormGroupInputProps<T extends FieldValues> extends FormInputProps {
  label?: string;
  labelProps?: TypographyProps;
  errorMessageProps?: TypographyProps;
  control: Control<T>;
  name: Path<T>;
}

export const FormGroupInput = function <T extends FieldValues>({
  label,
  labelProps,
  errorMessageProps,
  ...props
}: FormGroupInputProps<T>): JSX.Element {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field, fieldState }) => {
        const error = fieldState.error;
        return (
          <Box sx={{ width: "100%", height: "45px", ...props.sx }}>
            {label && (
              <LabelInput
                required={props.required}
                isError={props.error}
                {...labelProps}
              >
                {label}
              </LabelInput>
            )}
            <MuiOutlinedInput
              id="outlined-adornment-amount"
              {...props}
              onChange={(e) => field.onChange(e.target.value)}
              value={field.value ?? ""}
              fullWidth
              color={error ? "error" : "primary"}
              error={Boolean(error)}
            />
            {error && (
              <LabelInput isError={Boolean(error)} {...errorMessageProps}>
                {error.message}
              </LabelInput>
            )}
          </Box>
        );
      }}
    />
  );
};
