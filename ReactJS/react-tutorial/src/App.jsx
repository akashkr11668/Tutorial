import Tut from "./Tut"
const a ='money'

const App = () => {
  return (
    
    <div style={{textAlign:'center'}}>
     <h1>hey there {a}</h1> 
     
    </div>
  )
}

export default App







 



















































// import React from 'react';
// import StudentMarksForm from './StudentMarksForm.jsx';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showForm: true,
//       result: null
//     };
//     console.log('App - Constructor');
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('App - getDerivedStateFromProps', props, state);
//     return null;
//   }

//   componentDidMount() {
//     console.log('App - componentDidMount');
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('App - shouldComponentUpdate', nextProps, nextState);
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('App - getSnapshotBeforeUpdate', prevProps, prevState);
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('App - componentDidUpdate', prevProps, prevState, snapshot);
//   }

//   componentWillUnmount() {
//     console.log('App - componentWillUnmount');
//   }

//   componentDidCatch(error, info) {
//     console.log('App - componentDidCatch', error, info);
//   }

//   handleFormSubmit = (result) => {
//     this.setState({ showForm: false, result });
//   }

//   render() {
//     console.log('App - render');
//     const { showForm, result } = this.state;

//     if (showForm) {
//       return <StudentMarksForm onSubmit={this.handleFormSubmit} />;
//     } else {
//       return (
//         <div>
//           <h1>Result:</h1>
//           <p>{result}</p>
//         </div>
//       );
//     }
//   }
// }

// export default App;




















































// create a reactJs application with useContext and custom hooks to buid and demo the lifecycle of components . use all the methods involved in mounting
//  and unmounting , updating and error handling. You can also use forms to capture the users Credentials, and then validate them. You should include 
//  each method in a seprate code. Design a form for student marks and generate a result module with grades O,A,A+,B,B+,C,D, as passing grades and E grade for Failures.
//  Moumting Phase :  constructor(), static,  getDerivedStateFromProps(), render(), componentDidMount() 
//  updating Phase : static , getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()
//  Unmounting Phase : componentWillUnmount() 
//  Error handling Phase : componentDidCatch()







// const Head = () =>{
//   return(
//     <section>
//       <Image/>
//       <Title/>
//       <Author/>
//     </section>
   
//   )
// }

// const Image =()=>{
//  return <img src="https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71IJiOOyb1L._AC_UL600_SR600,400_.jpg" alt="Otlive" />
// }

//  const Title = ()=> {
//  return <h2>Outlive</h2>
// }

// const Author = () =>{
//  return <h2>Olive</h2>
// }

