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
                
            } catch (e){
                console.log('Error fetching cat images')
            }
        }
    )
 })

