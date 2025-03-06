# Seven-Gym-Website-Plan

# Page Distribution

# 1. Navbar and Footer

## 1.1 Navbar

- **Page Description**:
  A responsive navigation bar that includes logo, role-based links, user profile options, and mobile drawer functionality. It provides smooth user interaction with submenus and dynamic role-based options.

- **Objective**:

  - Display navigation links based on the user’s role.
  - Provide a responsive design with mobile-friendly drawer.
  - Include user profile dropdown and logout functionality.
  - Handle dynamic display for submenu and login/logout.

- **Functionality**:

  - **Mobile Menu**: Display a collapsible menu for mobile users, accessible via a drawer.
  - **User Profile Dropdown**: Shows user-specific options like profile, tier upgrade, and schedule planner, based on their role.
  - **Role-based Navigation**: Links change according to the user’s role (Member, Admin, etc.).
  - **Scrolling Effect**: Navbar color changes based on scroll position.
  - **Logout**: Provides a logout option with loading feedback.

- **Suggestions**:
  - Implement smooth animations for menu and dropdown transitions.
  - Use icons for better UX in the mobile drawer for easy navigation.

### 1.1.1 Nav Drawer Component

- **Page Description**:
  A side drawer navigation menu designed for mobile view. It displays logo and navigation links, with submenu options for expanded categories.

- **Objective**:

  - Display navigation links in a mobile-friendly drawer.
  - Provide dropdown functionality for submenus.
  - Allow for role-based navigation with active link highlighting.

- **Functionality**:

  - **Submenu Toggle**: Allows for expanding and collapsing submenu items.
  - **Link Navigation**: Provides clear, role-based links with active state highlighting.
  - **Logo**: Displays logo at the top for brand recognition.

- **Suggestions**:
  - Consider adding icons next to menu items for better visual appeal.
  - Enhance the visual feedback when a submenu is toggled.

## 1.2 Footer

- **Page Description**:

  A responsive footer with sections for services, company info, and social media links. Includes smooth hover effects and adapts to both mobile and desktop views.

- **Objectives**:

  - Display social media and navigation links.
  - Responsive design for various screen sizes.
  - Hover and scale effects on social icons.

- **Functionality**:

  - **Social Media**: Links to platforms like Google, Facebook, Twitter, GitHub, LinkedIn.
  - **Services & Company Links**: Includes links to services (Branding, Design, etc.) and company info (About Us, Contact, etc.).
  - **Responsive**: Stacks sections vertically on mobile and horizontally on desktop.
  - **Hover Effects**: Icons scale and change color on hover.

- **Suggestions**:

  - Add smoother hover animations on icons.
  - Improve accessibility with better visual feedback.
  - Optimize mobile layout for easy navigation.
  - Ensure external links open in new tabs with proper attributes.

# 2.Authentication (Auth)

## 2.1 Login Page

- **Page Description**:
  A login page that authenticates users with email and password. It handles role-based redirection, guiding regular members to their profile and admins/managers to the dashboard.

- **Objective**:

  - Authenticate users via email and password.
  - Redirect regular members to their profile and admins/managers to the dashboard.

- **Functionality**:

  - **Login**: Email and password fields for authentication.
  - **Redirect**: Based on the user's role, redirect to either their profile or the dashboard.
  - **Dynamic Inputs**: Display additional fields if required by user role.

- **Suggestion**:
  Consider adding a feature for role-specific login fields, such as admin passwords or security checks for admins.

## 2.2 Sign Up

- **Page Description**:
  A sign-up page that allows users to create an account by providing their email, password, and confirming the password. Upon successful creation, they are redirected to the next details page.

- **Objective**:

  - Collect user email, password, and confirm password.
  - Validate inputs to ensure the password and confirmation match.
  - After successful sighup, redirect to the details page for more information.
  - Provide social login options.

- **Functionality**:

  - **Email**: Required with email format validation.
  - **Password**: Required with a minimum length validation (6 characters).
  - **Confirm Password**: Must match the password field.
  - **Loading State**: Button is disabled and shows "Signing Up..." during the submission process.
  - **Form Submission**: Uses `createUser` function from custom authentication hook (`useAuth`).
  - **Alert Messages**: Success or error messages displayed using `Swal`.
  - **Navigation**: Redirects to `/SignUp/Details` upon success or shows error alerts on failure.
  - **Social Login**: Options displayed below the form via `SocialLinks`.

- **Suggestion**:
  Consider adding a loading spinner or animation inside the "Sign Up" button to enhance the user experience while waiting for the sign-up process to complete.

## 2.3 Sign Up Details

- **Page Description**:
  A detailed sign-up page where users can provide additional personal information, including their full name, phone number, date of birth, gender, and fitness goals. Users can also upload a profile picture and confirm the details before submitting.

- **Objective**:

  - Collect detailed user information like full name, phone number, DOB, gender, and fitness goals.
  - Allow users to upload a profile image.
  - Confirm before submitting the form data to create an account.
  - Provide feedback on success or failure using Swal alerts.

- **Functionality**:

  - **Profile Image Upload**: Users can upload and crop their profile picture using the `ImageCropper` component.
  - **Form Fields**:
    - **Full Name**: Required text field.
    - **Phone Number**: Required text field for phone input.
    - **Date of Birth**: Date input field.
    - **Gender**: Select dropdown with options (Male, Female, Other).
    - **Fitness Goals**: Allows users to select multiple fitness goals using the `FitnessGoalsSelector` component.
  - **Form Submission**:
    - Confirms user intent before submission using `Swal.fire`.
    - Submits the form data along with the profile image URL to the server.
    - Redirects to the home page after successful account creation.
  - **Loading State**: Button and form handle loading states and disable actions during submission.
  - **User Existence Check**: If the user already exists, provides a message and link to the profile update page.

- **Suggestion**:
  Consider adding a tooltip or short helper text next to each field to guide the user on what kind of input is expected (e.g., for the phone number field, mention the required format). This can improve the user experience and reduce errors during form submission.

### 2.3.1 Image Cropper Component

- **Page Description**:
  A profile image cropper that allows users to upload, crop, and adjust their image. Once cropped, the image is sent to the server during account creation.

- **Objective**:

  - Allow users to upload and crop their profile image.
  - Provide zoom and rotation controls for precise adjustments.
  - Return the cropped image as a Blob for server upload.

- **Functionality**:

  - **Image Upload**: Allows users to select an image via drag-and-drop or file input.
  - **Cropper Interface**: Provides zoom and rotation controls with a fixed 1:1 aspect ratio.
  - **Preview**: Displays the cropped image after adjustments.
  - **Save/Cancel**: Save the cropped image or cancel the crop.
  - **Processing**: Uses a canvas to apply the crop, zoom, and rotation, and returns the image as a Blob.
  - **Modal Window**: The cropper is shown in a modal for better focus and usability.

- **Suggestion**:
  Add support for multiple aspect ratios and consider adding a progress indicator during image processing for better UX.

### 2.3.2 Fitness Goals Selector Component

- **Page Description**:
  A fitness goal selector where users can drag and drop or select fitness goals from a dropdown to customize their goals. Selected goals are displayed with unique colors.

- **Objective**:

  - Allow users to select fitness goals from a list.
  - Support drag-and-drop and dropdown selection.
  - Display selected goals with unique background colors.
  - Remove selected goals and return them to the available list.

- **Functionality**:

  - **Available Goals**: List of fitness goals such as "Weight Loss," "Muscle Gain," etc.
  - **Goal Selection**: Users can select goals from a dropdown or drag and drop them.
  - **Unique Colors**: Each goal has a unique color displayed as a background.
  - **Goal Removal**: Selected goals can be removed, returning them to the available goals list.
  - **Drag-and-Drop**: Supports drag-and-drop functionality to add goals.

- **Suggestion**:
  Consider adding a tooltip on hover over each goal to provide more information about each goal.

## 2.( 1 - 2 ) SocialLinks Component Notes

- **Page Description:**  
  Provides Google & Facebook login, checks user existence, and redirects accordingly.

- **Objective:**

  - Authenticate users via Google/Facebook.
  - Check if the user exists in the database.
  - Redirect existing users to the previous page; new users to `/SignUp/Details`.
  - Show alerts for errors.

- **Functionality:**

  - **Google & Facebook Login**: Authenticates, checks email in the database, and redirects.
  - **Check User Existence**: API call to verify if an email exists.
  - **Error Handling**: Displays alerts for failures.

- **Suggestions:**
  - Refactor redundant login logic.
  - Add loading indicators.
  - Optimize API calls.
  - Improve security & accessibility.

# 3. Public Pages

<!-- Add Scroll Animations  -->
<!-- Add Section Navigation Links (Quick Jump Menu) -->
<!-- Ensure All Content is Lazy Loaded for Faster Page Speed -->

## 3.1 Home Page

- **Description**:
  A home page with sections (banner, welcome, gym features, etc.) that fetch data via `useQuery` and display it. Shows loading or error states accordingly.

- **Objective**:

  - Fetch and display data for each section.
  - Handle loading and error states centrally.
  - Dynamically render sections with fetched data.

- **Functionality**:

  - **Data Fetching**: Use `useQuery` and `axiosPublic` for API calls.
  - **Loading/Error Handling**: Displays loading spinner or error component.
  - **Dynamic Rendering**: Sections render with respective data, background image applied.

- **Suggestions**:
  - Consolidate data fetching logic in a custom hook.
  - Improve error logging and conditional rendering.

### 3.1.1 Banner Section Component

- **Component Description**:
  A carousel/banner section that displays a series of images with an overlay containing text and a button. The banners automatically cycle every 3 seconds, with options to navigate through the banners using left and right arrows. It is designed to be responsive, adjusting to different screen sizes.

- **Objective**:

  - Display a series of banners with images, text, and buttons.
  - Enable automatic banner sliding every 3 seconds.
  - Allow manual navigation through banners with left and right arrows.
  - Ensure responsiveness for different screen sizes.

- **Functionality**:

  - **Automatic Slide**: Automatically changes the banner every 3 seconds using `setInterval`.
  - **Manual Navigation**: Allows users to navigate through the banners using left (`&#8592;`) and right (`&#8594;`) arrows.
  - **Responsive Design**: Adjusts the banner height and text overlay according to screen size using Tailwind CSS breakpoints (e.g., `sm:h-[400px]`, `lg:h-[750px]`).
  - **Text and Button Overlay**: Each banner has an overlay with a title, description, and a button that links to a specified URL.

- **Suggestions**:

  - Implement an indicator (e.g., dots or progress bar) to show the current slide for improved user interaction.
  - Add animations to the text and button overlay for a smoother transition.
  - Provide an option for pausing the auto-slide when the user interacts with the navigation controls.

  - Add icons next to menu items to improve the visual appeal and aid in quicker navigation.
  - Enhance the visual feedback when a submenu is toggled (e.g., by changing icon colors or animations) to make it more interactive and intuitive.

### 3.1.2 Welcome Section Component

- **Description**:  
  A full-screen section with a background video, hero text, and CTA buttons, visible on `md` and larger screens.

- **Objective**:

  - Display a background video with overlay text.
  - Ensure responsiveness and visibility only on medium+ screens.
  - Provide actionable CTA buttons.

- **Functionality**:

  - **Background Video**: Full-screen `iframe`, `object-cover`.
  - **Hero Text**: Dynamic title and description with responsive scaling.
  - **CTA Buttons**: "View Classes" and "Join Now" with a right-chevron icon.
  - **Responsive Design**: Hidden on small screens (`hidden md:flex`).

- **Suggestions**:
  - Add `auto play`, `muted` for smooth playback.
  - Include a fallback for mobile users.
  - Improve button design with icons.
  - Adjust overlay opacity for readability.

### 3.1.3 Our Services Section Component

- **Description**:  
  A responsive slider showcasing various fitness services, including images, descriptions, and links.

- **Objective**:

  - Display fitness services in a scrollable slider format.
  - Ensure smooth transitions and a user-friendly experience.
  - Adapt to different screen sizes.

- **Functionality**:

  - **Slider Integration**: Uses `react-slick` for smooth transitions.
  - **Auto play & Speed**: Slides change every 2s, with a 1s transition.
  - **Responsive Design**:
    - **Desktop**: 4 slides visible.
    - **Tablet**: 3 slides visible.
    - **Mobile**: 1 slide visible.
  - **Service Cards**: Display an image, title, and short description.

- **Suggestions**:
  - Add hover animations for better engagement.
  - Improve button styling for accessibility.
  - Optimize image loading for performance.

<!-- Highlight Current Class in Class Schedule -->

### 3.1.4 Class Schedule Component

- **Description**:  
  Displays daily fitness class schedules with real-time tracking, status updates, and interactive join options.

- **Objective**:

  - Show daily class schedules dynamically.
  - Update in real-time with live class status.
  - Provide a user-friendly and responsive interface.

- **Functionality**:

  - **Live Time Tracking**: Updates every second.
  - **Class Status**: Shows ongoing, upcoming, or completed classes.
  - **Progress Indicator**: Displays ongoing class progress visually.
  - **Dynamic Class Details**: Retrieves module details like icons.
  - **Responsive Design**: Adapts to various screen sizes.

- **Suggestions**:
  - Add animations for smooth time transitions.
  - Enhance mobile UI for better readability.
  - Optimize performance by reducing re-renders.

### 3.1.5 Featured Trainers Component

- **Description**:  
  Displays a list of featured trainers with tier rankings, experience, specialization, and availability. Users can view details or browse more trainers.

- **Objective**:

  - Highlight top trainers with their expertise and experience.
  - Provide a visually appealing and interactive trainer card layout.
  - Allow users to explore more trainers with a CTA button.

- **Functionality**:

  - **Tier Badge System**: Trainers are categorized into Bronze, Silver, Gold, Diamond, and Platinum tiers, each with unique styling.
  - **Trainer Details**: Shows name, specialization, years of experience, session fee, and availability.
  - **Dynamic Grid Layout**: Responsive design adapting to different screen sizes (1-4 columns).
  - **Navigation**: Users can click on a trainer to view more details.
  - **"Find More Teachers" Button**: Leads to the full trainers list page.

- **Suggestions**:
  - Improve accessibility with alt text enhancements.
  - Add filtering options for trainers based on expertise.
  - Include an animated hover effect for better engagement.
  - Optimize image loading using lazy loading for better performance.

<!-- Improve Gallery Section with Light box (Fullscreen Preview on Click) -->

### 3.1.6 Gallery Preview Component

- **Description**: A dual-slider gallery preview with smooth auto-scrolling and a CTA to view the full gallery.

- **Objective**:

  - Showcase gallery images dynamically.
  - Ensure responsiveness across all devices.
  - Encourage users to explore the full gallery.

- **Functionality**:

  - **Dual Sliders**: Top slider moves in **reverse**, bottom moves **normally**.
  - **Auto-Scrolling**: Continuous auto play with no delay.
  - **Responsive Design**:
    - **Desktop:** 3 slides
    - **Tablet:** 2 slides
    - **Mobile:** 1 slide
  - **Gallery Cards**: Rounded images with shadows for a clean UI.
  - **Navigation**: "View Full Gallery" button links to the full gallery page.

- **Suggestions**:
  - **Performance**: Implement **lazy loading** for faster loading.
  - **Accessibility**: Ensure **alt text** and **keyboard navigation**.
  - **Visuals**: Add **hover zoom effect** and **custom navigation arrows**.

### 3.1.7 Featured Trainers Component

- **Description**:  
  A dynamic promotions section displaying available offers with a **modal pop-up** for detailed information.

- **Objective**:

  - Display multiple promotions in a **grid layout**.
  - Allow users to view more details via a **modal popup**.
  - Maintain **aesthetic UI** and **mobile responsiveness**.

- **Functionality**:

  - **Promotions Grid**:
    - **Desktop:** 3 columns
    - **Tablet:** 2 columns
    - **Mobile:** 1 column
  - **Promotion Cards**:
    - Image, title, and brief description.
    - **"Learn More" button** triggers the modal.
  - **Modal System**:
    - Shows detailed promotion info when a card is clicked.
    - Supports **optional promo codes** and duration details.

- **Suggestions for Improvement**:
  - **Performance**: Implement **lazy loading** for images.
  - **Accessibility**: Ensure **alt text** for images and keyboard navigation.
  - **Animations**: Add **fade-in effects** for smoother UI transitions.
  - **Optimization**: Minimize re-renders by **memoizing promo data** if needed.

#### 3.1.7.1 Promotion Content Modal Component

- **Description**: Displays promotion details in a modal with an image, title, offer details, duration, and promo code (if available).

- **Features**:

  - **Dynamic Content**: Renders promotion data dynamically.
  - **Modal System**: Uses `<dialog>`, closes on **ESC key** or close button.
  - **Close Button**: **Top-right**, floating, with hover effects.
  - **Responsive Design**: Mobile & desktop-friendly.

- **Enhancements**:
  - **Lazy Load Images** for performance.
  - **Add Animations** for smooth modal transitions.
  - **Improve Accessibility** with better keyboard navigation.

### 3.1.8 Gym Features Component

- **Description**: A responsive section showcasing the gym's key features in a structured grid layout.

- **Objective**:

  - Highlight the **unique offerings** of the gym.
  - Ensure a **clean and visually appealing layout**.
  - Maintain a **responsive** and **accessible** design.

- **Functionality**:

  - **Grid Layout**:
    - **Desktop:** 4 columns
    - **Tablet:** 3 columns
    - **Mobile:** 1-2 columns
  - **Feature Cards**:
    - Displays **icon, title, and description** for each gym feature.
    - Uses a **gradient background** and **hover effect** for better aesthetics.
  - **Lazy Loading**:
    - Icons are **lazy-loaded** to improve performance.

- **Suggestions**:
  - **Performance**: Optimize images further with **SVG or WebP formats**.
  - **Accessibility**: Ensure **proper alt text** and consider **keyboard focus styles**.
  - **Interactivity**: Add a **subtle hover animation** on feature cards for a more engaging user experience.

### 3.1.9 Testimonials Component

- **Description**: A dynamic and responsive testimonials carousel that showcases client feedback in an engaging way.

- **Objective**:

  - Display **customer reviews** in an attractive and structured format.
  - Ensure **smooth auto play** and **interactive controls** for better user experience.
  - Maintain **responsiveness** and **accessibility** across all devices.

- **Functionality**:

  - **Carousel Layout**:
    - **Desktop:** 4 testimonials per slide
    - **Tablet:** 2 testimonials per slide
    - **Mobile:** 1 testimonial per slide
  - **Testimonial Cards**:
    - Displays **client image, name, role, and feedback**.
    - Uses a **hover effect** to pause auto play for better readability.
  - **Lazy Loading**:
    - Client images are **lazy-loaded** to improve performance.
  - **Call-to-Action (CTA)**:
    - A **"Read More Stories"** button directs users to the full testimonials page.

- **Suggestions**:
  - **Performance**: Convert images to **WebP format** for faster loading.
  - **Accessibility**: Ensure **proper alt text** and support **keyboard navigation**.
  - **Interactivity**: Consider adding **previous/next navigation arrows** for manual control.

### 3.1.10 Call-to-Action (CTA) Component

- **Description**: A visually engaging section that encourages users to take action by signing up, downloading the app, or visiting the gym.

- **Objective**:

  - Prompt users to **engage with the gym's services** through clear call-to-action buttons.
  - Ensure a **responsive and user-friendly design** for all screen sizes.
  - Use **accessible and optimized elements** for better usability.

- **Functionality**:

  - **Section Design**:
    - Uses a **gradient background** for an attractive look.
    - Contains **a bold title and a short motivational message**.
  - **CTA Buttons**:
    - Three action buttons for **membership SignUp, app download, and gym visit**.
    - Uses **dynamic mapping** to easily add or modify buttons.
    - **Hover effects** for an interactive experience.
  - **Navigation**:
    - The **Sign Up button** includes a link to the SignUp page.
    - Other buttons are placeholders for future enhancements (e.g., app store links).

- **Suggestions**:
  - **Accessibility**: Ensure all buttons have **aria-labels** for screen readers.
  - **User Experience**: Consider adding **icons** to buttons (e.g., a gym icon for visits).
  - **Future Improvements**: Implement **conditional rendering** to dynamically show different CTAs based on user login status.

## 3.2 Gallery Page

- **Description**:  
  Displays a list of featured trainers with tier rankings, experience, specialization, and availability. Users can view details or browse more trainers.

- **Objective**:

  - Highlight top trainers with their expertise and experience.
  - Provide a visually appealing and interactive trainer card layout.
  - Allow users to explore more trainers with a CTA button.

- **Functionality**:

  - **Tier Badge System**: Trainers are categorized into Bronze, Silver, Gold, Diamond, and Platinum tiers, each with unique styling.
  - **Trainer Details**: Shows name, specialization, years of experience, session fee, and availability.
  - **Dynamic Grid Layout**: Responsive design adapting to different screen sizes (1-4 columns).
  - **Navigation**: Users can click on a trainer to view more details.
  - **"Find More Teachers" Button**: Leads to the full trainers list page.

- **Suggestions**:
  - Improve accessibility with alt text enhancements.
  - Add filtering options for trainers based on expertise.
  - Include an animated hover effect for better engagement.
  - Optimize image loading using lazy loading for better performance.

## 3.3 Trainers Page

- **Description**:  
  Displays a list of trainers with filtering options, ensuring a seamless browsing experience across devices.

- **Objective**:

  - Showcase trainers with key details like specialization, experience, and tier.
  - Provide an interactive filtering system for easy search.
  - Ensure smooth navigation with a responsive design.

- **Functionality**:

  - **Trainer Cards**: Dynamic grid layout (1-4 columns) displaying trainer details.
  - **Filters**: Users can filter by name, specialization, tier, gender, language, class type, and focus area.
  - **Mobile & Desktop Views**: Sidebar filters for desktops, drawer-based filters for mobile.
  - **Loading & Error Handling**: Displays a loading spinner and fallback messages if no trainers are found.

- **Suggestions**:
  - Improve accessibility with `alt` text.
  - Add animated hover effects for engagement.
  - Optimize image loading with lazy loading.
  - Introduce sorting options (rating, availability, session fee).

### 3.3.1 Trainer Filter Component

- **Description**:  
  Provides an interactive filtering system to refine trainer searches based on various criteria.

- **Objective**:

  - Enable users to search and filter trainers efficiently.
  - Offer an intuitive and user-friendly interface for filter selection.
  - Ensure responsiveness and accessibility across different devices.

- **Functionality**:

  - **Search by Name**: Text input field for trainer name search.
  - **Dropdown Filters**: Users can filter by specialization, tier, language, class type, and focus area.
  - **Gender Selection**: Three-button toggle for Male, Female, or All genders.
  - **Reusable Dropdown Component**: Simplifies dropdown creation for multiple filter options.
  - **State Management**: Controlled inputs for maintaining filter selections.

- **Suggestions**:
  - Improve accessibility by adding `aria-labels` for buttons.
  - Enhance UX with animated transitions for dropdown selections.
  - Implement multi-select functionality for filters like languages.
  - Introduce reset filters button for quick clearing of selections.

## 3.4 Trainer Details Page

- **Description**:  
  Displays detailed information about a selected trainer, including their profile, specialization, experience, availability, and client testimonials.

- **Objective**:

  - Provide a **comprehensive** view of the trainer’s expertise.
  - Ensure an **engaging** and **user-friendly** experience.
  - Present trainer details in a **visually appealing** manner.

- **Functionality**:

  - **Trainer Profile**: Displays the trainer’s name, image, specialization, and tier ranking (Bronze, Silver, Gold, Diamond, Platinum).
  - **Bio & Contact Info**: Includes experience, qualifications, and contact details.
  - **Schedule & Pricing**: Lists session availability, fees, and booking options.
  - **Certifications & Testimonials**: Highlights credentials and client feedback.
  - **Background & Styling**: Uses a gradient effect and a background image for a professional appearance.

- **Suggestions**:
  - Improve **accessibility** with better alt text.
  - Optimize **performance** by implementing lazy loading for images.
  - Enhance **user engagement** with animated hover effects.
  - Add **filtering options** for easier trainer selection.

### 3.4.1 Trainer Details Header Component

- **Description**:  
  Displays the trainer’s profile, including name, image, specialization, tier badge, and gender icon, ensuring a visually appealing and structured layout.

- **Objective**:

  - Present **essential** trainer details in an **engaging** and **informative** manner.
  - Use **dynamic styling** for a polished UI.
  - Optimize **performance** and **accessibility**.

- **Functionality**:

  - **Trainer Profile**: Displays the trainer’s `name`, `imageUrl` (fallback: `/default-profile.png`), and gender icon (Male, Female, Other, Not specified).
  - **Specialization**: Highlights the trainer’s expertise (fallback: "Specialization Not Available").
  - **Tier Badge**: Shows dynamically styled rankings (Bronze, Silver, Gold, Diamond, Platinum).
  - **Styling**: Implements a **gradient background**, **lazy loading** for images, and **responsive design**.

- **Suggestions**:
  - Improve **accessibility** by refining `alt` text for images.
  - Optimize **performance** by implementing lazy loading.
  - Enhance **user engagement** with hover effects and animations.
  - Ensure **mobile-friendliness** by adjusting spacing and font sizes.

### 3.4.2 Trainer Details About Component

- **Description**:  
  Displays key background information about the trainer, including their bio, experience, age, and availability.

- **Objective**:

  - Provide **clear and concise** trainer details.
  - Maintain a **structured and visually appealing** layout.
  - Ensure **accessibility** and **responsive design**.

- **Functionality**:

  - **Trainer Bio**: Displays the trainer’s `name` and `bio` (fallback: "No bio available.").
  - **Experience & Age**: Shows trainer's `experience` and `age` (fallback: "N/A").
  - **Availability**: Lists `availableDays` (fallback: "Not available").
  - **Styling**: Implements **gradient background**, **grid layout**, and **hover effects**.

- **Suggestions**:
  - Improve **accessibility** by refining text contrast.
  - Enhance **user engagement** with animations on hover.
  - Optimize **mobile responsiveness** by adjusting grid behavior.
  - Ensure **fallback values** provide useful default information.

### 3.4.3 Trainer Details Contact Component

- **Description**:  
  Displays the trainer's contact information, including phone, email, website, and social media links.

- **Objective**:

  - Provide **easy access** to the trainer’s contact details.
  - Maintain a **clean and structured** layout.
  - Ensure **accessibility** and **responsive design**.

- **Functionality**:

  - **Phone & Email**: Displays trainer’s `phone` and `email` with appropriate icons.
  - **Website**: Shows `website` link if available.
  - **Social Media Links**: Supports LinkedIn, Instagram, Facebook, Twitter, YouTube, Twitch, Pinterest, Snapchat, WhatsApp, Reddit, Discord, and TikTok.
  - **Styling**: Uses **gradient background**, **shadow effects**, and **hover animations**.

- **Suggestions**:
  - Improve **accessibility** with better contrast for icons and text.
  - Optimize **mobile responsiveness** by adjusting grid layout.
  - Ensure **proper link handling** for external sites (e.g., `noopener noreferrer`).
  - Use **lazy loading** for icons to improve performance.

### 3.4.4 Trainer Details Schedule Component

<!-- Update this after the trainers Dashboard is Created -->

- **Description**:  
  Displays a trainer’s weekly schedule, including class times, types, participant limits, and pricing.

- **Objective**:

  - Provide a **structured overview** of the trainer’s schedule.
  - Offer **dynamic booking options** based on class availability.
  - Ensure **responsive design** for both mobile and desktop users.

- **Functionality**:

  - **Accordion-style weekly schedule** with collapsible days.
  - **Handles different class types** (e.g., group classes, private sessions, free classes).
  - **Dynamic buttons** based on class availability:
    - **"Booked" button** for full classes.
    - **"Book Session" button** for reservable classes.
    - **"Free Class" button** for open gym/drop-in sessions.
    - **"On a Break" button** for break periods.
    - **"Visit Class" button** for general classes.
  - **Responsive Design**:
    - **Mobile View**: List format with stacked details.
    - **Desktop View**: Table format for clarity.

- **Suggestions**:
  - Improve **accessibility** by ensuring color contrast and larger touch targets.
  - Optimize **performance** by using **lazy loading** for heavy elements.
  - Consider **caching** or **memoization** for schedule data to reduce re-renders.
  - Add **real-time availability updates** if integrated with a backend system.

### 3.4.5 Trainer Details Details Component

- **Description**:  
  Displays detailed information about a trainer, including their certifications, awards, training preferences, additional services, equipment used, and partnerships.

- **Objective**:

  - Provide a **comprehensive view** of a trainer’s qualifications and expertise.
  - Organize and present the trainer’s **skills, services, and credentials** in a user-friendly manner.
  - Ensure **visual clarity** with a responsive and clean design for both mobile and desktop users.

- **Functionality**:

  - **Certifications Section**:

    - Displays a **list of trainer certifications**.
    - If no certifications are provided, display **"No certifications listed"**.

  - **Awards Section**:

    - Showcases **awards** with details like title, year, and the awarding organization.
    - If no awards are available, display **"No awards listed"**.

  - **Training Preferences Section**:

    - Displays **focus areas** and **class types** the trainer specializes in.
    - Uses a **grid layout** with multiple columns for clarity.

  - **Additional Services Section**:

    - Lists **extra services** offered by the trainer (e.g., one-on-one coaching, group sessions).
    - If no services are listed, display **"No additional services listed"**.

  - **Equipment Used Section**:

    - Displays the **equipment** the trainer typically uses during classes.
    - If no equipment is provided, display **"No equipment listed"**.

  - **Partnerships Section**:
    - Lists the **trainer’s partnerships** with organizations or brands, including their names and linked websites.
    - If no partnerships exist, display **"No partnerships listed"**.


- **Suggestions**:
  - Improve **accessibility** by ensuring **high contrast** and **larger touch targets** for better usability.
  - Optimize **performance** by **memoizing** content and reducing unnecessary re-renders.
  - Consider **lazy loading** for sections that may contain large amounts of data (e.g., awards or partnerships).
  - Add **filtering options** for long lists of items (e.g., certifications, awards) to improve user navigation.


# 4. User Pages

# 5 Page Not Found (404)

- **Page Description**:
  A 404 error page that informs users they’ve navigated to a non-existent page. It includes a spinning animation and a "Return to Home" button.

- **Objective**:

  - Inform the user that the page they are looking for does not exist.
  - Provide a way to navigate back to the homepage.

- **Functionality**:

  - **Error Message**: Displays a "Uh Oh! Page not found!" message.
  - **Visual Effects**: Shows a spinning animation between the numbers "404".
  - **Redirect**: A "Return to Home" button that redirects users to the homepage.

- **Suggestion**:
  Consider adding more user guidance, like links to popular pages or a search bar for better navigation. Also, ensure that the text is legible on all screen sizes, possibly by adjusting font size for smaller devices.
