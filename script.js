document.addEventListener('DOMContentLoaded', function() {
    // UUS: Hamburgerinupu funktsionaalsus
    const hamburger = document.querySelector('.hamburger');
    const navItemsContainer = document.querySelector('.nav-items');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Lülita active klass nav-items elemendil
            navItemsContainer.classList.toggle('active');
            // Lülita active klass hamburgeril animatsiooni jaoks
            this.classList.toggle('active');
        });
    }
    
    // UUS: Sulge menüü kui klikitakse menüüelemendil
    const navLinks = document.querySelectorAll('.nav-items .nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navItemsContainer.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
    
    // Project modal elements
    const projectFrames = document.querySelectorAll('.project-frame');
    const modal = document.getElementById('project-modal');
    
    if (modal) {
        const closeButton = document.querySelector('.close-button');
        const modalTitle = document.getElementById('modal-title');
        const modalImage = document.getElementById('modal-image');
        const modalDescription = document.getElementById('modal-description');
        const modalTechList = document.getElementById('modal-tech-list');
        const modalLink = document.getElementById('modal-link');
        
        // Project data - replace with your actual projects
        const projectsData = {
            projekt1: {
                title: 'Projekt 1',
                image: 'images/project1.jpg',
                description: 'See on minu esimene projekt, kus lõin...',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                link: '#'
            },
            projekt2: {
                title: 'Projekt 2',
                image: 'images/project2.jpg',
                description: 'Teine projekt keskendus veebilehe disainile ja kasutajakogemuse parandamisele...',
                technologies: ['React', 'Sass', 'Node.js'],
                link: '#'
            },
            projekt3: {
                title: 'Projekt 3',
                image: 'images/project3.jpg',
                description: 'Kolmandas projektis töötasin välja täisfunktsionaalse e-poe...',
                technologies: ['JavaScript', 'MongoDB', 'Express.js'],
                link: '#'
            }
        };
        
        // Project modal functions
        function openProjectModal(projectId) {
            const project = projectsData[projectId];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalImage.src = project.image;
                modalImage.alt = project.title;
                modalDescription.textContent = project.description;
                
                // Clear and populate tech list
                modalTechList.innerHTML = '';
                project.technologies.forEach(tech => {
                    const li = document.createElement('li');
                    li.textContent = tech;
                    modalTechList.appendChild(li);
                });
                
                modalLink.href = project.link;
                
                // Show modal
                modal.style.display = 'block';
                
                // Prevent body scrolling when modal is open
                document.body.style.overflow = 'hidden';
            }
        }
        
        function closeProjectModal() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
        
        // Add click events to project frames
        projectFrames.forEach(frame => {
            frame.addEventListener('click', function() {
                const projectId = this.dataset.project;
                openProjectModal(projectId);
            });
        });
        
        // Close modal on close button click
        closeButton.addEventListener('click', closeProjectModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    
    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log and show a confirmation
            console.log('Form submitted:', { name, email, message });
            
            // Show confirmation
            alert('Aitäh! Sinu sõnum on saadetud.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Door animations and interactions
    const doors = document.querySelectorAll('.door');
    
    doors.forEach(door => {
        door.addEventListener('mouseenter', function() {
            // Add hover effect
            this.style.transform = 'scale(1.05)';
        });
        
        door.addEventListener('mouseleave', function() {
            // Remove hover effect if not in the middle of animation
            if (!this.classList.contains('knock')) {
                this.style.transform = '';
            }
        });
        
        door.addEventListener('click', function(event) {
            // Get the parent link's href
            const doorLink = this.parentElement;
            const href = doorLink.getAttribute('href');
            
            // Add knock animation
            this.classList.add('knock');
            
            // Play knock sound if available
            const knockSound = document.getElementById('knock-sound');
            if (knockSound) {
                knockSound.play();
            }
            
            // Door opening animation after knock
            setTimeout(() => {
                this.style.transform = 'perspective(600px) rotateY(70deg)';
                
                // Add page transition effect
                const transition = document.createElement('div');
                transition.className = 'page-transition';
                document.body.appendChild(transition);
                
                // Trigger transition
                setTimeout(() => {
                    transition.style.transform = 'translateX(0)';
                    
                    // Navigate to the new page after animation
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500);
                }, 10);
            }, 500); // Wait for knock animation to complete
            
            // Prevent default link behavior
            event.preventDefault();
        });
    });
    
    // Add entrance animation
    window.addEventListener('pageshow', function(event) {
        const transition = document.querySelector('.page-transition');
        
        if (transition) {
            transition.style.transform = 'translateX(-100%)';
            
            setTimeout(() => {
                transition.remove();
            }, 500);
        }
    });
    
    // Navigation hover animation
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});