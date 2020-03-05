import React, { Component } from 'react'


class Form extends Component {

  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChangeName = (event) => {
    // console.log(event.target.value);
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  handleChangeEmail = (event) => {
    // console.log(event.target.value);
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  }

  handleChangePassword = (event) => {
    // console.log(event.target.value);
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (

      <div className="form-wrapper">
        <div>
          <h4>Create Account</h4>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="mytext"
                placehodler="Name"
                // name="name"
                // NoValidate
                onChange={this.handleChangeName}
                value={this.state.name}
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="mytext"
                placehodler="Email"
                // name="email"
                // NoValidate
                onChange={this.handleChangeEmail}
                value={this.state.email}
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="mytext"
                placehodler="Password"
                // name="password"
                // NoValidate
                onChange={this.handleChangePassword}
              />
            </div>

            <div className="createAccount">
              <button type="submit" className="myButton">Create Account</button>
              <small>Already have an account?</small>
            </div>

            </form>
        </div>
      </div>
    )
  }
}





//   render() {
//     return (
//
//       <div className="form-wrapper">
//         <div>
//           <h4>Create Account</h4>
//           <form onSubmit={this.handleSubmit} noValidate>
//             <div className="name">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 className="mytext"
//                 placehodler="Name"
//                 type="text"
//                 name="name"
//                 NoValidate
//                 onChange={this.handleChange}
//               />
//             </div>
//
//             <div className="email">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="text"
//                 className="mytext"
//                 placehodler="Email"
//                 type="email"
//                 name="email"
//                 NoValidate
//                 onChange={this.handleChange}
//               />
//             </div>
//
//             <div className="password">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="text"
//                 className="mytext"
//                 placehodler="Password"
//                 type="password"
//                 name="password"
//                 NoValidate
//                 onChange={this.handleChange}
//               />
//             </div>
//
//             <div className="createAccount">
//               <button type="submit" className="myButton">Create Account</button>
//               <small>Already have an account?</small>
//             </div>
//
//             </form>
//         </div>
//       </div>
//     )
//   }
// }

export default Form
