import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

export default function Checkboxe() {
  const [checked, setChecked] = React.useState(false);

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChangeCheckBox}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}
