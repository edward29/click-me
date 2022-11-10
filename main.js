const yourname = document.querySelector('#name');
const main = document.querySelector('.main');
const ty = document.querySelector('.ty');
const msg = document.querySelector('#msg');
const pic = document.querySelector('.pic');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    if (main.style.display === "block") {
        main.style.display = 'none';
        pic.style.display = 'block';
        btn.innerHTML = "Hide Picture"
    } else {
        main.style.display = 'block';
        pic.style.display = 'none';
        btn.innerHTML = "Show Picture"
    }
})

while (true) {
    let n = prompt("Enter your name");
    
    if( n == null) {
        main.style.display = "none";
        ty.style.display = "flex";
        msg.innerHTML = "Thank You!";
        btn.innerHTML = 'Reload';
        btn.addEventListener('click', () => {
            location.reload();
        })
    }
    
    if (n.length > 0) {
        alert(`Hello ${n}`);
        alert('I Miss You ♥');
        yourname.innerHTML = n;
        main.style.display = "block";
        break;
    }
}

