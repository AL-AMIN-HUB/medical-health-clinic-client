import React, { useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  // const { logOut } = useAuth();

  useEffect(() => {
    const el = document.getElementById("wrapper");
    const toggleButton = document.getElementById("menu-toggle");

    toggleButton.onclick = function () {
      el.classList.toggle("toggled");
    };
  }, []);

  return (
    <div>
      <div class="d-flex" id="wrapper">
        {/* <!-- Sidebar --> */}
        <div class="bg-white" id="sidebar-wrapper">
          <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <i class="fas fa-user-secret me-2"></i>Clinic Information
          </div>
          <div class="list-group list-group-flush my-3">
            <Link to="/" class="list-group-item list-group-item-action bg-transparent second-text active">
              <i class="fas fa-tachometer-alt me-2"></i>Dashboard
            </Link>
            <Link to="/" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-project-diagram me-2"></i>Add Service
            </Link>
            <Link to="/" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-chart-line me-2"></i>Review Mng
            </Link>
            <Link to="/" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-paperclip me-2"></i>All Services
            </Link>
            <Link to="/" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-shopping-cart me-2"></i>All Patients
            </Link>
            <Link to="/" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-user me-2"></i>Make Admin
            </Link>
            {/*  <div class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
              <i class="fas fa-power-off me-2"></i>{" "}
              <button className="border-0 bg-light text-dark p-2" onClick={logOut}>
                Logout
              </button>
            </div> */}
          </div>
        </div>
        {/* <!-- /#sidebar-wrapper -->

        <!-- Page Content --> */}
        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div class="d-flex align-items-center">
              <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
              <h2 class="fs-2 m-0">Analytics</h2>
              <i class="fas fa-chart-line "></i>
            </div>
          </nav>

          <div class="container-fluid px-4">
            <div class="row g-3 my-2">
              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">150</h3>
                    <p class="fs-5">Doctors</p>
                  </div>
                  <i class="fas fa-user fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">$2780</h3>
                    <p class="fs-5">Daily Earn</p>
                  </div>
                  <i class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">1157</h3>
                    <p class="fs-5">Ambulance</p>
                  </div>
                  <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">%25</h3>
                    <p class="fs-5">Increase</p>
                  </div>
                  <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
            </div>

            <div class="row my-5">
              <h3 class="fs-4 mb-3">Recent Patients</h3>
              <div class="col">
                <div className="table-responsive">
                  <table class="table bg-white rounded shadow-sm  table-hover ">
                    <thead>
                      <tr>
                        <th scope="col" width="50">
                          ID
                        </th>
                        <th scope="col">Department</th>
                        <th scope="col">Patients</th>
                        <th scope="col">Email</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col ">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>X-Ray Diagnostic</td>
                        <td>Jonny</td>
                        <td>alaminmrm@gmail.com</td>
                        <td>$1200</td>
                        <td>
                          <select>
                            <option value="pending">pending</option>
                            <option value="pending">approved</option>
                          </select>
                        </td>
                        <td>
                          <button className="button2 border-0 mx-2 mb-1 py-1 px-2">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button className="button2 border-0 mx-2 mb-1 py-1 px-2">
                            <i class="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
