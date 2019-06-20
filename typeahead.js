import * as React from 'react'
import { useState } from 'react'
import { useAsync } from 'react-async-hook'
import useConstant from 'use-constant'

import { fetchOptionsDebounced } from 'api'

const TypeaheadOption = ({option}) => {
    return <div className="typeahead-option">{option}</div>
}

const typeaheadOptions = ({options}) =>
    <div>
        {options && options.map(option => <TypeaheadOption key={option} option={option}/>)}
    </div>

const Typeahead = () => {

    const [inputVal, setInputVal] = useState('')

    const searchDebounced = useConstant(fetchOptionsDebounced)

    const asyncOptions = useAsync(searchDebounced, [inputVal])

    const onInputChange = async ({target: {value}}) => setInputVal(value)

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