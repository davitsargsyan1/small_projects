import { Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";

function FormInput({
  type,
  error,
  placeholder,
  helperText,
  size = "small",
  fullWidth = true,
  variant = "standard",
  ...props
}) {
  return (
    <Controller
      {...props}
      render={({ field }) =>
        console.log(field) || (
          <TextField
            {...field}
            size={size}
            type={type}
            error={error}
            variant={variant}
            fullWidth={fullWidth}
            helperText={helperText}
            value={field.value ?? ""}
            placeholder={placeholder}
          />
        )
      }
    />
  );
}

export default FormInput;
