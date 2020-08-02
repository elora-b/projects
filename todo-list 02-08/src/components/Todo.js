import React, { Component } from 'react'


export default class Todo extends Component {


    state = {
        element: '',
        items : []
      }
      
      onChange = (event) => {
          this.setState({
              [event.target.name] : event.target.value
          })
      }

      onSubmit = (e) => {
          e.preventDefault();
          this.setState({
              element: '',
              items: [...this.state.items, {element: this.state.element}]
          })  
      }

      deleteItem = (index) => {
          const arr = this.state.items
          arr.splice(index, 1)

            this.setState({
                items: arr
            })
      }

      renderTodo = () => {
          return this.state.items.map((item, index) => {
              return (
                  <div className="card mb-3" key={index}>
                      <div className="card-body" style={{backgroundColor: '#f5e9cc'}}>
                          <h4>{item.element}
                          <i className="fas fa-times"
                          style={{cursor: 'pointer', float: 'right', color: 'red'}}
                          onClick={() => this.deleteItem(item.index)}></i></h4>
                      </div>
                  </div>
              )
          })
      }

    render() {
        return (
            <React.Fragment>
            <div className="card my-3 text-center" style={{maxWidth : '500px', margin: 'auto'}}>
                <div className="card-header" style={{backgroundColor: '#d8afe0', fontWeight: 'bolder'}}>To Do List</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="element">What do you have to do ?</label>
                            <input type="text" 
                                placeholder="Enter something to do..."
                                className="form-control form-control-lg"
                                name="element"
                                onChange={this.onChange}
                                value={this.state.element}
                            />
                        </div>
                        <button className="btn btn-block" style={{backgroundColor: '#ac79b3', color: 'white'}}>
                            Add a task
                        </button>
                    </form>
                </div>
            </div>
            {this.renderTodo()}
            </React.Fragment>
        )
    }
}
