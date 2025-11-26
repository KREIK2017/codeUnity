export class Joystick {
    constructor(zoneElement, knobElement) {
        this.zone = zoneElement;
        this.knob = knobElement;
        this.active = false;
        this.origin = { x: 0, y: 0 };
        this.current = { x: 0, y: 0 };
        this.delta = { x: 0, y: 0 };
        this.maxDistance = 35; // Max radius for the knob movement

        this.init();
    }

    init() {
        // Touch events
        this.zone.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
        this.zone.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
        this.zone.addEventListener('touchend', (e) => this.onTouchEnd(e));

        // Mouse events
        this.zone.addEventListener('mousedown', (e) => this.onMouseDown(e));
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('mouseup', (e) => this.onMouseUp(e));
    }

    // --- Touch Handlers ---

    onTouchStart(e) {
        e.preventDefault();
        this.active = true;
        const touch = e.touches[0];
        this.startDrag(touch.clientX, touch.clientY);
    }

    onTouchMove(e) {
        if (!this.active) return;
        e.preventDefault();
        const touch = e.touches[0];
        this.updateDrag(touch.clientX, touch.clientY);
    }

    onTouchEnd(e) {
        this.endDrag();
    }

    // --- Mouse Handlers ---

    onMouseDown(e) {
        e.preventDefault();
        this.active = true;
        this.startDrag(e.clientX, e.clientY);
    }

    onMouseMove(e) {
        if (!this.active) return;
        e.preventDefault();
        this.updateDrag(e.clientX, e.clientY);
    }

    onMouseUp(e) {
        if (this.active) {
            this.endDrag();
        }
    }

    // --- Common Logic ---

    startDrag(clientX, clientY) {
        // Get the center of the joystick zone
        const rect = this.zone.getBoundingClientRect();
        this.origin.x = rect.left + rect.width / 2;
        this.origin.y = rect.top + rect.height / 2;

        // Initial position is the center
        this.current.x = this.origin.x;
        this.current.y = this.origin.y;
        
        this.updateKnob();
    }

    updateDrag(clientX, clientY) {
        this.current.x = clientX;
        this.current.y = clientY;
        this.updateKnob();
    }

    endDrag() {
        this.active = false;
        this.delta = { x: 0, y: 0 };
        
        // Reset knob to center
        this.knob.style.transform = `translate(-50%, -50%)`;
    }

    updateKnob() {
        let dx = this.current.x - this.origin.x;
        let dy = this.current.y - this.origin.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > this.maxDistance) {
            const angle = Math.atan2(dy, dx);
            dx = Math.cos(angle) * this.maxDistance;
            dy = Math.sin(angle) * this.maxDistance;
        }

        this.delta.x = dx / this.maxDistance; // Normalize -1 to 1
        this.delta.y = dy / this.maxDistance; // Normalize -1 to 1

        this.knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    }

    getDelta() {
        return this.delta;
    }
}
