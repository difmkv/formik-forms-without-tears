import { NativeSelect } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    onChange: handleChange,
  };

  if (meta.touched && meta.error) {
    configSelect.error = true;
  }

  return (
    <NativeSelect {...configSelect}>
      {Object.keys(options).map((item, index) => (
        <option key={index} value={options[item]}>
          {options[item]}
        </option>
      ))}
    </NativeSelect>
  );
};

export default SelectWrapper;
