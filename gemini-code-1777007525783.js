// 模擬從 CSV 載入的精選資料
const sampleData = [
    { name: "柯建銘", party: "民主進步黨", total: 51641147, corporate: 26915133, votes: 90642, region: "新竹市" },
    { name: "邱志偉", party: "民主進步黨", total: 38603507, corporate: 21244000, votes: 110819, region: "高雄市" },
    { name: "丁守中", party: "中國國民黨", total: 49603735, corporate: 19499800, votes: 82649, region: "臺北市" }
];

function showLanding() {
    document.getElementById('landing-page').classList.remove('hidden');
    document.getElementById('results-page').classList.add('hidden');
}

function showResults() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('results-page').classList.remove('hidden');
    renderResults(sampleData);
}

function quickSearch(name) {
    document.getElementById('main-search').value = name;
    showResults();
}

document.getElementById('search-btn').addEventListener('click', showResults);

function renderResults(data) {
    const list = document.getElementById('results-list');
    const summary = document.getElementById('quick-summary');
    
    // 生成快照摘要
    summary.innerHTML = `
        <div>總檢索人次：${data.length} 位</div>
        <div>平均總收入：$${Math.round(data.reduce((a, b) => a + b.total, 0) / data.length).toLocaleString()}</div>
    `;

    // 生成列表
    list.innerHTML = data.map(item => `
        <div class="result-item">
            <div class="candidate-info">
                <span class="party-tag">${item.party}</span>
                <h4>${item.name}</h4>
                <p>${item.region}</p>
            </div>
            <div class="candidate-data">
                <div style="text-align: right">
                    <small>總收入</small>
                    <div style="color: var(--dark-gold); font-weight:bold; font-size: 1.2rem;">
                        $${item.total.toLocaleString()}
                    </div>
                </div>
            </div>
            <div class="candidate-more">
                <button style="background: none; border: 1px solid var(--primary-gold); cursor: pointer;">查看詳情</button>
            </div>
        </div>
    `).join('');
}