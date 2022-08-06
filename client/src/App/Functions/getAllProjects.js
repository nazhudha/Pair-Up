export const getAllProjects = async () => {
  try {
    const res = await fetch("http://localhost:8080/projects/getallprojects/");
    console.log("pulling projects")
    return await res.json();
  } catch (err) {}
};
