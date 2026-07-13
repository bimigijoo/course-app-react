import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewCourse = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios
            .get("https://host-demo-app.onrender.com/api/courses")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
         
            <div className="container mt-4">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <NavBar />
                        <h2 className="text-center mb-4">
                            View All Courses
                        </h2>

                        <div className="row">

                            {
                                data.map((value, index) => {
                                    return (

                                        <div
                                        
                                            className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
                                        >

                                            <div className="card h-100 shadow">

                                                <div className="card-body">

                                                    <h5 className="card-title">
                                                        {value.course_name}
                                                    </h5>

                                                    <p className="card-text">
                                                        <strong>Duration :</strong> {value.duration}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Fee :</strong> ₹{value.fee}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Mode :</strong> {value.mode}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Trainer :</strong> {value.trainer}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Created At :</strong> {value.created_at}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewCourse