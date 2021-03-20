// Data for all projects to display
const projects = [
    {name:"MERN Auth Demo", img:"./images/mern-auth-demo.jpg", demo:"https://sn-mern-auth-demo.herokuapp.com/", repo:"https://github.com/srikant-n/mern-auth-demo", tags:["React", "React Router", "CSS", "Express", "MongoDB", "Jest", "Mocha/Chai"]},
    {name:"My Unsplash", img:"./images/my-unsplash.jpg", demo:"https://devc-my-unsplash.herokuapp.com", repo:"https://github.com/srikant-n/my-unsplash", tags:["React", "Redux", "Bootstrap", "Express", "MongoDB", "Sass", "Jest", "Mocha/Chai"]},
    {name:"Image Uploader", img:"./images/image-uploader.jpg", demo:"https://sn-image-uploader.herokuapp.com/", repo:"https://github.com/srikant-n/image-uploader", tags:["React", "Bootstrap", "Express", "Sass", "Jest", "Cypress"]},
    {name:"EJS To Do", img:"./images/ejs-to-do.jpg", demo:"https://ejs-to-do.srikantn.repl.co/", repo:"https://github.com/srikant-n/ejs-to-do", tags:["EJS", "JavaScript", "Express"]},
    {name:"Launch Countdown Timer", img:"./images/launch-countdown-timer.jpg", demo:"https://srikant-n.github.io/fm-launch-countdown-timer/dist/", repo:"https://github.com/srikant-n/fm-launch-countdown-timer", tags:["Less", "jQuery", "Webpack"]},
    {name:"Interactive Pricing Component", img:"./images/interactive-pricing-component.jpg", demo:"https://srikant-n.github.io/fm-interactive-pricing-component/index.html", repo:"https://github.com/srikant-n/fm-interactive-pricing-component", tags:["Flexbox", "JavaScript"]},
    {name:"JavaScript Calculator", img:"./images/calculator.jpg", demo:"https://codepen.io/srikant-nimmagadda/full/JjbGZvJ", repo:"https://codepen.io/srikant-nimmagadda/pen/JjbGZvJ", tags:["React", "Bootstrap"]},
    {name:"25+5 Clock", img:"./images/25-5-clock.jpg", demo:"https://codepen.io/srikant-nimmagadda/full/qBqZbyB", repo:"https://codepen.io/srikant-nimmagadda/pen/qBqZbyB", tags:["React", "Redux", "Sass"]},
    {name:"Social Proof Section", img:"./images/social-proof-section.jpg", demo:"https://srikant-n.github.io/fm-social-proof-section/", repo:"https://github.com/srikant-n/fm-social-proof-section", tags:["CSS", "Grid"]},
    {name:"FAQ Accordion", img:"./images/faq-accordion.jpg", demo:"https://srikant-n.github.io/fm-faq-accordion-card/index.html", repo:"https://github.com/srikant-n/fm-faq-accordion-card", tags:["CSS"]},
    {name:"Random Quote", img:"./images/random-quote-img.jpg", demo:"https://codepen.io/srikant-nimmagadda/full/RwoPYNp", repo:"https://codepen.io/srikant-nimmagadda/pen/RwoPYNp", tags:["CSS", "JavaScript"]},
];

/**
 * Get an project item to be placed in the HTML
 * @param {Object} projectData All the data to be displayed for the project
 * @returns {String} HTMl for a project item
 */
function getPortfolioItemHtml(projectData) {
    return `<div class="item">
    <div class="preview-container">
      <img
        class="preview"
        src="${projectData.img}"
        alt="Preview"
      />
      <div class="overlay"></div>
      <div class="tags">
        ${projectData.tags.reduce((res, val) => res.concat(`<span class="tag">${val}</span>`),"")}
      </div>
    </div>
    <div class="project-info">
      <h3 class="project-title">${projectData.name}</h3>
      <div class="project-buttons">
        <a href="${projectData.demo}" class="project-link demo-link" target="_blank">Demo</a>
        <a href="${projectData.repo}" class="project-link repo-link" target="_blank">Repo</a>
      </div>
    </div>
  </div>`;
}

// Add projects to the DOM
document.getElementById("portfolio").innerHTML = projects.reduce((res, project) => res.concat(getPortfolioItemHtml(project), ""),"");