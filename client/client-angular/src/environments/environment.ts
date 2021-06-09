// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  eventsUrl : 'http://localhost:8081/events',
  categoriesUrl : 'http://localhost:8081/categories',
  ticketsUrl : 'http://localhost:8081/tickets',
  adminGraphUrl : 'http://localhost:8081/events/adminGraph',
  usersAdminUrl : 'http://localhost:8081/admin',
  usersUrl : 'http://localhost:8081/users',
  filtersUrl : 'http://localhost:8081/filters',
  contactsUrl : 'http://localhost:8081/contacts',
  tradesUrl: 'http://localhost:8081/trades'
};
