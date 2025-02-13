import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // ...existing content paths...
  ],
  theme: {
    extend: {
      // ...existing theme extensions...
    },
  },
  plugins: [
    // ...existing plugins...
  ],
});
