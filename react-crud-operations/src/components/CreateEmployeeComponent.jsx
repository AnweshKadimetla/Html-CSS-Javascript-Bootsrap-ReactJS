import React,{Component} from "react";
import EmployeeServices from "../Services/EmployeeServices";

class CreateEmployeeComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            emailId:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this) 
        this.changeEmailHandler=this.changeEmailHandler.bind(this)
        this.saveEmployee = this.saveEmployee.bind(this)
    }

        saveEmployee=(e)=>{
            e.preventDefault();//Prevent the Refreshing the page
            //save the information
            let employee = {
                firstName:this.state.firstName, //here values comming from ---value
                lastName:this.state.lastName,
                emailId:this.state.emailId
               
            }
            console.log('employee => ' + JSON.stringify(employee))//Print the infomation using 'stingfy'---->just like toString
            EmployeeServices.createEmployee(employee).then((Response) =>{
                this.props.history.push('/employee')
            })
        }
        changeFirstNameHandler(event){
            this.setState({firstName: event.target.value})
        }
        changeLastNameHandler(event){
            this.setState({lastName: event.target.value})
        }
        changeEmailHandler(event){
            this.setState({emailId: event.target.value})            
        }
        //Binding 
    cancel(){
        this.props.history.push('/employee')
    }
    render(){
        return(
            <div>
                <h1>Employee form</h1>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
                                    </div>

                                    <div className="form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email address" name="email address" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailHandler}></input>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                    style={{marginLeft:"10px"}}>cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateEmployeeComponent;