function changerPage(pageId) {
    const sectionAccueil = document.getElementById('section-accueil');
    const sectionProjets = document.getElementById('section-projets');
    const liens = document.querySelectorAll('nav ul li a');

    // On retire la classe 'active' de tous les boutons du menu
    liens.forEach(lien => lien.classList.remove('active'));

    if (pageId === 'accueil') {
        sectionProjets.style.display = 'none';
        sectionAccueil.style.display = 'block';
        document.getElementById('link-acc').classList.add('active');
    } else if (pageId === 'projets') {
        sectionAccueil.style.display = 'none';
        sectionProjets.style.display = 'block';
        document.getElementById('link-proj').classList.add('active');
    }
}
