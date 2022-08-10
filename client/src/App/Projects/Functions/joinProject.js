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
