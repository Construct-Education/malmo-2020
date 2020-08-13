// CODE FOR THE CUSTOM TABS  
const tablinks = document.querySelectorAll('.tablinks');

tablinks.forEach(tabBtn => {
    const controls = tabBtn.getAttribute('aria-controls');
    tabBtn.setAttribute('onclick', `openTab(this)`);

});


function openTab(tab) {
    const tabsContainer = tab.parentElement.parentElement;
    const tabContent = tabsContainer.querySelector(`#${tab.getAttribute("aria-controls")}`)

    closeCurentActiveTab(tabsContainer);

    tab.setAttribute('aria-expanded', 'true');
    tabContent.setAttribute('aria-expanded', 'true')
}


function closeCurentActiveTab(tabsContainer) {
    const currentOpenTab = tabsContainer.querySelectorAll('[aria-expanded="true"]');
    currentOpenTab.forEach(openTab => {
        openTab.setAttribute('aria-expanded', 'false');
    });
}


// THE CODE FOR THE TWO KINDS OF ACCORDIONS FOR MALMO 

const acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.opacity = 0;
            panel.style.padding = 0;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.opacity = 1;
            panel.style.padding = '20px';
        }
    });
}


//new acc for (+css)
var malmoAccFirst = document.getElementsByClassName("acc-first-malmo");
var malmoCounter;
  for (malmoCounter = 0; malmoCounter < malmoAccFirst.length; malmoCounter++) {
    malmoAccFirst[malmoCounter].addEventListener("click", function() {
      var floatyAcc = this.nextElementSibling;
      floatyAcc.previousElementSibling.classList.toggle("active-acc-first-malmo")
      if (floatyAcc.style.display === 'block') {
        floatyAcc.style.display = 'none'
      }
      else
      {
        floatyAcc.style.display = 'block'
      }
  });
}