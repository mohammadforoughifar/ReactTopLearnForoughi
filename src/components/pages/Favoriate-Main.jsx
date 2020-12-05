import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShowImage from "../commen/showImage";

const Favorait = (courses) => {
  const s = useSelector((state) => state.coursesss);

  return (
    <section className="terms-items">
      <header>
        <h2> محبوب ترین دوره های تاپ لرن </h2>
        <Link to="/archive">مشاهده همه دوره ها </Link>
      </header>
      <div className="row">
        {s.map((course) => (
          <div
            key={course.courseId}
            className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
          >
            <article>
              <Link to={`/course/${course.courseId}`} className="img-layer">
                <ShowImage image={course.courseImageurl} />
              </Link>
              <h2>
                <Link to={`/course/${course.courseId}`}>
                  {course.coursename}{" "}
                </Link>
              </h2>
              <span>{course.coursePrice} </span>
              <i>1:52:32</i>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorait;
