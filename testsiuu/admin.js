let myProjects = [];
myProjects.push(JSON.parse(localStorage.getItem("projects")));
console.log(myProjects);
function render() {
  const tbody = document.getElementById("tbody");
  for (let i = 0; i < myProjects.length; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (i = 1; i <= 6; i++) {
      const td = document.createElement("td");
      tr.appendChild(td);
    }
  }
}
render();
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("table").addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("delete-btn")) {
      console.log("Clicked Delete button");
      deleteProject(target);
    } else if (target.classList.contains("update-btn")) {
      console.log("Clicked Update button");
      updateProject(target);
    }
  });
});

function deleteProject(button) {
  const row = button.closest("tr");
  console.log(row);
  const projectId = row.querySelector(".id").innerText;
  console.log(`Project ID: ${projectId}`);

  console.log(`Deleting project with ID ${projectId}`);

  row.remove();
}

function updateProject(button) {
  const row = button.closest("tr");
  console.log(row);
  const projectId = row.querySelector(".id").innerText;
  console.log(`Project ID: ${projectId}`);

  const projectName = row.querySelector(".projects").innerText;
  const imageUrl = row.querySelector(".imageUrls").innerText;
  const link = row.querySelector(".links a").getAttribute("href");
  const tags = row.querySelector(".tags").innerText;

  console.log(`Updating project with ID ${projectId}`);
  console.log(`Project Name: ${projectName}`);
  console.log(`Image URL: ${imageUrl}`);
  console.log(`Link: ${link}`);
  console.log(`Tags: ${tags}`);
}
