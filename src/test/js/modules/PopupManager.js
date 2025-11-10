import { Logger } from './Logger.js';

const popupData = {
    0: { title: 'Точка 1: Старт', content: 'Вирушайте у подорож! Це початкова точка нашої кривої.' },
    1: { title: 'Точка 2: Перший поворот', content: 'Ви успішно досягли першого вигину. Продовжуйте рух!' },
    2: { title: 'Точка 3: Другий поворот', content: 'Ще один поворот позаду. Попереду нові виклики.' },
    3: { title: 'Точка 4: W-форма', content: 'Ви входите в складну ділянку у формі літери W.' },
    4: { title: 'Точка 5: Середина W', content: 'Ви в центрі W-подібної кривої.' },
    5: { title: 'Точка 6: Кінець W', content: 'Ви пройшли W-подібну ділянку. Майже у мети!' },
    // Add more content for other points if needed
};

class PopupManager {
    constructor() {
        this.container = document.getElementById('info-popup-container');
        this.titleElement = document.getElementById('info-popup-title');
        this.contentElement = document.getElementById('info-popup-content-text');
        this.closeButton = document.getElementById('info-popup-close');

        if (!this.container || !this.titleElement || !this.contentElement || !this.closeButton) {
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
            this.container.style.display = 'block';
            Logger.info(`Showing popup for point ${pointIndex}`);
            document.dispatchEvent(new Event('popup-opened')); // Dispatch event
        } else {
            Logger.warn(`No popup data found for point index ${pointIndex}`);
        }
    }

    hidePopup() {
        this.container.style.display = 'none';
        document.dispatchEvent(new Event('popup-closed')); // Dispatch event
    }
}

export { PopupManager };
