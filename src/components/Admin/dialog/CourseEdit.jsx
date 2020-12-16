import { set } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCourseUpdate } from "../../../action/courses";
import { GetCourseById_Action } from "../../../action/course";

const CourseEdit = ({match}) => {
    const course = useSelector(state => state.course)
    console.log("courseEdit:",match);
  const [_id, setCourseId] = useState();
  const [coursename, setCourseName] = useState();
  const [coursePrice, setCoursePrice] = useState();
  const [courseImage, setCourseImageurl] = useState();

  const dispatch = useDispatch();
   dispatch(GetCourseById_Action(match.params.id));
  useEffect(() => {


       
  

      setCourseId(course._id);
      setCourseName(course.coursename);
       setCoursePrice(course.coursePrice);
      setCourseImageurl(course.courseImage);
      return () => {
        setCourseId();
        setCourseName();
        setCoursePrice();
        setCourseImageurl();
      };
  }, [course]);


const handleSubmit =(event)=>{
    event.preventDefault();
    let data=new FormData();
    data.append("coursename",coursename);
    data.append("coursePrice",coursePrice);
    if(event.target.courseImage.file[0])
      data.append("courseImage",event.target.courseImage.file[0]);
    else data.append("courseImage",courseImage);
    dispatch(handleCourseUpdate(_id,data))
}




  return (
    <section style={{ marginTop: "5em", marginRight: "2em" }}>
      <div>
        <div>
          <div  className="inner form-layer">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="coursename"
                style={{ marginBottom: 3 }}
                className="form-control"
                placeholder="عنوان دوره"
                aria-describedby="title"
                value={coursename}
                onChange={(e) => setCourseName(e.target.value)}
              />

              <input
                type="text"
                name="coursePrice"
                style={{ marginBottom: 3 }}
                className="form-control"
                placeholder="قیمت دوره به تومان"
                aria-describedby="price"
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
              />

              <input
                type="file"
                multiple
                name="courseImage"
                style={{ marginBottom: 3 }}
                className="form-control mb-2"
                aria-describedby="courseImage"
                // onSelect={(e) => {
                //   setCourseImageurl(e.target.files);
                //   validator.current.showMessageFor("courseImage");
                // }}
              />
              {/* <textarea
                name="info"
                placeholder="توضیحات دوره"
                className="form-control"
                style={{ marginBottom: 3 }}
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              /> */}

              <button
                type="submit"
                className="btn btn-success "
                style={{ margin: "1em" }}
              >
                ثبت دوره
              </button>
              <button
                className="btn btn-warning mr-5"
                style={{ margin: "1em" }}
                
              >
                انصراف
              </button>
            </form>
          </div>
          {/* </DialogContent>
       </DialogOverlay> */}
        </div>
      </div>
    </section>
  );
};

export default CourseEdit;
