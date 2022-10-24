import React, { Component } from 'react';

class TodoList extends Component{
    render() {

        return (
            <div>
              <h2>Todo List</h2>  
              <form>
                <input type="text" placeholder="nouvelle tache" />
              </form>
            </div>
        );
    }
}