document.getElementById('transferForm').addEventListener('submit',function(e){
e.preventDefault();
document.getElementById('msg').textContent='Form submitted! (Google Sheets integration will be added later.)';
this.reset();
});