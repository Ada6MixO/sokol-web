/**
 * TJ Sokol Malhostovice - Centrální konfigurace a sdílené komponenty
 * =================================================================
 * Zde na jednom místě spravujete kontakty a navigaci pro celý web.
 */

const SOKOL_CONFIG = {
    spolek: "TJ Sokol Malhostovice, z.s.",
    adresa: "Malhostovice 152, 666 03 Tišnov",
    ico: "41539885",
    datovaSchranka: "2pie7ph",
    ucet: "2302839564 / 2010",
    banka: "FIO banka",
    email: "info@sokol-malhostovice.cz",
    telefonHlavni: "+420 723 499 116",
    facebookUrl: "https://www.facebook.com/SokolMalhostovice/",

    // Konfigurace členských a oddílových příspěvků (doplňuje se automaticky do stránek)
    prispevky: {
        rok: "2026 / 2027",
        deti: "600 Kč / rok",
        dospeli: "1 000 Kč / rok",
        seniori: "500 Kč / rok",
        zapasnicek: "600 Kč / rok",
        jogaLekce: "110 Kč / hod",
        jogaPermanentka: "1 000 Kč (10 lekcí)",
        zdravotniCviceni: "110 Kč / hod",
        volejbal: "110 Kč / hod",
        tanecniKrouzek: "500 Kč / rok"
    },

    // Vedení jednoty
    vedeni: {
        predsedkyne: "Ing. Martina Odehnalová",
        predsedkyneTel: "+420 723 499 116",
        mistopredseda: "Pavel Leksa",
        mistopredsedaTel: "+420 732 820 337",
        hospodar: "Ing. František Odehnal",
        hospodarTel: "+420 724 558 282",
        pokladnik: "Alena Uherková",
        pokladnikTel: "+420 723 499 116",
        predsedaKontrolniKomise: "Ing. František Odehnal"
    }
};

window.SOKOL_CONFIG = SOKOL_CONFIG;

/**
 * Struktura hlavní navigace webu dle "pozn k webu.txt"
 */
const SOKOL_NAV_ITEMS = [
    { title: "Úvod", href: "index.html" },
    { title: "Kalendář & Rozvrh", href: "kalendar.html" },
    {
        title: "Oddíly & kroužky",
        href: "oddily.html",
        dropdown: [
            { title: "Zápasníček (děti)", href: "oddily.html#zapasnicek" },
            { title: "Jóga a relaxace", href: "oddily.html#joga" },
            { title: "Zdravotní cvičení pro ženy", href: "oddily.html#zdravotni-cviceni" },
            { title: "Volejbal pro všechny", href: "oddily.html#volejbal" },
            { title: "Taneční kroužek", href: "oddily.html#tanecni-krouzek" },
            { isDivider: true },
            { title: "PECKA volný čas (technika & kroužky)", href: "pecka.html", isHighlight: true }
        ]
    },
    {
        title: "Pronájmy prostor",
        href: "pronajmy.html",
        dropdown: [
            { title: "Velký sál tělocvičny", href: "pronajmy.html#sal" },
            { title: "Přísálí & kuchyně", href: "pronajmy.html#prisali" },
            { title: "Posilovna", href: "pronajmy.html#posilovna" },
            { isDivider: true },
            { title: "Spolková chata Zubří (Vysočina)", href: "pronajmy.html#zubri" }
        ]
    },
    {
        title: "Pro členy",
        href: "pro-cleny.html",
        dropdown: [
            { title: "Členské příspěvky & platby", href: "pro-cleny.html#prispevky" },
            { title: "Dokumenty & GDPR", href: "pro-cleny.html#dokumenty" },
            { title: "Valná hromada", href: "pro-cleny.html#valna-hromada" },
            { isDivider: true },
            { title: "O nás & historie jednoty", href: "o-nas.html" }
        ]
    },
    { title: "Kontakt", href: "kontakt.html" }
];

function getAktualniSoubor() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    return page === "" ? "index.html" : page;
}

// Horní informační lišta - elegantní, tmavá, čistá
function renderTopBar() {
    return `
    <div class="bg-slate-900 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div class="flex items-center flex-wrap gap-4 sm:gap-6">
                
                <span class="hidden md:inline-flex items-center gap-1.5 text-slate-300">
                    <svg class="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
                    ${SOKOL_CONFIG.adresa}
                </span>
                <a href="tel:${SOKOL_CONFIG.telefonHlavni.replace(/\s+/g, '')}" class="flex items-center gap-1.5 hover:text-white font-medium transition-colors">
                    <svg class="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                    ${SOKOL_CONFIG.telefonHlavni}
                </a>
            </div>
            <div class="flex items-center gap-4">
                <a href="${SOKOL_CONFIG.facebookUrl}" target="_blank" rel="noopener" class="hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-sky-400">
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                </a>
                <span class="text-slate-700 hidden sm:inline">|</span>
                <span class="text-slate-400 hidden sm:inline">IČO: ${SOKOL_CONFIG.ico}</span>
            </div>
        </div>
    </div>`;
}

// Hlavní navigace - POUZE SAMOTNÉ LOGO (žádný duplicitní text), klidná a čistá navigace
function renderHeader() {
    const curPage = getAktualniSoubor();

    let navHtml = '';
    let mobileNavHtml = '';

    SOKOL_NAV_ITEMS.forEach((item) => {
        const isActive = curPage === item.href || (item.dropdown && item.dropdown.some(d => d.href && d.href.startsWith(curPage)));
        const activeClass = isActive ? 'nav-active' : '';

        if (item.dropdown) {
            navHtml += `
            <div class="nav-dropdown-group">
                <a href="${item.href}" class="nav-link ${activeClass}">
                    <span>${item.title}</span>
                    <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 transition-transform duration-200 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                </a>
                <div class="nav-dropdown-panel">
                    <div class="nav-dropdown-content">
                        ${item.dropdown.map(sub => {
                if (sub.isDivider) return `<div class="nav-dropdown-divider"></div>`;
                return `
                            <a href="${sub.href}" class="nav-dropdown-item ${sub.isHighlight ? 'text-indigo-700 font-bold bg-indigo-50/50 hover:bg-indigo-50' : ''}">
                                <span>${sub.title}</span>
                            </a>`;
            }).join('')}
                    </div>
                </div>
            </div>`;

            mobileNavHtml += `
            <div class="border-b border-slate-100 py-2">
                <a href="${item.href}" class="block font-bold text-slate-900 text-base py-1">
                    ${item.title}
                </a>
                <div class="pl-3 mt-1 space-y-1">
                    ${item.dropdown.map(sub => {
                if (sub.isDivider) return ``;
                return `
                        <a href="${sub.href}" class="block py-1.5 text-sm font-medium text-slate-600 hover:text-red-600">
                            ${sub.title}
                        </a>`;
            }).join('')}
                </div>
            </div>`;
        } else {
            navHtml += `
            <a href="${item.href}" class="nav-link ${activeClass}">
                ${item.title}
            </a>`;

            mobileNavHtml += `
            <div class="border-b border-slate-100 py-2">
                <a href="${item.href}" class="block font-bold ${isActive ? 'text-red-600' : 'text-slate-900'} text-base py-1">
                    ${item.title}
                </a>
            </div>`;
        }
    });

    return `
    <header class="site-navbar sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                
                <!-- POUZE LOGO BEZ ZBYTEČNÉHO TEXTU (Dle požadavku uživatele) -->
                <a href="index.html" class="flex-shrink-0 flex items-center py-2" title="TJ Sokol Malhostovice - Úvodní stránka">
                    <img src="LOGO-sokol-WEB.jpg" alt="TJ Sokol Malhostovice" class="h-14 sm:h-16 w-auto object-contain hover:opacity-95 transition-opacity">
                </a>
                
                <!-- Desktop Navigace -->
                <nav class="hidden lg:flex items-center space-x-1">
                    ${navHtml}
                </nav>

                <!-- Pravé tlačítko pro rychlou akci -->
                <div class="hidden xl:flex items-center">
                    <a href="kalendar.html" class="btn-shimmer inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        Rozvrh & Kalendář
                    </a>
                </div>

                <!-- Mobilní hamburger -->
                <div class="lg:hidden flex items-center">
                    <button id="site-mobile-btn" class="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:outline-none" aria-label="Otevřít nabídku">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobilní menu -->
        <div id="site-mobile-menu" class="hidden lg:hidden bg-white border-b border-slate-200 px-5 pt-2 pb-6 max-h-[85vh] overflow-y-auto shadow-2xl">
            ${mobileNavHtml}
            <div class="pt-4 mt-3">
                <a href="kalendar.html" class="flex items-center justify-center gap-2 w-full py-3 bg-red-600 text-white text-sm font-bold rounded-xl shadow-sm">
                    Rozvrh a kalendář tělocvičny
                </a>
            </div>
        </div>
    </header>`;
}

// Jednotná přehledná patička
function renderFooter() {
    return `
    <footer class="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            <!-- Sloupec 1: O spolku -->
            <div>
                <a href="index.html" class="inline-block mb-4">
                    <img src="LOGO-sokol-WEB.jpg" alt="TJ Sokol Malhostovice" class="h-14 w-auto object-contain bg-white p-1 rounded-xl">
                </a>
                <p class="text-slate-400 text-sm leading-relaxed mb-5">
                    Sport, kultura a živé tradice v obci Malhostovice od roku 1920. Pestrá nabídka oddílů pro všechny věkové skupiny.
                </p>
                <a href="${SOKOL_CONFIG.facebookUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition-colors">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook komunity
                </a>
            </div>

            <!-- Sloupec 2: Rychlé odkazy -->
            <div>
                <h4 class="font-display font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span class="w-1.5 h-3.5 bg-red-600 rounded-full"></span> Navigace webu
                </h4>
                <ul class="space-y-2.5 text-sm text-slate-400">
                    <li><a href="index.html" class="hover:text-white transition-colors">Úvod & Aktuality</a></li>
                    <li><a href="kalendar.html" class="hover:text-white transition-colors">Kalendář & Týdenní rozvrh</a></li>
                    <li><a href="oddily.html" class="hover:text-white transition-colors">Sportovní oddíly & kroužky</a></li>
                    <li><a href="pecka.html" class="hover:text-white transition-colors">PECKA volný čas (technika)</a></li>
                    <li><a href="pronajmy.html" class="hover:text-white transition-colors">Pronájmy tělocvičny & Chata Zubří</a></li>
                    <li><a href="pro-cleny.html" class="hover:text-white transition-colors">Pro členy (Příspěvky, GDPR)</a></li>
                    <li><a href="kontakt.html" class="hover:text-white transition-colors">Kontakty & Vedení jednoty</a></li>
                </ul>
            </div>

            <!-- Sloupec 3: Kontakty na vedení -->
            <div>
                <h4 class="font-display font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span class="w-1.5 h-3.5 bg-red-600 rounded-full"></span> Vedení jednoty
                </h4>
                <div class="space-y-3.5 text-sm text-slate-400">
                    <div>
                        <strong class="text-white block font-semibold">Ing. Martina Odehnalová</strong>
                        <span class="text-xs text-slate-400 block mb-0.5">Předsedkyně jednoty</span>
                        <a href="tel:+420723499116" class="text-red-400 font-bold hover:underline">+420 723 499 116</a>
                    </div>
                    <div>
                        <strong class="text-white block font-semibold">Pavel Leksa</strong>
                        <span class="text-xs text-slate-400 block mb-0.5">Místopředseda & Zápasníček</span>
                        <a href="tel:+420732820337" class="text-red-400 font-bold hover:underline">+420 732 820 337</a>
                    </div>
                    <div>
                        <strong class="text-white block font-semibold">Ing. František Odehnal</strong>
                        <span class="text-xs text-slate-400 block mb-0.5">Hospodář & Chata Zubří</span>
                        <a href="tel:+420724558282" class="text-red-400 font-bold hover:underline">+420 724 558 282</a>
                    </div>
                </div>
            </div>

            <!-- Sloupec 4: Banka a sídlo -->
            <div>
                <h4 class="font-display font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span class="w-1.5 h-3.5 bg-red-600 rounded-full"></span> Sídlo & Bankovní účet
                </h4>
                <div class="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-sm">
                    <span class="text-slate-400 block mb-1">Transparentní účet FIO:</span>
                    <span class="font-mono font-bold text-base text-white block tracking-wider mb-3">${SOKOL_CONFIG.ucet}</span>
                    <div class="space-y-1.5 text-xs text-slate-400 pt-3 border-t border-slate-800">
                        <div><strong class="text-slate-300">IČO:</strong> ${SOKOL_CONFIG.ico}</div>
                        <div><strong class="text-slate-300">Datová schránka:</strong> <span class="font-mono">${SOKOL_CONFIG.datovaSchranka}</span></div>
                        <div><strong class="text-slate-300">E-mail:</strong> <a href="mailto:${SOKOL_CONFIG.email}" class="text-slate-300 hover:text-white underline">${SOKOL_CONFIG.email}</a></div>
                        <div><strong class="text-slate-300">Adresa:</strong> ${SOKOL_CONFIG.adresa}</div>
                    </div>
                </div>
            </div>

        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-sm text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 TJ Sokol Malhostovice, z.s. Všechna práva vyhrazena.</p>
            <div class="flex space-x-6 text-sm">
                <a href="pro-cleny.html#dokumenty" class="hover:text-slate-200 transition-colors">GDPR & Dokumenty</a>
                <a href="kontakt.html" class="hover:text-slate-200 transition-colors">Mapa & Kontakty</a>
            </div>
        </div>
    </footer>`;
}

// Inicializace po načtení DOM
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('site-header-container');
    if (headerContainer) {
        headerContainer.innerHTML = renderTopBar() + renderHeader();
    }

    const footerContainer = document.getElementById('site-footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = renderFooter();
    }

    // Automatické vyplnění příspěvků do elementů s atributem data-sokol-prispevek
    document.querySelectorAll('[data-sokol-prispevek]').forEach(el => {
        const key = el.getAttribute('data-sokol-prispevek');
        if (SOKOL_CONFIG.prispevky && SOKOL_CONFIG.prispevky[key]) {
            el.textContent = SOKOL_CONFIG.prispevky[key];
        }
    });

    const mobileBtn = document.getElementById('site-mobile-btn');
    const mobileMenu = document.getElementById('site-mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});
