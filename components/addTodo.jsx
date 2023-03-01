// addTodo.js is where new todos are added to our backend.
import { useEffect, useState } from "react";
import axios from "axios";

function AddTodo() {
  // const [todos, setTodos] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDes] = useState([]);
  const [table, setTable] = useState([]);
  const API_TOKEN = process.env.API_TOKEN;

  const getData = () => {
    fetch("http://localhost:1337/api/contact-forms", {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setTable(result.data);
      });
  };

  const addTodo = async () => {
    const result = await axios
      .post(
        "http://localhost:1337/api/contact-forms",
        {
          data: {
            name: name,
            description: description,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(() => {
        getData();
      });
  };

  const refreshPage = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className=" max-w-[1240px] m-auto p-4">
        <h1 className=" text-2xl font-bold text-center p-4">
          Let's work together
        </h1>
        <div className="max-w-[600px] m-auto">
          <div className="addTodoContainer">
            <input
              className="todoInputText border shadow-lg p-3 w-full my-2"
              type="text"
              placeholder="Add Name"
              id="todoText"
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className=" border shadow-lg p-3 w-full"
              cols="30"
              rows="10"
              placeholder="Description"
              onChange={(e) => setDes(e.target.value)}
            ></textarea>
            <button
              className=" border shadow-lg p-3 w-full mt-2 bg-gray-50 hover:bg-gray-200 font-medium"
              onClick={() => {
                refreshPage();
                addTodo();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1240px] mx-auto py-12 text-center">
          <h5 className="font-bold text-4xl pt-12">My team</h5>
        </div>

        {/* table */}
        <div className="relative overflow-x-auto h-screen">
          <table className=" mx-auto w-3/4 text-sm border shadow-lg p-3 ">
            <thead className="text-md text-gray-800 uppercase bg-gray-50 dark:bg-gray-200 border shadow-lg p-3">
              <tr>
                <th scope="col" className=" px-48 py-3 text-center">
                  name
                </th>
                <th scope="col" className="text-center">
                  description
                </th>
              </tr>
            </thead>
            {table.map((table, index) => (
              <tbody key={index}>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className=" text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {table.attributes.name}
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    {table.attributes.description}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
