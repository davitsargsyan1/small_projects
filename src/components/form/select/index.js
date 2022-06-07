import { Controller } from "react-hook-form";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function FormSelect({
  label,
  error,
  placeholder,
  options = [],
  fullWidth = true,
  variant = "standard",
  ...props
}) {
  return (
    <FormControl variant={variant} fullWidth>
      <Controller
        {...props}
        render={({ field }) => (
          <>
            <InputLabel id={props.name}>{label}</InputLabel>
            <Select
              {...field}
              label={label}
              error={error}
              value={field.value ?? ""}
              placeholder={placeholder}
            >
              {options.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </>
        )}
      />
    </FormControl>
  );
}

export default FormSelect;
