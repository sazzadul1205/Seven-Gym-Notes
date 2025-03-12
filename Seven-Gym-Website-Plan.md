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

### 3.4.6 Trainer Details Testimonials Component

- **Description**:  
  Displays client testimonials for a trainer, including client names, ratings, and feedback in a **dynamic slider format**. It also calculates and displays the **trainer's average rating**.

- **Objective**:

  - Provide a **user-friendly** and visually appealing way to showcase client feedback.
  - Display **star ratings and reviews** to enhance credibility.
  - Ensure **smooth and continuous scrolling** for better user engagement.
  - Make the component **fully responsive** for both mobile and desktop users.

- **Functionality**:

  - **Testimonial Display**:

    - Lists **client testimonials** with the client’s name, rating, and feedback.
    - If no testimonials exist, displays **"No testimonials available."**

  - **Average Rating Calculation**:

    - Computes the **average rating** from all testimonials.
    - Displays **rounded rating** with corresponding star icons.

  - **Star Rating Rendering**:

    - Shows **five-star rating visuals** based on the client’s review score.
    - Uses **colored stars** to indicate filled and unfilled portions.

  - **Testimonial Slider**:
    - Uses **auto-scrolling with smooth transitions**.
    - Adapts to different screen sizes:
      - **Desktop View**: Displays **three testimonials** at a time.
      - **Tablet View**: Displays **two testimonials**.
      - **Mobile View**: Displays **one testimonial**.

- **Suggestions**:

  - Improve **accessibility** by ensuring **proper color contrast** and **readable fonts**.
  - Optimize **performance** by using **lazy loading** and **memoization** to prevent unnecessary re-renders.
  - Consider **adding pagination controls** for users who prefer manual navigation.
  - Implement **real-time updates** if testimonials are fetched from a backend system.

## 3.5 Classes Page

- **Page Description**:  
  The Classes page displays all available gym classes, categorized into modules. It provides users with detailed information about class schedules, modules, and specific class details.

- **Objective**:

  - Showcase the different class modules available at the gym.
  - Allow users to view detailed class schedules and module information.
  - Provide a seamless navigation experience for users to explore and join classes.

- **Functionality**:

  - **Fetching Data**:

    - Uses `react-query` to fetch data for class schedules, modules, and detailed class information from an API.
    - Displays loading indicators while data is being fetched.
    - Shows an error component if data fetching fails.

  - **Class Modules Section**:

    - Displays available class modules in a **grid layout** with responsive design.
    - Each module has a **hover effect** that reveals a "Join Now" button.
    - Clicking a module redirects users to its respective class details page.
    - If a module has an associated icon, it is displayed above the module name.

  - **All Classes Component**:
    - Passes fetched class schedule data to the `AllClasses` component for further display.

- **Suggestions**:
  - Improve **mobile responsiveness** by adjusting the grid layout for smaller screens.
  - Enhance the **hover effect** by adding a smooth scale animation when users hover over a module.
  - Display a **brief description** of each module to help users quickly understand what each class offers.
  - Include a **search or filter option** to allow users to find specific classes faster.

### All Classes Component

- **Description**:  
  The All Classes page provides a **detailed schedule** of all available gym classes. It dynamically updates in real-time, displaying the **current time** and **ongoing, upcoming, or completed classes**.

- **Objective**:

  - Organize and display the class schedule in a **user-friendly** format.
  - Show real-time class status (**ongoing, upcoming, or completed**).
  - Enhance **user engagement** with visual elements like icons and progress bars.

- **Functionality**:

  - **Real-Time Clock & Date**:

    - Uses `useState` and `useEffect` to **update the time every second**.
    - Displays **current day and live time** at the top of the page.

  - **Class Sorting**:

    - Classes are sorted so that **today’s classes appear first**, followed by the rest of the week.
    - Uses `date-fns` to handle **date/time parsing, formatting, and comparisons**.

  - **Class Status & Progress**:

    - Determines if a class is **ongoing, upcoming, or completed** based on the current time.
    - If a class is ongoing, a **progress bar** visually indicates its completion percentage.
    - Highlights classes that start **within the next 60 minutes** as **“Starting Soon”**.

  - **Class Display & Styling**:

    - Each class module has an **icon** (if available) and **time slot**.
    - **Color-coded backgrounds**:
      - **Green** for ongoing classes.
      - **Gray** for completed classes.
      - **White** for upcoming classes.
    - **Hover Effect**: Enlarges the class card slightly when hovered over on larger screens.

  - **Prop Validation**:
    - Uses `PropTypes` to **ensure correct data structure**, preventing errors.

- **Suggestions**:
  - Add a **filter or search bar** so users can quickly find specific classes.
  - Implement a **weekly view toggle** to allow users to switch between **daily and weekly schedules**.
  - Improve **mobile responsiveness** by adjusting the grid layout for smaller screens.
  - Add **clickable class cards** that navigate to detailed class descriptions.

## 3.6 Classes Details Page

- **Description**:  
  Displays detailed information about a selected class, including description, key features, pricing, schedule, trainers, and reviews, fetched dynamically using React Query.

- **Objectives**:

  - Display detailed class data with an appealing layout (background image, banner, structured sections).
  - Fetch data for class, schedule, trainers, and users.
  - Handle loading and error states.

- **Functionality**:

  - **Dynamic Data Fetching**:

    - Use `useParams` for class selection.
    - Fetch data using `useQuery` from multiple endpoints:
      - `Class_Details`: Class data
      - `Our_Classes_Schedule`: Schedule info
      - `Trainers/SearchTrainersByNames`: Trainer details
      - `Users`: User data (if logged in).

  - **Loading & Error Handling**:

    - Show `Loading` component during fetch.
    - Display `FetchingError` if any request fails.

  - **Sections**:
    - **Class Header**: Banner image with dark gradient, class title centered with bold font.
    - **Content Sections**:
      - `ClassesDetailsContent`: General class info.
      - `ClassesDetailsDescription`: Class overview.
      - `ClassesDetailsKeyFeatures`: Main benefits and features.
      - `ClassesDetailsPrice`: Pricing and membership.
      - `ClassesDetailsSchedule`: Schedule and time slots.
      - `ClassesDetailsTrainers`: Trainers and expertise.
      - `ClassesDetailsMore`: Additional info.
      - `ClassesDetailsReview`: User reviews and ratings.

- **Suggestions**:
  - Add **“Enroll Now” button**, **Q&A section**, **save favorite classes** option.
  - Provide **trainer profile links** and **gym map/virtual tour**.

### 3.6.1 Classes Details Content Component

- **Description**:  
  A detailed section within the Class Details page that provides information about a specific class module, including its **description, additional info, difficulty level, and prerequisites**. It also features a **module overview** with an icon and brief summary.

- **Objective**:

  - Display key details about the selected class in a structured and visually appealing format.
  - Enhance readability with icons, headings, and layout divisions.
  - Provide an engaging hover effect on the module overview section.

- **Functionality**:

  - **Dynamic Data Handling**:

    - Uses `ThisModule` prop to dynamically fetch and display class details.
    - Displays **default messages** if data is missing.

  - **Content Sections**:
    - **Description**: General overview of the class module.
    - **Additional Info**: Any extra details about the module.
    - **Difficulty Level**: Indicates how challenging the module is.
    - **Prerequisites**: Lists any required prior knowledge or skills.
    - **Module Overview**:
      - Displays a **module icon** (fetched dynamically).
      - Shows the **module name** and a **brief engaging summary**.
      - Uses **hover effects** for interactivity.

- **Suggestions**:
  - Add a **“Enroll Now” button** for user engagement.
  - Include **tags or categories** for better module classification.
  - Allow users to **rate or bookmark** the module for future reference.
  - Implement a **collapsible section** for additional information.

### 3.6.2 Classes Details Description Component

- **Page Description**:  
  A component within the Class Details page that displays a **detailed description** of the selected class module. It ensures users get an in-depth understanding of the class content.

- **Objective**:

  - Present a **well-structured, readable, and visually appealing** description section.
  - Ensure a **fallback mechanism** if the primary description is unavailable.
  - Maintain a **consistent design** with the overall Class Details page.

- **Functionality**:

  - **Dynamic Data Handling**:

    - Retrieves the **detailed description** from `ThisModule`.
    - Uses `bigDescription` as a secondary fallback.
    - Displays a **default message** if no description is available.

  - **Content Structure**:
    - **Title Section**: "Detailed Description" with a **subtle underline**.
    - **Description Content**:
      - Uses **italic styling** for a smooth reading experience.
      - Maintains a **relaxed line spacing** for better readability.

- **Suggestions**:
  - Add a **“Read More”** feature for expandable content.
  - Include **bullet points or highlights** for key takeaways.
  - Allow users to **leave comments or ask questions** about the class.
  - Enhance accessibility with **text-to-speech support**.

### 3.6.3 Classes Details Key Features Component

- **Description**:  
  A component within the Class Details page that highlights the **key features** of the selected class module using dynamically styled tags.

- **Objective**:

  - Display **important class features** in an eye-catching, structured way.
  - Use **color-coded tags** to enhance readability and engagement.
  - Ensure **adaptive text contrast** for accessibility and clarity.

- **Functionality**:

  - **Dynamic Tag Rendering**:

    - Retrieves key features from `ThisModule.tags`.
    - Displays each feature as a **distinct tag** with unique styling.
    - If no features exist, the section remains hidden.

  - **Color Customization**:

    - Uses a **predefined color palette** for variety.
    - Cycles through colors to prevent repetition.
    - Adjusts **text contrast** based on background brightness for readability.

  - **Interactive Styling**:
    - Each tag has a **hover effect**, scaling up slightly for a dynamic feel.
    - Uses a **flexbox layout** for an adaptive, responsive design.

- **Suggestions**:
  - Allow **users to suggest or up vote features** they find most valuable.
  - Introduce **icons or tooltips** for feature explanations.
  - Add **filtering options** for users to explore relevant features.
  - Implement **animation effects** for smoother transitions.

### 3.6.4 Classes Details Price Component

- **Page Description**:  
  A component within the Class Details page that **displays the pricing structure** for different subscription durations and allows users to book a class.

- **Objective**:

  - Provide **clear and structured pricing** for users.
  - Offer **various pricing options** (daily, weekly, monthly, yearly).
  - Allow users to **easily book a class** via a modal form.

- **Functionality**:

  - **Dynamic Pricing Calculation**:

    - Extracts `dailyClassFee` from `ThisModule`.
    - Computes **weekly, monthly, and yearly fees** by multiplying the daily rate and adding a **flat $20 extra fee**.

  - **Pricing Display with Cards**:

    - Uses the **PriceCard** component for a **uniform look**.
    - Applies **hover effects** to enhance engagement.
    - Adopts a **grid layout** for responsive design.

  - **Join Class Button & Booking Modal**:
    - Clicking **"Join Class"** opens a modal (`ClassBookingFormModal`).
    - If the modal **fails to open**, an error is logged.
    - The modal form **collects user data** for booking.

- **Suggestions**:
  - Implement **discounted pricing** based on **membership tiers or promotions**.
  - Show **real-time pricing updates** if discounts or dynamic rates apply.
  - Add **icons or tooltips** explaining price variations.
  - Integrate **payment gateway options** for direct booking.

### 3.6.5 Classes Details Schedule Component

- **Page Description**:  
  A component within the Class Details page that **displays the weekly schedule** for a class in a **structured table format**.

- **Objective**:

  - Present the **weekly schedule in a readable and organized** manner.
  - Ensure days are **sorted correctly** starting from **Friday**.
  - Convert **24-hour time format** to **12-hour AM/PM format** for better readability.

- **Functionality**:

  - **Sorting Days in Custom Order**:

    - Days are ordered manually in the sequence: **Friday → Thursday**.
    - Sorting ensures consistency, even if data is **unsorted from the backend**.

  - **Time Conversion for Better Readability**:

    - The function `convertTo12HourFormat()` transforms **"14:30"** into **"2:30 PM"**.
    - Ensures a **standardized and user-friendly** format.

  - **Dynamic Schedule Table Rendering**:
    - Iterates over `ClassScheduleData` and generates **table rows dynamically**.
    - Applies **striped row styling** for better readability (`gray-100` for even rows, `white` for odd rows).
    - Displays **serial numbers**, **day names**, **start times**, and **end times** in separate columns.

- **Suggestions**:
  - Highlight **ongoing classes** dynamically by **adding real-time indicators**.
  - Show **class duration** by calculating the time difference.
  - Implement **filters** to allow users to view only **specific days** or **time ranges**.
  - Add a **tooltip or modal** to provide **additional details** about each session.

### 3.6.6 Classes Details Trainers Component

- **Description**:  
  A section within the **Class Details page** that **introduces the trainers** assigned to the class, displaying their names, roles, and other details.

- **Objective**:

  - Provide a **structured and visually appealing** layout for trainers.
  - Categorize trainers into **roles**:
    - **Class Teacher**
    - **Helper Teacher**
    - **Fallback Teacher**
    - **General Trainer**

- **Functionality**:

  - **Assigning Roles Dynamically**:

    - Uses `getTrainerRole(trainer)` to determine the trainer’s **role based on `ThisModule`** data.
    - Prioritizes role assignment:
      - If the trainer is the **class teacher**, they get the **"Class Teacher"** role.
      - If listed in `helperTeachers`, they are marked as **"Helper"**.
      - If the trainer is assigned as `fallbackTeacher`, they get the **"Fallback Teacher"** role.
      - Any other trainer defaults to **"Trainer"**.

  - **Handling Empty Data Gracefully**:

    - If `TrainersData` is empty, it **displays a user-friendly message** instead of leaving the section blank.

  - **Dynamic Trainer Card Rendering**:
    - Uses `TrainerPublicIdCard` component to display **individual trainer profiles**.
    - Organizes the cards in a **responsive grid layout**.
    - Supports **1-4 column layouts** based on screen size.

- **Suggestions**:
  - Display **additional trainer details** (e.g., certifications, specialties).
  - Add **profile pictures** for better visualization.
  - Implement **filters/search** for trainers based on role or expertise.
  - Include **ratings or testimonials** for trainers from students.
    s

### 3.6.7 Classes Details More Component

- **Description**:  
  A section within the **Class Details page** that provides **additional insights** about the class, including its goals, benefits, feedback process, and milestones.

- **Objective**:

  - Display **key class-related information** in an **organized** and **visually appealing** way.
  - Ensure **data clarity** with structured **categories**.

- **Functionality**:

  - **Modular Information Display**:

    - Organizes details into **four distinct sections**:
      1. **Class Goals** → The main objectives of the class.
      2. **Fitness Benefits** → Health and fitness advantages for participants.
      3. **Feedback Mechanism** → How feedback is collected and utilized.
      4. **Class Milestones** → Key achievements and progress markers.

  - **Dynamic Content Rendering**:

    - Each section **only displays if data is available**.
    - If a section is empty, it shows **"No data available"** instead of leaving it blank.

  - **Enhanced UI Elements**:
    - **Icons for each section** to improve readability and engagement.
    - **Gradient background and hover effect** to make each section interactive.

- **Suggestions**:
  - Add **clickable tooltips or modals** for in-depth explanations.
  - Implement an **expand/collapse feature** for a cleaner layout.
  - Include **progress tracking** for class milestones with visual indicators (bars, charts).
  - Introduce **user-submitted feedback visibility** for transparency and improvement tracking.

### 3.6.8 Classes Details Review Component

- **Description**:  
  A **dynamic review section** within the **Class Details page** that displays **feedback** from participants and highlights the class's **overall rating**.

- **Objective**:

  - Showcase **real user experiences** to **build trust** and **credibility**.
  - Provide a **clear visual representation** of class quality using **ratings and reviews**.

- **Functionality**:

  - **Star Rating Calculation**:

    - Computes **average rating** from all reviews.
    - Displays **stars dynamically** based on the computed rating.

  - **Review Carousel (Auto-Scrolling)**:

    - Uses **react-slick** for a smooth **horizontal review slider**.
    - Adjusts the number of visible reviews based on **screen size** (desktop, tablet, mobile).

  - **User-Friendly Review Display**:

    - Shows **reviewer name** (or **"Anonymous"** if undefined).
    - Displays **rating with stars**.
    - Ensures comments are visible (defaults to **"No comment provided."** if empty).

  - **Handles No Reviews Case**:
    - If there are **no reviews**, it shows **"No reviews available yet."** instead of leaving an empty section.

- **Suggestions**:
  - Add a **"Write a Review"** button to allow users to submit feedback.
  - Display a **breakdown of ratings** (e.g., number of 5-star, 4-star, etc.).
  - Implement a **sorting/filtering option** (e.g., most recent, highest-rated).
  - Highlight **featured reviews** at the top for better engagement.

## 3.7 Forum Page

- **Description**:  
  A community forum page where users can browse, search, and filter discussion threads. It provides an interactive space for users to engage in conversations based on different categories.

- **Objective**:

  - Allow users to **view, search, and filter** forum threads.
  - Ensure **real-time updates** using **React Query**.
  - Provide a **structured and easy-to-navigate** discussion platform.

- **Functionality**:

  - **Data Fetching**:

    - Retrieves **forum threads** (`/Forums`).
    - Fetches **user data** (`/Users?email=${user?.email}`) if logged in.
    - Loads **forum categories** (`/Forums/categories`).
    - Uses `refetch` to update the displayed threads dynamically.

  - **State Management**:

    - `searchQuery`: Stores **user input** for searching threads.
    - `selectedCategory`: Manages **forum category selection** for filtering.
    - `visibleThreadsCount`: Controls the **number of displayed threads** (pagination-like behavior).

  - **Loading & Error Handling**:

    - Displays a **loading screen** if any API request is still pending.
    - Shows an **error component** if a request fails.

  - **Component Breakdown**:
    - **`ForumBanner`** → Displays the **search bar** and **forum header**.
    - **`ForumCategory`** → Provides a **category filter** for browsing topics.
    - **`ForumThreads`** → Lists **forum threads**, handling **search and category filtering**.

- **Suggestion**:
  - Implement **infinite scrolling** or a "Load More" button instead of a static thread count.
  - Add **thread creation functionality** for users.
  - Include **sorting options** (e.g., most recent, most commented).
  - Enhance **search functionality** with keyword highlighting.

### 3.7.1 Forum Banner Component

- **Description**:  
  A **banner component** for the forum category page that provides a **search bar** to filter discussion threads. It enhances **user experience** by displaying a visually appealing **background image** with an overlay.

- **Objective**:

  - Offer a **clear and structured** search interface for forum users.
  - Improve **thread discoverability** through **search functionality**.
  - Maintain a **consistent design** with a **background image overlay**.

- **Functionality**:

  - **Background & Overlay**:

    - Displays a **full-width background image** (`Wall`).
    - Uses a **semi-transparent gradient overlay** for better text readability.

  - **Search Bar**:
    - Allows users to **search forum threads** by title.
    - Contains a **search icon (`FaSearch`)** for intuitive design.
    - Updates `searchQuery` state dynamically via `setSearchQuery`.

- **Suggestion**:
  - Improve **mobile responsiveness** by adjusting input width (`w-1/4` → `w-full sm:w-1/2`).
  - Implement **debouncing** to optimize search performance and reduce unnecessary API calls.
  - Consider adding **category filters** within the search bar for a **better user experience**.

### 3.7.2 Forum Category Component

- **Description**:  
  A **category selection component** for the forum page that enables users to **filter discussion threads** by category. It features a **responsive horizontal slider** to display category buttons and enhance navigation.

- **Objective**:

  - Offer a **clear and interactive** interface for browsing forum categories.
  - Improve **thread discoverability** by allowing users to filter discussions based on categories.
  - Ensure **smooth navigation** with a responsive slider optimized for various screen sizes.

- **Functionality**:

  - **Category List**:

    - Uses `useMemo` to **memoize** the category list, combining the default `"All"` option with fetched categories.
    - Reduces unnecessary re-renders for better performance.

  - **Slider Navigation**:

    - Implements **React Slick Carousel** for horizontal scrolling of category buttons.
    - Configures **responsive breakpoints** (1024px, 600px, 480px) to adjust the number of visible slides on different devices.

  - **Category Buttons**:
    - Each button **updates the selected category** via `setSelectedCategory` on click.
    - Highlights the **active category** using conditional styling.
    - Applies smooth transition effects for an enhanced user experience.

- **Suggestion**:
  - Enhance **accessibility** by adding ARIA labels to the category buttons.
  - Consider adding **tooltips** for additional context on each category.
  - Optimize the slider further by integrating lazy-loading if visuals or icons are added in the future.

### 3.7.3 Forum Threads Component

- **Description**:  
  A **threads listing component** for the forum page that displays discussion threads in a structured grid layout. It allows users to **browse**, **filter**, and **view detailed** information about threads via a modal dialog.

- **Objective**:

  - Enable users to **view and filter** forum threads based on search queries and selected categories.
  - Provide a **dynamic "Show More" functionality** to progressively load additional threads.
  - Allow users to **access detailed thread information** through an interactive modal.

- **Functionality**:

  - **Data Sorting & Filtering**:

    - **Sorts threads** by creation date (newest first) to ensure fresh content is prioritized.
    - **Filters threads** based on the thread title matching the `searchQuery` and the `selectedCategory` (with "All" showing every thread).

  - **Thread Display**:

    - Displays threads in a **grid layout** with key details: title, description, number of comments, likes, and a "time ago" indicator computed via a utility function.
    - Implements a **"Show More" button** that increases the `visibleThreadsCount`, allowing additional threads to be displayed when available.

  - **Top Threads Section**:

    - Separately identifies **top threads** by sorting based on the number of comments (and likes as a secondary criterion) and limiting the display to the **top 5 threads**.

  - **Modal Dialog for Thread Details**:
    - Uses a **state variable (`selectedThread`)** to track which thread is selected for a detailed view.
    - Opens a modal dialog (via `ViewDetailsThreadsModal`) to present **in-depth thread details**.
    - Utilizes **useEffect** to update the selected thread if the underlying forums data changes.

- **Suggestion**:
  - Implement **debouncing** on the search input to improve performance and reduce unnecessary filtering.
  - Optimize the **timeAgo** utility by memoizing results or using a dedicated time library.
  - Enhance accessibility by adding **ARIA labels** and enabling keyboard navigation for thread items.
  - Consider lazy-loading modal content for better performance when displaying thread details.

#### 3.7.3.1 View Details Component

- **Description**:  
  A **modal component** that displays detailed information about a selected forum thread. It shows the thread’s title, description, metadata (author, category, and creation time), likes, and comments. It also enables logged-in users to like the thread and add comments.

- **Objective**:

  - Provide a **comprehensive view** of a forum thread with all relevant details.
  - Allow authenticated users to **engage** with the thread by liking and commenting.
  - Facilitate **real-time updates** by re-fetching data after user interactions.

- **Functionality**:

  - **Thread Details Display**:

    - Shows thread title, description, and metadata including author (with a link), category, and relative creation time (using a **time ago** utility).

  - **Like Button**:

    - Implements a like feature that updates the like count via an asynchronous patch request.
    - Displays different icons based on whether the user has already liked the thread.
    - Prevents multiple rapid clicks by managing a loading state.

  - **Comment Section**:

    - Provides an input box for logged-in users to add new comments.
    - Disables the comment box if the user has already commented.
    - Displays existing comments with author names and relative times.

  - **Modal Control**:

    - Includes a close button to exit the modal view.
    - Uses a dedicated modal dialog element and integrates with the **ViewDetailsThreadsModal** component.

  - **State Management & Side Effects**:
    - Manages various states such as loading indicators, like loading, new comment input, and modal visibility.
    - Uses `useEffect` to update the selected thread if the underlying forum data changes.

- **Suggestion**:
  - Enhance error handling by providing more detailed feedback on failed like or comment operations.
  - Implement a **debounce mechanism** to prevent rapid-fire like requests.
  - Consider adding a toggle to **show all comments** versus a truncated list for improved usability.
  - Optimize the UI by integrating animations or transitions when the modal opens and closes.

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
