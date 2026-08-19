# Sorting Visualizer

An interactive educational tool for exploring how sorting algorithms transform an array step by step. The application visualizes comparisons, swaps, pivots, current minimum values, and merge overwrites while providing playback controls, live statistics, and algorithm complexity information.

> **Live demo:** https://sorting-visualizer-eta-tawny.vercel.app/

## Features

- Visualizes Bubble, Selection, Insertion, Merge, and Quick Sort.
- Supports ascending and descending sorting modes.
- Generates random arrays or accepts comma-separated custom arrays.
- Adjusts the array size and animation speed.
- Provides Start, Pause, and Reset playback controls.
- Highlights algorithm states such as comparisons, pivots, and current minimum values.
- Shows values above bars and indexes below them.
- Displays operation-based statistics as the animation progresses.
- Displays best-case, average-case, worst-case, and space complexity for the selected algorithm.
- Supports horizontal scrolling for larger arrays.

## Algorithms

| Algorithm      | Best Case  | Average Case | Worst Case | Space Complexity |
| -------------- | ---------- | ------------ | ---------- | ---------------- |
| Bubble Sort    | O(n)       | O(n²)        | O(n²)      | O(1)             |
| Selection Sort | O(n²)      | O(n²)        | O(n²)      | O(1)             |
| Insertion Sort | O(n)       | O(n²)        | O(n²)      | O(1)             |
| Merge Sort     | O(n log n) | O(n log n)   | O(n log n) | O(n)             |
| Quick Sort     | O(n log n) | O(n log n)   | O(n²)      | O(log n)         |

## Visual States

The bar colors represent the operations currently being played:

- Blue — default value
- Red — comparison in progress
- Yellow — pivot in Quick Sort
- Green — current minimum in Selection Sort

The displayed visual states adapt to the selected algorithm, so only relevant states are shown.

## Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- React Icons

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone <your-repository-url>
cd Sorting-Visualizer
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Build for Production

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
├── algorithms/
│   ├── bubbleSort.js
│   ├── insertionSort.js
│   ├── mergeSort.js
│   ├── quickSort.js
│   └── selectionSort.js
├── components/
│   ├── ControlPanel.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── InformationPanel.jsx
│   ├── PlaybackControls.jsx
│   └── VisualizationaArea.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## How It Works

Each sorting algorithm produces an array of operations. During playback, the app processes one operation at a time and updates the visualization accordingly. This keeps the animation, visual state, and displayed statistics connected to the same operation data.

## Author

**Mayank Shrivastava**

- GitHub: [MayankkShrivastavaa](https://github.com/MayankkShrivastavaa)
- LinkedIn: [Mayank Shrivastava](https://www.linkedin.com/in/mayank-shrivastava-4bb4473a5/)
- Email: [shrivastava.mayank.me@gmail.com](mailto:shrivastava.mayank.me@gmail.com)

© 2026 Mayank Shrivastava. All rights reserved.
