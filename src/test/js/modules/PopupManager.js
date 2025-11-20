import { Logger } from './Logger.js';

const popupData = {
    0: { 
        title: 'Точка 1: Старт', 
        content: 'Вирушайте у подорож! Це початкова точка нашої кривої.',
        image: 'textures/logos/React.png',
        features: ['Feature A', 'Feature B', 'Feature C']
    },
    1: { 
        title: 'Точка 2: Перший поворот', 
        content: 'Ви успішно досягли першого вигину. Продовжуйте рух!',
        image: 'textures/logos/HTML5_logo_and_wordmark.svg.png',
        features: ['Discovered Turn 1', 'Speed Boost', 'New Scenery']
    },
    2: { 
        title: 'Точка 3: Другий поворот', 
        content: 'Ще один поворот позаду. Попереду нові виклики.',
        image: 'textures/logos/CSS3_logo_and_wordmark.svg.png',
        features: ['Sharp Curve', 'Mountain View', 'Next Stop: W-Path']
    },
    3: { 
        title: 'Точка 4: W-форма', 
        content: 'Ви входите в складну ділянку у формі літери W.',
        image: 'textures/logos/python-emblem.png',
        features: ['Complex Path', 'Requires Precision', 'Good Luck!']
    },
    4: { 
        title: 'Точка 5: Середина W', 
        content: 'Ви в центрі W-подібної кривої.',
        image: 'textures/logos/Shopify-Logo-PNG-HD.png',
        features: ['Midpoint Reached', 'Halfway Through', 'Keep Going']
    },
    5: { 
        title: 'Точка 6: Кінець W', 
        content: 'Ви пройшли W-подібну ділянку. Майже у мети!',
        image: 'textures/logos/blue-wordpress-logo-hd-picture-3.png',
        features: ['W-Path Conquered', 'Final Stretch', 'Almost Home']
    },
};

class PopupManager {
    constructor() {
        this.container = document.getElementById('info-popup-container');
        this.titleElement = document.getElementById('info-popup-title');
        this.contentElement = document.getElementById('info-popup-content-text');
        this.closeButton = document.getElementById('info-popup-close');
        this.imageElement = document.getElementById('info-popup-image');
        this.featuresList = document.getElementById('info-popup-features');

        if (!this.container || !this.titleElement || !this.contentElement || !this.closeButton || !this.imageElement || !this.featuresList) {
            Logger.error('PopupManager: One or more required HTML elements are missing.');
            return;
        }

        this.closeButton.addEventListener('click', () => this.hidePopup());
        Logger.info('PopupManager initialized.');
    }

    showPopup(pointIndex) {
        const data = popupData[pointIndex];
        if (data) {
            this.titleElement.textContent = data.title;
            this.contentElement.textContent = data.content;
            this.imageElement.src = data.image;

            // Populate features list
            this.featuresList.innerHTML = ''; // Clear previous features
            data.features.forEach(featureText => {
                const li = document.createElement('li');
                li.textContent = featureText;
                this.featuresList.appendChild(li);
            });

            this.container.classList.add('visible'); // Use class to trigger animation
            Logger.info(`Showing popup for point ${pointIndex}`);
            document.dispatchEvent(new Event('popup-opened')); // Dispatch event
        } else {
            Logger.warn(`No popup data found for point index ${pointIndex}`);
        }
    }

    hidePopup() {
        this.container.classList.remove('visible'); // Use class to trigger animation
        document.dispatchEvent(new Event('popup-closed')); // Dispatch event
    }
}

export { PopupManager };
