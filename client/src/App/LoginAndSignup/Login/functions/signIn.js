export const signIn = async (user) => {
  try {
    const res = await fetch("http://localhost:8080/sessions/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // const json = await res.json(); // not sure why this line is needed?
  } catch (err) {}
};
