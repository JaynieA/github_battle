import React  from 'react';

class Main extends React.Component{
  render() {
    return (
            <div className='main-container'>
              Hello from Main! { this.props.children }
            </div>
    ) // end return
  } // end render
} // end Main

export default Main;
