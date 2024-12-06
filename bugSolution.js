```javascript
/* Option 1: Using !important (generally discouraged)
   Use this option only as a last resort. */
<div class="flex">
  <div class="bg-red-500 p-4 !important">
    This div should be red.
  </div>
  <div class="bg-blue-500 p-4 !important">
    This div should be blue.
  </div>
</div>

/* Option 2: Using more specific classes */
<div class="flex bg-gray-100">
  <div class="bg-red-500 p-4">
    This div should be red.
  </div>
  <div class="bg-blue-500 p-4">
    This div should be blue.
  </div>
</div>
```