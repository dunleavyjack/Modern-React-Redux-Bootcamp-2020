import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
    {
        title: 'What is React?',
        content: 'A front end framework'
    },
    {
        title: 'Why use React?',
        content: 'It is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You can make components'
    },
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

export default () => {
    return (
        <div>
            <Dropdown options={options}/>
        </div>
    )
}