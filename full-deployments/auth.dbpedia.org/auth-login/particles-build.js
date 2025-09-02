(function waitForBody() {
  if (document.body) {
    if (!document.getElementById('particles-js')) {
      const div = document.createElement('div');
      div.id = 'particles-js';
      div.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
      `;
      document.body.appendChild(div);
    }

    const initParticles = () => {
      if (window.particlesJS) {
        particlesJS("particles-js", {
          particles: {
            number: { value: 60 },
            color: { value: "#edc338" },
            shape: { type: "circle" },
            opacity: { value: 0.8 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              out_mode: "out"
            }
          }
        });
      } else {
        setTimeout(initParticles, 100);
      }
    };

    initParticles();
  } else {
    setTimeout(waitForBody, 100);
  }
})();

(function addDbpediaInfoCard() {
  function tryInsert() {
    var loginCard = document.querySelector('.login-pf-page .card-pf, #kc-content .card-pf, .card-pf');
    if (!document.body || !loginCard) {
      return setTimeout(tryInsert, 100);
    }
    if (document.getElementById('dbpedia-info-card')) return; 
	  
    var card = document.createElement('div');
    card.id = 'dbpedia-info-card';
    card.className = 'card-pf';

    var body = document.createElement('div');
    body.className = 'card-pf-body';

    var title = document.createElement('h2');
    title.className = 'card-pf-title';
    title.textContent = 'A DBpedia Account gives you access to:';

    var list = document.createElement('ul');
    list.className = 'list-login';

    function liEntry(label, textOrLinkText, href) {
      var li = document.createElement('li');
      var strong = document.createElement('strong');
      strong.textContent = label + ' - ';
      li.appendChild(strong);

      if (href) {
        var a = document.createElement('a');
        a.href = href;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = textOrLinkText;
        li.appendChild(a);
      } else {
        var span = document.createElement('span');
        span.textContent = textOrLinkText;
        li.appendChild(span);
      }
      return li;
    }

    list.innerHTML = '';
    list.appendChild(liEntry('DBpedia Databus', 'databus.dbpedia.org', 'https://databus.dbpedia.org/'));
    list.appendChild(liEntry('Databus Vaults', 'vaults', 'https://dbpedia.org/page/Vault'));
    list.appendChild(liEntry('DBpedia Forum', 'forum.dbpedia.org', 'https://forum.dbpedia.org/'));

    body.appendChild(title);
    body.appendChild(list);
    card.appendChild(body);

    loginCard.parentNode.insertBefore(card, loginCard);

    card.style.marginBottom = '16px';
  }
  tryInsert();
})();
