import {useState} from "react";
import Switch from "@mui/material/Switch";

const ToggleButton = ({label}) => {
  const [checked, setChecked] = useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{"aria-label": "controlled"}}
    />
  );
};

export default ToggleButton;
