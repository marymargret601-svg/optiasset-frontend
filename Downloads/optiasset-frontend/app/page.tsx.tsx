export default function Home() {
  const user = { role: "admin" }; // change to "employee" to test

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>OptiAsset Dashboard</h1>

      {user.role === "admin" ? (
        <div>
          <h2>Admin Panel</h2>
          <ul>
            <li>Manage Employees</li>
            <li>Manage Assets</li>
            <li>View Inventory</li>
            <li>Delete Assets</li>
          </ul>
        </div>
      ) : (
        <div>
          <h2>Employee Panel</h2>
          <ul>
            <li>View My Assets</li>
            <li>Request Asset</li>
          </ul>
        </div>
      )}
    </div>
  );
}