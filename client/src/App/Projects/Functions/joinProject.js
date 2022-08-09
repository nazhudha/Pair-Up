export const joinProject = async (projectId) => {
  
  try {
    const res = await fetch(`http://localhost:8080/projects/joinproject/${projectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {}
};



// export const joinProject = async (projectId) => {
//   let config = null;
//   if (localStorage.getItem('token') !== null) {
//     config = {
//       headers: {
//         'x-auth-token': localStorage.getItem('token')
//       },
//       method: "patch",
//     };
//     console.log(config)
//   }
//   try {
//     const res = await fetch(`http://localhost:8080/projects/joinproject/${projectId}`, config);
//   } catch (err) {}
// };
