const likePhoto = document.querySelectorAll('.like-photo');
const counts = document.getElementById('count');

let clickTime = 0;
let countClick = 0;

for(let photo of likePhoto){
    photo.addEventListener('click', (e) => {
        if(clickTime === 0){
            clickTime = new Date().getTime();
        }
        else{
            if((new Date().getTime() - clickTime) < 800){
                var heart = createLike(e);
                photo.appendChild(heart);
                
                counts.innerHTML = ++countClick;
                
                clickTime = 0;
                
            }
            else{
                clickTime = new Date().getTime();
            }
            
        }
        
    });
   
}
function createLike(e){
    
    const heart = document.createElement('i');
    heart.classList.add('fa');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    setTimeout(() => heart.remove(), 1000);

    return heart;

}
