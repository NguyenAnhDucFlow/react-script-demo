import React from 'react'

type InputProps = {

    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input = ({ value, handleChange }: InputProps) => {
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
    return (
        <input onChange={handleChange} value={value} />
    )
}
