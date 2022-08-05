export const getAllUsers = async () => {
  try {
    const res = await fetch("http://localhost:8080/profile/all");
    console.log("pulling users")
    return await res.json();
  } catch (err) {}
};
