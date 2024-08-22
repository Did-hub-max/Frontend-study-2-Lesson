const loadHTML = (url, selector) => {
    fetch(url)
      .then(response => response.text())
      .then(html => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(element => {
              element.innerHTML = html;
          });
      });
  }
  loadHTML('header.html', '.header');
  loadHTML('footer.html', '.footer');
  loadHTML('banner.html', '.banner');