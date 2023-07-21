function generate_quote(){
var quotes= {
    "-dalai-lama":'"The purpose of our lives is to be happy."',
"-john-lennon" : '"Life is what happens when youre busy making other plans."',
"-stephen king": '"Get busy living or get busy dying."'
}
var authors= Object.keys(quotes);
var author= authors[Math.floor(Math.random() * authors.length)];
var quote= quotes[author];
document.getElementById("quotes").innerHTML= quote;
document.getElementById("author").innerHTML= author; 
}