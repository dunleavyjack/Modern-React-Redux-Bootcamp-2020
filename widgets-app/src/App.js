import React from 'react'
import Accordion from './components/Accordion'

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

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
}