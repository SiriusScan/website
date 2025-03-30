# Sirius Scan Style Guide

## Brand Colors

### Primary Colors

- Background Dark: `#15162c` (Dark blue base)
- Gradient:
  - From: `#2e026d` (Deep purple)
  - To: `#15162c` (Dark blue)
- Text Colors:
  - Primary: `text-white`
  - Secondary: `text-gray-300`
  - Accent: `text-violet-200`
  - Links: `text-violet-400`
  - Hover: `text-violet-300`

### Border Colors

- Primary: `border-violet-800/20`
- Secondary: `border-violet-100`

## Typography

### Fonts

- Primary Headings: Roboto Slab
- Body Text: System default (Tailwind default stack)

### Text Sizes

- Hero/Main Headings: `text-4xl`
- Section Headings: `text-2xl`
- Navigation: `text-xl`
- Body Text: Base size
- Small Text: `text-sm`

### Font Weights

- Extra Light: `font-extralight`
- Regular: Default
- Semibold: `font-semibold`
- Bold: `font-bold`

## Components

### Buttons

```tsx
// Primary Button
<button className="rounded-md border border-violet-200 px-8 py-2 text-white transition duration-300 hover:bg-white hover:text-blue-500 hover:shadow-lg">
  Button Text
</button>
```

### Cards

```tsx
// Documentation Card
<div className="rounded-lg border border-violet-800/20 p-6">
  <h2 className="mb-4 text-2xl font-semibold text-violet-200">Card Title</h2>
  <p className="mb-4 text-gray-300">Card content</p>
</div>
```

### Links

```tsx
// Navigation Link
<Link href="/path">
  <span className="mx-2 hover:font-bold">Link Text</span>
</Link>

// Documentation Link
<Link href="/path">
  <span className="text-violet-400 hover:text-violet-300">
    Link Text →
  </span>
</Link>
```

## Layout

### Container

```tsx
<div className="container mx-auto px-4">{/* Content */}</div>
```

### Grid System

- Base: `grid`
- Columns:
  - Single: `grid-cols-1`
  - Two Columns: `md:grid-cols-2`
  - Custom: `md:grid-cols-[2fr,3fr]`
- Gap: `gap-6`, `gap-8`, `gap-12`

### Spacing

- Margin:
  - Small: `m-2`, `mx-2`, `my-2`
  - Medium: `m-4`, `mx-4`, `my-4`
  - Large: `m-6`, `mx-6`, `my-6`
- Padding:
  - Small: `p-2`, `px-2`, `py-2`
  - Medium: `p-4`, `px-4`, `py-4`
  - Large: `p-6`, `px-6`, `py-6`

## Responsive Design

### Breakpoints

- Mobile: Default
- Tablet/Desktop: `sm:` (640px)
- Desktop: `md:` (768px)
- Large Desktop: `lg:` (1024px)

### Mobile Navigation

- Hidden on mobile: `hidden sm:flex`
- Visible on mobile: `sm:hidden`

## Documentation-Specific Styles

### Code Blocks

- Background: Dark theme
- Font: Monospace
- Padding: `p-4`
- Border Radius: `rounded-lg`

### Content Width

- Max width: `max-w-4xl`
- Prose: `prose prose-invert max-w-none`

### Sidebar

- Width: `md:w-64`
- Border: `border-r border-violet-800/20`
- Active state: `font-semibold text-violet-200`
- Inactive state: `text-gray-300 hover:text-violet-200`
