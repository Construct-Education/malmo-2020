var errorMesseges = {
    headingTabEmpty: 'Please enter a heading for your tab',
    contentTabEmpty: 'Please add content for your tab',
}

function generateHtml() {
    var htmlP = document.querySelector('.html');
    var headingInput = document.querySelector('#text-heading');
    var contentInput = document.querySelector('#text-content');

    if (headingInput.value === '') {
        alert(errorMesseges.headingTabEmpty);
        headingInput.focus();
    } else if (contentInput.value === '') {
        alert(errorMesseges.contentTabEmpty);
        contentInput.focus();
    } else {
        var generatedHtml = `<p class="acc-first-malmo"><u>${headingInput.value}</u></p><div class="hidden-pannel-malmo"><p>${contentInput.value}</p></div>`

        htmlP.value = generatedHtml;

    }
}

function copyCode() {
    var copyText = document.querySelector('.html');

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    activateToolTip();
}


function activateToolTip() {
    var toolTip = document.querySelector('.tooltip');
    var contentIn = document.querySelector('.html').value;

    if (contentIn) {
        toolTip.classList.add('active');

        setTimeout(function () { toolTip.classList.add('hide') }, 400);

        setTimeout(function () {
            toolTip.classList.remove('hide');
            toolTip.classList.remove('active')
        }, 1000);
    }
}