function myportfolio() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("message").value;
    if (a == "" && b == "" && c == "") {
        alert("name,email and message is required ")
    }
    else if (a == "") {
        alert("name is required")
    }
    else if (b == "") {
        alert("email is required ")
    }
    else if (c == "") {
        alert("message is required ")
    }
    else {
        alert("name = " + a + "\n email:-" + b + "\n message~" + c)
    }
}

// Enimation 
ScrollReveal({ 
    reset: true,
    distance:'100px',
    duration:'2000',
    delay:200
});
ScrollReveal().reveal('.heading,.sub-title', { origin:'top' });
ScrollReveal().reveal(' .Skills-list,.work-list,.contact-right', { origin:'bottom' });
ScrollReveal().reveal('.container,.header-text,.about-content,.contact-left', { origin:'left' });
ScrollReveal().reveal('.about-img,.footer-text', { origin:'right' });

// Access children of Element
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)
// let arr = Array.from(document.body.childNodes)
// console.log(arr);

// parents and siblings
// console.log(document.body.parentNode)
// console.log(document.body.parentElement)

// element only navigation
// console.log(document.body.previousElementSibling)
// console.log(document.body.nextElementSibling)
// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)


// let a = document.getElementById('home');
// console.log(a)

