fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
  console.log("Titles with more than 6 words")
  let wordResult = posts.filter(posts => titleCount(posts.title))
  console.log(wordResult);

});

// Title word count to show the titles that are more than 6
function titleCount(title) {
  const posts = title.split(' ');
  return posts.filter(word => word !== '').length > 6;
}

// map the fequecy of words - maybe try to return in the format
