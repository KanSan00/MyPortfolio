function openTab(tabId) {
    // 1. すべてのコンテンツを非表示にする
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // 2. すべてのタブから active クラスを外す
    const tabs = document.querySelectorAll('.card-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // 3. IDが一致するセクションを表示する
    const target = document.getElementById(tabId);
    if (target) {
        target.classList.add('active');
    }

    // 4. クリックされたボタンを active にする
    // window.event を使って現在の要素を特定
    window.event.currentTarget.classList.add('active');
}