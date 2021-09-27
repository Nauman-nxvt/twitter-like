import * as React from 'react';
import {ToggleButtonGroup, ToggleButton as ToggleBtn} from '@mui/material';

export default function ToggleButton({options, onChange, defaultValue}) {
    const [alignment, setAlignment] = React.useState(defaultValue);

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            onChange(newAlignment);
        }
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            size="small"
        >
            {options.map(option => <ToggleBtn size="small" value={option.value} key={option.value}>{option.text}</ToggleBtn>)}
        </ToggleButtonGroup>
    );
}