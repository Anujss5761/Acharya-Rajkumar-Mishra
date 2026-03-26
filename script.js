
    const reviews = [
    {
        side: {
            name: "Ritika Sharma",
            role: "Software Engineer",
            rating: "★★★★★",
            score: "(4.9)",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        main: {
            name: "Amit Verma",
            role: "Business Owner",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "I consulted Acharya Rajkumar Mishra ji during a difficult phase in my business. His guidance was extremely accurate and helped me take the right decisions at the right time."
        },
        preview: {
            name: "Neha Gupta",
            role: "Teacher",
            image: "https://randomuser.me/api/portraits/women/45.jpg"
        }
    },
    {
        side: {
            name: "Saurabh Singh",
            role: "Bank Manager",
            rating: "★★★★★",
            score: "(4.8)",
            image: "https://randomuser.me/api/portraits/men/76.jpg"
        },
        main: {
            name: "Pooja Mishra",
            role: "Homemaker",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "Acharya ji’s predictions about my marriage were completely correct. His remedies were simple and effective. I feel much more positive and confident now."
        },
        preview: {
            name: "Rohit Tiwari",
            role: "Civil Engineer",
            image: "https://randomuser.me/api/portraits/men/54.jpg"
        }
    },
    {
        side: {
            name: "Kavita Yadav",
            role: "HR Manager",
            rating: "★★★★★",
            score: "(4.7)",
            image: "https://randomuser.me/api/portraits/women/52.jpg"
        },
        main: {
            name: "Deepak Pandey",
            role: "Entrepreneur",
            image: "https://randomuser.me/api/portraits/men/41.jpg",
            text: "The consultation with Acharya Rajkumar Mishra ji gave me clarity about my career path. His advice felt genuine, practical, and deeply insightful."
        },
        preview: {
            name: "Anjali Srivastava",
            role: "Student",
            image: "https://randomuser.me/api/portraits/women/33.jpg"
        }
    }
];

    const track = document.getElementById("reviewTrack");
    const dotsWrap = document.getElementById("reviewDots");
    const prevBtn = document.querySelector(".review-prev");
    const nextBtn = document.querySelector(".review-next");

    let currentIndex = 0;
    let autoSlide;

    function createSlides() {
      track.innerHTML = "";
      dotsWrap.innerHTML = "";

      reviews.forEach((item, index) => {
        const slide = document.createElement("div");
        slide.className = "review-slide";
        slide.innerHTML = `
          <div class="review-side-card">
            <div class="review-side-top">
              <img src="${item.side.image}" alt="${item.side.name}">
              <div class="review-stars">${item.side.rating} <span>${item.side.score}</span></div>
            </div>
            <div class="review-side-bottom">
              <h4>${item.side.name}</h4>
              <p>${item.side.role}</p>
            </div>
          </div>

          <div class="review-main-card">
            <div class="review-main-image">
              <img src="${item.main.image}" alt="${item.main.name}">
              <div class="review-main-image-text">
                <h4>${item.main.name}</h4>
                <p>${item.main.role}</p>
              </div>
            </div>

            <div class="review-main-content">
              <div class="review-quote-mark">“</div>
              <p class="review-text">${item.main.text}</p>
              <div class="review-meta">
                <span>[FIRST]</span>
                <span>[PRESENT]</span>
                <span class="review-count">${String(index + 1).padStart(2, "0")}</span>
              </div>
            </div>
          </div>

          <div class="review-preview-card">
            <img src="${item.preview.image}" alt="${item.preview.name}">
            <div class="review-preview-overlay">
              <h4>${item.preview.name.replace(" ", "<br>")}</h4>
              <p>${item.preview.role}</p>
            </div>
          </div>
        `;
        track.appendChild(slide);

        const dot = document.createElement("button");
        dot.className = "review-dot";
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
          currentIndex = index;
          updateSlider();
          resetAutoSlide();
        });
        dotsWrap.appendChild(dot);
      });
    }

    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      document.querySelectorAll(".review-dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % reviews.length;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      updateSlider();
    }

    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlide);
      startAutoSlide();
    }

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    createSlides();
    updateSlider();
    startAutoSlide();
