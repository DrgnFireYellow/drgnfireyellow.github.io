async function constructionUpdate() {
    const githubResponse = await fetch("https://api.github.com/repos/DrgnFireYellow/drgnfireyellow.github.io/commits");
    const commits = await githubResponse.json();
    alert("Quack! Here's the latest construction update:\n\n" + commits[0].commit.message);
}