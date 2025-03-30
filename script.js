document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navItemsContainer = document.querySelector('.nav-items');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Toggle active class on nav-items element
            navItemsContainer.classList.toggle('active');
            // Toggle active class on hamburger for animation
            this.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on menu item
    const navLinks = document.querySelectorAll('.nav-items .nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navItemsContainer.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
    
    // Close button for mobile menu
    const closeMenu = document.querySelector('.close-menu');
    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            navItemsContainer.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    }
    
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
    
    // Bootstrap modals for About page
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    // Handle clickable areas with improved hover effects
    const clickableAreas = document.querySelectorAll('.clickable-area');
    
    clickableAreas.forEach(area => {
        // Add hover event listeners for subtle highlighting
        area.addEventListener('mouseenter', function() {
            this.classList.add('area-hover');
            
            // Show guidance note when hovering
            const guidanceNote = this.previousElementSibling;
            if (guidanceNote && guidanceNote.classList.contains('guidance-note')) {
                guidanceNote.classList.add('active');
            }
        });
        
        area.addEventListener('mouseleave', function() {
            this.classList.remove('area-hover');
            
            // Hide guidance note when not hovering
            const guidanceNote = this.previousElementSibling;
            if (guidanceNote && guidanceNote.classList.contains('guidance-note')) {
                guidanceNote.classList.remove('active');
            }
        });
        
        // Click event to open the modal
        area.addEventListener('click', function() {
            const modalId = this.getAttribute('data-target');
            try {
                const modalElement = document.querySelector(modalId);
                if (modalElement) {
                    const modal = new bootstrap.Modal(modalElement);
                    modal.show();
                } else {
                    console.error('Modal element not found:', modalId);
                }
            } catch (error) {
                console.error('Error opening modal:', error);
            }
        });
    });
    
    // Make guidance notes initially visible, then fade after 3 seconds
    const guidanceNotes = document.querySelectorAll('.guidance-note');
    guidanceNotes.forEach(note => {
        note.classList.add('visible');
        
        setTimeout(() => {
            note.classList.remove('visible');
        }, 3000);
    });
    
    // Fix modal closing issue
    const modalCloseButtons = document.querySelectorAll('.modal .close, .modal .btn-secondary');
    
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalElement = this.closest('.modal');
            try {
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                if (modalInstance) {
                    modalInstance.hide();
                } else {
                    // Fallback for older Bootstrap versions
                    $(modalElement).modal('hide');
                }
            } catch (error) {
                console.error('Error closing modal:', error);
            }
        });
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                try {
                    const modalInstance = bootstrap.Modal.getInstance(this);
                    if (modalInstance) {
                        modalInstance.hide();
                    } else {
                        // Fallback for older Bootstrap versions
                        $(this).modal('hide');
                    }
                } catch (error) {
                    console.error('Error closing modal on backdrop click:', error);
                }
            }
        });
    });
    
    // Update navigation arrows styling to match the prototype
    const updateNavArrows = () => {
        const arrows = document.querySelectorAll('.nav-arrow');
        // Update styles to match Figma's dev mode colors
        arrows.forEach(arrow => {
            arrow.style.backgroundColor = 'rgba(217, 217, 217, 0.50)';
            arrow.style.width = '233px';
            arrow.style.height = '100px';
        });
    };
    
    // Call the function to update arrows
    updateNavArrows();
    
    // IMPORTANT: Updated positioning for clickable areas and guidance notes
    const adjustClickableAreas = () => {
        const bookshelfArea = document.querySelector('.bookshelf-area');
        const clockArea = document.querySelector('.clock-area');
        const bookshelfNote = document.querySelector('.bookshelf-note');
        const screenNote = document.querySelector('.screen-note');
        
        if (bookshelfArea) {
            bookshelfArea.style.left = '15%';
            bookshelfArea.style.top = '40%';
            bookshelfArea.style.width = '180px';
            bookshelfArea.style.height = '250px';
        }
        
        if (clockArea) {
            clockArea.style.left = '50%';
            clockArea.style.top = '45%';
            clockArea.style.width = '300px';
            clockArea.style.height = '200px';
            clockArea.style.transform = 'translateX(-50%)';
            clockArea.style.zIndex = '3';
        }
        
        // Position guidance notes - IMPORTANT CHANGES HERE
        if (bookshelfNote) {
            bookshelfNote.style.left = '15%';
            bookshelfNote.style.top = '35%'; // Position ABOVE the clickable area
            bookshelfNote.style.transform = 'translateY(-100%)'; // Move it up by its own height
        }
        
        if (screenNote) {
            screenNote.style.left = '50%';
            screenNote.style.top = '35%'; // Position ABOVE the clickable area
            screenNote.style.transform = 'translate(-50%, -100%)'; // Center horizontally and move up
        }
    };
    
    // Call the function to adjust clickable areas
    adjustClickableAreas();
    
    // Rest of your code...
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
    
    // NEW: Navigation arrows page turning effect
    const navArrows = document.querySelectorAll('.nav-arrow');
    
    navArrows.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get the href attribute for navigation
            const href = this.getAttribute('href');
            
            // Create page turning effect
            const pageTurn = document.createElement('div');
            pageTurn.className = 'page-turn-effect';
            document.body.appendChild(pageTurn);
            
            // Determine direction based on arrow class
            const isRightArrow = this.classList.contains('nav-arrow-right');
            
            // Set initial position of the turning page
            if (isRightArrow) {
                pageTurn.style.left = '0';
                pageTurn.style.transformOrigin = 'right center';
            } else {
                pageTurn.style.right = '0';
                pageTurn.style.transformOrigin = 'left center';
            }
            
            // Start the page turn animation
            setTimeout(() => {
                if (isRightArrow) {
                    pageTurn.style.transform = 'rotateY(-90deg)';
                } else {
                    pageTurn.style.transform = 'rotateY(90deg)';
                }
                
                // Change page when animation is halfway complete
                setTimeout(() => {
                    // Create a full-page overlay for smooth transition
                    const fullOverlay = document.createElement('div');
                    fullOverlay.className = 'page-transition';
                    document.body.appendChild(fullOverlay);
                    
                    // Make it visible
                    setTimeout(() => {
                        fullOverlay.style.transform = 'translateX(0)';
                        
                        // Navigate to new page
                        setTimeout(() => {
                            window.location.href = href;
                        }, 300);
                    }, 10);
                }, 300);
            }, 50);
            
            // Prevent default link behavior
            event.preventDefault();
        });
    });
    
    // Add entrance animation
    window.addEventListener('pageshow', function(event) {
        const transition = document.querySelector('.page-transition');
        const pageTurn = document.querySelector('.page-turn-effect');
        
        if (transition) {
            transition.style.transform = 'translateX(-100%)';
            
            setTimeout(() => {
                transition.remove();
            }, 500);
        }
        
        if (pageTurn) {
            pageTurn.remove();
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