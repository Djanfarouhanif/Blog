//==================Upload Profile========================
const profile = document.querySelector('.profile');
const upload = document.querySelector('.upload-profile');
console.log(profile);
console.log(upload);

profile.addEventListener('click', ()=>{
    console.log(upload)
    upload.classList.toggle('up');
});

