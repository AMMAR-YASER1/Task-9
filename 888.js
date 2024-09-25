function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    setCookie(name, "", -1);
}

function updateCookie(name, value, days) {
    setCookie(name, value, days);
}

function testCookies() {
    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    const days = parseInt(document.getElementById("cookieDays").value);

    if (document.getElementById("setCookieBtn").clicked) {
        setCookie(name, value, days);
        alert(`Cookie "${name}" set with value "${value}" for ${days} days.`);
    }

    if (document.getElementById("getCookieBtn").clicked) {
        const cookieValue = getCookie(name);
        alert(`Cookie "${name}" has value: "${cookieValue}"`);
    }

    if (document.getElementById("updateCookieBtn").clicked) {
        updateCookie(name, value, days);
        alert(`Cookie "${name}" updated with value "${value}".`);
    }

    if (document.getElementById("deleteCookieBtn").clicked) {
        deleteCookie(name);
        alert(`Cookie "${name}" deleted.`);
    }
}