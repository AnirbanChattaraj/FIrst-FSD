const backendURL = "http://localhost:4000";

async function addName() {
  const name = document.getElementById("nameInput").value;
  if (!name) return alert("Enter a name first");

  await fetch(`${backendURL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullname: name })
  });

  document.getElementById("nameInput").value = "";
  loadNames();
}

async function loadNames() {
  const res = await fetch(`${backendURL}/all`);
  const names = await res.json();

  document.getElementById("nameList").innerHTML =
    names.map(n => `<li>${n.fullname}</li>`).join("");
}

loadNames();
