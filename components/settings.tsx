import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface SettingsProps {
  checked: {
    suggestions: boolean;
    collections: boolean;
    products: boolean;
  };
  setChecked: Dispatch<
    SetStateAction<{
      suggestions: boolean;
      collections: boolean;
      products: boolean;
    }>
  >;
  numberChar: number;
  setNumberChar: Dispatch<SetStateAction<number>>;
}

export function Settings({
  checked,
  setChecked,
  numberChar,
  setNumberChar,
}: SettingsProps) {
  const [reachMin, setReachMin] = useState<boolean>(false);
  const [error, setError] = useState({
    blocks: false,
    numChar: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!reachMin) {
      setChecked({
        ...checked,
        [event.target.name]: event.target.checked,
      });
    } else {
      if (
        event.target.name ===
        Object.entries(checked).find((item) => item[1] === true)?.[0]
      ) {
        setError({ ...error, blocks: true });
      }
      setChecked({
        ...checked,
        [event.target.name]: true,
      });
    }
  };

  useEffect(() => {
    if (Object.values(checked).filter((item) => item === true).length === 1) {
      setReachMin(true);
    } else {
      setError({ ...error, blocks: false });
      setReachMin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  useEffect(() => {
    if (numberChar === 0) {
      setError({
        ...error,
        numChar: true,
      });
    } else {
      setError({
        ...error,
        numChar: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberChar]);

  return (
    <div className="sm:w-[300px]">
      <h3 className="block sm:hidden font-bold mb-4 underline">SETTINGS</h3>
      <h3 className="font-bold">1. Display blocks: </h3>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.suggestions}
              onChange={handleChange}
              name="suggestions"
            />
          }
          label="Suggestions"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.collections}
              onChange={handleChange}
              name="collections"
            />
          }
          label="Collections"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.products}
              onChange={handleChange}
              name="products"
            />
          }
          label="Products"
        />
      </FormGroup>

      {error.blocks && (
        <span className="text-xs text-red-500">
          At least 1 option is checked
        </span>
      )}

      <h3 className="font-bold mt-5">2. Number of characters: </h3>
      <TextField
        error={error.numChar}
        value={numberChar.toString()}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setNumberChar(parseInt(event.target.value) || 0);
        }}
        size="small"
        fullWidth
        margin="dense"
        helperText={
          error.numChar
            ? "Number of character must be greater than 0"
            : "Change the number of character that makes the Suggestion display when typing"
        }
      />
    </div>
  );
}
