// Your code here 
// phase 3 localStorage
window.onload = () => {
    const add = document.getElementById('add');
  
    let score = 0;
    let comments = [];
    let currentImageUrl = '';
  
    // Function to save state to localStorage
    function saveState() {
      const state = {
        score,
        comments,
        currentImageUrl,
      };
      localStorage.setItem('catstagramState2', JSON.stringify(state));
    }
  
    // Function to load state from localStorage
    function loadState() {
      const state = JSON.parse(localStorage.getItem('catstagramState2'));
      if (state) {
        score = state.score;
        comments = state.comments;
        currentImageUrl = state.currentImageUrl;
      }
    }
  
    // Function to render the current state
    async function renderState() {
      const cat = document.getElementById('cat-1');
      const savedState = JSON.parse(window.localStorage.getItem("catstagramState2"));
      if (!savedState) {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await res.json();
        currentImageUrl = data[0].url;
        
      } else {
        loadState();
      }
      
      // Clear any previous content
      cat.innerHTML = '';


      const h1 = document.createElement('h1');
      h1.innerText = 'Kitten Pic';
  
      const fig = document.createElement('figure');
      const img = document.createElement('img');
      img.setAttribute('src', currentImageUrl);
      img.alt = 'A cute kitten';
  
      const scoreDisplay = document.createElement('p');
      scoreDisplay.innerText = `Score: ${score}`;
      scoreDisplay.id = 'score-display';
  
      const upvoteBtn = document.createElement('button');
      upvoteBtn.innerText = 'Upvote';
      upvoteBtn.style.width = '100px';
      upvoteBtn.style.height = '50px';
      upvoteBtn.addEventListener('click', () => {
        score++;
        document.getElementById('score-display').innerText = `Score: ${score}`;
        saveState();
      });
  
      const downvoteBtn = document.createElement('button');
      downvoteBtn.innerText = 'Downvote';
      downvoteBtn.style.width = '100px';
      downvoteBtn.style.height = '50px';
      downvoteBtn.addEventListener('click', () => {
        score--;
        document.getElementById('score-display').innerText = `Score: ${score}`;
        saveState();
      });
  
      // Create comment input and submit button
      const commentInput = document.createElement('input');
      commentInput.type = 'text';
      commentInput.placeholder = 'Add a comment';
      commentInput.id = 'comment-input';
  
      const commentBtn = document.createElement('button');
      commentBtn.innerText = 'Submit';
      commentBtn.style.width = '100px';
      commentBtn.style.height = '30px';
  
      // Create comments section
      const commentsSection = document.createElement('div');
      commentsSection.id = 'comments-section';
  
      commentBtn.addEventListener('click', () => {
        const commentText = commentInput.value;
        if (commentText) {
          comments.push(commentText);
          const comment = document.createElement('p');
          comment.innerText = commentText;
          commentsSection.appendChild(comment);
          commentInput.value = ''; // Clear input field
          saveState();
        }
      });
  
      // Render existing comments
      comments.forEach(commentText => {
        const comment = document.createElement('p');
        comment.innerText = commentText;
        commentsSection.appendChild(comment);
      });
  
      fig.appendChild(img);
      cat.appendChild(h1);
      cat.appendChild(fig);
      cat.appendChild(scoreDisplay);
      cat.appendChild(upvoteBtn);
      cat.appendChild(downvoteBtn);
      cat.appendChild(commentInput);
      cat.appendChild(commentBtn);
      cat.appendChild(commentsSection);
    }
  
    // Load state from localStorage and render
    loadState();
    renderState();
  
    add.addEventListener('click', async () => {
      try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await res.json();
        currentImageUrl = data[0].url;
        score = 0;
        comments = [];
        saveState();
        renderState();
      } catch (e) {
        console.log('Error fetching cat images', e);
      }
    });
  };
  

// below are for draft purpose
// phase 1 code:
//  window.onload = () => {
    
//     (async () => {
//         try {

//             let score = 0;
//             let comments = [];
//             let url = '';

//             function storeTheme() {
//                 const state = {score, comments, url}
//                 window.localStorage.setItem("currentState", JSON.stringify(state))
//             }
            
//             // function restoreTheme() {
//             //     const storedState = JSON.parse(window.localStorage.getItem("currentState"));
//             //     if (storedState) {
//             //         const cat = document.getElementById('cat-1');
//             //         cat.innerHTML = '';
//             //         storeTheme(
            
//             //         );
//             //     }
//             // }

//             const savedState = JSON.parse(window.localStorage.getItem("currentState"));

//             if (savedState) {
//                 score = savedState.score;
//                 comments = savedState.comments;
//                 url = savedState.url;
//             } else {
//                 const res = await fetch("https://api.thecatapi.com/v1/images/search")
//                 const data = await res.json();
//                 url = data[0].url;
//                 storeTheme();
//             }

            

//             const cat = document.getElementById('cat-1');

//             cat.innerHTML = '';

//             const h1 = document.createElement('h1');
//             h1.innerText = 'Kitten Pic';

//             const fig = document.createElement('figure');
//             const img = document.createElement('img');
//             img.setAttribute('src', url);

//             fig.appendChild(img);
//             cat.appendChild(h1);
//             cat.appendChild(fig);


//             // let score = 0;
//             const scoreDisplay = document.createElement('h2');
//             scoreDisplay.innerText = `Popularity Score: ${score}`;
//             scoreDisplay.id = 'score-display';

//             const upvote = document.createElement('button');
//             upvote.innerText = 'Up Vote';
//             upvote.id = 'up-button';
//             upvote.addEventListener('click', () => {
//                 score++;
//                 document.getElementById('score-display').innerText = `Popularity Score: ${score}`;
//                 storeTheme();
//             })

//             const downvote = document.createElement('button');
//             downvote.innerText = 'Down Vote';
//             downvote.id = 'down-button';
//             downvote.addEventListener('click', () => {
//                 score--;
//                 document.getElementById('score-display').innerText = `Popularity Score: ${score}`;
//                 storeTheme();
//             })

//             cat.appendChild(scoreDisplay);
//             cat.appendChild(upvote);
//             cat.appendChild(downvote);

//             // add comments
//             const commentStart = document.createElement('div');
//             commentStart.innerText = 'Comments: ';

//             const commentInput = document.createElement('input');
//             commentInput.id = 'comment-input';
//             commentInput.type = 'text';
//             commentInput.placeholder = 'Add a comment';

//             commentStart.appendChild(commentInput);

//             const commentDiv = document.createElement('div');
//             const commentButton = document.createElement('button');
//             commentButton.innerText = 'Submit';
//             commentButton.addEventListener('click', () => {
//                 if (commentInput.value) {
//                     const commentText = document.createElement('p')
//                     commentText.innerText = commentInput.value;
//                     comments.push(commentInput.value);

//                     const deleteButton = document.createElement('button');
//                     deleteButton.innerText = 'Delete Comment';
//                     deleteButton.addEventListener('click', () => {
//                         commentText.remove();
//                         comments = comments.filter(c => c!== commentInput.value);
//                         storeTheme();
//                     })
                    
//                     commentText.appendChild(deleteButton);
//                     commentDiv.appendChild(commentText);
//                     storeTheme();
//                 }
//             })

//             commentStart.appendChild(commentButton);
//             cat.appendChild(commentStart);
//             cat.appendChild(commentDiv);

//             // ensure comments are being kept
//             comments.forEach(comment => {
//                 const commentText = document.createElement('p');
//                 commentText.innerText = comment;
        
//                 const deleteButton = document.createElement('button');
//                 deleteButton.innerText = 'Delete Comment';
//                 deleteButton.addEventListener('click', () => {
//                   commentText.remove();
//                   comments = comments.filter(c => c !== comment);
//                   storeTheme();
//                 });
        
//                 commentText.appendChild(deleteButton);
//                 commentDiv.appendChild(commentText);
//               });
            
            
            
//         } catch (e){
//             console.log('Error fetching cat images')
//         }
//     }) ()   



//     const add = document.getElementById('add');
//     add.innerText = 'New Pic';
//     add.addEventListener('click', 
//         async () => {
//             try {
//                 let score = 0;
//                 let comments = [];
//                 let url = '';

//                 function storeThemeNew() {
//                     const state = {score, comments, url}
//                     window.localStorage.setItem("currentStateNew", JSON.stringify(state))
//                 }

//                 const savedState = JSON.parse(window.localStorage.getItem("currentStateNew"));

//                 if (savedState) {
//                     score = savedState.score;
//                     comments = savedState.comments;
//                     url = savedState.url;
//                 } else {
//                     const res = await fetch("https://api.thecatapi.com/v1/images/search")
//                     const data = await res.json();
//                     url = data[0].url;
//                     storeThemeNew();
//                 }
    
//                 const cat = document.getElementById('cat-1')

//                 // clear the original image
//                 cat.innerHTML = '';

//                 const h1 = document.createElement('h1');
//                 h1.innerText = 'Kitten Pic';

//                 const fig = document.createElement('figure');
//                 const img = document.createElement('img');
//                 img.setAttribute('src', url);

//                 // fig.appendChild(img);
//                 // cat.appendChild(h1);
//                 // cat.appendChild(fig);


//                 // add popularity score and upvote & downvote
//                 const scoreDisplay = document.createElement('h2');
//                 scoreDisplay.innerText = `Popularity Score: ${score}`;
//                 scoreDisplay.id = 'score-display';

//                 const upvote = document.createElement('button');
//                 upvote.innerText = 'Up Vote';
//                 upvote.id = 'up-button';
//                 upvote.addEventListener('click', () => {
//                     score++;
//                     document.getElementById('score-display').innerText = `Popularity Score: ${score}`;
//                     storeThemeNew();
//                 })

//                 const downvote = document.createElement('button');
//                 downvote.innerText = 'Down Vote';
//                 downvote.id = 'down-button';
//                 downvote.addEventListener('click', () => {
//                     score--;
//                     document.getElementById('score-display').innerText = `Popularity Score: ${score}`;
//                     storeThemeNew();
//                 })

//                 // cat.appendChild(scoreDisplay);
//                 // cat.appendChild(upvote);
//                 // cat.appendChild(downvote);

//                 // add comments
//                 const commentStart = document.createElement('div');
//                 commentStart.innerText = 'Comments: ';

//                 const commentInput = document.createElement('input');
//                 commentInput.id = 'comment-input';
//                 commentInput.type = 'text';
//                 commentInput.placeholder = 'Add a comment';

//                 commentStart.appendChild(commentInput);

//                 const commentDiv = document.createElement('div');
//                 const commentButton = document.createElement('button');
//                 commentButton.innerText = 'Submit';
//                 commentButton.addEventListener('click', () => {
//                     if (commentInput.value) {
//                         const commentText = document.createElement('p')
//                         commentText.innerText = commentInput.value;

//                         const deleteButton = document.createElement('button');
//                         deleteButton.innerText = 'Delete Comment';
//                         deleteButton.addEventListener('click', () => {
//                             commentText.remove();
//                             comments = comments.filter(c => c!== commentInput.value);
//                             storeThemeNew();
//                         })
                        
//                         commentText.appendChild(deleteButton);
//                         commentDiv.appendChild(commentText);
//                         storeThemeNew();

//                     }
//                 })

//                 comments.forEach(comment => {
//                     const commentText = document.createElement('p');
//                     commentText.innerText = comment;
            
//                     const deleteButton = document.createElement('button');
//                     deleteButton.innerText = 'Delete Comment';
//                     deleteButton.addEventListener('click', () => {
//                       commentText.remove();
//                       comments = comments.filter(c => c !== comment);
//                       storeThemeNew();
//                     });
            
//                     commentText.appendChild(deleteButton);
//                     commentDiv.appendChild(commentText);
//                   });

//                 fig.appendChild(img);
//                 cat.appendChild(h1);
//                 cat.appendChild(fig);

//                 cat.appendChild(scoreDisplay);
//                 cat.appendChild(upvote);
//                 cat.appendChild(downvote);

//                 commentStart.appendChild(commentButton);
//                 cat.appendChild(commentStart);
//                 cat.appendChild(commentDiv);

                
                
//             } catch (e){
//                 console.log('Error fetching cat images')
//             }
//         }
//     )

    
    
//  }

 // phase 2 code:
 
//  document.addEventListener('DOMContentLoaded', () => {
//     // add a button
//     const add = document.getElementById('add');
//     add.innerText = 'New Pic';
//     add.addEventListener('click', 
//         async () => {
//             try {
//                 const res = await fetch("https://api.thecatapi.com/v1/images/search?")
//                 const data = await res.json();
//                 const url = data[0].url;
//                 const cat = document.getElementById('cat-1')

//                 // clear the original image
//                 cat.innerHTML = '';

//                 const h1 = document.createElement('h1');
//                 h1.innerText = 'Kitten Pic';

//                 const fig = document.createElement('figure');
//                 const img = document.createElement('img');
//                 img.setAttribute('src', url);

//                 // fig.appendChild(img);
//                 // cat.appendChild(h1);
//                 // cat.appendChild(fig);


//                 // add popularity score and upvote & downvote
//                 let score = 0;
//                 const scoreDisplay = document.createElement('h2');
//                 scoreDisplay.innerText = `Popularity Score: ${score}`;
//                 scoreDisplay.id = 'score-display';

//                 const upvote = document.createElement('button');
//                 upvote.innerText = 'Up Vote';
//                 upvote.id = 'up-button';
//                 upvote.addEventListener('click', () => {
//                     score++;
//                     document.getElementById('score-display').innerText = `Popularity Score: ${score}`
//                 })

//                 const downvote = document.createElement('button');
//                 downvote.innerText = 'Down Vote';
//                 downvote.id = 'down-button';
//                 downvote.addEventListener('click', () => {
//                     score--;
//                     document.getElementById('score-display').innerText = `Popularity Score: ${score}`
//                 })

//                 // cat.appendChild(scoreDisplay);
//                 // cat.appendChild(upvote);
//                 // cat.appendChild(downvote);

//                 // add comments
//                 const commentStart = document.createElement('div');
//                 commentStart.innerText = 'Comments: ';

//                 const commentInput = document.createElement('input');
//                 commentInput.id = 'comment-input';
//                 commentInput.type = 'text';
//                 commentInput.placeholder = 'Add a comment';

//                 commentStart.appendChild(commentInput);

//                 const commentDiv = document.createElement('div');
//                 const commentButton = document.createElement('button');
//                 commentButton.innerText = 'Submit';
//                 commentButton.addEventListener('click', () => {
//                     if (commentInput.value) {
//                         const commentText = document.createElement('p')
//                         commentText.innerText = commentInput.value;

//                         const deleteButton = document.createElement('button');
//                         deleteButton.innerText = 'Delete Comment';
//                         deleteButton.addEventListener('click', () => {
//                             commentText.remove();
//                         })
                        
//                         commentText.appendChild(deleteButton);
//                         commentDiv.appendChild(commentText);

//                     }
//                 })

//                 fig.appendChild(img);
//                 cat.appendChild(h1);
//                 cat.appendChild(fig);

//                 cat.appendChild(scoreDisplay);
//                 cat.appendChild(upvote);
//                 cat.appendChild(downvote);

//                 commentStart.appendChild(commentButton);
//                 cat.appendChild(commentStart);
//                 cat.appendChild(commentDiv);
                
//             } catch (e){
//                 console.log('Error fetching cat images')
//             }
//         }
//     )

    
    
//  })




