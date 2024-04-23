
let text = document.querySelector('.text-content').innerText;
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    copyToClipboard(text)
})

// copy text mobile and pc
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';

    document.body.appendChild(textarea);
    const selected = (document.getSelection().rangeCount > 0)? document.getSelection().getRangeAt(0) : false;

    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }

}



/*
// only pc copy text

function copyToClipboard(text)  {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(text);
    return Promise.reject('The Clipboard API is not available.');
  };

*/