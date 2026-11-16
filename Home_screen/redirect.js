function gotoPage(page) {
    const folderTitle = page.charAt(0).toUpperCase() + page.slice(1);
    window.location.href = `../Apps/${folderTitle}/${page}.html`;
}