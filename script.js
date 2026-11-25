/* =========================================================
   TAASU'S BIRTHDAY WEBSITE — CUSTOMISATION + INTERACTIONS
   Edit the CONFIG object below to personalise the website.
   ========================================================= */

const CONFIG = {
  name: "Tanya",
  nickname: "Taasu",
  birthdayIntro: "Today is all about you, my favorite human.",
  // PHOTO SETTINGS: Keep the exact 1.jpeg ... 18.jpeg filenames.
  // Change order, captions, gallery visibility and featured selection here.
  photos: Array.from({ length: 18 }, (_, index) => ({
    file: `${index + 1}.jpeg`,
    caption: [
      "A little piece of happiness.",
      "Some moments just stay with you.",
      "One of my favourite smiles.",
      "Memories made through a screen, feelings that go beyond it.",
      "A little reminder to smile.",
      "A moment worth keeping.",
      "A lovely little snapshot.",
      "Some pictures feel like sunshine.",
      "A small memory, a warm feeling.",
      "A little piece of your world.",
      "A smile worth remembering.",
      "A page in our little scrapbook.",
      "A moment that makes me smile.",
      "A favourite kind of memory.",
      "A little brightness for the day.",
      "A picture, a feeling, a memory.",
      "Keeping this one close.",
      "More lovely moments ahead."
    ][index],
    showInGallery: true,
    featured: [0, 4, 9].includes(index)
  })),
  timeline: [
    { date: "September 2025", title: "The beginning", text: "Our conversations started after a small misunderstanding. You initially thought I was someone else named Prateek. Funny how a mix-up became the start of this friendship." },
    { date: "As we got to know each other", title: "The beginning of our friendship", text: "Gradually, we started talking more, became good friends, and developed our own way of understanding each other." },
    { date: "The early mornings", title: "The morning conversations", text: "The days when I tried to wake up early just to talk to you. Those conversations made my mornings feel special." },
    { date: "Along the way", title: "The little arguments", text: "Our misunderstandings, you getting angry, me teasing you, and the way we gradually learned more about each other." },
    { date: "A little while", title: "The long silence", text: "There were times when we did not talk for a while, including a stretch of around a month or a month and a half. Even then, the friendship still mattered to me." },
    { date: "Diwali night", title: "A message I remember", text: "After a long time without talking, you wished me first on Diwali night. That small gesture meant a lot." },
    { date: "My birthday", title: "You still remembered", text: "Even though we had been arguing and you were angry with me, you still wished me first and talked to me." },
    { date: "A dream for someday", title: "The dream of the mountains", text: "Our shared plan: a café and a store in the mountains, two bikes, and rides together someday. A dream still waiting ahead." }
  ],
  quiz: [
    { question: "Who is more likely to get angry first?", options: ["Taasu", "Prateek", "Both at exactly the same time"], answer: 0, correct: "I think we both know this one. 😄" },
    { question: "Who tries to wake up early for morning conversations?", options: ["Taasu", "Prateek", "Neither — sleep wins"], answer: 1, correct: "Six in the morning… all for a little conversation. ☀️" },
    { question: "Who is more likely to tease the other?", options: ["Taasu", "Prateek", "Both, depending on the day"], answer: 1, correct: "I plead guilty. But only in best-friend spirit! 😇" },
    { question: "Who usually tries to convince the other after an argument?", options: ["Taasu", "Prateek", "It depends on the argument"], answer: 2, correct: "Fair answer. Every disagreement has its own story." },
    { question: "What is our dream for the future?", options: ["A beach house", "A mountain café, a little store and two bikes", "A spaceship"], answer: 1, correct: "The mountain deal! Café, store, bikes and rides. Don't forget your side. 🏔️" }
  ],
  quizResults: [
    "A perfect score! Of course you know us so well, Taasu. ❤️",
    "You know us pretty well! I still think I know a few things about you that you don't even realise. ❤️",
    "Not bad, Taasu! Looks like we need a few more conversations and fewer arguments. 😌"
  ],
  messages: [
    { title: "Your happiness matters", text: "I genuinely want you to be happy. I hope every dream you have slowly becomes a beautiful part of your life." },
    { title: "Our friendship", text: "Even when we argue, I never want to lose the beautiful friendship we have built." },
    { title: "My favourite morning messages", text: "Those early morning conversations with you were some of my favourite parts of the day." },
    { title: "My little troublemaker side", text: "I know I sometimes tease you just to get a reaction out of you. Your angry replies sometimes make me smile, but I never want my teasing to genuinely upset you." },
    { title: "You are my guide too", text: "You always try to explain things to me when I am wrong. But sometimes, I hope you will listen to my little advice too. After all, I am your best friend, and I care about you just as much." },
    { title: "The friendship I hope we keep", text: "I hope we can disagree, argue, laugh, and make up without ever forgetting how much our friendship means to us." }
  ],
  // Edit the letter paragraphs here. Keep each paragraph as a separate string.
  letter: [
    "Dear Taasu,",
    "Happy Birthday to one of the most special people in my life. ❤️",
    "Sometimes I think about how our friendship even started.",
    "You thought I was someone else named Prateek, and somehow, from that little misunderstanding, we started talking. I never imagined that those conversations would become such a meaningful part of my life.",
    "We have never met in person, but you have still become someone I genuinely care about.",
    "I still remember those mornings when I would try to wake up early just to talk to you. Sometimes I would try to wake up at six, sometimes seven, just so I could message you.",
    "Those little conversations made my day better in ways I probably never explained properly.",
    "I know we have had misunderstandings, arguments, and long periods when we did not talk. I know I have annoyed you, teased you, and sometimes made things difficult for you.",
    "I am sorry for the times when my actions genuinely disturbed you.",
    "But I hope you know that even when we are not talking, I still care about you.",
    "When you wished me first on Diwali night after such a long time, it meant a lot to me.",
    "And on my birthday, even though we had been arguing and you were angry with me, you still wished me first and talked to me.",
    "I don't know if you realise how much these little things mean to me.",
    "You are not just someone I talk to. You are my best friend, someone who guides me, explains things to me when I am wrong, and sometimes scolds me because you want me to understand things better.",
    "And yes, sometimes I deliberately tease you just because I enjoy our little arguments and your reactions.",
    "But I also hope that sometimes you will listen to me too.",
    "I know you are older than me, and I respect that. But being older doesn't mean you always have to be the one who scolds me or decides everything.",
    "Sometimes, please listen to your younger best friend too.",
    "I also think about our mountain deal.",
    "Our little café, our store, our two bikes, and those mountain rides we always talk about.",
    "I hope someday we really get to make that dream come true.",
    "And until then, your tulsi mala is still with me.",
    "I really hope we meet soon. Even if it is just for ten minutes, I would be happy.",
    "I want to give it back to you personally and finally meet the person who has become such an important part of my life.",
    "Taasu, I genuinely wish you the happiest life ever.",
    "May every dream you have come true. May you always find reasons to smile. May you get all the happiness, peace, love, and success you deserve.",
    "I hope you always remain the wonderful person you are.",
    "And I hope we get to keep this friendship for a very long time.",
    "I know we will probably argue again. You will get angry, I will probably annoy you, and we will have our little misunderstandings.",
    "But I hope we never forget the good things we have shared.",
    "I hope we keep choosing kindness, understanding, and friendship even when things get difficult.",
    "I really don't want to lose you from my life.",
    "I hope you stay in my life as my best friend, my guide, and someone I can always share my happiness with.",
    "And if someday you feel like talking, laughing, or just sharing your day, I hope you know that I will always be happy to hear from you.",
    "Happy Birthday, my Taasu.",
    "I hope this new year of your life brings you everything your heart wishes for.",
    "You deserve the bestest life ever.",
    "Keep smiling, keep dreaming, and keep being the wonderful person you are."
  ],
  finalMessage: [
    "Happy Birthday, my Taasu!",
    "Thank you for becoming such a special part of my life.",
    "I hope we get to share many more conversations, laughs, silly arguments, and beautiful memories.",
    "I hope your dreams come true, your heart stays happy, and your life becomes everything you have ever wished for.",
    "And one day, when we finally meet, I hope we can look back at this little birthday website and smile at how our friendship started.",
    "Until then, keep smiling, keep dreaming, and take care of yourself.",
    "Your best friend is always cheering for you.",
    "Happy Birthday, Taasu. ❤️"
  ],
  musicFile: "assets/music/bdsong.mp4"
};

// Helpers
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function makeConfetti(amount = 90) {
  const layer = $("#confetti-layer");
  layer.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 1.1}s`;
    piece.style.animationDuration = `${2.4 + Math.random() * 1.8}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    layer.appendChild(piece);
  }
  window.setTimeout(() => { layer.innerHTML = ""; }, 5200);
}

function makeBalloons(amount = 30) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = $("#balloon-layer");
  const colors = ["#e8b8c9", "#c9c1df", "#f5d6c4", "#d9c8df", "#efc2b9"];
  for (let i = 0; i < amount; i++) {
    const balloon = document.createElement("span");
    const drift = (Math.random() - .5) * 100;
    balloon.className = "screen-balloon";
    balloon.style.left = `${4 + Math.random() * 92}%`;
    balloon.style.setProperty("--balloon-color", colors[i % colors.length]);
    balloon.style.setProperty("--balloon-drift", `${drift}px`);
    balloon.style.setProperty("--balloon-end", `${-drift * .7}px`);
    balloon.style.setProperty("--balloon-delay", `${Math.random() * 1.2}s`);
    layer.appendChild(balloon);
    window.setTimeout(() => balloon.remove(), 8500);
  }
}

function makeGiftHearts(target) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = $("#balloon-layer");
  const bounds = target.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("span");
    heart.className = "gift-heart-effect";
    heart.textContent = i % 3 === 0 ? "♥" : "♡";
    heart.style.left = `${centerX + (Math.random() - .5) * 130}px`;
    heart.style.top = `${centerY + (Math.random() - .5) * 65}px`;
    heart.style.setProperty("--heart-drift", `${(Math.random() - .5) * 85}px`);
    heart.style.setProperty("--heart-delay", `${Math.random() * .2}s`);
    layer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 2200);
  }
}

function makeClickEffects(x, y) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = $("#confetti-layer");
  const effects = [
    ["click-balloon", "🎈"],
    ["click-balloon", "🎈"],
    ["click-heart", "♡"],
    ["click-sparkle", "✦"],
    ["click-lightning", "⚡"],
    ["click-heart", "♥"],
    ["click-sparkle", "✧"]
  ];
  effects.forEach(([kind, symbol], index) => {
    const particle = document.createElement("span");
    particle.className = `click-effect ${kind}`;
    particle.textContent = symbol;
    particle.style.left = `${x + (Math.random() - .5) * 54}px`;
    particle.style.top = `${y + (Math.random() - .5) * 28}px`;
    particle.style.setProperty("--drift", `${(Math.random() - .5) * 72}px`);
    particle.style.animationDelay = `${index * 35}ms`;
    layer.appendChild(particle);
    window.setTimeout(() => particle.remove(), 1500);
  });
}

document.addEventListener("click", event => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const clickable = target.closest("button, a, [role='button']");
  if (!clickable) return;
  const bounds = clickable.getBoundingClientRect();
  makeClickEffects(
    event.clientX || bounds.left + bounds.width / 2,
    event.clientY || bounds.top + bounds.height / 2
  );
}, { passive: true });

function addSparkles() {
  const layer = $("#sparkle-layer");
  for (let i = 0; i < 24; i++) {
    const star = document.createElement("span");
    star.className = "sparkle";
    star.textContent = i % 2 ? "✧" : "·";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.fontSize = `${10 + Math.random() * 18}px`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    layer.appendChild(star);
  }
}

function renderPhotos() {
  const gallery = $("#photo-gallery");
  gallery.innerHTML = "";
  CONFIG.photos.filter(photo => photo.showInGallery).forEach((photo) => {
    const card = document.createElement("button");
    card.className = "photo-card";
    card.type = "button";
    card.setAttribute("aria-label", `Open photo ${photo.file}: ${photo.caption}`);
    const img = document.createElement("img");
    img.src = `assets/taasu/${photo.file}`;
    img.alt = photo.caption;
    img.loading = "lazy";
    const imageFrame = document.createElement("span");
    imageFrame.className = "photo-image-frame";
    img.onerror = () => {
      const fallback = document.createElement("div");
      fallback.className = "photo-fallback";
      fallback.textContent = "♡";
      fallback.setAttribute("aria-label", `Photo ${photo.file} not found`);
      imageFrame.replaceChildren(fallback);
    };
    imageFrame.appendChild(img);
    const caption = document.createElement("p");
    caption.textContent = photo.caption;
    card.append(imageFrame, caption);
    card.addEventListener("click", () => openLightbox(photo));
    gallery.appendChild(card);
  });
}

let currentPhotoIndex = 0;
function openLightbox(photo) {
  currentPhotoIndex = CONFIG.photos.indexOf(photo);
  updateLightbox();
  $("#lightbox").hidden = false;
  document.body.classList.add("locked");
  $("#lightbox-close").focus();
}
function updateLightbox() {
  const photo = CONFIG.photos[currentPhotoIndex];
  $("#lightbox-image").src = `assets/taasu/${photo.file}`;
  $("#lightbox-image").alt = photo.caption;
  $("#lightbox-caption").textContent = photo.caption;
}
function closeLightbox() {
  $("#lightbox").hidden = true;
  document.body.classList.remove("locked");
}
function moveLightbox(direction) {
  const visible = CONFIG.photos.map((p, i) => p.showInGallery ? i : -1).filter(i => i >= 0);
  const position = visible.indexOf(currentPhotoIndex);
  currentPhotoIndex = visible[(position + direction + visible.length) % visible.length];
  updateLightbox();
}

function renderTimeline() {
  $("#timeline-list").innerHTML = CONFIG.timeline.map(item => `
    <article class="timeline-item">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-card"><time>${escapeHTML(item.date)}</time><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></div>
    </article>`).join("");
}

function renderMessages() {
  const grid = $("#message-cards");
  grid.innerHTML = "";
  CONFIG.messages.forEach((message, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "message-card";
    card.setAttribute("aria-expanded", "false");
    card.innerHTML = `<span class="message-inner">
      <span class="message-front"><span>♡ 0${index + 1}</span><h3>${escapeHTML(message.title)}</h3><small>Tap to open this little note ↗</small></span>
      <span class="message-back">${escapeHTML(message.text)}</span>
    </span>`;
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      card.setAttribute("aria-expanded", String(card.classList.contains("flipped")));
    });
    grid.appendChild(card);
  });
}

function renderLetter() {
  $("#birthday-letter").innerHTML = CONFIG.letter.map((paragraph, index) =>
    `<p>${escapeHTML(paragraph)}</p>`).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

// Quiz state and logic
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
function renderQuestion() {
  const item = CONFIG.quiz[quizIndex];
  $("#quiz-progress").textContent = `Question ${quizIndex + 1} of ${CONFIG.quiz.length}`;
  $("#quiz-score").textContent = `Score: ${quizScore}`;
  $("#quiz-progress-bar").style.width = `${((quizIndex + 1) / CONFIG.quiz.length) * 100}%`;
  $("#quiz-question").textContent = item.question;
  $("#quiz-options").innerHTML = "";
  $("#quiz-feedback").textContent = "";
  $("#quiz-next").disabled = true;
  $("#quiz-next").textContent = quizIndex === CONFIG.quiz.length - 1 ? "See my result →" : "Next question →";
  quizAnswered = false;
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerQuestion(index, button));
    $("#quiz-options").appendChild(button);
  });
}
function answerQuestion(selected, selectedButton) {
  if (quizAnswered) return;
  quizAnswered = true;
  const item = CONFIG.quiz[quizIndex];
  const buttons = $$(".quiz-option");
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
  });
  if (selected === item.answer) {
    quizScore++;
    $("#quiz-feedback").textContent = item.correct || "You got it! ♡";
  } else {
    selectedButton.classList.add("incorrect");
    $("#quiz-feedback").textContent = "Hehe, not quite! The correct answer is highlighted. ♡";
  }
  $("#quiz-score").textContent = `Score: ${quizScore}`;
  $("#quiz-next").disabled = false;
}
function finishQuiz() {
  $("#quiz-question").hidden = true;
  $("#quiz-options").hidden = true;
  $("#quiz-feedback").hidden = true;
  $("#quiz-next").hidden = true;
  const ratio = quizScore / CONFIG.quiz.length;
  const resultIndex = ratio === 1 ? 0 : ratio >= .6 ? 1 : 2;
  $("#quiz-result").hidden = false;
  $("#quiz-result").innerHTML = `<strong>${quizScore} / ${CONFIG.quiz.length} ♡</strong><p>${escapeHTML(CONFIG.quizResults[resultIndex])}</p><button class="button button-soft" id="quiz-restart">Play again ↺</button>`;
  $("#quiz-restart").addEventListener("click", resetQuiz);
}
function resetQuiz() {
  quizIndex = 0; quizScore = 0;
  $("#quiz-question").hidden = false; $("#quiz-options").hidden = false;
  $("#quiz-feedback").hidden = false; $("#quiz-next").hidden = false;
  $("#quiz-result").hidden = true;
  renderQuestion();
}
$("#quiz-next").addEventListener("click", () => {
  if (!quizAnswered) return;
  if (quizIndex === CONFIG.quiz.length - 1) {
    finishQuiz();
    return;
  }
  quizIndex++;
  renderQuestion();
});

// Opening sequence
$("#open-surprise").addEventListener("click", () => {
  const intro = $("#intro");
  intro.classList.add("opening");
  makeConfetti(55);
  window.setTimeout(() => {
    intro.hidden = true;
    $("#main-site").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 850);
});

// Cake interaction
function blowCandles() {
  if ($$(".candle").every(candle => candle.classList.contains("out"))) return;
  $$(".candle").forEach(candle => candle.classList.add("out"));
  $("#cake-wish").textContent = "Wish made! May something wonderful find its way to you this year. ✨";
  $("#blow-candles").hidden = true;
  $("#another-wish").hidden = false;
  makeConfetti(110);
  makeBalloons(32);
}
$$(".candle").forEach(candle => candle.addEventListener("click", blowCandles));
$("#blow-candles").addEventListener("click", blowCandles);
$("#another-wish").addEventListener("click", () => {
  $$(".candle").forEach(candle => candle.classList.remove("out"));
  $("#cake-wish").textContent = "Take a deep breath, close your eyes, and make another wish. ♡";
  $("#blow-candles").hidden = false;
  $("#another-wish").hidden = true;
});

// Gift box interaction
function openGift() {
  const giftBox = $("#gift-box");
  if (giftBox.classList.contains("open")) return;
  giftBox.classList.add("open");
  giftBox.setAttribute("aria-expanded", "true");
  $("#gift-message").hidden = false;
  $("#open-gift").textContent = "A little note, just for you ♡";
  makeBalloons(30);
  makeGiftHearts(giftBox);
}
$("#open-gift").addEventListener("click", openGift);
$("#gift-box").addEventListener("click", openGift);
$("#gift-box").addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openGift(); }
});

// Last surprise and restart
$("#last-surprise").addEventListener("click", () => {
  $("#final-message").hidden = false;
  $("#last-surprise").hidden = true;
  makeConfetti(120);
});
$("#final-message").querySelectorAll("p").forEach((p, i) => {
  if (CONFIG.finalMessage[i]) p.textContent = CONFIG.finalMessage[i];
});
$("#restart").addEventListener("click", () => {
  $("#final-message").hidden = true;
  $("#last-surprise").hidden = false;
  $("#intro").hidden = false;
  $("#intro").classList.remove("opening");
  $("#main-site").hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Lightbox controls
$("#lightbox-close").addEventListener("click", closeLightbox);
$("#lightbox-prev").addEventListener("click", () => moveLightbox(-1));
$("#lightbox-next").addEventListener("click", () => moveLightbox(1));
$("#lightbox").addEventListener("click", event => { if (event.target.id === "lightbox") closeLightbox(); });
document.addEventListener("keydown", event => {
  if ($("#lightbox").hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

// Optional music. No autoplay; visitor must press Play.
const audio = $("#birthday-audio");
audio.src = CONFIG.musicFile;
$("#music-toggle").addEventListener("click", async () => {
  if (audio.paused) {
    try { await audio.play(); $("#music-toggle").textContent = "Pause music"; }
    catch { $("#music-toggle").textContent = "Add your song"; }
  } else {
    audio.pause(); $("#music-toggle").textContent = "Play music";
  }
});
audio.addEventListener("ended", () => { $("#music-toggle").textContent = "Play music"; });
// Mobile navigation
$("#menu-toggle").addEventListener("click", () => {
  const nav = $(".main-nav");
  const open = nav.classList.toggle("show");
  $("#menu-toggle").setAttribute("aria-expanded", String(open));
});
$$(".main-nav a").forEach(link => link.addEventListener("click", () => {
  $(".main-nav").classList.remove("show");
  $("#menu-toggle").setAttribute("aria-expanded", "false");
}));

// Start
addSparkles();
renderPhotos();
renderTimeline();
renderMessages();
renderLetter();
renderQuestion();
