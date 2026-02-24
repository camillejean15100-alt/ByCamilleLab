// Variable pour savoir si l'animation a déjà eu lieu
let animationFaite = false;

window.addEventListener('DOMContentLoaded', () => {
    lancerAnimationAccueil();
});

function lancerAnimationAccueil() {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');
    
    // Si on n'est pas sur l'accueil ou si déjà fait, on stoppe
    if (animationFaite || !bubble) return;

    setTimeout(() => {
        bubble.classList.add('visible');
    }, 100);

    setTimeout(() => {
        bubble.classList.remove('visible'); 
        setTimeout(() => {
            bubble.style.display = 'none';
            if(services) services.classList.add('active');
            animationFaite = true; // On verrouille pour la suite
        }, 600); 
    }, 1600);
}

/* Style de la section Projets */
#section-projets {
    padding-top: 50px;
    text-align: center;
}

.intro-projets {
    margin-bottom: 30px;
    position: relative;
    display: inline-block;
}

/* Ta coccinelle avec le bon nom de fichier */
.ladybug {
    width: 60px;
    position: absolute;
    left: -70px;
    top: -10px;
}

.quote-projets {
    font-family: 'Architects Daughter', cursive, sans-serif;
    color: #2a5a9a;
    font-size: 2rem;
    margin: 0;
}

/* La Grille */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    max-width: 1100px;
    margin: 40px auto;
    padding: 20px;
}

.project-card {
    background: white; /* Les rectangles blancs du design */
    aspect-ratio: 1.5;
    border-radius: 5px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    position: relative;
}

/* Utilisation de tes fichiers feuilles */
.leaf {
    position: absolute;
    width: 35px;
}
.leaf-1 { top: -15px; left: -10px; }
.leaf-2 { top: -15px; right: -10px; }/* Style de la section Projets */
#section-projets {
    padding-top: 50px;
    text-align: center;
}

.intro-projets {
    margin-bottom: 30px;
    position: relative;
    display: inline-block;
}

/* Ta coccinelle avec le bon nom de fichier */
.ladybug {
    width: 60px;
    position: absolute;
    left: -70px;
    top: -10px;
}

.quote-projets {
    font-family: 'Architects Daughter', cursive, sans-serif;
    color: #2a5a9a;
    font-size: 2rem;
    margin: 0;
}

/* La Grille */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    max-width: 1100px;
    margin: 40px auto;
    padding: 20px;
}

.project-card {
    background: white; /* Les rectangles blancs du design */
    aspect-ratio: 1.5;
    border-radius: 5px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    position: relative;
}

/* Utilisation de tes fichiers feuilles */
.leaf {
    position: absolute;
    width: 35px;
}
.leaf-1 { top: -15px; left: -10px; }
.leaf-2 { top: -15px; right: -10px; }

    // Gestion du trait vert
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    if (element) {
        element.classList.add('active');
    }
}
