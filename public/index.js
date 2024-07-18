// Your code here 
// phase 1 code:
 window.onload = () => {
    (async () => {
        try {
            const res = await fetch("https://api.thecatapi.com/v1/images/search")
            const data = await res.json();
            const url = data[0].url;
            const cat = document.getElementById('cat-1')

            const h1 = document.createElement('h1');
            h1.innerText = 'Kitten Pic';

            const fig = document.createElement('figure');
            const img = document.createElement('img');
            img.setAttribute('src', url);

            fig.appendChild(img);
            cat.appendChild(h1);
            cat.appendChild(fig);
            document.body.appendChild(cat);
            
        } catch (e){
            console.log('Error fetching cat images')
        }
    }) ()   
 }

 // phase 2 code:
 
 document.addEventListener('DOMContentLoaded', () => {
    // add a button
    const add = document.getElementById('add');
    add.addEventListener('click', 
        async () => {
            try {
                const res = await fetch("https://api.thecatapi.com/v1/images/search?")
                const data = await res.json();
                const url = data[0].url;
                const cat = document.getElementById('cat-1')

                // clear the original image
                cat.innerHTML = '';

                const h1 = document.createElement('h1');
                h1.innerText = 'Kitten Pic';

                const fig = document.createElement('figure');
                const img = document.createElement('img');
                img.setAttribute('src', url);

                fig.appendChild(img);
                cat.appendChild(h1);
                cat.appendChild(fig);


                // add popularity score and upvote & downvote
                let score = 0;
                const scoreDisplay = document.createElement('h2');
                scoreDisplay.innerText = `Popularity Score: ${score}`;
                scoreDisplay.id = 'score-display';

                const upvote = document.createElement('button');
                upvote.innerText = 'Up Vote';
                upvote.id = 'up-button';
                upvote.addEventListener('click', () => {
                    score++;
                    document.getElementById('score-display').innerText = `Popularity Score: ${score}`
                })

                const downvote = document.createElement('button');
                downvote.innerText = 'Down Vote';
                downvote.id = 'down-button';
                downvote.addEventListener('click', () => {
                    score--;
                    document.getElementById('score-display').innerText = `Popularity Score: ${score}`
                })

                cat.appendChild(scoreDisplay);
                cat.appendChild(upvote);
                cat.appendChild(downvote);

                // add comments
                const commentStart = document.createElement('div');
                commentStart.innerText = 'Comments: ';

                const commentInput = document.createElement('input');
                commentInput.id = 'comment-input';
                commentInput.type = 'text';
                commentInput.placeholder = 'Add a comment';

                commentStart.appendChild(commentInput);

                const commentDiv = document.createElement('div');
                const commentButton = document.createElement('button');
                commentButton.innerText = 'Submit';
                commentButton.addEventListener('click', () => {
                    if (commentInput.value) {
                        const commentText = document.createElement('p')
                        commentText.innerText = commentInput.value;

                        const deleteButton = document.createElement('button');
                        deleteButton.innerText = 'Delete Comment';
                        deleteButton.addEventListener('click', () => {
                            commentText.remove();
                        })
                        
                        commentText.appendChild(deleteButton);
                        commentDiv.appendChild(commentText);

                    }
                })

                commentStart.appendChild(commentButton);
                cat.appendChild(commentStart);
                cat.appendChild(commentDiv);
                
            } catch (e){
                console.log('Error fetching cat images')
            }
        }
    )

    
    
 })




