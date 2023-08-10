function skillsMember() {
  var skills = document.querySelectorAll(".skills");
  var skillsArray = Array.from(skills);
  skillsArray.forEach(function (skill) {
    var skillValue = skill.dataset.percent;
    var skillBar = skill.querySelectorAll(".skills__bar");
    var skillBarArray = Array.from(skillBar);
    skillBarArray.forEach(function (bar) {
      bar.style.width = skillValue + "%";
    });
  });
}