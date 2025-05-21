/*const TableView = ({ data }) => {
  return (
    <table border="1" style={{ marginTop: '10px' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableView;*/

const TableView = ({ data }) => {
  return (
    <table border="1" cellPadding="5" cellSpacing="0">
      <tbody>
        <tr>
          <td><strong>Name</strong></td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td><strong>Email</strong></td>
          <td>{data.email}</td>
        </tr>
        <tr>
          <td><strong>Age</strong></td>
          <td>{data.age}</td>
        </tr>
        <tr>
          <td><strong>Education</strong></td>
          <td>{data.education}</td>
        </tr>
        <tr>
          <td><strong>Job</strong></td>
          <td>{data.job}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableView;

