import { Controller } from "react-hook-form";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormRadio({ error, fullWidth = true, ...props }) {
  return (
    <Controller
      {...props}
      render={({ field }) => (
        <RadioGroup
          {...field}
          error={error}
          aria-label="gender"
          value={field.value ?? "female"}
        >
          <FormControlLabel value="female" label="Female" control={<Radio />} />
          <FormControlLabel value="male" label="Male" control={<Radio />} />
        </RadioGroup>
      )}
    />
  );
}

export default FormRadio;
