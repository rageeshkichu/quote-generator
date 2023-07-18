var i= 0;
function changecolors(){
    var colors= ["red","blue","green","yellow"];
    document.getElementsByTagName("body")[0].
    style.background= colors [i++];
if (i > colors.length - 1)
i= 0;

}