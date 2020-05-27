import React, {Component} from 'react';
import TodoItems from './component/TodoItems/Todoitems';
import AddItem from './component/AddItem/AddItems';
import logoImage from './logo.svg';
class App extends Component {
  state = {
    items: [
        {id: 1, name:"Mahmoud", age: 23},
        {id: 2, name:"Mohammed", age: 24},
        {id: 3, name:"Ahmad", age: 25},
    ]
  };
  deleteItem = (id) => {
      // let items = this.state.items;
      //
      // let i = items.findIndex(item => item.id === id);
      // items.splice(i, 1);
      //
      // this.setState({
      //     items
      // });
      let items = this.state.items.filter(item => {
          return  item.id !== id;
      });

      this.setState({
          items
      });
  }

  addItem = (item) => {
          item.id = Math.random();
          let items = this.state.items;
          items.push(item);

          this.setState({
              items
          });
  }
  render(){
    return (
        <div className="App container">
            <h1 className='text-center'>Todo list</h1>
            <img className='logoReact' src={logoImage}/>
            <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
            <AddItem addItem={this.addItem}/>
        </div>
    );
  }
}

export default App;
