// import React, { useReducer, Fragment, useState, useEffect } from "react";
// import { createStore } from "redux";
// import { useSelector, Provider, useDipatch } from "react-redux";
// import styled from "styled-components";
// import axios from "axios";
// import UserTable from "./UserTable";

// const checkboxes = [
//   {
//     id: "filter-username",
//     name: "filter-username",
//     pathFn: (user) => user.username,
//     label: "Filter by Username",
//   },

//   {
//     id: "filter-city",
//     name: "filter-city",
//     pathFn: (user) => user.address.city,
//     label: "Filter by City",
//   },

//   {
//     id: "filter-company",
//     name: "filter-company",
//     pathFn: (user) => user.company.name,
//     label: "Filter by Company",
//   },
// ];

// const initialState = {
//   filters: {},
//   searchData: [],
//   users: [],
// };

// const filterFn = (filters, query) => (item) => {
//   const filterItem = (filterObj, data) =>
//     Object.values(filterObj).reduce((acc, fn) => {
//       acc.push(fn(data));
//       return acc;
//     }, []);

//   return (
//     filterItem(filters, item)
//       .map((str) => str.toLowerCase())
//       .join()
//       .search(query) !== -1
//   );
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "init": {
//       return { ...state,
//        searchData: action.payload.initData,
//         users: action.payload.initData
//          };
//     }

//     case "search": {
//       const { searchData, filters } = state;
//       const {query} = action.payload;

//       if (!query) {
//         return { ...state, users: searchData };
//       }

//       const filteredUsers = searchData.filter(filterFn(filters, query));
//       return { ...state, users: filteredUsers };
//     }

//     case "add.filter": {
//       const { name, pathFn } = action.payload;
//       return { ...state, filters: { ...state.filters, [name]: pathFn } };
//     }

//     case "remove.filter": {
//       const { [action.payload.name]: _, ...rest } = state.filters;
//       return { ...state, filters: rest };
//     }

//     default:
//       return state;
//   }
// };

// // action creator를 생성하세요.

// const initializeSearchData = (initData) => ({
//   type: "init",
//   payload: { initData }
// })

// const search = (query) => ({
//   type: "search",
//   payload: { query }
// })

// const addFilter = (name, pathFn) => ({
//   type: "add.filter",
//   payload: { name, pathFn }
// })

// const removeFilter = (name) => ({
//   type: 'remove.filter',
//   payload: { name }
// })

// // redux store를 생성합니다.
// const store = createStore(reducer, initialState);

// export default function App() {
//   return (
//     <Provider store={store}>
//       <UserTableApp />
//     </Provider>
//   );
// }

// function usersSelector (state) {
//   return state.users
// }

// function UserTableApp() {
//   const dispatch = useDipatch()
//   // useDispatch 를 사용해 dispatch를 가져오세요.
//   // useSelector를 사용해 users 정보를 가져오세요.
//   const [query, setQuery] = useState("");
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const users = useSelector(state => state.users)

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.data)
//       // action creator를 활용하도록 리팩토링하세요.
//       .then((data) => dispatch(initializeSearchData(data)));
//   }, []);

//   const handleReset = () => setQuery("");

//   const handleChange = (e) => {
//     const query = e.target.value;
//     setQuery(query);
//   };

//   useEffect(() => {
//     // action creator를 활용하도록 리팩토링하세요.
//     dispatch(search(query))
//   }, [query]);

//   const handleCheckboxChange = (pathFn) => (e) => {
//     const name = e.target.name;
//     if (e.target.checked)
//       // action creator를 활용하도록 리팩토링하세요.
//       dispatch(addFilter(name, pathFn))
//     // action creator를 활용하도록 리팩토링하세요.
//     else dispatch(removeFilter(name))
     
//     dispatch(search(query))
//   };

//   const { users } = state;

//   return (
//     <Container>
//       <div>
//         <label htmlFor="search-query">Search</label>
//         <input
//           value={query}
//           onChange={handleChange}
//           id="search-query"
//           type="text"
//           name="search-query"
//         />
//         <button type="button" onClick={handleReset}>
//           Reset
//         </button>
//       </div>

//       <CheckboxController>
//         {checkboxes.map(({ id, name, pathFn, label }) => (
//           <Fragment key={id}>
//             <input
//               type="checkbox"
//               onChange={handleCheckboxChange(pathFn)}
//               id={id}
//               name={name}
//             />
//             <label htmlFor={id}>{label}</label>
//           </Fragment>
//         ))}
//       </CheckboxController>

//       <UserTable users={users} />
//     </Container>
//   );
// }

// const Container = styled.div`
//   min-height: 600px;
// `;

// const CheckboxController = styled.div`
//   padding: 8px 0;

//   input:not(:first-of-type) {
//     margin-left: 20px;
//   }
// `;