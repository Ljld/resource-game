import React, {Component} from 'react';

export const MyContext = React.createContext();
class MyProvider extends Component {
state = {message: ""}
render() {
        return (
            <MyContext.Provider value={
            {   state: this.state,
                mining: (amount) => {
                          setInterval(() => {
                            this.setState({
                              stock : this.state.stock + amount
                            })
                          }, 1000);}}}>
            {this.props.children}
            </MyContext.Provider>)
    }
}

export default MyProvider;
