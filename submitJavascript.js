document.getElementById('registrationForm').addEventListener('submit', function(event) {
        
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const age = document.getElementById('age').value;

            
            // Display the submitted information
            alert(`Registered Successfully!\nName: ${name}\nEmail: ${email}\nAge: ${age}`);
        });
        
