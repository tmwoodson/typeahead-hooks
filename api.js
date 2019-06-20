import AwesomeDebouncePromise from "awesome-debounce-promise/dist/index";

const SERVER_RESPONSE = [
    'kittens',
    'puppies',
    'milkshakes',
    'lizards',
    'snakes',
    'ice cream',
    'cats',
    'salamanders',
    'yogurt',
    'songs',
    'dogs',
    'rabbits',
    'dragons',
    'geckos',
    'cake',
    'skittles',
    'beaches',
    'books',
    'drawings',
    'faces'
]

const MAX_RESPONSES = 5

const DEBOUNCE_MS = 500

const filterData = async (searchString) => {
    if (!searchString || searchString === '') return []
    const matches = SERVER_RESPONSE.filter(option => option.includes(searchString))
    if (matches.length > MAX_RESPONSES) {
        return matches.slice(0, MAX_RESPONSES)
    }
    return Promise.resolve(matches);
}

export const fetchOptions = async (searchString) => await filterData(searchString)

export const fetchOptionsDebounced = () => AwesomeDebouncePromise(fetchOptions, DEBOUNCE_MS)

