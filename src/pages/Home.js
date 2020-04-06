// import PropTypes from 'prop-types';
import React from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import EmployeeTable from '../components/EmployeeTable';

class Home extends React.Component {

  state = {
    employees: []
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees()
      .then(res => {
        this.setState({
          employees: res.data.results
        });
        console.log(this.state.employees);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
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
                at et metus. Ut feugiat tellus nec metus commodo, sed suscipit
                nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec
                sagittis mi sollicitudin turpis semper, et interdum risus
                lobortis. Vestibulum suscipit nunc non egestas tristique. Proin
                hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
                quam non, tristique tempor erat. Nullam non sem facilisis, tempus
                tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus
                mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet
                cursus. Praesent suscipit orci neque, vestibulum tincidunt augue
                tincidunt non. Duis consequat mattis tortor vitae mattis.
              </p>
  
            </Col>
          </Row>
        </Container>

        <EmployeeTable employees={this.state.employees} />
      </div>
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
