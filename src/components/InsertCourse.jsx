import React from 'react'
import NavBar from './NavBar'

const InsertCourse = () => {
  return (
    <div>
        <NavBar />
        <h1><center>Insert Course</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Course Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" className="form-control" />
                        </div>
                        
                        <div className="col-col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Fee</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Mode</label>
                            <select name="feemodel" id="" className="form-select">
                                <option value="">Select</option>
                                <option value="">Online</option>
                                <option value="">Offline</option>
                                <option value="">Hybrid</option>
                            </select>
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Trainer</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default InsertCourse