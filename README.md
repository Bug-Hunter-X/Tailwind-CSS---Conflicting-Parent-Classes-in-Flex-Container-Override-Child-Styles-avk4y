# Tailwind CSS Conflicting Parent Classes Bug

This repository demonstrates a common issue in Tailwind CSS where parent class styles inadvertently override child styles, specifically within a flex container.  The problem arises from the specificity of CSS rules and how Tailwind's utility-first approach handles class conflicts.

## Bug Description

The provided code uses Tailwind CSS classes to style two divs within a flex container. However, due to a conflicting class on the parent div, the expected colors of the child divs are not rendered.

## Solution

The solution involves understanding CSS specificity and using techniques like `!important` (though generally discouraged) or more specific classes to ensure the child styles take precedence.

## Reproduction

1. Clone this repository.
2. Open `index.html` in your browser.