/* =========================================================
   置換リーディング練習アプリ（Lesson 5・6）
   ---------------------------------------------------------
   本文データの書き方：
     [英語の答え|日本語ヒント]  → 空所になります
     ほかの文字はそのまま表示されます
   段落の種類：
     "テキスト"               → ふつうの段落
     { speaker: "名前" }      → 話者名（Lesson 6 Part 3 用）
     { note: "テキスト" }      → 補足（小さく表示）
   ========================================================= */

const LESSONS = [
  {
    id: 5,
    title: "LESSON 5　AI Meets the Arts",
    parts: [
      {
        id: 1,
        lead: "Sakura reads about the spread of AI.",
        paragraphs: [
          "AI, [artificial intelligence|人工知能②], [handles|扱う-s] a great deal of information. It [makes decisions|判断をする-s②] like humans. AI is used in many systems today.",
          "Voice assistant systems are one example. When you ask something, the systems give you a quick reply. How is this possible? They access a huge online [knowledge|知識] database. From this, they [choose|選ぶ] [appropriate|適切な] words to make answers. The answers created by AI often [seem to be|～であるように思われる③] just for you. [This is because|これは～だからです③] the systems are always collecting data about you.",
          "AI is also used in air conditioners, robot [vacuum cleaners|掃除機②], car safety systems, and so on. They help our lives a lot. AI seems to make everything possible."
        ]
      },
      {
        id: 2,
        lead: "Sakura also learns that AI is spreading into the arts.",
        paragraphs: [
          "AI is opening new [frontiers|領域-s]. It has [even|でさえも] created novels and pictures.",
          "Japanese engineers created four short sci-fi novels. These were [combinations|組み合わせた] of AI writing and human writing. In 2016, one of them passed the first round of a [literary competition|文学コンテスト②].",
          "AI has also produced pictures. In 2018, AI created a [portrait|肖像画] from the data of [previous|以前の] artworks. It sold for 432,500 dollars at auction! In 2022, a picture [generated|生成された] by AI won first prize for digital art in an American art competition. The creator entered a short text message into the software program. [Within|～以内で] seconds, the picture appeared. Humans now have a new form of art—AI art.",
          "It is certain that AI art will [develop|発展する] further. However, some people say that AI art is [not art at all|全く芸術でない④]. They [argue|主張する] that AI is just copying someone else’s art. It is not creation but just imitation."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "LESSON 6　Dynamic Pricing: A New Pricing System",
    parts: [
      {
        id: 1,
        lead: "Haruto reads about the history of pricing.",
        paragraphs: [
          "[Deciding|決定すること] the price of something is very difficult. If the [price|価格] is too high, the item will not sell, and sellers will not get any money. If it is too low, the item may sell well, but sellers may not make a [sufficient profit|十分な利益②]. Deciding a price [requires|必要とする-s] a [negotiation|交渉] between buyers and sellers.",
          "[Until|～まで] things changed in the 19th century, buyers and sellers had negotiated the price of [every sale|販売ごとに②]. This [meant|意味した] a buyer paid different prices for the same item on different days. Such negotiation was [not|～ない] convenient for [either|どちらにも] buyers [or|または] sellers.",
          { note: "↑ 3つの空所で「買い手と売り手のどちらにも都合がよくない」" },
          "In the 19th century, [companies|企業-ies] began to sell the same [product|商品] to every buyer at a set price. People became [free from|～から解放される②] time-consuming negotiations."
        ]
      },
      {
        id: 2,
        lead: "Haruto learns about dynamic pricing.",
        paragraphs: [
          "[Set prices|定価②-s], however, had a [disadvantage|不都合な] for companies. Once a price was set, it was difficult for them to [raise|上げる] it [later|後に]. Change came in the 1980s. This is the period when a new pricing system began. An airline in America began to change its ticket prices frequently [according to|～に応じて②] the [expected|予測された] number of passengers. This was “dynamic pricing.” Now many companies use AI to [estimate|予測する] future [demand|需要], and they change prices more frequently and [flexibly|柔軟に]. They [consider|考慮する] the season, day of the week, time of day, and even the weather.",
          "A soccer team in Japan began to sell tickets for 2,000 yen. However, they changed the price [as many as|～ほど多くの、～も③] five times in just three weeks: to 2,500 yen, 4,000 yen, 8,000 yen, 6,000 yen, and finally 5,000 yen. A baseball team in Japan changes prices even more often. They change the ticket price [every|～ごとに] 15 minutes!"
        ]
      },
      {
        id: 3,
        lead: "Haruto finds various comments about dynamic pricing on social media.",
        paragraphs: [
          { speaker: "Keiko ( Fukuoka, Japan )" },
          "Some say it’s not [fair|公平な] to frequently change the ticket price for sports events, but I [disagree|反対する、そう思わない]. Things are sold at lower prices during sales. What’s the difference?",
          { speaker: "Jack ( NY, USA )" },
          "I live in New York. It is a city where many baseball fans live. Baseball tickets are [quite|かなり、とても q-] expensive here, but if I just [avoid|避ける] weekend games, I can buy a ticket at a [reasonable|手頃な] price. It’s not necessary to [charge|請求する] the same price for different games.",
          { speaker: "Emma ( LA, USA )" },
          "Recently, I paid 100 dollars for a standing-room-only ticket at a concert. But latecomers got good seats at just 50 dollars. It’s unbelievably [unfair|不公平な]. People who buy their tickets early should get the best [deal|待遇].",
          { speaker: "Teo ( Seoul, South Korea )" },
          "Even with the best AI, it is impossible to [estimate|予測する] future demand correctly. [In the long run|長い目で見れば④], companies may lose both their [profits|利益-s] and their customers’ [trust|信頼]."
        ]
      }
    ]
  }
];

/* =========================================================
   ここから下はロジック（通常は編集不要）
   ========================================================= */

const APP_TITLE = "置換リーディング練習";
const INSTRUCTION = "（ ）内の日本語に合う英語を答えなさい。丸数字は語数，「-s」などは語形のヒント。";

const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
// 採点用（大文字小文字・余分な空白・アポストロフィの違いを無視）
const norm = (s) => s.replace(/[’‘`]/g, "'").replace(/\s+/g, " ").trim().toLowerCase();
const wordCount = (s) => s.trim().split(/\s+/).length;

// "[答え|ヒント]" を分解する
function parseParagraph(str) {
  const tokens = [];
  const re = /\[([^\]|]+)\|([^\]]+)\]/g;
  let last = 0, m;
  while ((m = re.exec(str))) {
    if (m.index > last) tokens.push({ type: "text", text: str.slice(last, m.index) });
    tokens.push({ type: "blank", answer: m[1].trim(), hint: m[2].trim() });
    last = re.lastIndex;
  }
  if (last < str.length) tokens.push({ type: "text", text: str.slice(last) });
  return tokens;
}
const countBlanks = (part) => part.paragraphs.filter((x) => typeof x === "string")
  .reduce((n, s) => n + parseParagraph(s).filter((t) => t.type === "blank").length, 0);

/* ---------------- 状態 ---------------- */
const state = {
  mode: "write",
  lessonId: LESSONS[0].id,
  partId: "all",
  blanks: [],
  current: 0,
  answeredCount: 0,
  correctCount: 0
};
let showAnswersOn = false;

/* ---------------- この端末に前回の選択を記憶 ---------------- */
function load(key) { try { return localStorage.getItem(key) || ""; } catch (e) { return ""; } }
function save(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }

/* ---------------- 最初の画面 ---------------- */
function setSelected(container, btn) {
  container.querySelectorAll("button").forEach((b) => b.classList.toggle("selected", b === btn));
}

function renderHome() {
  $("#progress").textContent = "";
  $("#practice").classList.add("hidden");
  $("#setup").classList.remove("hidden");

  // 解答形式
  const modeBox = $("#modeChoices");
  modeBox.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("selected", b.dataset.mode === state.mode);
    b.onclick = () => { state.mode = b.dataset.mode; setSelected(modeBox, b); };
  });

  // Lesson
  const lessonBox = $("#lessonChoices");
  lessonBox.innerHTML = LESSONS.map((L) =>
    `<button class="chunk${L.id === state.lessonId ? " selected" : ""}" data-id="${L.id}">Lesson ${L.id}</button>`
  ).join("");
  lessonBox.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    state.lessonId = Number(b.dataset.id);
    state.partId = "all";
    setSelected(lessonBox, b);
    renderParts();
  }));
  renderParts();
  window.scrollTo(0, 0);
}

function renderParts() {
  const L = LESSONS.find((l) => l.id === state.lessonId);
  const partBox = $("#partChoices");
  const valid = state.partId === "all" || L.parts.some((p) => p.id === state.partId);
  if (!valid) state.partId = "all";

  partBox.innerHTML =
    L.parts.map((p) => `<button class="chunk${state.partId === p.id ? " selected" : ""}" data-id="${p.id}">Part ${p.id}</button>`).join("") +
    `<button class="chunk${state.partId === "all" ? " selected" : ""}" data-id="all">全Part</button>`;

  const info = () => {
    const parts = state.partId === "all" ? L.parts : L.parts.filter((p) => p.id === state.partId);
    const n = parts.reduce((s, p) => s + countBlanks(p), 0);
    $("#rangeInfo").textContent =
      `Lesson ${L.id}　${L.title.replace(/^LESSON \d+\s*/, "")}　${state.partId === "all" ? "全Part" : "Part " + state.partId}（全${n}問）`;
  };
  partBox.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    state.partId = b.dataset.id === "all" ? "all" : Number(b.dataset.id);
    setSelected(partBox, b);
    info();
  }));
  info();
}

$("#startBtn").addEventListener("click", () => {
  save("mode", state.mode);
  save("lesson", state.lessonId);
  save("part", state.partId);
  startPractice();
});
$("#backBtn").addEventListener("click", renderHome);

/* ---------------- 練習画面 ---------------- */
function startPractice() {
  const L = LESSONS.find((l) => l.id === state.lessonId);
  const parts = state.partId === "all" ? L.parts : L.parts.filter((p) => p.id === state.partId);

  state.blanks = [];
  state.current = 0;
  state.answeredCount = 0;
  state.correctCount = 0;
  showAnswersOn = false;

  const passage = $("#passage");
  passage.innerHTML = "";

  parts.forEach((part) => {
    passage.insertAdjacentHTML("beforeend",
      `<p class="part-head">Part ${part.id}</p><p class="part-lead">${esc(part.lead)}</p>`);
    part.paragraphs.forEach((para) => {
      if (typeof para === "object" && para.speaker) {
        passage.insertAdjacentHTML("beforeend", `<p class="speaker">${esc(para.speaker)}</p>`);
        return;
      }
      if (typeof para === "object" && para.note) {
        passage.insertAdjacentHTML("beforeend", `<p class="note">${esc(para.note)}</p>`);
        return;
      }
      const p = document.createElement("p");
      parseParagraph(para).forEach((tok) => {
        if (tok.type === "text") {
          p.appendChild(document.createTextNode(tok.text));
        } else {
          const idx = state.blanks.length;
          const el = buildBlank(tok, idx);
          p.appendChild(el);
          state.blanks.push({ ...tok, el, status: null });
        }
      });
      passage.appendChild(p);
    });
  });

  $("#practiceTitle").textContent =
    `${L.title.replace(/\s+/, " ")}　${state.partId === "all" ? "全Part" : "Part " + state.partId}`;
  $("#instruction").textContent = INSTRUCTION + (state.mode === "select" ? "（選択）" : "（記述）");

  $("#result").classList.add("hidden");
  $("#writeControls").classList.toggle("hidden", state.mode !== "write");
  $("#selectPanel").classList.toggle("hidden", state.mode !== "select");
  $("#showAnsBtn").textContent = "答えを見る";
  $("#checkBtn").disabled = false;

  $("#setup").classList.add("hidden");
  $("#practice").classList.remove("hidden");
  window.scrollTo(0, 0);

  if (state.mode === "select") {
    goToQuestion(0);
  } else {
    updateProgress();
    const first = state.blanks[0] && state.blanks[0].el.querySelector("input");
    if (first) first.focus({ preventScroll: true });
  }
}

function buildBlank(tok, idx) {
  const wrap = document.createElement("span");
  wrap.className = "blank";
  const widthCh = Math.max(6, Math.ceil(tok.answer.length * 1.1) + 3, Math.ceil(tok.hint.length * 1.4));
  wrap.innerHTML = `<span class="hint"><span class="num">${idx + 1}</span>${esc(tok.hint)}</span>`;

  if (state.mode === "write") {
    const input = document.createElement("input");
    input.type = "text";
    input.autocomplete = "off";
    input.autocapitalize = "off";
    input.spellcheck = false;
    input.style.width = widthCh + "ch";
    input.setAttribute("aria-label", `${idx + 1}番 ${tok.hint}`);
    input.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      const next = state.blanks.slice(idx + 1).find((b) => b.status !== "correct");
      if (next) next.el.querySelector("input").focus();
      else $("#checkBtn").focus();
    });
    input.addEventListener("input", () => {
      const b = state.blanks[idx];
      if (b.status === "wrong") {
        b.status = null;
        wrap.classList.remove("wrong");
        const a = wrap.querySelector(".answer");
        if (a) a.remove();
      }
      updateProgress();
    });
    wrap.appendChild(input);
  } else {
    const slot = document.createElement("span");
    slot.className = "slot";
    slot.style.minWidth = widthCh + "ch";
    slot.innerHTML = "&nbsp;";
    slot.addEventListener("click", () => {
      if (state.blanks[idx].status === null) goToQuestion(idx);
    });
    wrap.appendChild(slot);
  }
  return wrap;
}

function updateProgress() {
  const total = state.blanks.length;
  if (state.mode === "write") {
    const filled = state.blanks.filter((b) => b.el.querySelector("input").value.trim()).length;
    $("#progress").textContent = `入力 ${filled} / ${total}`;
  } else {
    $("#progress").textContent = `${Math.min(state.answeredCount + 1, total)} / ${total}`;
  }
}

/* ---------------- 記述モード ---------------- */
$("#checkBtn").addEventListener("click", () => {
  if (showAnswersOn) $("#showAnsBtn").click();   // 答え表示中なら元に戻してから採点
  let correct = 0;
  state.blanks.forEach((b) => {
    const input = b.el.querySelector("input");
    const ok = norm(input.value) === norm(b.answer);
    b.status = ok ? "correct" : "wrong";
    b.el.classList.toggle("correct", ok);
    b.el.classList.toggle("wrong", !ok);
    const old = b.el.querySelector(".answer");
    if (old) old.remove();
    if (ok) { correct++; input.readOnly = true; }
    else b.el.insertAdjacentHTML("beforeend", `<span class="answer">${esc(b.answer)}</span>`);
  });
  showResult(correct, state.blanks.length, state.blanks.filter((b) => b.status === "wrong"));
});

function retryWrongWrite() {
  let first = null;
  state.blanks.forEach((b) => {
    if (b.status !== "wrong") return;
    b.status = null;
    b.el.classList.remove("wrong");
    const a = b.el.querySelector(".answer");
    if (a) a.remove();
    const input = b.el.querySelector("input");
    input.value = "";
    if (!first) first = input;
  });
  $("#result").classList.add("hidden");
  updateProgress();
  if (first) first.focus();
}

$("#showAnsBtn").addEventListener("click", () => {
  showAnswersOn = !showAnswersOn;
  $("#showAnsBtn").textContent = showAnswersOn ? "答えを隠す" : "答えを見る";
  $("#checkBtn").disabled = showAnswersOn;
  state.blanks.forEach((b) => {
    const input = b.el.querySelector("input");
    if (showAnswersOn) {
      input.dataset.saved = input.value;
      input.value = b.answer;
      input.readOnly = true;
    } else {
      input.value = input.dataset.saved || "";
      input.readOnly = b.status === "correct";
    }
  });
});

/* ---------------- 選択モード ---------------- */
function makeOptions(blank) {
  // 同じLessonの答えから誤答の候補を作る（語数が同じものを優先）
  const L = LESSONS.find((l) => l.id === state.lessonId);
  const pool = [];
  L.parts.forEach((p) => p.paragraphs.forEach((para) => {
    if (typeof para !== "string") return;
    parseParagraph(para).forEach((t) => { if (t.type === "blank") pool.push(t.answer); });
  }));
  const seen = new Set([norm(blank.answer)]);
  const uniq = [];
  pool.forEach((a) => { if (!seen.has(norm(a))) { seen.add(norm(a)); uniq.push(a); } });

  const n = wordCount(blank.answer);
  const same = shuffle(uniq.filter((a) => wordCount(a) === n));
  const near = shuffle(uniq.filter((a) => Math.abs(wordCount(a) - n) === 1));
  const rest = shuffle(uniq.filter((a) => Math.abs(wordCount(a) - n) > 1));
  const distractors = [...same, ...near, ...rest].slice(0, 3);

  // 文頭の空所なら選択肢も大文字始まりにそろえる
  const isCap = /^[A-Z]/.test(blank.answer);
  const fit = (s) => isCap ? s.charAt(0).toUpperCase() + s.slice(1) : s.charAt(0).toLowerCase() + s.slice(1);
  return shuffle([blank.answer, ...distractors.map(fit)]);
}

function goToQuestion(idx) {
  state.blanks.forEach((b) => b.el.classList.remove("active"));
  if (idx < 0 || idx >= state.blanks.length) return;
  state.current = idx;
  const b = state.blanks[idx];
  b.el.classList.add("active");
  b.el.scrollIntoView({ behavior: "smooth", block: "center" });

  $("#selectHint").innerHTML = `${idx + 1}番（${esc(b.hint)}）に入る語句を選びなさい。`;
  const fb = $("#selectFeedback");
  fb.textContent = "";
  fb.className = "mark";

  const box = $("#selectOptions");
  box.innerHTML = "";
  makeOptions(b).forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "chunk";
    btn.textContent = opt;
    btn.addEventListener("click", () => answerSelect(opt, btn));
    box.appendChild(btn);
  });
  updateProgress();
}

function answerSelect(choice, btn) {
  const b = state.blanks[state.current];
  if (b.status !== null) return;
  const ok = norm(choice) === norm(b.answer);
  b.status = ok ? "correct" : "wrong";
  state.answeredCount++;
  if (ok) state.correctCount++;

  const slot = b.el.querySelector(".slot");
  slot.textContent = ok ? b.answer : choice;
  b.el.classList.remove("active");
  b.el.classList.add(ok ? "correct" : "wrong");
  if (!ok) b.el.insertAdjacentHTML("beforeend", `<span class="answer">${esc(b.answer)}</span>`);

  document.querySelectorAll("#selectOptions button").forEach((x) => {
    x.disabled = true;
    if (norm(x.textContent) === norm(b.answer)) x.classList.add("ok");
  });
  if (!ok) btn.classList.add("ng");

  const fb = $("#selectFeedback");
  fb.textContent = ok ? "○ 正解" : `× 不正解（正解：${b.answer}）`;
  fb.className = "mark " + (ok ? "ok" : "ng");

  setTimeout(() => {
    const next = findNextUnanswered(state.current);
    if (next === -1) finishSelect();
    else goToQuestion(next);
  }, ok ? 700 : 1600);
}

function findNextUnanswered(from) {
  const n = state.blanks.length;
  for (let k = 1; k <= n; k++) {
    const i = (from + k) % n;
    if (state.blanks[i].status === null) return i;
  }
  return -1;
}

function finishSelect() {
  $("#selectPanel").classList.add("hidden");
  $("#progress").textContent = "";
  showResult(state.correctCount, state.blanks.length, state.blanks.filter((b) => b.status === "wrong"));
}

function retryWrongSelect() {
  state.blanks.forEach((b) => {
    if (b.status !== "wrong") return;
    b.status = null;
    b.el.classList.remove("wrong");
    b.el.querySelector(".slot").innerHTML = "&nbsp;";
    const a = b.el.querySelector(".answer");
    if (a) a.remove();
    state.answeredCount--;
  });
  $("#result").classList.add("hidden");
  $("#selectPanel").classList.remove("hidden");
  goToQuestion(state.blanks.findIndex((b) => b.status === null));
}

/* ---------------- 結果 ---------------- */
function showResult(correct, total, wrongList) {
  let html = `<p class="result">${correct} / ${total} 問正解</p>`;
  if (wrongList.length) {
    html += `<ol class="miss-list">` + wrongList.map((b) =>
      `<li>${state.blanks.indexOf(b) + 1}番（${esc(b.hint)}）→ <b>${esc(b.answer)}</b></li>`
    ).join("") + `</ol>`;
  }
  html += `<div class="actions">`;
  if (wrongList.length) html += `<button class="primary" id="rRetry">間違えた問題（${wrongList.length}問）</button>`;
  html += `<button id="rAgain">最初からもう一度</button>`;
  html += `<button id="rHome">最初の画面にもどる</button></div>`;

  const r = $("#result");
  r.innerHTML = html;
  r.classList.remove("hidden");
  r.scrollIntoView({ behavior: "smooth", block: "start" });

  const retry = $("#rRetry");
  if (retry) retry.addEventListener("click", state.mode === "write" ? retryWrongWrite : retryWrongSelect);
  $("#rAgain").addEventListener("click", startPractice);
  $("#rHome").addEventListener("click", renderHome);
}

/* ---------------- 起動（前回の選択を復元） ---------------- */
(function init() {
  $("#title").textContent = APP_TITLE;
  document.title = APP_TITLE;
  const m = load("mode");
  if (m === "write" || m === "select") state.mode = m;
  const l = Number(load("lesson"));
  if (LESSONS.some((L) => L.id === l)) state.lessonId = l;
  const p = load("part");
  state.partId = p === "" || p === "all" ? "all" : Number(p);
  renderHome();
})();
