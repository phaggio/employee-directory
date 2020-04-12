import React from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import QuickSearch from '../components/QuickSearch';
import EmployeeTable from '../components/EmployeeTable';
import DateInput from '../components/DateInput'
import DropDownGroup from '../components/DropDownGroup'

import { headerNames } from '../utils/headerNames';
import { sortBys } from '../utils/sortBys'

class Home extends React.Component {

  state = {
    employees: [],
    display: [],
    search: ``,
    beginDate: undefined,
    endDate: undefined,
    sortByArr: sortBys,
    selectedSortBy: { name: ``, key: `` }
  }

  componentDidMount() {
    this.getEmployees();
  }

  handleInputChange = event => {
    const targetName = event.target.name;
    if (targetName === `beginDate`) {
      const value = event.target.value ? event.target.value : `0001-01-01`;
      this.setState({ ...this.state, beginDate: value }, this.filteredEmployees)
    } else if (targetName === `endDate`) {
      const value = event.target.value ? event.target.value : `2999-12-31`;
      this.setState({ ...this.state, endDate: value }, this.filteredEmployees)
    } else {
      const value = event.target.value ? event.target.value.trim() : ``;
      this.setState({ ...this.state, search: value.trim().toLowerCase() }, this.filteredEmployees)
    }
  }

  matchedEmployee = (employee) => {
    const name = `${employee.firstname} ${employee.lastname}`.toLowerCase()
    const employeeDob = new Date(employee.dob);
    const begin = this.state.beginDate === undefined ? new Date(`1900-01-01`) : new Date(this.state.beginDate)
    const end = this.state.endDate === undefined ? new Date(`2100-01-01`) : new Date(this.state.endDate)
    if (name.includes(this.state.search) && employeeDob >= begin && employeeDob <= end) {
      return employee
    }
  }

  filteredEmployees = () => {
    const display = this.state.employees.filter(this.matchedEmployee)
    this.setState({ ...this.state, display: display })
  }


  updateSortBy = event => {
    const selectedSortByName = event.target.value;
    const selectedSortByKey = event.target.dataset.key
    for (const sortBy of sortBys) {
      if (sortBy.name === selectedSortByName) {
        sortBy.active = `active`;
      } else {
        sortBy.active = ``;
      }
    }
    this.setState({
      ...this.state,
      sortByArr: sortBys,
      selectedSortBy: {
        name: selectedSortByName,
        key: selectedSortByKey
      }
    }, this.sortEmployees)
  }

  sortEmployees = () => {
    const sortedDisplay = this.state.display.sort(this.compare)
    this.setState({
      ...this.state,
      display: sortedDisplay
    });
  }

  compare = (a, b) => {
    const aItem = a[this.state.selectedSortBy.key]
    const bItem = b[this.state.selectedSortBy.key]
    let comparison = 0
    if (aItem > bItem) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  }

  getEmployees = () => {
    API.getEmployees()
      .then(res => {
        const revisedRes = [];
        for (const obj of res.data.results) {
          const item = {
            id: obj.id.value,
            image: obj.picture.medium,
            firstname: obj.name.first,
            lastname: obj.name.last,
            phone: obj.phone,
            email: obj.email,
            dob: obj.dob.date,
            age: obj.dob.age
          }
          revisedRes.push(item);
        }
        this.setState({
          employees: revisedRes,
          display: revisedRes
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Employee Directory</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Row>
              <QuickSearch
                name={`search`}
                label={`Employee Name`}
                handleInputChange={this.handleInputChange}
              />
            </Row>
            <Row>
              <DateInput
                label={`Born after:`}
                name={`beginDate`}
                handleInputChange={this.handleInputChange}
              />
              <DateInput
                label={`Born before:`}
                name={`endDate`}
                handleInputChange={this.handleInputChange}
              />
              <DropDownGroup
                sortBys={this.state.sortByArr}
                updateSortBy={this.updateSortBy}
                selectedSortByName={this.state.selectedSortBy.name}
              />
            </Row>
            <Row>
              <EmployeeTable headerNames={headerNames} employees={this.state.display} />
            </Row>
          </Col>
        </Row>


      </Container>
    );
  }

}


export default Home;
