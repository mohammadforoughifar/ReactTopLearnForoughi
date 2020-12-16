import Dialog from "@reach/dialog";
import config from "../../services/config.json";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paginate } from "../../Utilitis/paginat";
import Pagination from "../pages/pagination";
import NewCourseDialog from "./dialog/NewCourseDialog";

const CourseTable = () => {
  const courses = useSelector((state) => state.coursesss);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const [showDialog, setShowDialog] = React.useState(false);
  // const open = () => setShowDialog(true);
  // const close = () => setShowDialog(false);

  const courseData = paginate(courses, currentPage, perPage);
  return (
    <section style={{ marginTop: "5em", marginRight: "2em" }}>
      <div>
        <div>
          <h3 className="alert alert-info text-center">لیست دوره ها</h3>
          <div className="row inline-block">
            <Link to="/dashboard/NewCourseDialog"><button  className="btn btn-primary">
              <span
                className="fa fa-plus"
                style={{
                  verticalAlign: "middle",
                  marginLeft: "1em",
                }}
              ></span>
              اضافه کردن دوره جدید
            </button>
            </Link>
            <input
              type="text"
              placeholder="جستجوی دوره"
              className="form-control"
              style={{
                width: "50%",
                float: "left",
                marginLeft: "2em",
              }}
            />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">عنوان دوره</th>
                <th scope="col">تصویر دوره</th>
                <th scope="col">قیمت دوره (تومان)</th>
                <th scope="col">ویرایش</th>
                <th scope="col">حذف</th>
              </tr>
            </thead>
            <tbody>
              {courseData.map((course) => (
                <tr key={course.courseId}>
                  <td>{course.coursename}</td>
                  <td>
                    <a
                      href={`${config.localapi}/File/Course/${course.courseImageurl}`}
                      target="_blank"
                      className="btn btn-info btn-sm"
                    >
                      نمایش تصویر
                    </a>
                  </td>
                  <td>{course.CoursePrice === 0 ? "رایگان" : `${course.coursePrice}`}</td>
                  <td>
                   <Link to={`/dashboard/CourseEdit/${course.courseId}`}> <button className="btn btn-warning">ویرایش</button></Link>
                  </td>
                  <td>
                    <button className="btn btn-danger">حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="navbar-fixed-bottom text-center footer">
          <Pagination
            totalCourse={courses.length}
            currentPage={currentPage}
            perPage={perPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseTable;
