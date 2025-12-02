import { Logger } from './Logger.js';

const popupData = {
    0: {
        title: 'Точка 1',
        subtitle: 'Початок вашої подорожі.',
        content: 'Вирушайте у подорож! Це початкова точка нашої кривої.',
        image: 'textures/logos/React.png',
        features: ['Feature A', 'Feature B', 'Feature C']
    },
    1: {
        title: 'Website Design & WordPress Development',
        subtitle: 'You succcefully riched first point.',
        content: 'We create functional, user-friendly WordPress websites with thoughtful UI/UX. Full-cycle service from discovery and design to development, testing, launch, and ongoing support. Your site will be fast, responsive, and easy to manage.',
        image: 'textures/logos/blue-wordpress-logo-hd-picture-3.png',
        features: ['Feature A', 'Feature B', 'Feature C']
    },
    2: {
        title: 'Managed WordPress Hosting',
        subtitle: 'Подолано ще один етап.',
        content: 'Reliable hosting with 24/7 support. Speed optimization, security monitoring, backups, and updates handled for you. Optional add-ons include development support, plugin work, and detailed site health reports.',
        image: 'textures/logos/CSS3_logo_and_wordmark.svg.png',
        features: ['Feature A', 'Feature B', 'Feature C']
    },
    3: {
        title: '3D Architectural & Product Visualizations',
        subtitle: 'Складний відрізок шляху.',
        content: 'Photorealistic 3D renderings, virtual tours, and animations for residential, commercial, and multifamily projects. Ideal for architecture firms needing high-quality visualizations and product presentations.',
        image: 'textures/logos/HTML5_logo_and_wordmark.svg.png',
        features: ['Feature A', 'Feature B', 'Feature C']
    },
    4: {
        title: 'Shopify eCommerce Solutions',
        subtitle: 'Екватор складного шляху.',
        content: 'Fully optimized Shopify stores for effortless selling. Custom design, product management, SEO, smooth checkout, and 3D product visuals. Advanced features include marketing automation, social ads, loyalty programs, subscriptions, CRM integration, and custom apps/themes.',
        image: 'textures/logos/Shopify-Logo-PNG-HD.png',
        features: ['Feature A', 'Feature B', 'Feature C']
    },
    5: {
        title: 'Web & Mobile Application Development',
        subtitle: 'Випробування майже завершено.',
        content: 'End-to-end web and mobile app development, including UI/UX design, native and hybrid apps, complex integrations (SaaS, CRM, ERP, SCADA), and managed hosting. Built with modern technologies like Node.js, PHP, React, Vue, Angular, Golang, and Rust for seamless, scalable solutions.',
        image: 'textures/logos/React.png',
        features: ['Feature A', 'Feature B', 'Feature C']
    },
};

class PopupManager {
    constructor() {
        this.container = document.getElementById('info-popup-container');
        this.titleElement = document.getElementById('info-popup-title');
        this.subtitleElement = document.getElementById('info-popup-subtitle'); // New
        this.contentElement = document.getElementById('info-popup-content-text');
        this.closeButton = document.getElementById('info-popup-close');
        this.logoElement = document.getElementById('info-popup-logo');
        this.sceneImageElement = document.getElementById('info-popup-scene-image');
        this.featuresList = document.getElementById('info-popup-features');

        if (!this.container || !this.titleElement || !this.subtitleElement || !this.contentElement || !this.closeButton || !this.logoElement || !this.sceneImageElement || !this.featuresList) {
            Logger.error('PopupManager: One or more required HTML elements are missing.');
            return;
        }

        this.closeButton.addEventListener('click', () => this.hidePopup());

        // Close popup when clicking on the container/backdrop
        this.container.addEventListener('click', (event) => {
            if (event.target === this.container) {
                this.hidePopup();
            }
        });

        // Close popup with Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.container.classList.contains('visible')) {
                this.hidePopup();
            }
        });

        Logger.info('PopupManager initialized.');
    }

    showPopup(pointIndex) {
        const data = popupData[pointIndex];
        if (data) {
            this.titleElement.textContent = data.title;
            this.subtitleElement.textContent = data.subtitle; // New
            this.contentElement.textContent = data.content;
            this.logoElement.src = data.image;
            this.sceneImageElement.src = 'textures/image.png'; // Set the static scene image

            // Populate features list
            this.featuresList.innerHTML = ''; // Clear previous features
            data.features.forEach(featureText => {
                const li = document.createElement('li');
                li.textContent = featureText;
                this.featuresList.appendChild(li);
            });

            this.container.classList.add('visible');
            document.body.classList.add('no-scroll'); // Add no-scroll class
            Logger.info(`Showing popup for point ${pointIndex}`);
            document.dispatchEvent(new Event('popup-opened')); // Dispatch event
        } else {
            Logger.warn(`No popup data found for point index ${pointIndex}`);
        }
    }

    hidePopup() {
        this.container.classList.remove('visible');
        document.body.classList.remove('no-scroll'); // Remove no-scroll class
        document.dispatchEvent(new Event('popup-closed')); // Dispatch event
    }
}

export { PopupManager };
