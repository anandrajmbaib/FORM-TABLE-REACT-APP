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
          <td>{data.email || '—'}</td>
        </tr>
        <tr>
          <td><strong>Age</strong></td>
          <td>{data.age || '—'}</td>
        </tr>
        <tr>
          <td><strong>Education</strong></td>
          <td>{data.education || '—'}</td>
        </tr>
        <tr>
          <td><strong>Job</strong></td>
          <td>{data.job}</td>
        </tr>

        {/* Conditional job-specific fields */}
        {(data.job?.toLowerCase() === 'engineer' || data.job?.toLowerCase() === 'technician') && (
          <tr>
            <td><strong>Specialty</strong></td>
            <td>{data.specialty || '—'}</td>
          </tr>
        )}
        {data.job?.toLowerCase() === 'clerk' && (
          <tr>
            <td><strong>Department</strong></td>
            <td>{data.department || '—'}</td>
          </tr>
        )}
        {data.job?.toLowerCase() === 'teamleader' && (
          <tr>
            <td><strong>Team Size</strong></td>
            <td>{data.teamSize || '—'}</td>
          </tr>
        )}

        <tr>
          <td><strong>Notes</strong></td>
          <td>{data.notes || '—'}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableView;



