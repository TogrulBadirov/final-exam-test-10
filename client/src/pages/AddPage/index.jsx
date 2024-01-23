import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.scss";
import toast, { Toaster } from "react-hot-toast";

const AddPage = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState('')
  const getAllItems = async () => {
    const resp = await axios("http://localhost:3000/");
    setItems(resp.data);
    setLoading(false);
  };

  const postItem = async (values) => {
    const resp = await axios.post("http://localhost:3000/", values);
    toast.success('Successfully Created!')
    getAllItems();
  };

  const deleteItem = async (id) => {
    const resp = await axios.delete(`http://localhost:3000/${id}`);
    toast('Removed From Database!', {
      icon: 'ℹ️',
    });
    getAllItems();
  };

  const toLowerCase = (item)=>{
    if (typeof item === String) {
      return item.toLocaleLowerCase()
    }
    return item
  }

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Helmet>
        <title>AddPage</title>
      </Helmet>
      <section id="AddForm">
        <div className="container">
          <Formik
            initialValues={{ title: "", desc: "", image: "", price: "" }}
            validationSchema={Yup.object({
              title: Yup.string()
                .max(50, "Must be 50 characters or less")
                .matches(/^[A-Za-z]/, "Must Start With Letter!")

                .required("Required"),
              desc: Yup.string()
                .matches(/^[A-Za-z]/, "Must Start With Letter!")
                .max(150, "Must be 150 characters or less")
                .required("Required"),
              image: Yup.string()
                .matches(
                  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                  "Must Be URL!"
                )
                .required("Required"),
              price: Yup.number()
                .min(1, "Must be 1 or more")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                postItem(values)
                resetForm()
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <h2>Add Form</h2>
              <div>
                <label htmlFor="title">Title</label>
                <Field className="form-control" name="title" type="text" />
                <div className="error">
                  <ErrorMessage name="title" />
                </div>
              </div>

              <div>
                <label htmlFor="desc">Desc</label>
                <Field className="form-control" name="desc" type="text" />
                <div className="error">
                  <ErrorMessage name="desc" />
                </div>
              </div>

              <div>
                <label htmlFor="image">image</label>
                <Field className="form-control" name="image" type="text" />
                <div className="error">
                  <ErrorMessage name="image" />
                </div>
              </div>

              <div>
                <label htmlFor="price">price</label>
                <Field
                  className="form-control"
                  name="price"
                  type="number"
                  min={1}
                />
                <div className="error">
                  <ErrorMessage name="price" />
                </div>
              </div>

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </section>
      <section id="itemTable">
        <div className="container">
         <div>
         <input placeholder="Search" className="form-control" type="text" onChange={(e)=>setSearchValue(e.target.value)} />
         </div>
         <button onClick={()=>setSortValue({property:"title",asc:true})} className="btn btn-dark">Sort By Title: A-Z</button>
         <button onClick={()=>setSortValue({property:"title",asc:false})} className="btn btn-dark">Sort By Title: Z-A</button>
         <button onClick={()=>setSortValue({property:"price",asc:true})} className="btn btn-dark">Sort By Price: Increase</button>
         <button onClick={()=>setSortValue({property:"price",asc:false})} className="btn btn-dark">Sort By Price: Decrease</button>
         <button onClick={()=>setSortValue({property:"price",asc:false})} className="btn btn-dark">Default</button>
         
            
           {loading?
           <h2>Loading...</h2>
          :
          <table className="table table-dark">
          <thead>
              <tr>
                <th>Title</th>
                <th>Desc</th>
                <th>Image</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
          <tbody>
          {items &&
            items
            .filter(x=> x.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
            .sort((a,b)=>{
              if (sortValue && sortValue.asc=== true) {
                return  (toLowerCase(a[sortValue.property]) > toLowerCase(b[sortValue.property])) ? 1 : ((toLowerCase(b[sortValue.property]) > toLowerCase(a[sortValue.property])) ? -1 : 0)
              }
              else if (sortValue && sortValue.asc=== false){
                return  (toLowerCase(a[sortValue.property]) < toLowerCase(b[sortValue.property])) ? 1 : ((toLowerCase(b[sortValue.property]) < toLowerCase(a[sortValue.property])) ? -1 : 0)
              }
              else{
                return 0
              }
            })
            .map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td><img src={item.image} alt="" /></td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteItem(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
        </table>

          }
        </div>
      </section>
    </>
  );
};

export default AddPage;
