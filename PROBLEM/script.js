const body = document.getElementById('body-bg');

    function changeBackground(img) {
      const url = img.src;
      body.style.backgroundImage = `linear-gradient(to right, rgba(255, 255, 255, 0.29), rgba(255,255,255,0.4)), url('${url}')`;
      body.style.backgroundSize = 'cover';
      body.style.backgroundPosition = 'center';
      body.style.opacity = '1'
      body.style.transition = 'opacity 0.5s easy-in-out'
      body.style.zIndex = '-10'
    }

    function resetBackground() {
      body.style.backgroundImage = 'linear-gradient(to right,rgb(202, 202, 202), rgb(182, 182, 182))';
    }