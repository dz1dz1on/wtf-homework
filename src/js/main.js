"use strict";

const list = document.querySelector(".projects-list--js");

fetch("https://api.github.com/users/dz1dz1on/repos?sort=updated")
  .then((resp) => resp.json())
  .then((resp) => {
    const repositories = resp;
    for (const repo of repositories) {
      const { description, html_url, name } = repo;
      list.innerHTML += `
      <li class="project">
            <div class="project__container">
              <img class="project__logo" src="../assets/img/github.svg" alt="">
              <h3 class="project__title">${name}</h3>
              <p class="project__description">
              ${description ? description : "brak opisu"}
              </p>
            </div>
            <div class="project__footer">
              <a class="project__link" href="#">Demo</a>
              <a class="project__link project__link--git" href="${html_url}" target="_blank" rel="nofollow noreferrer">Github</a>
            </div>
      </li>
      `;
    }
  })
  .catch((error) => {
    console.log(error);
  });
