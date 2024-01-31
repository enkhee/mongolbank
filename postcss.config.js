module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: { flexbox: "no-2009" },
        stage: 3,
        features: { "custom-properties": false },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./components/**/*.{js,jsx,ts,tsx}",
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./node_modules/swiper/**/*.{js,jsx,ts,tsx}",
          "./node_modules/react-toastify/**/*.{js,jsx,ts,tsx}",
          "./node_modules/react-datepicker/**/*.{js,jsx,ts,tsx}",
          "./node_modules/react-dates/**/*.{js,jsx,ts,tsx}",
          "./node_modules/rc-slider/**/*.{js,jsx,ts,tsx}",
          "./node_modules/@react-google-maps/**/*.{js,jsx,ts,tsx}",
        ],
        css: [], // css
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ["html", "body"],
          deep: [
            /^modal-/,
            /^offcanvas-/,
            /^date_picker/,
            /^rc-slider-/,
            /^google-map/,
            /^hotel-full-map/,
            /^new-hotel-map-page/,
            /^new-main-search/,
            /^map-left/,
            /^map-header/,
            /^map-/,
            /^DateRangePicke/,
            /^DateRangePicke_/,
            /^DayPicker_/,
            /^CalendarDay_/,
            /^react-datepicker-/,
            /^warning-drop/,
            /^guest-names-warning/,
            /^the-msg/,
            /^swiper-grid/,
            /^swiper-grid-column/,
            /^ratio/,
            /^popover-content/,
            /^popover-/,
            /^static/,
            /^opacity-/,
          ],
        },
      },
    ],
  ],
};