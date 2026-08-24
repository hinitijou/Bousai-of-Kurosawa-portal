document.addEventListener('DOMContentLoaded', () => {
    // --- 1. 今週のイチオシ情報のセット ---
    document.getElementById('recommend-title').textContent = RECOMMEND_INFO.title;
    document.getElementById('recommend-summary').textContent = RECOMMEND_INFO.summary;
    
    document.getElementById('recommend-btn').addEventListener('click', () => {
        const target = CONTENTS_DATA.find(item => item.id === RECOMMEND_INFO.targetId);
        if (target) openModal(target);
    });

    // --- 2. 記事一覧の描画とフィルタリング ---
    const listContainer = document.getElementById('articles-list');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderArticles(category) {
        listContainer.innerHTML = '';
        const filtered = category === 'すべて' 
            ? CONTENTS_DATA 
            : CONTENTS_DATA.filter(item => item.category.startsWith(category));

        if (filtered.length === 0) {
            listContainer.innerHTML = '<p style="text-align:center; color:#718096; padding:12px;">該当するコンテンツがありません</p>';
            return;
        }

        filtered.forEach(item => {
            const div = document.createElement('div');
            div.className = 'article-item';
            div.innerHTML = `
                <h3>${item.title}</h3>
                <div class="article-meta">
                    <span>📂 ${item.category}</span> &nbsp;|&nbsp; 
                    <span>⏱️ ${item.time}分</span> &nbsp;|&nbsp; 
                    <span>🏛️ ${item.source}</span>
                </div>
            `;
            div.addEventListener('click', () => openModal(item));
            listContainer.appendChild(div);
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderArticles(e.target.getAttribute('data-category'));
        });
    });

    renderArticles('すべて');

    // --- 3. モーダル表示（詳細） ---
    const detailModal = document.getElementById('detail-modal');
    const modalClose = document.getElementById('modal-close');

    function openModal(item) {
        document.getElementById('modal-category').textContent = item.category;
        document.getElementById('modal-title').textContent = item.title;
        document.getElementById('modal-time-val').textContent = item.time;
        document.getElementById('modal-summary').textContent = item.summary;
        document.getElementById('modal-source-name').textContent = item.source;
        document.getElementById('modal-link').href = item.url;
        detailModal.style.display = 'flex';
    }

    modalClose.addEventListener('click', () => detailModal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === detailModal) detailModal.style.display = 'none';
    });

    // --- 4. クイックアクセス（下部フッター）とパスワード認証 ---
    const passwordModal = document.getElementById('password-modal');
    const pwClose = document.getElementById('pw-close');
    const pwQuestion = document.getElementById('pw-question');
    const pwInput = document.getElementById('pw-input');
    const pwSubmit = document.getElementById('pw-submit');
    const pwError = document.getElementById('pw-error');

    // 家族LINEボタン
    document.getElementById('qa-line').addEventListener('click', () => {
        pwQuestion.textContent = LINE_PASSWORD_CONFIG.question;
        pwInput.value = '';
        pwError.textContent = '';
        passwordModal.style.display = 'flex';
    });

    pwClose.addEventListener('click', () => passwordModal.style.display = 'none');

    pwSubmit.addEventListener('click', () => {
        const userAnswer = pwInput.value.trim();
        if (userAnswer === LINE_PASSWORD_CONFIG.answer) {
            passwordModal.style.display = 'none';
            window.location.href = LINE_PASSWORD_CONFIG.lineUrl;
        } else {
            pwError.textContent = '答えが違います。ひらがなで正しく入力してください。';
        }
    });

    // その他4つのリンクボタン（外部サイトへダイレクト遷移）
    document.getElementById('qa-jma').addEventListener('click', () => {
        window.open('https://www.jma.go.jp/jma/menu/menuflash.html', '_blank', 'noopener');
    });

    document.getElementById('qa-yokohama').addEventListener('click', () => {
        window.open('https://bousai.city.yokohama.lg.jp/', '_blank', 'noopener');
    });

    document.getElementById('qa-vacan').addEventListener('click', () => {
        window.open('https://vacan.com/', '_blank', 'noopener');
    });

    document.getElementById('qa-hazard').addEventListener('click', () => {
        window.open('https://disaportal.gsi.go.jp/', '_blank', 'noopener');
    });
});