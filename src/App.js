import { Table } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Pack</h1>
      <p> -by chaudhuree</p>
      <br/>
      <br/>
      <br/>
      <hr />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Number</th>
            <th>Package name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>redux</td>
          </tr>
          <tr>
            <td>2</td>
            <td>react-redux</td>
          </tr>
          <tr>
            <td>3</td>
            <td>axios</td>
          </tr>
          <tr>
            <td>4</td>
            <td>graphql</td>
          </tr>
          <tr>
            <td>5</td>
            <td>apollo client</td>
          </tr>
          <tr>
            <td>6</td>
            <td>bootstrap</td>
          </tr>
          <tr>
            <td>7</td>
            <td>react-router-dom</td>
          </tr>
          <tr>
            <td>8</td>
            <td>styled component</td>
          </tr>
          <tr>
            <td>9</td>
            <td>redux toolkit</td>
          </tr>
          <tr>
            <td>10</td>
            <td>recoil</td>
          </tr>
          <tr>
            <td>11</td>
            <td>firebase - firebase tool</td>
          </tr>
        </tbody>
      </Table>

    </div>

  );
}

export default App;
