import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './STORE'

describe('List component', () => {
    const cardsArr = Object.entries(STORE.allCards);
  
   it('renders without crashing', () => {
    const div =document.createElement('div');
    ReactDOM.render(<List cards={cardsArr} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List name="List" cards={cardsArr} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  

});