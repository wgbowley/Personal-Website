// Coil Gun Repo Fetch Request:

fetch('https://api.github.com/repos/wgbowley/CoilGun')
.then(response => response.json())
.then(data => {
    document.getElementById('star-count').textContent = data.stargazers_count;
    document.getElementById('fork-count').textContent = data.forks_count;
})
.catch(error => {
    console.error('GitHub API error:', error);
});
