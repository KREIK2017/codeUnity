import { Logger } from './Logger.js';

const popupData = {
    0: {
        title: 'The End',
        subtitle: '',
        content: 'You’ve reached the end of the journey - but this is just the beginning of what we can create together. CodeUnity, together with our creative partner TuiSpace, is ready to bring your ideas to life. If something sparked your interest, feel free to reach out. We’re always excited to collaborate and turn ideas into reality.',
        image: 'textures/logos/6.png',
        rightImage: 'textures/popups/5End.png',
        link: 'https://tuispace.com/',
        // features: ['Feature A', 'Feature B', 'Feature C']
    },
    1: {
        title: 'Website Design & WordPress Development',
        subtitle: 'You succefully riched first point.',
        content: 'We create functional, user-friendly WordPress websites with thoughtful UI/UX. Full-cycle service from discovery and design to development, testing, launch, and ongoing support. Your site will be fast, responsive, and easy to manage.',
        image: 'textures/logos/1.png',
        rightImage: 'textures/popups/1Factory.png',
        link: 'https://tuispace.com/services/website-design-development/',
        // features: ['Feature A', 'Feature B', 'Feature C']
    },
    2: {
        title: 'Managed WordPress Hosting',
        subtitle: 'Another stage has been completed.',
        content: 'Reliable hosting with 24/7 support. Speed optimization, security monitoring, backups, and updates handled for you. Optional add-ons include development support, plugin work, and detailed site health reports.',
        image: 'textures/logos/2.png',
        rightImage: 'textures/popups/2lighthouse.png',
        link: 'https://tuispace.com/services/hosting-ongoing-website-care/',
        // features: ['Feature A', 'Feature B', 'Feature C']
    },
    3: {
        title: '3D Architectural & Product Visualizations',
        subtitle: 'A difficult stretch of road.',
        content: 'Photorealistic 3D renderings, virtual tours, and animations for residential, commercial, and multifamily projects. Ideal for architecture firms needing high-quality visualizations and product presentations.',
        image: 'textures/logos/3.png',
        rightImage: 'textures/popups/3attraction.png',
        link: 'https://tuispace.com/services/3d-renderings-animation/',
        // features: ['Feature A', 'Feature B', 'Feature C']
    },
    4: {
        title: 'Shopify eCommerce Solutions',
        subtitle: 'The halfway point of a difficult journey.',
        content: 'Fully optimized Shopify stores for effortless selling. Custom design, product management, SEO, smooth checkout, and 3D product visuals. Advanced features include marketing automation, social ads, loyalty programs, subscriptions, CRM integration, and custom apps/themes.',
        image: 'textures/logos/4.png',
        rightImage: 'textures/popups/4Ferris_wheel.png',
        link: 'https://tuispace.com/services/shopify-ecommerce-development-services/',
        // features: ['Feature A', 'Feature B', 'Feature C']
    },
    5: {
        title: 'Web & Mobile Application Development',
        subtitle: 'The test is almost complete.',
        content: 'End-to-end web and mobile app development, including UI/UX design, native and hybrid apps, complex integrations (SaaS, CRM, ERP, SCADA), and managed hosting. Built with modern technologies like React, Node.js, Python, PHP, Swift, and Kotlin to deliver seamless, scalable solutions.',
        image: 'textures/logos/5.png',
        rightImage: 'textures/image.png',
        link: 'https://tuispace.com/services/mobile-web-apps-development/',
        // features: ['Feature A', 'Feature B', 'Feature C']
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
        // this.featuresList = document.getElementById('info-popup-features');

        if (!this.container || !this.titleElement || !this.subtitleElement || !this.contentElement || !this.closeButton || !this.logoElement || !this.sceneImageElement /*|| !this.featuresList*/) {
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

        // Logger.info('PopupManager initialized.');
    }

    showPopup(pointIndex) {
        const data = popupData[pointIndex];
        if (data) {
            this.titleElement.textContent = data.title;
            this.subtitleElement.textContent = data.subtitle; // New
            this.contentElement.innerHTML = data.content + `<p><a href="${data.link}" target="_blank">See more at Tuispace</a></p>`;
            this.logoElement.src = data.image;
            this.sceneImageElement.src = data.rightImage; // Set the static scene image

            // Populate features list
            /* this.featuresList.innerHTML = ''; // Clear previous features
            data.features.forEach(featureText => {
                const li = document.createElement('li');
                li.textContent = featureText;
                this.featuresList.appendChild(li);
            }); */

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
