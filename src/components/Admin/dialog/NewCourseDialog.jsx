import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { createNewCourse } from "../../../action/course";

const NewCourseDialog = ({ history, showDialog, closeDialog }) => {
  const [coursename, setCourseName] = useState();
  const [coursePrice, setCoursePrice] = useState();
  const [courseImage, setCourseImageurl] = useState();
  //const [info, setInfo] = useState();
  // const open = useSelector((state) => state.showDialog);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      let data = new FormData();
      data.append("coursename", coursename);
      console.log("coursename", data.getAll("coursename"));
      data.append("coursePrice", Number.parseInt(coursePrice));
      data.append("courseImage", event.target.courseImage.files[0]);
      //  data.append("info", info);
      console.log("courseImage:", event.target.courseImage.files[0].name);

      //Dispatch
      dispatch(createNewCourse(data));

      history.push("/dashboard/dore")
      // closeDialog;
    } catch (ex) {
      console.log("ex:", ex);
    }
  };

  return (
    // <DialogOverlay
    //   isOpen={showDialog}
    //   onDismiss={closeDialog}
    //   style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
    // >
    //   <DialogContent
    //     style={{
    //       border: "solid 5px hsla(0, 0%, 0%, 0.5)",
    //       borderRadius: "10px",
    //       boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
    //     }}
    //   >
    <section style={{ marginTop: "5em", marginRight: "2em" }}>
      <div>
        <div>
          <div isOpen={open} className="inner form-layer">
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
                onClick={closeDialog}
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
export default NewCourseDialog;
