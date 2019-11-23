import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import renderer from 'react-test-renderer'
import Card from './Card'
import store from './store'

describe('List Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<List />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
    
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(
                    <List 
                        key={store.lists.id}
                        header={store.lists.header}
                        cards={store.allCards.a}
                        />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})

// Note: If your test for the List component fails examine the error message carefully. 
// What is the component expecting as a prop? How can you invoke the component with 
// the required prop in your test?