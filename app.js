// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Add loading state
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Logging in...';
    
    // Simulate login process
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.textContent = originalText;
        
        // Show success message (in a real app, this would redirect)
        alert('Login successful! (This is a demo)');
    }, 2000);
});

// Social login handlers
function socialLogin(provider) {
    alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login clicked! (This is a demo)`);
}

// Input validation and styling
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '#10b981';
        }
    });

    input.addEventListener('input', function() {
        this.style.borderColor = '';
    });
});

// Additional utility functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Enhanced form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitBtn = this.querySelector('button[type="submit"]');
    
    // Validate inputs
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (!validatePassword(password)) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    const originalText = submitBtn.textContent;
    
    // Add loading state
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Logging in...';
    
    // Simulate login process
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.textContent = originalText;
        
        // Show success message (in a real app, this would redirect)
        alert('Login successful! (This is a demo)');
    }, 2000);
});