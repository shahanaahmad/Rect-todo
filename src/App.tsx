import { useState, ChangeEventHandler, useEffect } from "react";
import "./App.css";
import NoteItem from "./components/NoteItem";
import "./index.css";
import axios from "axios";
import TodoApp from "./components/todo/TodoApp";
import { Provider } from "react-redux";
import { store } from "./stores/store";
interface noteType {
  id: string;
  title: string;
  description?: string;
}
const App = () => {
  // const [title, setTitle] = useState("");
  // const [noteToView, setNoteToView] = useState<noteType>();
  // const [notes, setNotes] = useState<noteType[]>([]);
  // const [values, setValues] = useState({
  //   title: "",
  //   description: "",
  // });

  // const [selectedNoteId, setSelectedNoteId] = useState("");
  // const handleChange: ChangeEventHandler<
  //   HTMLInputElement | HTMLTextAreaElement
  // > = ({ target }) => {
  //   const { name, value } = target;
  //   setValues({ ...values, [name]: value });
  // };

  // useEffect(() => {
  //   const getAllData = async () => {
  //     const { data } = await axios.get("http://localhost:8000/note");
  //     console.log("data>>>>>>>>>>>", data);
  //     setNotes(data.notes);
  //   };

  //   getAllData();
  // }, []);
  return (
    <Provider store={store}>
      <div className="container mx-auto bg-slate-600 p-20">
        <TodoApp />
      </div>
    </Provider>
  );

  // return (
  //   <div className="max-w-3xl mx-auto space-y-6">
  //     <form
  //       onSubmit={async (e) => {
  //         e.preventDefault();
  //         // console.log(values);

  //         if (selectedNoteId) {
  //           const { data } = await axios.patch(
  //             "http://localhost:8000/note/" + selectedNoteId,
  //             {
  //               title: values.title,
  //               description: values.description,
  //             }
  //           );

  //           const updatedNotes = notes.map((note) => {
  //             if (note.id === selectedNoteId) {
  //               note.title = data.title;
  //               note.description = data.description;
  //             }
  //             return note;
  //           });
  //           setNotes([...updatedNotes]);
  //           setValues({ title: "", description: "" });
  //           return;
  //         }
  //         const { data } = await axios.post(
  //           "http://localhost:8000/note/create",
  //           {
  //             title: values.title,
  //             description: values.description,
  //           }
  //         );
  //         console.log("data>>>>>", data);
  //         setNotes([data.note, ...notes]);
  //         setValues({ title: "", description: "" });
  //       }}
  //       className="space-y-6 bg-white shadow-md rounded p-5"
  //     >
  //       <h1 className="font-semibold text-2xl text-blue-400">
  //         Note Application
  //       </h1>
  //       <div>
  //         {values.title.trim() && values.title.length < 3 ? (
  //           <p className=" text-red-500">Title is too short</p>
  //         ) : null}
  //         <input
  //           onChange={handleChange}
  //           className="w-full border-b-2 border-gray-700 outline-none"
  //           placeholder="title"
  //           type="text"
  //           value={values.title}
  //           name="title"
  //         />
  //       </div>
  //       <div>
  //         <textarea
  //           className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
  //           placeholder="description"
  //           onChange={handleChange}
  //           value={values.description}
  //           name="description"
  //         ></textarea>
  //       </div>
  //       <div className="text-right">
  //         <button
  //           onClick={async () => {
  //             // console.log(values);
  //           }}
  //           className=" bg-blue-500 text-white px-5 py-2 rounded"
  //         >
  //           Submit
  //         </button>
  //       </div>
  //     </form>
  //     {notes.map((note) => {
  //       return (
  //         <NoteItem
  //           onViewClicked={() => {
  //             if (noteToView) {
  //               setNoteToView(undefined);
  //             } else {
  //               setNoteToView(note);
  //             }
  //           }}
  //           description={
  //             note.id === noteToView?.id ? noteToView?.description : ""
  //           }
  //           onEditClick={() => {
  //             setSelectedNoteId(note.id);
  //             setValues({
  //               title: note.title,
  //               description: note.description || "",
  //             });
  //           }}
  //           onDeleteClick={async () => {
  //             const result = confirm("Are you sure?");
  //             if (result) {
  //               await axios.delete("http://localhost:8000/note/" + note.id);
  //             }

  //             const updatedNotes = notes.filter(({ id }) => id !== note.id);
  //             setNotes([...updatedNotes]);
  //           }}
  //           key={note.id}
  //           title={note.title}
  //         />
  //       );
  //     })}
  //     {/* <NoteItem title="Button list 1" />
  //     <NoteItem title="Button list 1" />
  //     <NoteItem title="Button list 1" />
  //     <NoteItem title="Button list 1" /> */}
  //   </div>
  // );
};

export default App;
