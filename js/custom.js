var xpath = "/html/body/section/div/div/div[1]/div[1]/article/div[2]/h2";
var h2Elements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
for (let i = 0; i < h2Elements.snapshotLength; i++) {
    let h2Element = h2Elements.snapshotItem(i);
    var spanElement = document.createElement('span');
    spanElement.textContent = h2Element.textContent;
    spanElement.className = 'custom-h2';
    h2Element.innerHTML = '';
    h2Element.appendChild(spanElement);
}
var xpath = "/html/body/section/div/div/div[1]/div[1]/article/div[2]/h1";
var h2Elements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
for (let i = 0; i < h2Elements.snapshotLength; i++) {
    let h2Element = h2Elements.snapshotItem(i);
    var spanElement = document.createElement('span');
    spanElement.textContent = h2Element.textContent;
    spanElement.className = 'custom-h1';
    h2Element.innerHTML = '';
    h2Element.appendChild(spanElement);
}
//以上为美化h1h2
