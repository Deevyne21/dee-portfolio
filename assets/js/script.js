// const repoNames = [
//   'Market-Minds',
//   'Mini-Web-Project',
//   'MusicPlayer',
//   'Microsoft-home-page-clone',
//   'To-do-app',
//   'Live-Project',
// ];
// const username = 'Deevyne21';

// async function fetchProjectData() {
//   const projectList = document.getElementById('project-list');

//   for (const repo of repoNames) {
//     const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);
//     const data = await res.json();

//     const projectItem = document.createElement('div');
//     projectItem.style.marginBottom = '2rem';
//     projectItem.innerHTML = `
//         <h3><a href="${data.html_url}" target="_blank">${data.name}</a></h3>
//         <p>${data.description || 'No description available.'}</p>
//         <p><strong>Language:</strong> ${data.language || 'N/A'}</p>
//         <a href="${data.html_url}" target="_blank">View on GitHub</a>
//       `;

//     projectList.appendChild(projectItem);
//   }
// }

// fetchProjectData();
