const telegrambtn = document.querySelector('#telegrambtn');
const telegramtitle = telegrambtn.getAttribute('data-title');
const telegramusername = telegrambtn.getAttribute('data-uid');

document.addEventListener("DOMContentLoaded", () => {
    telegrambtn.innerHTML = `<div><a href="https://telegram.me/${telegramusername.value}" style="text-decoration:none; background-color: #0088cc; border-radius: 5px; color:#fff;  padding: 5px 10px; font-size: 15px" target="blank">Join ${telegramtitle.value} on Telegram</a></div>`
});
