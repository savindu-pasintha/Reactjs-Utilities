import React, { useCallback, useMemo } from "react";
import { debounce, throttle } from 'lodash';
import { Select, MenuItem, Checkbox, FormControlLabel, Radio, RadioGroup,} from "@mui/material";

// Consolidated and simplified styles
const styles = {
  fieldItem: {
    height: "25px",
    width: "100%",
    margin: "5px",
    padding: "0px",
  },
  textArea: {
    minHeight: "15px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #ccc",
    margin: "0px",
    padding: "0px",
  },
};

// Custom hooks with proper dependencies and cleanup
export const useDebounce = (callback, delay = 2000, dependencies = []) => {
  return useCallback(
    debounce(callback, delay), 
    [...dependencies, callback]
  );
};

export const useThrottle = (callback, delay = 2000, dependencies = []) => {
  return useCallback(
    throttle(callback, delay),
    [...dependencies, callback]
  );
};

export const RenderFieldItem = ({ field, formKey, row }) => {
  const { setFieldValue, form } = useStoreGrid2();

  // Memoize the debounced function with proper dependencies
  const handleOnChange = useDebounce(
    (value) => setFieldValue(formKey, field.id, value, row),
    2000,
    [formKey, field.id, row, setFieldValue]
  );

  // Create a common change handler to reduce repetition
  const createChangeHandler = useMemo(() => {
    return (eventOrValue) => {
      const value = eventOrValue?.target ? eventOrValue.target.value || eventOrValue.target.checked : eventOrValue;
      handleOnChange(value);
    };
  }, [handleOnChange]);

  // Use a lookup object instead of switch statement for better performance
  const fieldComponents = {
    input: (
      <input
        placeholder={field.name}
        type="text"
        style={styles.fieldItem}
        onChange={createChangeHandler}
        onBlur={() => console.log("focus lost")}
      />
    ),
    select: (
      <Select
        defaultValue=""
        sx={styles.fieldItem}
        onChange={createChangeHandler}
      >
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    ),
    checkbox: (
      <FormControlLabel
        control={
          <Checkbox onChange={(e) => handleOnChange(e.target.checked)} />
        }
        label={field.name}
        sx={styles.fieldItem}
      />
    ),
    radio: (
      <RadioGroup
        row
        sx={styles.fieldItem}
        onChange={createChangeHandler}
      >
        <FormControlLabel
          value="option1"
          control={<Radio />}
          label="Option 1"
        />
      </RadioGroup>
    ),
    textarea: (
      <textarea
        placeholder={field.name}
        style={styles.textArea}
        onChange={createChangeHandler}
      />
    ),
    date: (
      <input
        type="date"
        placeholder={field.name}
        style={styles.fieldItem}
        onChange={createChangeHandler}
      />
    ),
  };

  // Return the component or null if type doesn't exist
  return fieldComponents[field.type] || null;
};