const SERVER_PORT = 3000;
const CLIENT_PORT = 4000;

const MONGODB_ADDRESS = 'mongodb://localhost:27017';

const EMPLOYEE_DB = "employeesDB";
const DEPARTMENT_DB = "departmentsDB";
const SHIFT_DB = "shiftsDB";

const SECURITY_KEY = 'some_key';
const FILE = 'configs/logFile.json';
const USERS_LIST = "https://jsonplaceholder.typicode.com/users"

const EMPTY_LOG = {}

module.exports = {
    SERVER_PORT,
    CLIENT_PORT,
    MONGODB_ADDRESS,
    EMPLOYEE_DB,
    DEPARTMENT_DB,
    SHIFT_DB,
    SECURITY_KEY,
    FILE,
    USERS_LIST
}