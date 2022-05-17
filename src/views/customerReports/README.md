# Customer Reports

The `customerReports` directory is an example of a feature.

## Feature Views

This feature has several views to show the general structure. In this case, based on their names:

-   `CustomerReports.vue` displays links to many single Customer Reports
-   `CustomerReport.vue` accepts an `id` prop and displays the appropriate report
-   `CustomerReportEdit.vue` accepts an `id` prop and displays the appropriate report for editing

## Components Directory

The `customerReports/components` directory contains any component that is specific to this feature, including reusable components used in more than one view of this feature.

## Routes

Routes for the feature are contained in `customerReportsRoutes.js` and imported into the main Vue Router file at `src/router/index.js`

## API Example

`CustomerReport.vue` contains an example API call.

## Vuex example

`CustomerReportEdit.vue` contains an example usage of Vuex.
