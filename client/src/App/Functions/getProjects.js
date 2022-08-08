export const getAllProjects = async () => {
  try {
    const res = await fetch("http://localhost:8080/projects/getallprojects/");
    console.log("pulling projects")
    return await res.json();
  } catch (err) {}
};

export const getAllProjectsById = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/projects/getallprojects/${id}`);
    console.log("pulling projects by ID")
    return await res.json();
  } catch (err) {}
};
