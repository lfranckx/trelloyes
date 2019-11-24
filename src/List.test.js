import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import renderer from 'react-test-renderer'
import store from './store'

describe('List Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
                        <List 
                            key={store.lists[0].id}
                            header={store.lists[0].header}
                            cards={store.lists[0].cardIds.map(id => store.allCards[id])}
                        />, 
                        div)
        ReactDOM.unmountComponentAtNode(div)
    })
    
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(
                    <List 
                        key={store.lists[0].id}
                        header={store.lists[0].header}
                        cards={store.lists[0].cardIds.map(id => store.allCards[id])}
                    />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})

// Note: If your test for the List component fails examine the error message carefully. 
// What is the component expecting as a prop? How can you invoke the component with 
// the required prop in your test?