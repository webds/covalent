import { routeBuilder, IScopedRouteBuilder } from '../../utilities/route-builder';

export const componentRouteCategories = [
  { name: '', nested: false },
  { name: 'Layout', nested: false },
  { name: 'Buttons & Indicators', nested: false },
  { name: 'Navigation', nested: false },
  { name: 'Dialogs', nested: false },
  { name: 'Forms', nested: false },
  { name: 'Editors', nested: false },
];

const [root, layout, buttons, nav, dialogs, forms, editors] = componentRouteCategories;

export const componentDetails: any = [
  {
    name: 'Breadcrumbs',
    id: 'breadcrumbs',
    description: 'Responsive navigation indicators',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: buttons.name,
    route: '/components/breadcrumbs',
    demos: [],
  },
  {
    name: 'Loading Mask',
    id: 'loading-mask',
    description:
      'Animated mask for multiple uses on loading states asoudhasiudhausihdiasuhdiuashdiu suad asiud haisud aisu',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: 'Buttons & Indicators',
    route: '/components/xyz',
  },
  {
    name: 'Highlight',
    id: 'highlight',
    description: 'Hightlight it',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: '',
    route: '/components/highlight',
    demos: [],
  },
  {
    name: 'JSON Formatter',
    id: 'json-formatter',
    description: 'JSON format it',
    apiDocUrl: 'platform/core/json-formatter/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: '',
    route: '/components/json-formatter',
    demos: [],
  },
  {
    name: 'Loading',
    id: 'loading',
    description: 'loading',
    apiDocUrl: 'platform/core/loading/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: buttons.name,
    route: '/components/loading',
    demos: [],
  },
  {
    name: 'Nav Steps',
    id: 'nav-steps',
    description:
      'Navigate across a sequence of logical & numbered steps (shrink width of page to see responsive behavior)',
    apiDocUrl: 'platform/core/steps/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'format_line_spacing',
    category: nav.name,
    route: '/components/nav-steps',
  },
  {
    name: 'Notifications',
    id: 'notifications',
    description: 'Notification count & menu for toolbar',
    apiDocUrl: 'platform/core/notifications/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'notifications',
    category: buttons.name,
    route: '/components/notifications',
  },
  {
    name: 'Tab Select',
    id: 'tab-select',
    description: 'Bind values to tabs and use them as filters',
    apiDocUrl: 'platform/core/tab-select/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'tab',
    category: forms.name,
    route: '/components/tab-select',
  },
  {
    name: 'Text Editor',
    id: 'text-editor',
    description: 'Simple markdown text editor component (edit the markdown in the left editor for a real-time preview)',
    apiDocUrl: 'platform/text-editor/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'tab',
    category: editors.name,
    route: '/components/text-editor',
  },
  {
    name: 'Markdown Parser',
    id: 'markdown-parser',
    description: 'Parse and render markdown code',
    apiDocUrl: 'platform/markdown/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: '', //Need to create new category as Markdown
    route: '/components/markdown-parser',
  },
  {
    name: 'Markdown Navigator',
    id: 'markdown-navigator',
    description: 'A component for rendering and navigating through markdown, such as documentation.',
    apiDocUrl: 'platform/markdown-navigator/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: '', //Need to create new category as Markdown
    route: '/components/markdown-navigator',
  },
  {
    name: 'Message',
    id: 'message',
    description: 'Info, warning & alert messages',
    apiDocUrl: 'platform/core/message/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: buttons.name,
    route: '/components/message',
  },
  {
    name: 'Paging',
    id: 'paging',
    description: 'Component used to paging within a dataset',
    apiDocUrl: 'platform/core/paging/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'swap_horiz',
    category: nav.name,
    route: '/components/paging',
  },
  {
    name: 'Search',
    id: 'search',
    description: 'Component used to search data within a dataset',
    apiDocUrl: 'platform/core/search/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'search',
    category: forms.name,
    route: '/components/search',
  },
  {
    name: 'Sidesheet',
    id: 'sidesheet',
    description: 'Sidesheet use to provide additional context within a particular scope',
    apiDocUrl: 'platform/core/sidesheet/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'view_array',
    category: layout.name,
    route: '/components/sidesheet',
  },
];

export const setComponentRoutes: IScopedRouteBuilder = routeBuilder(componentDetails);
