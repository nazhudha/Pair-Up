export default function Profile() {
  async function getRecords() {
    const response = await fetch(`http://localhost:8080/profile/all`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const records = await response.json();
    console.log(records);
  }
}
