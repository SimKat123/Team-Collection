// function to get the styling for the specific roles
function generateHTML(teamArr) {
    console.log(teamArr);
    let htmlOutput = ``;
    teamArr.map(teamMember => {
        if (teamMember.getRole() === 'Manager') {
            htmlOutput += `<div class= "row">
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-danger p-4">
                    <h5 class="card-title text-center">${teamMember.getName()} <i class="fa-solid fa-mug-hot"></i> ${teamMember.getRole()}</h5>
                </div>
                <ul class="list-group bg-light text-center p-4">
                    <li class="list-group-item"><strong>ID:</strong> ${teamMember.getId()}</li>
                    <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${teamMember.getEmail()}"> ${teamMember.getEmail()}</a></li>
                    <li class="list-group-item"><strong>Office Number:</strong> ${teamMember.getOfficeNum()}</li>
                </ul>
            </div>
        </div> `;
        } else if (teamMember.getRole() === 'Engineer') {
            htmlOutput += `<div class= "row">
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-danger p-4">
                    <h5 class="card-title text-center">${teamMember.getName()} <i class="fa-solid fa-wrench"></i> ${teamMember.getRole()}</h5>
                </div>
                <ul class="list-group bg-light text-center p-4">
                    <li class="list-group-item"><strong>ID:</strong> ${teamMember.getId()}</li>
                    <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${teamMember.getEmail()}"> ${teamMember.getEmail()}</a></li>
                    <li class="list-group-item"><strong>GitHub:</strong> ${teamMember.getGitHub()}</li>
                </ul>
            </div>
        </div> `;
        } else if (teamMember.getRole() === 'Intern') {
            htmlOutput += `<div class= "row">
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-danger p-4">
                    <h5 class="card-title text-center">${teamMember.getName()} <i class="fa-solid fa-graduation-cap"></i> ${teamMember.getRole()}</h5>
                </div>
                <ul class="list-group bg-light text-center p-4">
                    <li class="list-group-item"><strong>ID:</strong> ${teamMember.getId()}</li>
                    <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${teamMember.getEmail()}"> ${teamMember.getEmail()}</a></li>
                    <li class="list-group-item"><strong>School:</strong> ${teamMember.getSchool()}</li>
                </ul>
            </div>
        </div> `;
        }
    });
    return htmlOutput; 
};

// Genereates the actual HTML with styling links and all
function mainHTML(teamArr) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel='stylesheet' href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
    <link rel='stylesheet' href="./dist/style.css">
    <script src="https://kit.fontawesome.com/9d833f4d55.js" crossorigin="anonymous"></script>
    <title>Team Manager</title>
</head>

<header class="mb-5">
    <div class= "container-fluid">
        <div class= "row bg-primary">
            <div class= "col-12 p-5">
                <h1 class= "text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
</header>

<body>
    <div class= "container d-flex justify-content-between">
    ${generateHTML(teamArr)}
    </div>
</body>
</html>`;
};

module.exports = mainHTML;