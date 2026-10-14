# Around the U.S. | Authentication & Authorization 🔐

A web application built with **React and JavaScript**, featuring front-end authentication and authorization, profile management, image publishing, and interactive cards.

This project is part of **Sprint 17 of TripleTen's Full-Stack Web Development Bootcamp**. It builds on *Around the U.S.*, initially developed with JavaScript and later migrated to React.

In this sprint, the application gained a complete front-end authentication flow, including registration and login, JWT storage and verification, protected routes, session management, and responsive desktop and mobile interfaces.

## 🚀 Features

### 🔐 Authentication and authorization

- **User registration:** account creation through TripleTen's authentication API.
- **Login:** authentication with email and password.
- **JWT authentication:** receiving and handling JSON Web Tokens.
- **Session persistence:** storing the token in `localStorage`.
- **Token verification:** validating a stored JWT by making an API request.
- **Protected routes:** restricting the main page to authenticated users.
- **Redirection:** navigation among registration, login, and protected content.
- **Logout:** ending the session and removing the stored token.
- **Invalid authentication handling:** ending the session when token verification fails.
- **Loading state:** displaying a loading interface during the initial authentication check.

### 👤 Profile management

Features developed in previous sprints and retained in this version:

- View profile information.
- Edit the user's name and description.
- Update the profile avatar.
- Synchronize changes with the API.
- Share user data across components using React Context API.

### 🖼️ Card management

- Display cards retrieved from the API.
- Create cards with a title and image URL.
- Delete cards.
- Like and unlike cards.
- Open images in enlarged popups.
- Update the interface after API operations.
- Reuse React components to render cards.

### 💬 Visual feedback with InfoTooltip

A reusable component provides feedback during the registration process:

- **Success:** visual confirmation of successful registration.
- **Error:** a message indicating that the operation could not be completed.
- Distinct icons for each outcome.
- A popup with a close button.
- Desktop and mobile layouts.

### 📱 Responsive interface

The interface was implemented and adjusted using TripleTen's Figma designs.

Key implementations include:

- Responsive registration and login pages.
- Adapted font sizes, fields, buttons, and spacing.
- Mobile layout based on a 320px-wide design.
- CSS media queries.
- Reused CSS classes across components.
- Hover effects and smooth transitions on buttons and links.
- Responsive feedback popups.

**Interactive mobile menu**

A responsive menu was implemented in the authenticated header:

- Hamburger button built with HTML and CSS.
- Open/close state managed with `useState`.
- Conditional CSS classes.
- Visual switch from the hamburger icon to a close icon.
- Display of the authenticated user's email.
- Access to the logout action.
- Vertical arrangement of menu items when expanded.
- `aria-label` and `aria-expanded` attributes to improve accessibility.

The menu keeps authentication controls organized on smaller screens without sacrificing navigation.

## 🛠️ Tech stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic interface structure |
| CSS3 | Styling, Flexbox, responsiveness, and transitions |
| JavaScript (ES6+) | Application logic and asynchronous operations |
| React | Component-based UI development |
| React Router | Navigation, redirects, and protected routes |
| React Hooks | State and effect management |
| Context API | Sharing user information across components |
| Fetch API | HTTP communication with external services |
| REST APIs | Authentication, profile, and card integrations |
| JWT | Token-based authentication |
| localStorage | Persisting the token in the browser |
| Vite | Development environment and production builds |
| ESLint | Static code analysis |
| Git and GitHub | Version control and repository management |
| Figma | Visual design reference |

### React Hooks used

- **useState:** manages application state, forms, authentication, popups, and the mobile menu.
- **useEffect:** handles initialization effects and authentication verification.
- **useContext:** accesses information shared through context.
- **React Router navigation hooks:** manage navigation and redirects.

## 🏗️ Application architecture

The application uses a component-based React architecture that separates UI concerns, authentication, API communication, and state management.

### Main components

| Component | Responsibility |
|---|---|
| `App.jsx` | Coordinates routes, authentication, and main application state |
| `Header.jsx` | Header, session information, logout, and mobile menu |
| `Login.jsx` | Login form interface |
| `Register.jsx` | Registration form interface |
| `ProtectedRoute.jsx` | Restricts navigation to authenticated users |
| `InfoTooltip.jsx` | Success and error feedback |
| `LoadingScreen.jsx` | Loading interface during initialization |
| `Main.jsx` | Main application content |
| `Card.jsx` | Card rendering and interactions |
| `Popup.jsx` | Reusable popup structure |

Additional components manage profile editing, avatar updates, card creation, and enlarged image previews.

### Project structure

```text
web_project_around_auth/
├── public/
├── src/
│   ├── assets/
│   ├── blocks/
│   │   ├── auth.css
│   │   ├── header.css
│   │   ├── info-tooltip.css
│   │   ├── loading-screen.css
│   │   └── ... other styles
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Header/
│   │   ├── InfoTooltip/
│   │   ├── LoadingScreen/
│   │   ├── Login/
│   │   ├── Main/
│   │   ├── ProtectedRoute/
│   │   └── Register/
│   ├── contexts/
│   ├── hooks/
│   ├── images/
│   ├── utils/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── token.js
│   ├── vendor/
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

This structure separates responsibilities and supports maintainability and future development.

## 🌐 API integration

Sprint 17 temporarily uses **two independent APIs** with different responsibilities.

### 1. TripleTen authentication API

Handles registration, login, and authentication verification.

**Base URL:**

`https://se-register-api.en.tripleten-services.com/v1`

| Endpoint | Method | Purpose |
|---|---|---|
| `/signup` | POST | Register a user |
| `/signin` | POST | Authenticate and receive a JWT |
| `/users/me` | GET | Verify the token and retrieve the authenticated user |

Authentication verification sends the token in the request header:

```http
Authorization: Bearer <token>
```

Authentication-related functions are organized in `src/utils/auth.js`.

The `src/utils/token.js` module centralizes token storage and retrieval operations.

### 2. Original Around API

The API used in the earlier React project remains responsible for the application's primary features:

- Retrieving profile information.
- Updating name and description.
- Updating the avatar.
- Retrieving cards.
- Creating and deleting cards.
- Liking and unliking cards.

These requests remain organized in `src/utils/api.js`.

**Important:** The original integration uses its own access credential, independent of the JWT returned by Sprint 17's authentication service.

As a result, user authentication and authorization for Around API operations are **not yet unified** in this version.

This separation is temporary and reflects the project's progression through the bootcamp.

## 🔄 Authentication flow

### Registration

1. The user opens `/signup`.
2. They enter their email and password.
3. React passes the data to the appropriate handler in `App`.
4. The application sends a request to the authentication API.
5. The response is processed.
6. `InfoTooltip` displays the result.

### Login

1. The user opens `/signin`.
2. They enter their credentials.
3. The application sends an authentication request.
4. The API verifies the credentials and returns a JWT on success.
5. The token is saved in `localStorage`.
6. The authentication state is updated.
7. The user gains access to the protected main page.

### Session persistence

When the application starts or reloads:

1. It checks for a stored token.
2. If a token exists, the application requests verification from the authentication API.
3. If it is valid, the authenticated state is restored.
4. If it is invalid, the session is ended.
5. A loading interface prevents protected content from appearing prematurely.

### Logout

1. The user chooses **Log out**.
2. The stored token is removed.
3. Authentication state is updated.
4. Navigation returns to the public authentication flow.

## 🧭 Application routes

| Route | Access | Description |
|---|---|---|
| `/signup` | Public | User registration |
| `/signin` | Public | Login |
| `/` | Protected | Main page with profile and cards |

`ProtectedRoute` uses the authentication state to control access to protected content.

Unauthenticated users are redirected to the login flow.

## 🔒 Security and technical considerations

The application demonstrates web security concepts covered during Sprint 17:

- JWT-based authentication.
- API-based session verification.
- React route protection.
- Authentication state management.
- Token removal on logout.
- HTTPS communication with the authentication API.
- Handling success and error responses.
- Appropriate password fields in forms.

### Current limitations

This project is an **educational front-end authentication implementation**.

Storing JWTs in `localStorage` requires careful XSS prevention because scripts running within the application's origin can access that storage.

Additionally, React route protection is a UI access-control mechanism. It does **not** replace server-side authorization checks.

Because the original Around API uses a separate credential, invalidating the login JWT does not automatically block operations performed through that other API.

A production implementation should enforce authentication and authorization on the back-end that protects the actual resources.

Future bootcamp stages will support integration with a custom back-end built using Node.js and Express.

## 💻 Running the project locally

### Requirements

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/adrielfunini16/web_project_around_auth.git
```

### 2. Enter the project directory

```bash
cd web_project_around_auth
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

With the configuration used during development, the application is available at:

`http://localhost:3000/web_project_around_auth/`

### 5. Create a production build

```bash
npm run build
```

Vite compiles and optimizes the production files into the `dist/` directory.

### 6. Preview the production build

```bash
npm run preview
```

### 7. Run static analysis

```bash
npm run lint
```

ESLint analyzes the source code and reports potential errors or code-quality warnings.

## 🧪 Testing and verification

The application was manually tested using the browser, Chrome DevTools, and HTTP request inspection.

### Verified functionality

- [x] Navigation between registration and login.
- [x] Successful user registration.
- [x] Error feedback for failed registration.
- [x] Login with valid credentials.
- [x] JWT storage in `localStorage`.
- [x] Authentication persistence and verification.
- [x] Rejection of an invalid token during verification.
- [x] Logout.
- [x] Protection of the main page.
- [x] Loading profile information.
- [x] Editing user information.
- [x] Updating the avatar.
- [x] Loading cards.
- [x] Creating cards.
- [x] Deleting cards.
- [x] Liking and unliking cards.
- [x] Popup interactions.
- [x] Desktop and mobile login and registration layouts.
- [x] Mobile InfoTooltip display.
- [x] Opening and closing the mobile menu.
- [x] Displaying the email and logout option in the menu.
- [x] Running the development environment with `npm run dev`.
- [x] Generating the production build with `npm run build`.

Testing was performed manually.

**Automated tests are not yet part of this implementation.** Automated testing will be explored in upcoming stages of study.

## 🎨 Design and user experience

The interface follows the Figma references provided by TripleTen.

The project uses:

- Modular CSS.
- BEM naming conventions.
- Flexbox layouts.
- Media queries.
- Reusable components.
- Visual interaction states.
- Authentication feedback.
- Responsive content organization.
- Mobile-friendly navigation.

Chrome DevTools was used extensively to inspect and compare dimensions, alignment, spacing, and responsive behavior against the Figma designs.

## 📈 Project evolution

Around the U.S. has evolved through multiple bootcamp stages:

**Vanilla JavaScript → React → Front-end authentication**

### Previous stages

- Building the interface with HTML and CSS.
- Adding interactivity with JavaScript.
- Integrating a REST API.
- Migrating the application to React components.
- Managing state with Hooks.
- Sharing data through Context API.
- Managing cards and profile information.
- Integrating forms and popups.

### Sprint 17

- Registration and login implementation.
- Authentication API integration.
- JWT storage and management.
- Session verification and persistence.
- Protected routes with React Router.
- Authentication-specific components.
- Visual feedback with InfoTooltip.
- Authentication loading state.
- Logout functionality.
- Responsive authentication pages.
- State-controlled mobile menu.

### Future improvements

- Integrate the custom Node.js and Express back-end.
- Unify authentication and authorization for protected operations.
- Expand coverage with automated tests.
- Add further security and user-experience improvements.

## 👨‍💻 Author

**Adriel Funini**

Full-Stack Developer in training, focused on JavaScript, React, Node.js, Express, and web application development.

This project is part of my portfolio and demonstrates my progress in front-end development, API integration, and web application security.

**GitHub:** [adrielfunini16](https://github.com/adrielfunini16)

**Repository:** [web_project_around_auth](https://github.com/adrielfunini16/web_project_around_auth)

---

Developed as part of **Sprint 17 of TripleTen's Full-Stack Web Development Bootcamp**.
