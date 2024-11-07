


  // Reduz o volume inicial do vídeo para 50%
  document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("c2v1");
    video.volume = 0.1; // Define o volume inicial para 50%

    // Exibe o botão de play quando o vídeo não está em reprodução
    video.addEventListener("pause", () => {
        playButton.style.display = "block"; // Mostra o botão de play
    });

    video.addEventListener("play", () => {
        playButton.style.display = "none"; // Oculta o botão de play
    });

    // Adiciona um evento de clique para iniciar o vídeo
    playButton.addEventListener("click", () => {
        video.play(); // Inicia o vídeo
    });
    
  });

  
