import * as React from 'react'
import { useState } from 'react'
import { useAsync } from 'react-async-hook'

import { fetchOptions } from './api.js'

const TypeaheadOption = ({option}) => {
    return <div className="typeahead-option">{option}</div>
}


const typeaheadOptions = ({options}) =>
    <div>
        {options && options.map(option => <TypeaheadOption key={option} option={option}/>)}
    </div>

const Typeahead = () => {

    const [inputVal, setInputVal] = useState('')

    const asyncOptions = useAsync(fetchOptions, [inputVal])

    const onInputChange = async ({target: {value}}) => {
        setInputVal(value)
    }


    return (
        <div className="wrapper">
            <input
                className="typeahead-input"
                type="text"
                placeholder="start typing"
                value={inputVal}
                onChange={onInputChange}
            />
            {
                typeaheadOptions({options: asyncOptions.result})
            }
        </div>
    )
}

export default Typeahead