import React from 'react'

type InputProps = {

    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input = (props: InputProps) => {
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
    return (
        <input onChange={props.handleChange} value={props.value} />
    )
}
