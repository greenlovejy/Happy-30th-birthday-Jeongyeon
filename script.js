document.querySelectorAll('.title .line').forEach(function (line) {
  var text = line.textContent;
  line.textContent = '';
  line.setAttribute('aria-hidden', 'true');
  Array.from(text).forEach(function (c) {
    var s = document.createElement('span');
    s.className = 'ch';
    s.textContent = c;
    line.appendChild(s);
  });
});


(function () {
  var links = Array.from(document.querySelectorAll('.nav a'));
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (l) { l.removeAttribute('aria-current'); });
      var match = links.find(function (a) { return a.getAttribute('href') === '#' + e.target.id; });
      if (match) match.setAttribute('aria-current', 'location');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('main section').forEach(function (s) { io.observe(s); });
})();