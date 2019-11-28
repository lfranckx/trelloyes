Requirements
When the "delete" button is clicked on any card, remove all reference of that card from state.
When the "add random card" button is clicked, generate a random card and add it to the state and the appropriate list.
We've supplied a function for generating a random card to you in the resources below.
This drill should take about one hour to complete. If you're having trouble, attend a Q&A session or reach out on Slack for help.

Hints:

You'll need to refactor the App component so that it uses state for the store rather than props.
You'll need to implement the event handlers for the buttons as methods in the App component as it has access to setState.
You'll need to use callback props to wire up the event handlers to the onClick props of the buttons.
You'll need to utilise the id of each list and each card when implementing the buttons.
When deleting a card, you'll need to remove the references to that card in each list's cardIds, you can combine a map with a filter for this to generate a new lists array.
When creating a random card you'll need to both add the card to the allCards object as well as insert the card's id into the appropriate list's cardIds.

Resources:

For the "Add Random Card" button, you can use this function to generate a random new card inside the event handler for adding to state:

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

To remove key value pairs from an object you can use the omit function below, which returns a new object:

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

// Example
const objectWithKVPs = {
  key: 'value',
  foo: 'foo value',
  bar: 'bar value',
  abc: { nested: 'object' }
}

// To remove the foo key value pair
const newObjectWithKVPs = omit(objectWithKVPs, 'foo');