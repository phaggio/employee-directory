// import PropTypes from 'prop-types';
import React from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import QuickSearch from '../components/QuickSearch';
import EmployeeTable from '../components/EmployeeTable';
import DateInput from '../components/DateInput'

class Home extends React.Component {

  state = {
    employees: [],
    display: [],
    search: '',
    beginDate: undefined,
    endDate: undefined
  }

  componentDidMount() {
    this.getEmployees();
  }

  handleNameInputChange = event => {
    this.setState({ search: event.target.value }, this.consoleInput);
  };

  handleInputChange = event => {
    const targetName = event.target.name;
    let value = undefined;
    if (event.target.value) {
      value = event.target.value;
    }
    if (targetName === `beginDate`) {
      this.setState({ ...this.state, beginDate: value }, this.filteredEmployees)
    } else if (targetName === `endDate`) {
      this.setState({ ...this.state, endDate: value }, this.filteredEmployees)
    } else {
      this.setState({ ...this.state, search: value.trim().toLowerCase() }, this.filteredEmployees)
    }
  }

  filteredEmployees = () => {
    console.log(this.state.beginDate)
    let display = this.state.employees.filter(employee => {
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
          <EmployeeTable employees={this.state.display} />
        </Row>

      </Container>
    );
  }

}

// function Home() {
//   return (
//     <div>
//       <Container style={{ marginTop: 30 }}>
//         <Row>
//           <Col size="md-12">
//             <h1>Employee Directory</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-12">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//               aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
//               varius natoque penatibus et magnis dis parturient montes, nascetur
//               ridiculus mus. Pellentesque et dui id justo finibus sollicitudin
//               at et metus. Ut feugiat tellus nec metus commodo, sed suscipit
//               nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec
//               sagittis mi sollicitudin turpis semper, et interdum risus
//               lobortis. Vestibulum suscipit nunc non egestas tristique. Proin
//               hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
//               quam non, tristique tempor erat. Nullam non sem facilisis, tempus
//               tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus
//               mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet
//               cursus. Praesent suscipit orci neque, vestibulum tincidunt augue
//               tincidunt non. Duis consequat mattis tortor vitae mattis.
//             </p>

//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

export default Home;
