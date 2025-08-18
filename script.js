// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Verse carousel with fade transition
const verses = [
  "“You are the Christ, the Son of the living God.” — Matthew 16:16",
  "“Arise and shine, for your light has come.” — Isaiah 60:1",
  "“The joy of the Lord is your strength.” — Nehemiah 8:10"
];

let verseIndex = 0;
const verseElement = document.getElementById("verse");

function updateVerse() {
  verseElement.classList.remove("fade");
  setTimeout(() => {
    verseElement.textContent = verses[verseIndex];
    verseElement.classList.add("fade");
  }, 200);
  verseIndex = (verseIndex + 1) % verses.length;
}

setInterval(updateVerse, 5000);


