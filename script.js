// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save user preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// JavaScript for dynamic district dropdown
document.getElementById('state').addEventListener('change', function() {
    const districtDropdown = document.getElementById('district');
    const state = this.value;
    
    if (state) {
        districtDropdown.removeAttribute('disabled');
        districtDropdown.innerHTML = '<option value="">Loading districts...</option>';
        
        // Simulate loading delay
        setTimeout(() => {
            let districts = [];
            
            // Sample districts for different states
            switch(state) {
                case 'maharashtra':
                    districts = ['Pune', 'Nashik', 'Nagpur', 'Ahmednagar', 'Solapur', 'Satara'];
                    break;
                case 'punjab':
                    districts = ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali'];
                    break;
                case 'karnataka':
                    districts = ['Bangalore', 'Mysore', 'Hubli', 'Belgaum', 'Mangalore', 'Gulbarga'];
                    break;
                case 'up':
                    districts = ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Allahabad'];
                    break;
                case 'gujarat':
                    districts = ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Gandhinagar'];
                    break;
                default:
                    districts = ['District 1', 'District 2', 'District 3', 'District 4'];
            }
            
            districtDropdown.innerHTML = '<option value="">Select Your District</option>';
            districts.forEach(district => {
                const option = document.createElement('option');
                option.value = district.toLowerCase();
                option.textContent = district;
                districtDropdown.appendChild(option);
            });
        }, 600);
    } else {
        districtDropdown.setAttribute('disabled', 'disabled');
        districtDropdown.innerHTML = '<option value="">Please select a state first</option>';
    }
});

// Handle form submission
document.getElementById('farmInfoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;
    const soilType = document.getElementById('soilType').value;
    const previousCrop = document.getElementById('previousCrop').value;
    
    // Validate form
    if (!state || !district || !soilType || !previousCrop) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Show loading message (in a real app, this would call an API)
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing your farm data...';
    
    // Simulate API call delay
    setTimeout(() => {
        alert('Thank you! Your personalized crop advisory is being prepared.\n\nIn a real application, this would connect to our AI system to provide specific recommendations for your farm.');
        submitBtn.innerHTML = originalText;
    }, 2000);
});