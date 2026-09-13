import { useState } from "react";
import "./index.css";

function App() {
  const [page, setPage] = useState("portal");

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo-section">
          <div className="rv-logo">RV</div>
          <div>
            <h2>RV UNIVERSITY</h2>
            <p>Campus Connect</p>
          </div>
        </div>

        <nav>
          <button onClick={() => setPage("portal")}>Home</button>
          <button onClick={() => setPage("roles")}>Register</button>
        </nav>
      </header>


      {/* PORTAL PAGE */}
      {page === "portal" && (
        <section className="portal-page">

          <div className="hero">
            <div className="hero-content">
              <p className="welcome">WELCOME TO</p>
              <h1>Campus Connect Portal</h1>

              <p>
                A unified platform for students, faculty and administrators
                to connect, communicate and manage campus activities.
              </p>

              <button
                className="primary-btn"
                onClick={() => setPage("roles")}
              >
                Get Started
              </button>
            </div>

            <div className="hero-card">
              <div className="circle">CC</div>
              <h2>Campus Connect</h2>
              <p>Connect • Collaborate • Grow</p>
            </div>
          </div>


          <div className="portal-section">
            <h2>Campus Connect Portal</h2>
            <p className="section-text">
              Choose a portal to access the services available to you.
            </p>

            <div className="portal-cards">

              <div className="portal-card">
                <div className="card-icon">🎓</div>
                <h3>Student Portal</h3>
                <p>
                  Access academic information, events, activities and
                  campus resources.
                </p>

                <button onClick={() => setPage("roles")}>
                  Student →
                </button>
              </div>


              <div className="portal-card">
                <div className="card-icon">👨‍🏫</div>
                <h3>Faculty Portal</h3>
                <p>
                  Manage academic activities, communicate with students
                  and share resources.
                </p>

                <button onClick={() => setPage("roles")}>
                  Faculty →
                </button>
              </div>


              <div className="portal-card">
                <div className="card-icon">⚙️</div>
                <h3>Admin Portal</h3>
                <p>
                  Manage users, campus activities and important
                  administrative information.
                </p>

                <button onClick={() => setPage("roles")}>
                  Admin →
                </button>
              </div>

            </div>
          </div>

        </section>
      )}


      {/* ROLE SELECTION */}
      {page === "roles" && (
        <section className="roles-page">

          <div className="roles-container">

            <button
              className="back-btn"
              onClick={() => setPage("portal")}
            >
              ← Back to Home
            </button>

            <h1>Join Campus Connect</h1>

            <p>
              Select your role to continue with registration.
            </p>

            <div className="role-cards">

              <div className="role-card">
                <div className="role-icon">🎓</div>
                <h2>Student</h2>
                <p>
                  Register as a student and connect with your campus.
                </p>

                <button
                  className="primary-btn"
                  onClick={() => setPage("student")}
                >
                  Register as Student
                </button>
              </div>


              <div className="role-card">
                <div className="role-icon">👨‍🏫</div>
                <h2>Faculty</h2>
                <p>
                  Faculty members can register and access campus services.
                </p>

                <button className="outline-btn">
                  Register as Faculty
                </button>
              </div>


              <div className="role-card">
                <div className="role-icon">⚙️</div>
                <h2>Admin</h2>
                <p>
                  Administrators can manage campus activities and users.
                </p>

                <button className="outline-btn">
                  Register as Admin
                </button>
              </div>

            </div>

          </div>

        </section>
      )}


      {/* STUDENT REGISTRATION */}
      {page === "student" && (
        <section className="registration-page">

          <div className="registration-container">

            <button
              className="back-btn"
              onClick={() => setPage("roles")}
            >
              ← Back to Roles
            </button>

            <div className="registration-card">

              <div className="registration-heading">
                <div className="small-logo">RV</div>

                <h1>Student Registration</h1>

                <p>
                  Create your Campus Connect account
                </p>
              </div>


              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Registration submitted successfully!");
                }}
              >

                <div className="form-row">

                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      required
                    />
                  </div>

                </div>


                <div className="form-group">
                  <label>Student Email</label>
                  <input
                    type="email"
                    placeholder="Enter your university email"
                    required
                  />
                </div>


                <div className="form-group">
                  <label>Student ID</label>
                  <input
                    type="text"
                    placeholder="Enter student ID"
                    required
                  />
                </div>


                <div className="form-group">
                  <label>Course</label>

                  <select required>
                    <option value="">Select your course</option>
                    <option>B.Sc Computer Science</option>
                    <option>B.Tech Computer Science</option>
                    <option>BCA</option>
                    <option>BBA</option>
                    <option>Other</option>
                  </select>
                </div>


                <div className="form-row">

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Create password"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      required
                    />
                  </div>

                </div>


                <button className="submit-btn" type="submit">
                  Create Student Account
                </button>

              </form>

            </div>

          </div>

        </section>
      )}


      {/* FOOTER */}
      <footer className="footer">
        <h3>RV UNIVERSITY</h3>
        <p>Campus Connect Portal</p>
        <p>© 2026 RV University. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;