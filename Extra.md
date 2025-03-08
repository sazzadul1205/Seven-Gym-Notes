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

<!-- using the above format make the note for this component -->