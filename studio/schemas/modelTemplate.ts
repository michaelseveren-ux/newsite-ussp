import { defineField, defineType } from 'sanity';

export const modelTemplateType = defineType({
  name: 'modelTemplate',
  title: 'Model Template',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Template Name',
      type: 'string',
      description: 'e.g., "Jabiru J230-D"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Optional notes about this template',
    }),
    defineField({
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'model',
      title: 'Model',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Aircraft Type',
      type: 'string',
      options: {
        list: [
          { value: 'light-sport', title: 'Light Sport' },
          { value: 'experimental', title: 'Experimental' },
          { value: 'ultralight', title: 'Ultralight' },
          { value: 'amphibious', title: 'Amphibious' },
          { value: 'gyroplane', title: 'Gyroplane' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'light-sport',
    }),
    defineField({
      name: 'specs',
      title: 'Specifications',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'cruiseSpeed', type: 'string', title: 'Cruise speed' },
        { name: 'maxSpeed', type: 'string', title: 'Max speed' },
        { name: 'stallSpeedFullFlaps', type: 'string', title: 'Stall speed (Full Flaps)' },
        { name: 'stallSpeedFlapsUp', type: 'string', title: 'Stall speed (Flaps Up)' },
        { name: 'range', type: 'string', title: 'Range' },
        { name: 'rateOfClimb', type: 'string', title: 'Rate of climb' },
        { name: 'serviceCeiling', type: 'string', title: 'Service ceiling' },
        { name: 'takeoffDistance', type: 'string', title: 'Takeoff distance' },
        { name: 'landingDistance', type: 'string', title: 'Landing distance' },
        { name: 'fuelCapacity', type: 'string', title: 'Fuel capacity' },
        { name: 'fuelBurn', type: 'string', title: 'Fuel burn' },
        { name: 'wingspan', type: 'string', title: 'Wingspan' },
        { name: 'length', type: 'string', title: 'Length' },
        { name: 'height', type: 'string', title: 'Height' },
        { name: 'wingArea', type: 'string', title: 'Wing area' },
        { name: 'emptyWeight', type: 'string', title: 'Empty weight' },
        { name: 'maxGrossWeight', type: 'string', title: 'Max gross weight' },
        { name: 'usefulLoad', type: 'string', title: 'Useful load' },
        { name: 'engine', type: 'string', title: 'Engine' },
        { name: 'horsepower', type: 'string', title: 'Horsepower' },
        { name: 'propeller', type: 'string', title: 'Propeller' },
        { name: 'avionics', type: 'string', title: 'Avionics' },
      ],
    }),
  ],
  preview: {
    select: { title: 'name', manufacturer: 'manufacturer', model: 'model' },
    prepare({ title, manufacturer, model }) {
      return {
        title: title ?? 'Untitled Template',
        subtitle: [manufacturer, model].filter(Boolean).join(' '),
      };
    },
  },
});
