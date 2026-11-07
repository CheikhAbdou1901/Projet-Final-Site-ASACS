/* ASACS — interactions principales
   Les contenus faciles à modifier (actualités et coordonnées) sont regroupés ici. */

// 1. CONFIGURATION : remplacez ces valeurs avant la mise en ligne.
const NUMERO_WHATSAPP = "221773866051"; // Format international, sans + ni espaces.
const ADRESSE_EMAIL = ""; // Exemple : contact@asacs.sn (facultatif)

// 2. ACTUALITÉS : ajoutez une nouvelle actualité en copiant un objet.
const actualites = [
  {
    titre: "ACTIVITÉS DE L'ASACS",
    date: "28 et 29 Décembre 2026",
    image: "assets/images/48H.jpg",
    resume: "ASACS organise des 48H d'activités éducative, culturelle, sanitaire, sociale et sportive.",
    contenu: "Les 48H de l’ASACS ont pour objectifs de promouvoir l’excellence scolaire, de valoriser le patrimoine culturel de Sagne, de faciliter l’accès aux soins et de sensibiliser les populations aux enjeux sanitaires. Elles visent également à renforcer la solidarité, la cohésion sociale et l’engagement citoyen, tout en encourageant la pratique sportive, la détection des talents locaux et le fair-play. À travers ces activités, l’ASACS entend mobiliser toutes les forces vives de la communauté autour d’un idéal commun : contribuer au développement de Sagne et au bien-être de ses populations."
  },
  {
    titre: "Consultation médicale gratuite et Don de medicaments par l'ASACS",
    date: "17 Sepembre 2025",
    image: "assets/images/Don de medicaments.jpeg",
    resume: "Organisation de consultations médicales gratuites et de dons de médicaments par l'ASACS.",
    contenu: "Dans le cadre de ses actions sanitaires et sociales, l’ASACS organise des consultations médicales gratuites et des dons de médicaments afin de faciliter l’accès aux soins, de renforcer la prévention et de contribuer à l’amélioration de la santé des populations de Sagne et des localités environnantes."
  },
  {
    titre: "Ensemble autour des projets de développement",
    date: "À compléter",
    image: "assets/images/Jeunes.jpeg",
    resume: "L'ASACS entend mobiliser les énergies locales autour de projets utiles à la communauté.",
    contenu: "L’ASACS œuvre à mobiliser les forces vives de Sagne autour de projets structurants visant à améliorer les conditions de vie des populations. Ces initiatives portent notamment sur l’éducation, la santé, la jeunesse, le sport, la culture et les infrastructures communautaires. Les projets et les priorités seront présentés et actualisés progressivement, au fur et à mesure de leur validation par les instances de l’association."
  }
];

// 3. MENU MOBILE : ouvrir ou fermer la navigation.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
  const menuEstOuvert = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", menuEstOuvert);
  menuToggle.setAttribute("aria-label", menuEstOuvert ? "Fermer le menu" : "Ouvrir le menu");
});

document.querySelectorAll(".nav-link").forEach(function (lien) {
  lien.addEventListener("click", function () {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  });
});

// 4. AFFICHER LES ACTUALITÉS DANS LA PAGE D'ACCUEIL.
const newsGrid = document.getElementById("newsGrid");

actualites.forEach(function (actualite, index) {
  const carte = document.createElement("article");
  carte.className = "news-card reveal";

  const image = document.createElement("div");
  image.className = "news-image";
  const img = document.createElement("img");
  img.src = actualite.image;
  img.alt = "";
  img.loading = "lazy";
  img.onerror = function () { image.style.background = "#14326d"; };
  image.appendChild(img);

  const contenu = document.createElement("div");
  contenu.className = "news-content";

  const date = document.createElement("span");
  date.className = "news-date";
  date.textContent = actualite.date;

  const titre = document.createElement("h3");
  titre.textContent = actualite.titre;

  const resume = document.createElement("p");
  resume.textContent = actualite.resume;

  const bouton = document.createElement("button");
  bouton.className = "news-read";
  bouton.type = "button";
  bouton.textContent = "Lire la suite →";
  bouton.addEventListener("click", function () {
    ouvrirModal({ titre: actualite.titre, meta: actualite.date, texte: actualite.contenu });
  });

  contenu.append(date, titre, resume, bouton);
  carte.append(image, contenu);
  newsGrid.appendChild(carte);
});

// 5. FENÊTRE MODALE : utilisée pour les actualités et les photos.
const modal = document.getElementById("contentModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBody = document.getElementById("modalBody");
const modalImage = document.getElementById("modalImage");

function ouvrirModal(donnees) {
  modalTitle.textContent = donnees.titre || "";
  modalMeta.textContent = donnees.meta || "";
  modalBody.textContent = donnees.texte || "";
  if (donnees.image) {
    modalImage.src = donnees.image;
    modalImage.alt = donnees.titre || "Image de la médiathèque";
    modalImage.hidden = false;
  } else {
    modalImage.hidden = true;
    modalImage.removeAttribute("src");
  }
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function fermerModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach(function (element) {
  element.addEventListener("click", fermerModal);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.hidden) fermerModal();
});

// 6. AGRANDIR LES PHOTOS DE LA MÉDIATHÈQUE.
document.querySelectorAll(".gallery-item").forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    const image = bouton.dataset.image;
    const legende = bouton.dataset.caption;
    ouvrirModal({ titre: legende, meta: "Médiathèque ASACS", image: image });
  });
});

// 7. FORMULAIRE DE CONTACT : prépare un message WhatsApp.
// Un site statique ne stocke pas les messages sur un serveur.
const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const donnees = new FormData(contactForm);
  const message = [
    "Message depuis le site de l'ASACS",
    "Nom : " + donnees.get("name"),
    "Téléphone : " + donnees.get("phone"),
    "E-mail : " + (donnees.get("email") || "Non renseigné"),
    "Objet : " + donnees.get("subject"),
    "Message : " + donnees.get("message")
  ].join("\n");

  if (NUMERO_WHATSAPP === "") {
    contactFeedback.textContent = "Avant la mise en ligne, remplacez le numéro d'exemple dans js/script.js par le numéro WhatsApp officiel de l'ASACS.";
    return;
  }

  const url = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener");
  contactFeedback.textContent = "Votre message est prêt dans WhatsApp. Envoyez-le pour finaliser la transmission.";
});

// 8. LIEN WHATSAPP SUR LA PAGE CONTACT.
const whatsappContact = document.getElementById("whatsappContact");
whatsappContact.addEventListener("click", function (event) {
  event.preventDefault();
  if (NUMERO_WHATSAPP === "") {
    alert("Configurez le numéro WhatsApp officiel dans js/script.js.");
    return;
  }
  window.open("https://wa.me/" + NUMERO_WHATSAPP, "_blank", "noopener");
});

// 9. COMMANDES DE LA BOUTIQUE PAR WHATSAPP.
document.querySelectorAll(".whatsapp-order").forEach(function (lien) {
  lien.addEventListener("click", function (event) {
    event.preventDefault();
    const produit = lien.dataset.product;
    if (NUMERO_WHATSAPP === "") {
      alert("Configurez le numéro WhatsApp officiel dans js/script.js.");
      return;
    }
    const texte = "Bonjour ASACS, je souhaite avoir des informations pour commander : " + produit + ".";
    window.open("https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texte), "_blank", "noopener");
  });
});

// 10. REMPLIR AUTOMATIQUEMENT L'OBJET DU FORMULAIRE DEPUIS LE BOUTON PARTENARIAT.
document.querySelectorAll("[data-contact-subject]").forEach(function (lien) {
  lien.addEventListener("click", function () {
    document.getElementById("contactSubject").value = lien.dataset.contactSubject;
  });
});

// 11. ANIMATIONS LÉGÈRES AU DÉFILEMENT, désactivées si l'utilisateur préfère moins d'animations.
const elementsAnimes = document.querySelectorAll(".feature-card, .project-card, .news-card, .document-item, .shop-card, .partner-placeholder");
elementsAnimes.forEach(function (element) { element.classList.add("reveal"); });

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observateur = new IntersectionObserver(function (entrees, observer) {
    entrees.forEach(function (entree) {
      if (entree.isIntersecting) {
        entree.target.classList.add("is-visible");
        observer.unobserve(entree.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(function (element) {
    observateur.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach(function (element) {
    element.classList.add("is-visible");
  });
}

// 12. METTRE À JOUR L'ANNÉE DU PIED DE PAGE.
document.getElementById("currentYear").textContent = new Date().getFullYear();

// 13. METTRE EN ÉVIDENCE LA RUBRIQUE ACTIVE DANS LA NAVIGATION.
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (entree) {
      if (entree.isIntersecting) {
        document.querySelectorAll(".nav-link").forEach(function (lien) {
          lien.classList.toggle("active", lien.getAttribute("href") === "#" + entree.target.id);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(function (section) { navObserver.observe(section); });
}
