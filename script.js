/**
 * タブ切り替え関数
 * クリックされたタブに対応するコンテンツを表示し、他のタブとコンテンツを非表示にする
 * @param {string} tabId - 表示したいセクションのid属性値（例: 'about', 'github'）
 */
function openTab(tabId) {

    // ===== 1. すべてのコンテンツを非表示にする =====
    // 'tab-content' クラスを持つすべての <section> 要素を取得
    const contents = document.querySelectorAll('.tab-content');
    // 各コンテンツから 'active' クラスを削除 → CSSで display: none になり非表示になる
    contents.forEach(content => content.classList.remove('active'));

    // ===== 2. すべてのタブボタンの選択状態を解除する =====
    // 'card-tab' クラスを持つすべての <button> 要素を取得
    const tabs = document.querySelectorAll('.card-tab');
    // 各タブから 'active' クラスを削除 → CSSでアクセントカラーの背景が外れる
    tabs.forEach(tab => tab.classList.remove('active'));

    // ===== 3. クリックされたタブに対応するコンテンツを表示する =====
    // tabId（例: 'about'）と一致する id を持つ <section> 要素を取得
    const target = document.getElementById(tabId);
    // 要素が存在する場合のみ 'active' クラスを追加 → CSSで display: block になり表示される
    if (target) {
        target.classList.add('active');
    }

    // ===== 4. クリックされたタブボタンを選択状態にする =====
    // window.event.currentTarget でクリックイベントが発生したボタン要素を取得
    // 'active' クラスを追加 → CSSでアクセントカラーの背景が適用される
    window.event.currentTarget.classList.add('active');
}