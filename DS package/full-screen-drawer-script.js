// Pendo Design System - Full Screen Drawer (Multi-Step) JavaScript

class PendoFullScreenDrawer {
    constructor(drawerElement) {
        this.drawer = drawerElement;
        this.currentStep = 1;
        this.totalSteps = 4;
        this.formData = {};
        
        this.init();
    }

    init() {
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Bind event listeners
        this.bindEvents();
        
        // Initialize form data collection
        this.collectFormData();
        
        // Set initial state
        this.updateUI();
    }

    bindEvents() {
        // Navigation buttons
        const nextButton = this.drawer.querySelector('#next-button');
        const prevButton = this.drawer.querySelector('#prev-button');
        const finishButton = this.drawer.querySelector('#finish-button');
        const closeButton = this.drawer.querySelector('.pendo-full-screen-drawer__close');

        nextButton?.addEventListener('click', () => this.nextStep());
        prevButton?.addEventListener('click', () => this.prevStep());
        finishButton?.addEventListener('click', () => this.finish());
        closeButton?.addEventListener('click', () => this.close());

        // Step navigation (clicking on steps)
        const steps = this.drawer.querySelectorAll('.pendo-workflow-step');
        steps.forEach((step, index) => {
            step.addEventListener('click', () => {
                if (index < this.currentStep) { // Only allow going back
                    this.goToStep(index + 1);
                }
            });
        });

        // Form field changes
        this.drawer.addEventListener('input', (e) => this.handleFormChange(e));
        this.drawer.addEventListener('change', (e) => this.handleFormChange(e));

        // Dropdown functionality
        this.initDropdowns();

        // Toast dismiss
        const toastDismiss = document.querySelector('.pendo-toast__dismiss');
        toastDismiss?.addEventListener('click', () => this.hideToast());

        // Keyboard navigation
        this.drawer.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    initDropdowns() {
        const dropdowns = this.drawer.querySelectorAll('.pendo-dropdown');
        
        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.pendo-dropdown__trigger');
            const menu = dropdown.querySelector('.pendo-dropdown__menu');
            const options = dropdown.querySelectorAll('.pendo-dropdown__option');
            
            trigger?.addEventListener('click', () => {
                const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
                trigger.setAttribute('aria-expanded', (!isExpanded).toString());
            });

            options.forEach(option => {
                option.addEventListener('click', () => {
                    const text = option.textContent;
                    const textElement = trigger.querySelector('.pendo-dropdown__text');
                    if (textElement) {
                        textElement.textContent = text;
                        textElement.style.color = 'var(--color-text-primary)';
                    }
                    trigger.setAttribute('aria-expanded', 'false');
                    
                    // Trigger change event for form handling
                    const changeEvent = new CustomEvent('change', {
                        detail: { value: text }
                    });
                    trigger.dispatchEvent(changeEvent);
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!dropdown.contains(e.target)) {
                    trigger?.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    handleFormChange(e) {
        this.collectFormData();
        this.updateReview();
        this.validateCurrentStep();
    }

    handleKeydown(e) {
        if (e.key === 'Escape') {
            this.close();
        } else if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            if (this.currentStep < this.totalSteps && this.validateCurrentStep()) {
                this.nextStep();
            } else if (this.currentStep === this.totalSteps) {
                this.finish();
            }
        }
    }

    collectFormData() {
        // Collect all form data
        const inputs = this.drawer.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            if (input.type === 'radio') {
                if (input.checked) {
                    this.formData[input.name] = input.value;
                }
            } else if (input.type === 'checkbox') {
                if (!this.formData.checkboxes) this.formData.checkboxes = {};
                this.formData.checkboxes[input.id || input.name] = input.checked;
            } else {
                this.formData[input.id || input.name] = input.value;
            }
        });

        // Collect dropdown values
        const dropdowns = this.drawer.querySelectorAll('.pendo-dropdown__trigger');
        dropdowns.forEach(dropdown => {
            const textElement = dropdown.querySelector('.pendo-dropdown__text');
            const id = dropdown.id;
            if (textElement && id) {
                this.formData[id] = textElement.textContent;
            }
        });
    }

    validateCurrentStep() {
        const currentPanel = this.drawer.querySelector(`#step-${this.currentStep}`);
        const requiredFields = currentPanel.querySelectorAll('[required]');
        
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                this.showFieldError(field, 'This field is required');
            } else {
                this.clearFieldError(field);
            }
        });

        return isValid;
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        
        field.classList.add('pendo-input--error');
        const errorElement = document.createElement('div');
        errorElement.className = 'pendo-field-error';
        errorElement.textContent = message;
        errorElement.style.color = 'var(--color-error)';
        errorElement.style.fontSize = 'var(--font-size-small)';
        errorElement.style.marginTop = 'var(--spacing-xs)';
        
        field.parentNode.appendChild(errorElement);
    }

    clearFieldError(field) {
        field.classList.remove('pendo-input--error');
        const errorElement = field.parentNode.querySelector('.pendo-field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    nextStep() {
        if (this.currentStep < this.totalSteps && this.validateCurrentStep()) {
            this.currentStep++;
            this.updateUI();
            this.announceStepChange();
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateUI();
            this.announceStepChange();
        }
    }

    goToStep(stepNumber) {
        if (stepNumber >= 1 && stepNumber <= this.totalSteps && stepNumber <= this.currentStep) {
            this.currentStep = stepNumber;
            this.updateUI();
            this.announceStepChange();
        }
    }

    updateUI() {
        // Update progress indicator
        const progressFill = this.drawer.querySelector('.pendo-progress-indicator__fill');
        const progressLabel = this.drawer.querySelector('.pendo-progress-indicator__label');
        const progressPercentage = (this.currentStep / this.totalSteps) * 100;
        
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }
        
        if (progressLabel) {
            progressLabel.textContent = `Step ${this.currentStep} of ${this.totalSteps}`;
        }

        // Update workflow step indicators
        const steps = this.drawer.querySelectorAll('.pendo-workflow-step');
        steps.forEach((step, index) => {
            const stepNumber = index + 1;
            
            step.classList.remove('pendo-workflow-step--active', 'pendo-workflow-step--completed');
            step.setAttribute('aria-selected', 'false');
            
            if (stepNumber === this.currentStep) {
                step.classList.add('pendo-workflow-step--active');
                step.setAttribute('aria-selected', 'true');
            } else if (stepNumber < this.currentStep) {
                step.classList.add('pendo-workflow-step--completed');
                
                // Add checkmark to completed steps
                const stepNumberElement = step.querySelector('.pendo-workflow-step__number');
                if (stepNumberElement && !stepNumberElement.querySelector('[data-lucide="check"]')) {
                    stepNumberElement.innerHTML = '<i data-lucide="check"></i>';
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }
            }
        });

        // Update panel visibility
        const panels = this.drawer.querySelectorAll('.pendo-drawer-panel');
        panels.forEach((panel, index) => {
            panel.classList.remove('pendo-drawer-panel--active');
            if (index + 1 === this.currentStep) {
                panel.classList.add('pendo-drawer-panel--active');
            }
        });

        // Update navigation buttons
        const nextButton = this.drawer.querySelector('#next-button');
        const prevButton = this.drawer.querySelector('#prev-button');
        const finishButton = this.drawer.querySelector('#finish-button');

        if (prevButton) {
            prevButton.disabled = this.currentStep === 1;
        }

        if (nextButton && finishButton) {
            if (this.currentStep === this.totalSteps) {
                nextButton.style.display = 'none';
                finishButton.style.display = 'inline-flex';
            } else {
                nextButton.style.display = 'inline-flex';
                finishButton.style.display = 'none';
            }
        }

        // Focus management
        const activePanel = this.drawer.querySelector('.pendo-drawer-panel--active');
        const firstInput = activePanel?.querySelector('input, textarea, button, select');
        if (firstInput) {
            firstInput.focus();
        }
    }

    updateReview() {
        if (this.currentStep !== 4) return;

        // Update review section with collected data
        const reviewElements = {
            'review-name': this.formData['campaign-name'] || '-',
            'review-type': this.formData['campaign-type'] || '-',
            'review-priority': this.formData['priority'] || '-',
            'review-audience': this.getAudienceText(),
            'review-status': this.formData.checkboxes?.['enable-campaign'] ? 'Active' : 'Inactive',
            'review-headline': this.formData['headline'] || '-',
            'review-duration': this.formData['display-time'] ? `${this.formData['display-time']} seconds` : '-'
        };

        Object.entries(reviewElements).forEach(([id, value]) => {
            const element = this.drawer.querySelector(`#${id}`);
            if (element) {
                element.textContent = value;
            }
        });
    }

    getAudienceText() {
        const checkboxes = this.formData.checkboxes || {};
        const audiences = [];
        
        if (checkboxes['all-users']) audiences.push('All users');
        if (checkboxes['new-users']) audiences.push('New users');
        if (checkboxes['power-users']) audiences.push('Power users');
        
        return audiences.length > 0 ? audiences.join(', ') : 'Not specified';
    }

    announceStepChange() {
        // Announce step change for screen readers
        const announcement = `Step ${this.currentStep} of ${this.totalSteps}`;
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.textContent = announcement;
        
        document.body.appendChild(announcer);
        setTimeout(() => {
            document.body.removeChild(announcer);
        }, 1000);
    }

    finish() {
        if (!this.validateCurrentStep()) {
            return;
        }

        // Simulate API call
        this.showLoadingState();
        
        setTimeout(() => {
            this.hideLoadingState();
            this.showSuccessToast();
            this.close();
        }, 2000);
    }

    showLoadingState() {
        const finishButton = this.drawer.querySelector('#finish-button');
        if (finishButton) {
            finishButton.disabled = true;
            finishButton.innerHTML = `
                <span class="pendo-spinner"></span>
                Creating Campaign...
            `;
            
            // Add spinner styles
            const style = document.createElement('style');
            style.textContent = `
                .pendo-spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid transparent;
                    border-top: 2px solid currentColor;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    hideLoadingState() {
        const finishButton = this.drawer.querySelector('#finish-button');
        if (finishButton) {
            finishButton.disabled = false;
            finishButton.innerHTML = `
                <i data-lucide="rocket"></i>
                Launch Campaign
            `;
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }

    showSuccessToast() {
        const toast = document.querySelector('#success-toast');
        if (toast) {
            toast.style.display = 'flex';
            toast.style.animation = 'slideInRight 0.3s ease-out';
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                this.hideToast();
            }, 5000);
        }
    }

    hideToast() {
        const toast = document.querySelector('#success-toast');
        if (toast) {
            toast.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                toast.style.display = 'none';
            }, 300);
        }
    }

    close() {
        // In a real application, this would close the full-screen drawer
        if (confirm('Are you sure you want to close the drawer? Your progress will be lost.')) {
            console.log('Full Screen Drawer closed');
            // Reset drawer state
            this.currentStep = 1;
            this.formData = {};
            this.updateUI();
            
            // Clear all form fields
            const inputs = this.drawer.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = input.defaultChecked;
                } else {
                    input.value = '';
                }
            });
            
            // Reset dropdowns
            const dropdowns = this.drawer.querySelectorAll('.pendo-dropdown__text');
            dropdowns.forEach(dropdown => {
                dropdown.textContent = dropdown.getAttribute('data-placeholder') || 'Select option';
                dropdown.style.color = 'var(--color-text-placeholder)';
            });
        }
    }
}

// Initialize full screen drawer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const drawerElement = document.querySelector('#fullScreenDrawer');
    if (drawerElement) {
        new PendoFullScreenDrawer(drawerElement);
    }
});

// Add toast animation styles
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;
document.head.appendChild(toastStyles);
