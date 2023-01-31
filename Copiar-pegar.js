function copyToClipBoard() {

var content = document.getElementById('msg');

content.select();
document.execCommand('copy');
}
