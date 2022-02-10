import axios from "axios";

const Employee_API_BASE_URL = "http://localhost:8082/api/v1/employee"

class EmployeeServices{

    getEmployees(){
        return axios.get(Employee_API_BASE_URL)
    }
    createEmployee(employee){
        return axios.post(Employee_API_BASE_URL,employee)
    }

}
export default new EmployeeServices();