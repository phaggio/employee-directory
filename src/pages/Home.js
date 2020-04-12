// import PropTypes from 'prop-types';
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
    sortBy: sortBys
  }

  componentDidMount() {
    this.getEmployees();
  }

  handleNameInputChange = event => {
    this.setState({ search: event.target.value }, this.consoleInput);
  };

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

  filteredEmployees = () => {
    const display = this.state.employees.filter(employee => {
      const name = `${employee.name.first} ${employee.name.last}`.toLowerCase()
      const employeeDob = new Date(employee.dob.date);
      const begin = this.state.beginDate === undefined ? new Date(`1900-01-01`) : new Date(this.state.beginDate)
      const end = this.state.endDate === undefined ? new Date(`2100-01-01`) : new Date(this.state.endDate)
      if (name.includes(this.state.search) && employeeDob >= begin && employeeDob <= end) {
        return employee;
      }
    })
    this.setState({ ...this.state, display: display })
  }

  sortEmployees = event => {
    console.log(event.target.value)
    const selectedSortBy = event.target.value;
    for (const sortBy of sortBys) {
      if (sortBy.key === selectedSortBy) {
        sortBy.active = `active`;
      } else {
        sortBy.active = ``;
      }
    }
    this.setState({ ...this.state, sortBy: sortBys})
  }

  consoleInput = () => console.log(this.state);

  getEmployees = () => {
    API.getEmployees()
      .then(res => {
        this.setState({
          employees: res.data.results,
          display: res.data.results
        });
        console.log(this.state.employees);
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque et dui id justo finibus sollicitudin
              at et metus.
            </p>
            <DropDownGroup sortBys={this.state.sortBy} sortEmployees={this.sortEmployees}/>
            <QuickSearch
              name={`search`}
              label={`Employee Name`}
              handleNameInputChange={this.handleInputChange}
            />
            <DateInput
              label={`Born after: `}
              name={`beginDate`}
              handleInputChange={this.handleInputChange}
            />
            <DateInput
              label={`Born before: `}
              name={`endDate`}
              handleInputChange={this.handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <EmployeeTable headerNames={headerNames} employees={this.state.display} />
        </Row>

      </Container>
    );
  }

}


export default Home;
