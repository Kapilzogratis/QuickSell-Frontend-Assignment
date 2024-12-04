# Kanban Board Application

A dynamic and interactive Kanban board built with React that allows users to visualize and organize tickets based on different grouping and ordering preferences.

## Features

### 1. Dynamic Grouping
Users can group tickets by:
- **Status**: Organize tickets by their current status (Todo, In Progress, Done, etc.)
- **User**: Group tickets by assigned team members
- **Priority**: Arrange tickets based on priority levels (Urgent, High, Medium, Low, No Priority)

### 2. Flexible Ordering
Two ordering options available:
- **Priority**: Sort tickets by priority level (descending)
- **Title**: Sort tickets alphabetically by title

### 3. Persistent Views
- User preferences for grouping and ordering are saved in localStorage
- Views persist across page reloads

### 4. Visual Features
- Clean and modern UI design
- Responsive layout
- Visual indicators for:
  - User avatars with availability status
  - Priority levels with distinct icons
  - Ticket tags
  - Ticket counts per group

### 5. Real-time Data
- Fetches ticket and user data from the QuickSell API
- Automatically updates the view based on user preferences

## Technical Details

### Built With
- React.js
- Axios for API calls
- CSS3 with modern features
- SVG icons for visual elements

### Key Components
- **KanbanBoard**: Main component managing the board's state and layout
- **DisplayButton**: Controls for grouping and ordering preferences
- **TicketCard**: Individual ticket display with detailed information

### State Management
- Uses React hooks (useState, useEffect) for state management
- Implements localStorage for persistent user preferences
- Efficient data grouping and sorting algorithms

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## API Integration
The application integrates with the QuickSell API endpoint:
```
https://api.quicksell.co/v1/internal/frontend-assignment
```

## Usage
1. Click the "Display" button in the top-left corner
2. Select your preferred grouping method (Status/User/Priority)
3. Choose your desired ordering method (Priority/Title)
4. The board will automatically update to reflect your selections

## Performance Considerations
- Optimized rendering with proper React component structure
- Efficient data transformation algorithms
- Minimal re-renders using proper state management
- Responsive design for various screen sizes