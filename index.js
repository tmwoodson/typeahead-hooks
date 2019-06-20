// 1. build a search input that you can put text into
// 2. show all the possibilities when you type
// 3. smart match on strings
// 4. fetch server-side
// 5. fuzzy search (may not happen)

import '@babel/polyfill' // essential boilerplate to allow async/await
import * as React from 'react'
import ReactDOM from 'react-dom'

import Typeahead from './typeahead'

import './index.scss'

ReactDOM.render(<Typeahead/>, document.getElementById('root'))

