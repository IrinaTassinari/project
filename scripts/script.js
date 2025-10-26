// --- 1. Ждём, пока загрузится вся страница ---
document.addEventListener("DOMContentLoaded", () => {
  // --- 2. Инициализация анимации WOW.js ---
  new WOW({
    boxClass: "wow", // класс элементов для анимации
    animateClass: "animate__animated",
    offset: 100, // запуск анимации за 100px до появления
    mobile: true, // включить на мобильных
    live: true, // обновлять при динамической загрузке контента
  }).init();

  // --- 3. Навигационные кнопки (переходы между страницами) ---
  const btnsGoForward = document.querySelectorAll(".go-forward");
  btnsGoForward.forEach((btn) =>
    btn.addEventListener("click", () => {
      window.location.href = "./index2.html";
    })
  );

  const btnsGray = document.querySelectorAll(".btn-gray");
  btnsGray.forEach((btn) =>
    btn.addEventListener("click", () => {
      window.location.href = "./index2.html";
    })
  );

  const btnGoBack = document.getElementById("btn-go-back");
  if (btnGoBack) {
    btnGoBack.addEventListener("click", () => {
      window.location.href = "./index.html";
    });
  }

  const btnGoBack01 = document.getElementById("btn-go-back01");
  if (btnGoBack01) {
    btnGoBack01.addEventListener("click", () => {
      window.location.href = "./index.html";
    });
  }

  // --- 4. Модальное окно ---
  const modalBtn = document.querySelector("#modalBtn");
  if (modalBtn) {
    modalBtn.addEventListener("click", createModal);
  }

  // --- 5. Инициализация фильтра событий (только если есть фильтры на странице) ---
  const hasFilters = document.querySelector("#typeFilter");
  if (hasFilters) {
    new EventFilter();
  }
});

// --- 6. Функция создания модального окна ---
function createModal() {
  const modalDiv = document.createElement("div");
  const modalForm = document.createElement("form");
  const btnCloseModal = document.createElement("button");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const btnSubmit = document.createElement("button");
  const labelName = document.createElement("label");
  const inputName = document.createElement("input");
  const labelTel = document.createElement("label");
  const inputTel = document.createElement("input");
  const labelEmail = document.createElement("label");
  const inputEmail = document.createElement("input");
  const labelCompany = document.createElement("label");
  const inputCompany = document.createElement("input");
  const divForLabelInput = document.createElement("div");
  const imagePlusForm = document.createElement("div");

  h3.innerText = "Registration form";
  btnCloseModal.innerText = "close";
  img.src = "./images/upload-photo.jpg";
  labelName.innerText = "Username";
  labelTel.innerText = "Telefon number";
  labelEmail.innerText = "Email";
  labelCompany.innerText = "Password";
  btnSubmit.innerText = "Sign up";
  btnSubmit.type = "submit";

  modalDiv.classList.add("modal", "active");
  modalForm.classList.add("modal_content");
  btnCloseModal.classList.add("btnCloseModal");
  btnSubmit.classList.add("btnSubmit");
  h3.classList.add("h3-modal");
  img.classList.add("image-modal");
  [inputName, inputTel, inputEmail, inputCompany].forEach((i) =>
    i.classList.add("input-modal")
  );
  [labelName, labelTel, labelEmail, labelCompany].forEach((l) =>
    l.classList.add("label-modal")
  );
  divForLabelInput.classList.add("divForLabelInput");
  imagePlusForm.classList.add("imagePlusForm");

  divForLabelInput.append(
    labelName,
    inputName,
    labelTel,
    inputTel,
    labelEmail,
    inputEmail,
    labelCompany,
    inputCompany,
    btnSubmit
  );
  imagePlusForm.append(img, divForLabelInput);
  modalForm.append(btnCloseModal, h3, imagePlusForm);
  modalDiv.append(modalForm);
  document.body.append(modalDiv);

  btnCloseModal.addEventListener("click", () => modalDiv.remove());
  modalDiv.addEventListener("click", (event) => {
    if (event.target === modalDiv) modalDiv.remove();
  });
}

// --- 7. Данные событий ---
const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and CustomerExperience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];

// --- 8. Класс фильтрации событий ---
class EventFilter {
  constructor() {
    this.events = [...eventsStore];
    this.filteredEvents = [...this.events];
    this.filters = { type: "", distance: "", category: "" };
    this.init();
  }

  init() {
    this.bindEvents();
    this.renderEvents();
  }

  bindEvents() {
    const typeFilter = document.querySelector("#typeFilter");
    const filterDistance = document.querySelector("#filterDistance");
    const categoryFilter = document.querySelector("#categoryFilter");

    [typeFilter, filterDistance, categoryFilter].forEach((item) => {
      item.addEventListener("change", (e) => this.handleFilterChange(e));
    });
  }

  handleFilterChange(e) {
    const { id, value } = e.target;
    this.filters[id.replace("Filter", "")] = value;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredEvents = this.events.filter((event) => {
      const typeMatch = !this.filters.type || event.type === this.filters.type;
      const distanceMatch =
        !this.filters.distance ||
        event.distance <= parseInt(this.filters.distance);
      const categoryMatch =
        !this.filters.category || event.category === this.filters.category;
      return typeMatch && distanceMatch && categoryMatch;
    });
    this.renderEvents();
  }

  renderEvents() {
    const eventList = document.querySelector("#eventList");
    if (!eventList) return;

    if (this.filteredEvents.length === 0) {
      eventList.innerHTML = `
        <div class="no-events">
          <div class="no-events-icon">🔍</div>
          <p>No events found</p>
        </div>`;
      return;
    }

    eventList.innerHTML = this.filteredEvents
      .map((item) => this.createEventCard(item))
      .join("");
  }

  createEventCard(event) {
    const formatDate = (date) =>
      date.toLocaleDateString("en-EN", {
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
      });

    return `
      <div class="event-card wow animate__fadeInUp">
        <img src="${event.image}" alt="${event.title}" class="event-image" loading="lazy">
        <div class="event-content">
          <h3 class="event-title">${event.title}</h3>
          <p class="event-description">${event.description}</p>
          <div class="event-meta">
            <span class="event-badge ${event.type}">${event.type}</span>
            <span class="event-badge category">${event.category}</span>
          </div>
          <div class="event-date">📅 ${formatDate(event.date)}</div>
          ${
            event.attendees
              ? `<div class="event-attendees">👥 ${event.attendees} attendees</div>`
              : ""
          }
          <div class="event-attendees">📍 ${event.distance} km</div>
        </div>
      </div>
    `;
  }
}















// new WOW().init();

// new WOW({
//   boxClass: "wow", // класс элементов для анимации
//   animateClass: "animate__animated",
//   offset: 100, // на сколько пикселей до появления элемента запускать анимацию
//   mobile: true, // включить на мобильных
//   live: true, // обновлять при динамической загрузке контента
// }).init();

// const btnsGoForward = document.querySelectorAll(".go-forward");
// btnsGoForward.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     window.location.href = "./index2.html";
//   });
// });


// const btnsGray = document.querySelectorAll(".btn-gray");
// btnsGray.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     window.location.href = "./index2.html";
//   });
// });


// const btnGoBack = document.getElementById("btn-go-back");
// if (btnGoBack) {
//   btnGoBack.addEventListener("click", () => {
//     window.location.href = "./index.html";
//   });
// }

// const btnGoBack01 = document.getElementById("btn-go-back01");
// if (btnGoBack01) {
//   btnGoBack01.addEventListener("click", () => {
//     window.location.href = "./index.html";
//   });
// }

// const modalBtn = document.querySelector('#modalBtn')

// function createModal(){
//     const modalDiv = document.createElement("div");
//     const modalForm = document.createElement("form");
//     const btnCloseModal = document.createElement("button");
//     const h3 = document.createElement("h3");
//     const img = document.createElement('img')
//     const btnSubmit = document.createElement('button');
//     const labelName = document.createElement('label')
//     const inputName = document.createElement('input')
//     const labelTel = document.createElement('label')
//     const inputTel = document.createElement('input')
//     const labelEmail = document.createElement('label')
//     const inputEmail = document.createElement('input')
//     const labelCompany = document.createElement('label')
//     const inputCompany = document.createElement('input')
//     const divForLabelInput = document.createElement('div')
//     const imagePlusForm = document.createElement('div')

//     h3.innerText = 'Registration form';
//     btnCloseModal.innerText = "close";
//     img.src = './images/upload-photo.jpg';
//     labelName.innerText= 'Username'
//     labelTel.innerText = 'Telefon number'
//     labelEmail.innerText = 'Email'
//     labelCompany.innerText = 'Password'
    
    
//     modalDiv.classList.add("modal");
//     modalDiv.classList.add("active");
//     modalForm.classList.add("modal_content");
//     btnCloseModal.classList.add("btnCloseModal");
//     modalBtn.classList.add("btn-red01");
//     btnSubmit.classList.add('btnSubmit')
//     h3.classList.add('h3-modal')
//     img.classList.add('image-modal')
//     inputName.classList.add('input-modal')
//     inputTel.classList.add('input-modal')
//     inputEmail.classList.add('input-modal')
//     inputCompany.classList.add('input-modal')
//     labelName.classList.add('label-modal')
//     labelTel.classList.add('label-modal')
//     labelEmail.classList.add('label-modal')
//     labelCompany.classList.add('label-modal')
//     divForLabelInput.classList.add('divForLabelInput')
//     imagePlusForm.classList.add('imagePlusForm')

//     btnSubmit.innerText = 'Sign up';
//     btnSubmit.type = 'submit';

//     // InputDeviceInfo.value= event EventTarget.value

//     divForLabelInput.append(labelName,inputName,labelTel,inputTel,labelEmail,inputEmail,labelCompany,inputCompany,btnSubmit)
//     imagePlusForm.append(img,divForLabelInput)
//     modalForm.append(btnCloseModal,h3,imagePlusForm);
//     modalDiv.append(modalForm);
//     document.body.append(modalDiv);

//     modalBtn.addEventListener('click', () => {
//     modalDiv.remove();
//   })

//     modalDiv.addEventListener("click", (event) => {
//     if (event.target === modalDiv) modalDiv.remove();
//   });
// }

// modalBtn.addEventListener("click", () => {
//   createModal();
// });

// // Если ты подключил один и тот же script.js на обе страницы (index.html и index2.html),
// // то на первой странице кнопки btn-go-back нет → появляется ошибка.

// const eventsStore = [
//   {
//     title: "INFJ Personality Type - Coffee Shop Meet & Greet",
//     description: "Being an INFJ",
//     date: new Date(2024, 2, 23, 15),

//     image:
//       "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
//     type: "offline",
//     attendees: 99,

//     category: "Hobbies and Passions",
//     distance: 50,
//   },
//   {
//     title:
//       "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and CustomerExperience",
//     description: "New York AI Users",
//     date: new Date(2024, 2, 23, 11, 30),

//     image:
//       "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
//     type: "offline",
//     attendees: 43,
//     category: "Technology",
//     distance: 25,
//   },
//   {
//     title: "Book 40+ Appointments Per Month Using AI and Automation",
//     description: "New Jersey Business Network",
//     date: new Date(2024, 2, 16, 14),

//     image:
//       "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     type: "online",
//     category: "Technology",
//     distance: 10,
//   },
//   {
//     title: "Dump writing group weekly meetup",
//     description: "Dump writing group",
//     date: new Date(2024, 2, 13, 11),

//     image:
//       "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     type: "online",

//     attendees: 77,
//     category: "Business",
//     distance: 100,
//   },
//   {
//     title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
//     description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
//     date: new Date(2024, 2, 14, 11),

//     image:
//       "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     type: "online",
//     attendees: 140,
//     category: "Social Activities",
//     distance: 74,
//   },
//   {
//     title: "All Nations - Manhattan Missions Church Bible Study",
//     description: "Manhattan Bible Study Meetup Group",
//     date: new Date(2024, 2, 14, 11),

//     image:
//       "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     type: "offline",
//     category: "Health and Wellbeing",
//     distance: 15,
//   },
// ];

// class EventFilter {
//   constructor() {
//     this.events = [...eventsStore];
//     this.filteredEvents = [...this.events];
//     this.filters = {
//       type: "",
//       distance: "",
//       category: "",
//     };
//     this.init();
//   }

//   init() {
//     this.bindEvents();
//     this.renderEvents();
//   }

//   bindEvents() {
//     const typeFilter = document.querySelector("#typeFilter");
//     const filterDistance = document.querySelector("#filterDistance");
//     const categoryFilter = document.querySelector("#categoryFilter");

//     [typeFilter, filterDistance, categoryFilter].forEach((item) => {
//       item.addEventListener("change", (e) => {
//         this.handleFilterChange(e);
//       });
//     });
//   }

//   handleFilterChange(e) {
//     const { id, value } = e.target;
//     switch (id) {
//       case "typeFilter":
//         this.filters.type = value;
//         break;
//       case "filterDistance":
//         this.filters.distance = value;
//         break;
//       case "categoryFilter":
//         this.filters.category = value;
//         break;
//     }
//     this.applyFilters();
//   }

//   applyFilters() {
//     this.filteredEvents = this.events.filter((event) => {
//       const typeMatch = !this.filters.type || event.type === this.filters.type;
//       const distanceMatch =
//         !this.filters.distance ||
//         event.distance <= parseInt(this.filters.distance);
//       const categoryMatch =
//         !this.filters.category || event.category === this.filters.category;

//       return typeMatch && distanceMatch && categoryMatch;
//     });
//     this.renderEvents();
//   }

//   renderEvents() {
//     const eventList = document.querySelector("#eventList");
//     if (this.filteredEvents.length === 0) {
//       eventList.innerHTML = `
//       <div class="no-events">
//         <div class="no-events-icon">🔍</div>
//         <p>События не найдены</p>
//       </div>`;
//       return;
//     }
//     eventList.innerHTML = this.filteredEvents
//       .map((item) => this.createEventCard(item))
//       .join("");
//   }

//   createEventCard(event) {
//     const formatDate = (date) => {
//       return date.toLocaleDateString("en-EN", {
//         day: "numeric",
//         month: "long",
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     };
//     const getTypeLabel = (type) => (type === "online" ? "online" : "offline");
//     return `
//     <div class="event-card">
//       <img src="${event.image}" alt="${
//       event.title
//     }" class="event-image" loading="lazy">
//           <div class="event-content">
//             <h3 class="event-title">${event.title}</h3>
//             <p class="event-description">${event.description}</p>
//               <div class="event-meta">
//                 <span class="event-badge ${event.type}">${getTypeLabel(
//       event.type
//     )}</span>
//                 <span class="event-badge category">${event.category}</span>
//               </div>
//               <div class="event-date">📅 ${formatDate(event.date)}</div>
//                 ${
//                   event.attendees
//                     ? `<div class="event-attendees">👥 ${event.attendees}  attendees </div>`
//                     : ""
//                 }
//               <div class="event-attendees">📍 ${event.distance} km</div>
//           </div>
//     </div>
//     `;
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   new EventFilter();
// });
