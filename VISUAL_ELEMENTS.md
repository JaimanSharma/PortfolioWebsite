# Visual Elements Added

## Icons Created

All icons are in `public/icons/` and use the accent color (#2DD4BF):

1. **automation.svg** - Gear/cog icon representing automation
2. **cloud.svg** - Cloud icon for Cloud Security highlight
3. **code.svg** - Code brackets icon for Systems + Dev highlight
4. **ctf.svg** - Binary/flag icon for Security Research/CTF highlight
5. **security.svg** - Shield icon (backup security icon)

## Background Patterns

Patterns are in `public/images/`:

1. **grid-pattern.svg** - Subtle grid pattern used in hero section
2. **circuit-pattern.svg** - Circuit board pattern used in highlights section

## Visual Enhancements

### Hero Section
- Animated gradient blobs in background
- Subtle grid pattern overlay
- Smooth fade-in animations

### Highlights Section
- Icons for each highlight card
- Circuit pattern background
- Hover glow effects
- Scale animations on hover

### Skills Section
- Fixed alignment with `inline-block` and `whitespace-nowrap`
- Consistent sizing for all skill tags

### Experience Section
- Fixed bullet point alignment (mt-0 instead of mt-0.5)
- Better text wrapping with flex-1

## Usage

Icons are automatically displayed in the highlights section based on the title:
- Cloud Security → cloud.svg
- Systems + Dev → code.svg
- Security Research/CTF → ctf.svg
- Automation → automation.svg

Background patterns are embedded as inline SVG data URIs for performance.

## Customization

To add more icons:
1. Create SVG files in `public/icons/`
2. Update the icon mapping in `app/page.tsx` highlights section
3. Use the accent color (#2DD4BF) for consistency

To add more patterns:
1. Create SVG pattern files in `public/images/`
2. Convert to data URI or reference directly
3. Apply as background-image in CSS

