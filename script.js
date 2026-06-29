function filterCourse(category)
{
    let courses = document.querySelectorAll(".course");
    courses.forEach(course =>
    {
        if(category === "all")
        {
            course.style.display = "block";
        }
        else
        {
            if(course.classList.contains(category))
            {
                course.style.display = "block";
            }
            else
            {
                course.style.display = "none";
            }
        }
    });
}
const counters = document.querySelectorAll(".counter");
const observer = new IntersectionObserver(entries =>
{
    entries.forEach(entry =>
    {
        if(entry.isIntersecting)
        {
            const counter = entry.target;
            const target = +counter.dataset.target;
            let count = 0;
            const updateCounter = () =>
            {
                let increment = target / 100;
                if(count < target)
                {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, 20);
                }
                else
                {
                    counter.innerText = target;
                }
            };
            updateCounter();
            observer.unobserve(counter);
        }
    });
});
counters.forEach(counter =>
{
    observer.observe(counter);
});
function sortTable(column)
{
    let table = document.getElementById("courseTable");
    let rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) =>
    {
        let x = a.cells[column].innerText;
        let y = b.cells[column].innerText;
        if(!isNaN(x) && !isNaN(y))
        {
            return x - y;
        }
        return x.localeCompare(y);
    });
    rows.forEach(row =>
    {
        table.appendChild(row);
    });
}
const galleryImages =
document.querySelectorAll(".gallery-container img");
const lightbox =
document.querySelector(".lightbox");
const lightboxImg =
document.querySelector(".lightbox-img");
const closeBtn =
document.querySelector(".close");
galleryImages.forEach(image =>
{
    image.addEventListener("click", () =>
    {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
    });
});
closeBtn.addEventListener("click", () =>
{
    lightbox.style.display = "none";
});
lightbox.addEventListener("click", e =>
{
    if(e.target === lightbox)
    {
        lightbox.style.display = "none";
    }
});
document.addEventListener("keydown", e =>
{
    if(e.key === "Escape")
    {
        lightbox.style.display = "none";
    }
});
const form =
document.getElementById("contactForm");
form.addEventListener("submit", e =>
{
    e.preventDefault();
    let name =
    document.getElementById("name").value.trim();
    let email =
    document.getElementById("email").value.trim();
    let subject =
    document.getElementById("subject").value.trim();
    let message =
    document.getElementById("message").value.trim();
    if(
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    )
    {
        alert("Please fill all fields");
        return;
    }
    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email))
    {
        alert("Enter a valid email");
        return;
    }
    alert("Form Submitted Successfully");
    form.reset();
});
const sections =
document.querySelectorAll("section");
const navLinks =
document.querySelectorAll(".navbar a");
window.addEventListener("scroll", () =>
{
    let current = "";
    sections.forEach(section =>
    {
        const sectionTop =
        section.offsetTop - 100;
        if(pageYOffset >= sectionTop)
        {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link =>
    {
        link.classList.remove("active");
        if(
            link.getAttribute("href")
            === "#" + current
        )
        {
            link.classList.add("active");
        }
    });
});
