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
    
    // Project data for Bootstrap modals - replace with your actual projects
    const projectsDataBootstrap = {
        projekt1: {
            title: 'Website for OLLIE',
            image: 'images/olliefansite.jpg',
            description: 'A website for the singer OLLIE',
            process: 'I designed this website from scratch, starting with wireframing. The idea was creating a fansite since I like his music, but as I finished it, I could also see this website being his official website at some point, as I intend to keep working on it and adding more features while learning new technologies.',
            technologies: ['HTML5', 'CSS3', 'Bootstrap'],
            link: 'https://vso24kirk.ita.voco.ee/veebiarendus/L6puprojekt/ollie_fansite/'
        },
        projekt2: {
            title: 'Hackathon Grading App Design',
            image: 'images/gradingapp.jpg',
            description: 'A design for the hackathon scoring app',
            process: 'This app was created as a group project for the hackathon scoring in my school. I was responsible for the prototype, design and front-end coding.',
            technologies: ['React', 'Node.js', 'Figma', 'Prototyping', 'HTML5', 'CSS3'],
            link: 'https://hindamine.ita.voco.ee/'
        },
        projekt3: {
            title: 'Memory Game',
            image: 'images/memorygame.jpg',
            description: 'A simple memory game with three different difficulties',
            process: 'This memory game was created as another group project. The inspiration came from the Youtube video where someone was building a memory game. It uses a simulated API to fetch data from the mock database for scoring.',
            technologies: ['React', 'Node.js', 'HTML5', 'CSS3'],
            link: 'https://github.com/KelliKirk/memory_game'
        },
        projekt4: {
            title: 'Northern Lights Login Form',
            image: 'images/loginform1.jpg',
            description: 'A login form inspired by Northern Lights',
            process: 'The inspiration for this login form came from seeing the Northern Lights. I created a simple login form and then added animations and styling to replicate the effect of Northern Lights.',
            technologies: ['HTML5', 'CSS3'],
            link: 'https://github.com/KelliKirk/Personal-Projects/tree/main/Coding%20practice'
        }
    };
    
    // Project modal functionality for Bootstrap-styled projects
    const projectThumbnails = document.querySelectorAll('.project-thumbnail');
    const projectModal = document.getElementById('projectModal');
    
    if (projectThumbnails.length > 0 && projectModal) {
        const modalTitle = document.getElementById('projectModalLabel');
        const modalImage = document.getElementById('modal-image');
        const modalDescription = document.getElementById('modal-description');
        const modalProcess = document.getElementById('modal-process');
        const modalTechList = document.getElementById('modal-tech-list');
        const modalLink = document.getElementById('modal-link');
        
        // Initialize Bootstrap modal
        let bsProjectModal = null;
        
        // Function to initialize the modal
        const initModal = () => {
            try {
                // Bootstrap 5 way
                bsProjectModal = new bootstrap.Modal(projectModal);
            } catch (e) {
                console.log("Error with Bootstrap 5 initialization, trying jQuery:", e);
                try {
                    // jQuery way (Bootstrap 4 and earlier)
                    $(projectModal).modal({
                        backdrop: true,
                        keyboard: true,
                        focus: true,
                        show: false
                    });
                } catch (e2) {
                    console.log("Both modal initializations failed:", e2);
                }
            }
        };
        
        // Initialize modal
        initModal();
        
        // Add click event to project thumbnails
        projectThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const projectId = this.dataset.project;
                const project = projectsDataBootstrap[projectId];
                
                if (project) {
                    modalTitle.textContent = project.title;
                    modalImage.src = project.image;
                    modalImage.alt = project.title;
                    modalDescription.textContent = project.description;
                    modalProcess.textContent = project.process;
                    
                    // Clear and populate tech list
                    modalTechList.innerHTML = '';
                    project.technologies.forEach(tech => {
                        const li = document.createElement('li');
                        li.textContent = tech;
                        modalTechList.appendChild(li);
                    });
                    
                    modalLink.href = project.link;
                    modalLink.textContent = 'View Project';
                    
                    // Show modal
                    if (bsProjectModal) {
                        // Bootstrap 5 way
                        bsProjectModal.show();
                    } else {
                        try {
                            // jQuery way
                            $(projectModal).modal('show');
                        } catch (e) {
                            // Fallback direct DOM manipulation
                            projectModal.classList.add('show');
                            projectModal.style.display = 'block';
                            document.body.classList.add('modal-open');
                            
                            // Create backdrop if needed
                            if (!document.querySelector('.modal-backdrop')) {
                                const backdrop = document.createElement('div');
                                backdrop.className = 'modal-backdrop fade show';
                                document.body.appendChild(backdrop);
                            }
                        }
                    }
                }
            });
            
            // Add hover animation
            thumbnail.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.querySelector('.project-overlay').style.opacity = '1';
            });
            
            thumbnail.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.querySelector('.project-overlay').style.opacity = '0';
            });
        });
        
        // Fix for modal closing
        const closeModal = () => {
            if (bsProjectModal) {
                // Bootstrap 5 way
                bsProjectModal.hide();
            } else {
                try {
                    // jQuery way
                    $(projectModal).modal('hide');
                } catch (e) {
                    // Manual DOM manipulation if all else fails
                    projectModal.classList.remove('show');
                    projectModal.style.display = 'none';
                    document.body.classList.remove('modal-open');
                    
                    // Remove backdrop
                    const backdrop = document.querySelector('.modal-backdrop');
                    if (backdrop) backdrop.parentNode.removeChild(backdrop);
                }
            }
        };
        
        // Find and bind all close triggers
        const closeButtons = projectModal.querySelectorAll('[data-bs-dismiss="modal"], .btn-close, .btn-secondary');
        closeButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                closeModal();
            });
        });
        
        // Close modal when clicking outside
        projectModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        // Add escape key listener for modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && projectModal.classList.contains('show')) {
                closeModal();
            }
        });
    }
    
    // Bootstrap modals for About page
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    // Make guidance notes clickable and handle hover effects
    const guidanceNotes = document.querySelectorAll('.guidance-note.clickable');
    
    guidanceNotes.forEach(note => {
        // Add click event to open the modal
        note.addEventListener('click', function() {
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
        
        // Add hover event listeners for highlighting
        note.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        note.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
    
    // Make guidance notes initially visible, then fade after 3 seconds
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
    
    const guidanceNotes2 = document.querySelectorAll('.guidance-note');
    guidanceNotes2.forEach(note => {
        note.style.cursor = 'pointer';
    });
    
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
    
    // Navigation arrows page turning effect
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
    
    // Skills progress bar animation
    const animateSkills = () => {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        if (progressBars.length > 0) {
            progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-skill') + '%';
                
                // Set initial width to 0
                bar.style.width = '0%';
                
                // Animate to target width with slight delay for each bar
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 300);
            });
        }
    };
    
    // Check if we're on the skills page
    if (document.querySelector('.skills-board')) {
        // Trigger animation when page loads
        window.addEventListener('load', animateSkills);
        
        // Also animate on scroll into view for mobile
        const skillsBoard = document.querySelector('.skills-board');
        const checkIfInView = () => {
            const rect = skillsBoard.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
            
            if (inView) {
                animateSkills();
                window.removeEventListener('scroll', checkIfInView);
            }
        };
        
        window.addEventListener('scroll', checkIfInView);
        checkIfInView(); // Check once on load
    }
});