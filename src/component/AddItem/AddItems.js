import React, {Component} from 'react';
import './AddItems.css';
class AddItem extends Component {
    state = {
        name: '',
        age: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length < 1 || this.state.age.length < 1) {
            alert('Please fill all field');
        }else {
            this.setState({
                name: '',
                age: ''
            });


            this.props.addItem(this.state)
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Enter name ...' id='name' onChange={this.handleChange} value={this.state.name} />
                    <input type='number' placeholder='Enter age ...' id='age' onChange={this.handleChange} value={this.state.age} />
                    <input type='submit'  value='Add'/>
                </form>
            </div>
        );
    }
}

export default AddItem