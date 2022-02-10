import React,{Component} from "react";
import EmployeeServices from "../Services/EmployeeServices";
class ListEmployeeComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
        this.addEmployee = this.addEmployee.bind(this)
    }
    componentDidMount(){
        EmployeeServices.getEmployees().then( (Response) =>{
            this.setState({employees: Response.data})
        })
    }
    addEmployee(){
        this.props.history.push('/add-employee')
    }
    render(){
        return(
            <div>
                <h2 className="text-center">Employee List</h2>
                
                    <button className="btn btn-lg  btn-primary" onClick={ this.addEmployee }>Add Employee</button>
                    
                    <div className="row">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee id</th>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListEmployeeComponent;