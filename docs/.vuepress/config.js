module.exports = {
  title: 'Learn React the Vue Way',
  description: 'Learn React the Vue Way',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Essentials',
        collapsable: false,
        children: [
          '/essentials/installation',
          '/essentials/introduction',
          '/essentials/the-vue-instance',
          '/essentials/template-syntax',
          '/essentials/computed-properties-and-watchers',
          '/essentials/class-and-style-bindings',
          '/essentials/conditional-rendering',
          '/essentials/list-rendering',
          '/essentials/event-handling',
          '/essentials/form-input-bindings',
          '/essentials/component-basics'
        ]
      },
      {
        title: 'Components In-Depth',
        collapsable: false,
        children: [
          '/components-in-depth/component-registration',
          '/components-in-depth/props',
          '/components-in-depth/custom-events',
          '/components-in-depth/slots',
          '/components-in-depth/dynamic-and-async-components',
          '/components-in-depth/handling-edge-cases',
        ]
      }
    ]
  }
}