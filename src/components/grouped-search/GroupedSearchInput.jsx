import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export function GroupedSearchInput(props) {
  const data = props.data;
  const options = data.map((option) => {
    const firstLetter = option["im:name"].label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      data-testid="input"
      id="search-input"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option["im:name"].label}
      style={{ width: 300 }}
      onChange={props.onChange}
      closeIcon={false}
      renderInput={(params) => <TextField {...params} label={props.inputLabel} variant="outlined" />}
    />
  );
}