document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navItems = document.querySelectorAll('.nav-item');

    // Add click event to all nav items to close menu when clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });

        // Add hover animation
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Update active states for navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

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
            process: 'This app was created as part of a group project for a school hackathon scoring system. I was responsible for the prototype, UI/UX design, and front-end development. Throughout the process, we explored several design iterations before finalizing the user flow and visual direction. These early concepts played a key role in shaping the final product. You can view the complete design(s) in Figma link below.',
            technologies: ['React', 'Node.js', 'Figma', 'Prototyping', 'HTML5', 'CSS3'],
            link: 'https://hindamine.ita.voco.ee/',
            figmaLink: 'https://www.figma.com/design/svKRdvXzMuxOq4owvzACBW/K%C3%BCberk%C3%BCpsetus?node-id=69-2&t=z5SY3MiH0gTtAaUw-1',
            additionalImages: [
                {
                    src: 'images/gradingandteams.png',
                    alt: 'Grading teams interface'
                },
                {
                    src: 'images/resultspage.png',
                    alt: 'Results page interface'
                }
            ]
        },
        projekt3: {
            title: 'Memory Game',
            image: 'images/memorygame.jpg',
            description: 'A simple memory game with three different difficulties',
            process: 'This memory game was created as another group project. The inspiration came from the Youtube video where someone was building a memory game. It uses a simulated API to fetch data from the mock database for scoring. A player can select the difficulty and the number of cards to play.',
            technologies: ['React', 'Node.js', 'HTML5', 'CSS3'],
            link: 'https://github.com/KelliKirk/memory_game',
            additionalImages: [
                {
                    src: 'images/raskusaste.png',
                    alt: 'Memory Game difficulty and card selection'
                }
            ]
        },
        projekt4: {
            title: 'Cartehnik Website',
            image: 'images/cartehnik.png',
            description: 'A website for a real body shop',
            process: 'The project was a part of school curriculum where we had to make a website for a real client, using CMS. It was a group project and my responsibility was setting up the website, creating a layout and content using Blocksy theme. The buttons were styled with additional CSS and the site uses multiple plugins.',
            technologies: ['WordPress', 'Blocksy', 'CSS3', 'WordPress plugins', 'AI image generation'],
            link: 'https://vso24kirk.ita.voco.ee/wordpresskliendiprojekt/'
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
        const bsProjectModal = new bootstrap.Modal(projectModal);
        
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
                    
                    // Handle Figma link if available
                    const modalFigmaLink = document.getElementById('modal-figma-link');
                    if (project.figmaLink && modalFigmaLink) {
                        modalFigmaLink.href = project.figmaLink;
                        modalFigmaLink.style.display = 'inline-block';
                    } else if (modalFigmaLink) {
                        modalFigmaLink.style.display = 'none';
                    }
                    
                    // Handle additional images if available
                    const additionalImagesContainer = document.getElementById('additional-images');
                    if (additionalImagesContainer) {
                        additionalImagesContainer.innerHTML = '';
                        
                        if (project.additionalImages && project.additionalImages.length > 0) {
                            project.additionalImages.forEach(img => {
                                const imgCol = document.createElement('div');
                                imgCol.className = 'col-6 col-sm-6 mt-2';
                                
                                const imgElement = document.createElement('img');
                                imgElement.src = img.src;
                                imgElement.alt = img.alt;
                                imgElement.className = 'img-fluid thumbnail';
                                
                                imgElement.setAttribute('aria-label', 'Click to enlarge ' + img.alt);
                                
                                imgElement.addEventListener('click', function() {
                                    modalImage.src = this.src;
                                    modalImage.alt = this.alt;
                                    
                                    const allThumbnails = additionalImagesContainer.querySelectorAll('.thumbnail');
                                    allThumbnails.forEach(thumb => thumb.classList.remove('active-thumbnail'));
                                    this.classList.add('active-thumbnail');
                                    
                                    if (window.innerWidth < 768) {
                                        modalImage.scrollIntoView({ behavior: 'smooth' });
                                    }
                                });
                                
                                imgCol.appendChild(imgElement);
                                additionalImagesContainer.appendChild(imgCol);
                            });
                        }
                    }
                    
                    // Show modal
                    bsProjectModal.show();
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
    
    // Make guidance notes initially visible, then fade after 6 seconds
    guidanceNotes.forEach(note => {
        note.classList.add('visible');
        
        setTimeout(() => {
            note.classList.remove('visible');
        }, 10000);
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

    // Contact form validation and mailto functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Initialize EmailJS
        emailjs.init('9ROJi4Dp3erAuhnos'); // Your public key

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const btn = document.querySelector('.btn-submit');
            btn.disabled = true;
            btn.textContent = 'Sending...';

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Prepare the email template parameters
            const templateParams = {
                to_name: 'Kelli Kirk',
                from_name: name,
                from_email: email,
                message: message,
                reply_to: email
            };

            emailjs.send('service_5hvgq37', 'template_0g9ky87', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById('success-message').style.display = 'block';
                    document.getElementById('error-message').style.display = 'none';
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    document.getElementById('error-message').style.display = 'block';
                    document.getElementById('success-message').style.display = 'none';
                })
                .finally(() => {
                    btn.disabled = false;
                    btn.textContent = 'Send Message';
                });
        });
    }

    // Rotation notification functionality
    const rotationNotification = document.getElementById('rotation-notification');
    const dismissButton = document.getElementById('dismiss-rotation');
    let rotationDismissed = sessionStorage.getItem('rotationDismissed') === 'true';
    
    // Function to check orientation and show notification
    function checkOrientation() {
        // Only show on about page
        if (!window.location.pathname.includes('about.html')) {
            return;
        }
        
        // Check if we're on mobile and in portrait mode
        if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
            if (!rotationDismissed) {
                rotationNotification.classList.add('show');
            }
        } else {
            rotationNotification.classList.remove('show');
        }
    }
    
    // Dismiss button
    if (dismissButton) {
        dismissButton.addEventListener('click', function() {
            rotationNotification.classList.remove('show');
            rotationDismissed = true;
            sessionStorage.setItem('rotationDismissed', 'true');
        });
    }
    
    // Check on page load and orientation change
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);
    
    // Initial check
    checkOrientation();
    
    // Recheck orientation after a small delay to handle mobile devices
    setTimeout(checkOrientation, 10000);
});