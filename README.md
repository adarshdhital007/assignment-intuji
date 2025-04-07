# Intuji Assignment done by Adarsh Dhital

- Mobile-friendly design fully responsive 
- Sidebar that collapses to icons below 1300px
- Interactive charts with weekly/monthly data

## Setup

You have two options to get started:

1. **Use the provided CSS file**:  
   Simply open `index.html` in your browser to view the dashboard. No additional setup is required.

2. **Experiment with Sass mixins**:  
   Delete the `style.css` file and follow the steps below to compile the styles using Sass.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)

### Steps to Get Started

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/adarshdhital007/assignment-intuji-adarsh.git
   cd assignment-intuji-adarsh
   ```

2. If you want to modify the styles, install Sass globally and compile the styles:
   ```bash
   npm install -g sass
   npm run sass
   ```

3. Open `index.html` in your browser to view the dashboard.
To get started, you can either use the provided CSS file or experiment with Sass mixins by deleting `style.css` and following the steps below.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)

### Steps to Get Started

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/adarshdhital007/assignment-adarsh.git
   cd intuji
   ```

2. If you want to modify the styles, install Sass globally and compile the styles:
   ```bash
   npm install -g sass
   npm run sass
   ```

3. Open `index.html` in your browser to view the dashboard.

## Making changes

The styles use Sass:
- `mixins.scss` - Variables and reusable patterns
- `style.scss` - Main styles

To update styles:
1. Edit the .scss files
2. Run `sass style.scss style.css`
3. Refresh the browser

The design adapts at these screen sizes:
- Desktop: 1300px+
- Tablet: Below 1300px (sidebar shows only icons)
- Mobile: Below 920px (everything stacks)

## Features

- Responsive design that adapts to different screen sizes
- Collapsible sidebar with icon-only mode below 1300px
- Interactive analytics charts with weekly/monthly views

## Prerequisites

- Node.js (v14 or later) - [Download here](https://nodejs.org/)

## Development

The project uses Sass for styling:

- `mixins.scss`: Contains variables, mixins, and utility functions
- `style.scss`: Main stylesheet that uses mixins

To make style changes:
1. Edit the SCSS files
2. Compile to CSS with `sass style.scss style.css`
3. Refresh your browser to see changes

> **Note:** This project uses the modern Sass `@use` syntax instead of the deprecated `@import`. If you receive deprecation warnings when compiling, ensure you're using a recent version of Sass (≥1.33.0).

## Responsive Breakpoints

- Desktop: 1300px and above
- Tablet: Below 1300px (sidebar collapses to icons only)
- Mobile: Below 920px (single column layout)

## Project Structure

- `mixins.scss` - Contains all Sass variables and mixins
- `style.scss` - Main Sass file that imports mixins and implements the UI
- `style.css` - Compiled CSS file
- `index.html` - Dashboard HTML

## Available Mixins

### Layout Mixins

- `flex-center` - Centers items using flexbox
- `flex-between` - Spreads items with space-between
- `flex-column` - Creates a column flex container
- `flex-column-gap($gap)` - Column flex with customizable gap
- `flex-row-gap($gap)` - Row flex with customizable gap

### Component Mixins

- `card-base` - Base card styling
- `button-base` - Base button styling
- `search-input` - Search input styling
- `panel-header` - Panel header styling
- `text-truncate` - Truncates text with ellipsis

### Status Color Mixins

- `status-color($status)` - Sets text color based on status ('success', 'warning', 'danger', 'primary')
- `status-background($status)` - Sets background color based on status
- `progress-bar($color)` - Creates a progress bar with specified color

### Responsive Mixins

- `responsive($breakpoint)` - Media queries for different screen sizes

## Implementing Mixins

Example of how to use the mixins in your SCSS:

```scss
.my-card {
  @include card-base;
  
  &__header {
    @include flex-between;
  }
  
  &__content {
    @include flex-column-gap($space-md);
  }
  
  &__button {
    @include button-base;
    
    &--primary {
      @include status-background('primary');
      color: $color-white;
    }
  }
}
```

## Variables

The `mixins.scss` file contains various predefined variables for:

- Colors
- Font sizes
- Spacing
- Border radius
- Shadows
- Transitions

These variables ensure consistency throughout the UI and make it easy to update the design system in one place.

