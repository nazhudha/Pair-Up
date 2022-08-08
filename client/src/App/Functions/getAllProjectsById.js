export const getAllProjectsById = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/projects/getallprojects/${id}`);
    console.log("pulling projects by ID")
    return await res.json();
  } catch (err) {}
};
