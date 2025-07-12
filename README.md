# Billing Component

Pre-requirements:

- npm install
- npm install @mui/icons-material
- npm install @mui/material @emotion/react @emotion/styled

How to run:
cd my-billing-app
cd src
npm start
.. app should be running


My Approuch:

- From my experience with recent projects, I didn’t find this task particularly intimidating, since it didn’t require much backend complexity. I focused on meeting the specific conditions provided in the task description.

The most challenging part was learning how MUI’s Typography works and how to apply it effectively. Once I understood it, I found it really interesting that you don’t always need to rely on traditional HTML tags for headings and paragraphs—you can define your typography and styling directly in the component.

To start, I sketched out the overall design on my iPad, mapping out the required elements. From there, I implemented a clean, minimal React component that presents both Basic and Pro plan subscriptions, with details on each card and a “Select Plan” button. When the button is clicked, it triggers an alert to confirm the user’s selection.

One of the trade-offs of designing this way, given the requirements, is prioritizing speed and simplicity. By using MUI’s sx prop and styled() instead of external stylesheets, we avoid unnecessary overhead and keep the styling logic close to the component itself. This improves maintainability and performance.

Additionally, incorporating TypeScript or PropTypes for prop validation helps with double-checking data and reducing runtime errors. Finally, theming was an especially valuable aspect, as it allows for full customization and consistency that can be reused across the application.
