import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import renderer from 'react-test-renderer'
import { exportAllDeclaration } from '@babel/types'

describe('Card Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Card />, div)
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})