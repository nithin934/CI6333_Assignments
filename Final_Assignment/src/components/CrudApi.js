import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function CrudApi() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [editId, setEditId] = useState(null);

  // READ users
  useEffect(() => {
    axios.get(API_URL).then(res => setUsers(res.data));
  }, []);

  // CREATE or UPDATE user
  const handleSubmit = e => {
    e.preventDefault();

    if (editId) {
      // UPDATE
      axios.put(`${API_URL}/${editId}`, form).then(() => {
        setUsers(users.map(u => (u.id === editId ? { ...u, ...form } : u)));
        setEditId(null);
        setForm({ name: "", email: "", phone: "" });
      });
    } else {
      // CREATE
      axios.post(API_URL, form).then(res => {
        setUsers([...users, { ...form, id: users.length + 1 }]);
        setForm({ name: "", email: "", phone: "" });
      });
    }
  };

  // DELETE user
  const deleteUser = id => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setUsers(users.filter(u => u.id !== id));
    });
  };

  // EDIT user
  const editUser = user => {
    setEditId(user.id);
    setForm({ name: user.name, email: user.email, phone: user.phone });
  };

  return (
    <div>
      <h3 className="mb-4">Users CRUD (JSONPlaceholder + Bootstrap)</h3>

      {/* Create / Edit Form */}
      <div className="card mb-4">
        <div className="card-header">
          {editId ? "Edit User" : "Create New User"}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>

            <button className="btn btn-primary">
              {editId ? "Update User" : "Create User"}
            </button>
          </form>
        </div>
      </div>

      {/* Users Table */}
      <div className="card">
        <div className="card-header">Users List</div>
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary btn-sm me-2"
                      onClick={() => editUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
