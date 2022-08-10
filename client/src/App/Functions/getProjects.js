export const getAllProjects = async () => {
  try {
    const res = await fetch("http://localhost:8080/projects/getallprojects/");
    console.log("pulling projects")
    return await res.json();
  } catch (err) {}
};

export const getAllProjectsById = async () => {
  let config = null;
  if (localStorage.getItem('token') !== null) {
    config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
        "Content-Type": "application/json",
      },
      method: "GET",
    };
  }
  try {
    const res = await fetch(`http://localhost:8080/projects/getallmyprojects`, config);
    console.log("pulling projects by ID")
    return await res.json();
  } catch (err) {}
};

export const getOneProjectById = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/projects/getprojectbyid/${id}`);
    console.log("pulling project by ID")
    return await res.json();
  } catch (err) {}
};