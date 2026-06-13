/* ===== script.js (改善版) ===== */
let currentLang = "jp"; // 初期表示を日本語に固定
let activeWorkKey = null; // 現在ギャラリーで開いている作品のkeyを保持

// ===== 言語データ（About / Career） =====
const langData = {
  jp: {
    about: "福山岳陽<br>東京都市大学 建築都市デザイン学部 建築学科。",
    career: [
      { year: "2006", text: "神奈川県相模原市に生まれる。" },
      { year: "2024", text: "神奈川県立麻溝台高等学校を卒業。" },
      { year: "2024", text: "東京都市大学に入学。" }
    ]
  },
  en: {
    about: "I'm Gakuyo Fukuyama.<br>I'm a student in the Department of Architecture at the Faculty of Architecture and Urban Design, Tokyo City University.",
    career: [
      { year: "2006", text: "Born in Sagamihara, Kanagawa, Japan." },
      { year: "2024", text: "Graduated from Asamizodai High School, Kanagawa." },
      { year: "2024", text: "Entered Tokyo City University." }
    ]
  }
};

// ===== My Works データ =====
const worksData = [
  {
    key: "year1",
    year: { jp: "2年 前期", en: "2nd Year, 1st Semester" },
    title: {
      jp: "コーヒーショップ兼住宅の設計『バタフライ屋根の家』",
      en: "Coffee Shop + Residence Design 'Butterfly Roof House'"
    },
    desc: {
      jp: "スペシャルティコーヒーを通して世界を覗き見る拠点をつくる。そんな拠点が店を訪れる人々やオーナーである住人にとって特別な体験ができるような建物・空間ではなくてはならない。隣接する等々力渓谷、敷地の森を介し人々が豊かになれる空間の構築を試みた。幅のある景色を堪能するため、矩形の敷地に対し建物は矩形のヴォリュームで解いた。自然光を柔らかに取り入れるためのハイサイドライトと敷地の森への視界の誘導をする屋根の組み合わせによりバタフライ屋根となった。店舗である二階部分を無柱空間にし特別な空間を実現するための特殊な架構の屋根となった。",
      en: "Creating a hub to glimpse the world through specialty coffee. The building and space must provide a special experience for visitors and the owner-residents. I tried to construct a space that enriches people through the adjacent Todoroki Valley and the forest on site. To enjoy the wide scenery, the building was designed in a rectangular volume on a rectangular site. The combination of high-side lights and the roof guiding the view to the forest became a butterfly roof. The second-floor store was made column-free to create a special space with a unique roof structure."
    },
    images: [
      { src: "images/DSC00003 (3).JPG", title: "" },
      { src: "images/1F平面.jpg", title: "1F Plan" },
      { src: "images/2F平面.pdf.jpg", title: "2F Plan" },
      { src: "images/断面１.jpg", title: "Longitudinal Section" },
      { src: "images/断面２.jpg", title: "Cross Section" },
      { src: "images/断面詳細.jpg", title: "Section Detail" },
      { src: "images/軸組みアイソメ.jpg", title: "Structural Isometric View" },
    ]
  },
  {
    key: "year2",
    year: { jp: "2年 後期", en: "2nd Year, 2nd Semester" },
    title: { 
      jp: "集合住宅設計 『DAIKANYAMA Garden House』",
      en: "Apartment Complex 'DAIKANYAMA Garden House'" 
     },
    desc: { 
      jp: "私の家には庭がある。それは特別なものではなく、かつて住宅に当たり前に存在していた場所だった。しかし都市の過密化と住宅の効率化により、庭は都市から姿を消しつつある。庭は単なる余白ではない。視線が交わり、気配が伝わり、発的な会話が生まれる場所である。現代の集合住宅では、隣人の顔すら知らないまま生活が完結する。私はそこに疑問を抱いた。本計画では、占有部でも共有部でもない「庭」を設ける事で、住民同士が緩やかにつながる集合住宅を提案する。", 
      en: "There is a garden in my house. It is not a special place, but rather a space that was once taken for granted in residential architecture. However, due to urban densification and the optimization of housing efficiency, gardens are vanishing from the urban landscape.A garden is not merely a void. It is a space where lines of sight intersect, signs of life are shared, and spontaneous communication occurs. In contemporary multi-family housing, life is fully contained within individual units, leaving residents anonymous to one another. Questioning this status quo, this project proposes a collective housing design that fosters loose connections among residents by introducing the 'garden'—a space that functions as neither private nor common area, but something in between." 
    },

    award: {
      jp: "堀場弘賞",
      en: "The Hiroshi Horiba Award"
    },

    images: [
      { src: "images/パース.jpg", title: "" },
      { src: "images/1F Plan.jpg", title: "1F Plan" },
      { src: "images/2F Plan.jpg", title: "2F Plan" },
      { src: "images/3F Plan.jpg", title: "3F Plan" },
      { src: "images/4F Plan.jpg", title: "4F Plan" },
      { src: "images/5F Plan.jpg", title: "5F Plan" },
      { src: "images/断面＋詳細.jpg", title: "Longitudinal Section" },
      { src: "images/アイソメ.jpg", title: "Structural Isometric View" },
    ]
  },
  {
    key: "year3",
    year: { jp: "3年 前期 第一課題", en: "3rd Year, 1st Semester, Project 1" },
    title: { 
      jp: "小さな公共空間 『立チ退キ、ノチ、待チ合ワセ。』", 
      en: "Micro-Public Space 'Displacement, Days after, Destination'" },
    desc: { jp: "道路拡張によりいずれ消えゆく敷地に、あえて期限付きの建築を建て、工事による街の変化や記憶を住民で共有するプロジェクトの提案。道路拡張は何かを失うことで成立する都市の営みである。その失われる痛みを無視する訳にはいかない。都市計画への小さな抵抗を試みた。道路完成時には建物の一部をバス停の待合室へと解体・再構築し、失われる痛みを共有した記憶として未来の公共空間へ繋ぐ。", 
            en: "A temporary architectural intervention on a site destined to disappear due to road expansion. By deliberately constructing a time-limited building here, this project aims to share the memories and the process of urban transformation with the local community. Road expansion is an urban process that inevitably demands loss. We cannot afford to ignore the pain of what is lost; thus, this project stands as a subtle resistance against conventional urban planning. Upon the road's completion, a portion of the building will be dismantled and reconstructed into a bus shelter. In doing so, the shared pain of loss will be woven into the future public space as a collective memory." },

    award: {
      jp: "藤田雄介賞",
      en: "The Yusuke Fujita Award"
    },

    images: [
      { src: "images/模型写真.jpg", title: "" },
      { src: "images/IMG_7733.jpg", title: "" },
      { src: "images/mp 1F Plan.jpg", title: "1F Plan" },
      { src: "images/mp 2F Plan.jpg", title: "2F Plan" },
      { src: "images/mp 長手立面.jpg", title: "Long Elevation" },
      { src: "images/mp 長手断面.jpg", title: "Longitudinal Section" },
      { src: "images/mp 短手断面.jpg", title: "Cross section" },

    ]
  }
];

/* ===== ユーティリティ ===== */
function $id(id) { return document.getElementById(id); }

/* ===== 開閉アニメーション（ホバーアウトでの閉じ処理を追加） ===== */
function setupToggle(mainId, hiddenId) {
  const main = $id(mainId);
  const hidden = $id(hiddenId);
  if (!main || !hidden) return;

  // 2. クリックされたら、開いていれば閉じ、閉じていれば開く（トグル）
  main.addEventListener("click", (e) => {
    // ※クリック時にmouseenterイベントも同時に発生して即座に開いてしまうのを防ぐ対策
    hidden.classList.toggle("show");
  });
}

/* ===== Works リストを描画 ===== */
function renderWorksList() {
  const worksList = $id("worksList");
  if (!worksList) return;
  worksList.innerHTML = "";

worksData.forEach(work => {
    const li = document.createElement("li");
    li.dataset.year = work.key;

    // 💡 受賞歴がある場合だけ、HTMLのパーツを作成する処理を挟みます
    let awardHtml = "";
    if (work.award && work.award[currentLang]) {
      awardHtml = `<span class="work-award"> ${work.award[currentLang]}</span>`;
    }

    li.innerHTML = `
      <strong>${work.year[currentLang]}</strong>
      <span class="title">${work.title[currentLang]}</span>
      ${awardHtml} 
      <span class="work-desc">${work.desc[currentLang]}</span>
    `;
    worksList.appendChild(li);
  });
}

/* ===== Career リストを動的に描画（HTML依存度を下げる） ===== */
function renderCareerList() {
  const careerHidden = $id("careerHidden");
  if (!careerHidden) return;

  const careerList = langData[currentLang].career;
  let html = '<div class="career-container">';

  careerList.forEach(item => {
    html += `
      <div class="career-item">
        <h3 class="career-year">${item.year}</h3>
        <p class="career-text">${item.text}</p>
      </div>
    `;
  });

  html += '</div>';
  careerHidden.innerHTML = html;
}
/* ===== ギャラリーのコンテンツ更新処理（動的切り替え対応） ===== */
function updateGalleryContent(work) {
  const galleryTitle = $id("galleryTitle");
  const galleryImages = $id("galleryImages");
  if (!galleryTitle || !galleryImages) return;

  galleryTitle.textContent = work.title[currentLang] || "";
  galleryImages.innerHTML = "";

  work.images.forEach((imgData, index) => {
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.title || "";
    img.title = imgData.title || "";

    if (index === 0) {
      img.classList.add("main-image"); // 最初の画像（パースや模型写真）に特別クラス
    }
    galleryImages.appendChild(img);
  });
}

/* ===== ギャラリー表示処理 ===== */
function setupWorksClickHandler() {
  const worksList = $id("worksList");
  const galleryScene = $id("galleryScene");
  const worksHidden = $id("worksHidden");

  if (!worksList || !galleryScene) return;

  worksList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const work = worksData.find(w => w.key === li.dataset.year);
    if (!work) return;

    activeWorkKey = work.key; // 現在アクティブな作品を記憶
    updateGalleryContent(work);

    galleryScene.style.display = "flex";
    document.body.style.overflow = "hidden";
    if (worksHidden) worksHidden.classList.remove("show");
  });
}

/* ===== ギャラリー閉じる、ビューア関係 ===== */
function setupGalleryCloseAndViewer() {
  const closeGallery = $id("closeGallery");
  const galleryScene = $id("galleryScene");
  const galleryImages = $id("galleryImages");
  const imageViewer = $id("imageViewer");
  const viewerImg = $id("viewerImg");
  const viewerTitle = $id("viewerTitle");
  const closeViewer = $id("closeViewer");

  if (closeGallery && galleryScene) {
    closeGallery.addEventListener("click", () => {
      galleryScene.style.display = "none";
      galleryScene.classList.remove("show"); // クラスもリセット
      document.body.style.overflow = "auto";
      activeWorkKey = null; // アクティブな作品をリセット
    });
  }

  if (galleryImages && imageViewer && viewerImg && viewerTitle && closeViewer) {
    galleryImages.addEventListener("click", (e) => {
      if (e.target && e.target.tagName === "IMG") {
        viewerImg.src = e.target.src;
        viewerTitle.textContent = e.target.title || "";
        imageViewer.classList.add("show");
        galleryScene.classList.add("show");
      }
    });
    
    const hideViewer = () => imageViewer.classList.remove("show");
    closeViewer.addEventListener("click", hideViewer);
  
  }
}

/* ===== 言語切替処理 ===== */
function setLanguage(lang) {
  if (!langData || !langData[lang]) return;
  currentLang = lang;

  // About を切替
  const aboutHidden = $id("aboutHidden");
  if (aboutHidden) aboutHidden.innerHTML = `<p>${langData[lang].about}</p>`;

  // Career を動的描画
  renderCareerList();

  // Works リストを再描画
  renderWorksList();

  // もしギャラリーが開いていたら、その中身も現在の言語に更新する
  if (activeWorkKey) {
    const currentWork = worksData.find(w => w.key === activeWorkKey);
    if (currentWork) updateGalleryContent(currentWork);
  }

  // 💡 【ここを追加】選択されているボタンの見た目を切り替える
  const jpBtn = $id("jpBtn");
  const enBtn = $id("enBtn");
  
  if (jpBtn && enBtn) {
    if (lang === "jp") {
      jpBtn.classList.add("active");   // 日本語ボタンをアクティブに
      enBtn.classList.remove("active"); // 英語ボタンからアクティブを外す
    } else {
      enBtn.classList.add("active");   // 英語ボタンをアクティブに
      jpBtn.classList.remove("active"); // 日本語ボタンからアクティブを外す
    }
  }
}

/* ===== 初期化 ===== */
document.addEventListener("DOMContentLoaded", () => {
  setupToggle("worksMain", "worksHidden");
  setupToggle("aboutMain", "aboutHidden"); // About のトグルも想定
  setupToggle("careerMain", "careerHidden"); // Career のトグルも想定

  setupWorksClickHandler();
  setupGalleryCloseAndViewer();

  // 言語ボタンのイベントバインド
  const jpBtn = $id("jpBtn"), enBtn = $id("enBtn");
  if (jpBtn) jpBtn.addEventListener("click", () => setLanguage("jp"));
  if (enBtn) enBtn.addEventListener("click", () => setLanguage("en"));
  const yearEl = $id("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 最後に初期表示（日本語）
  setLanguage(currentLang);
});