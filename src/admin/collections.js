// Field definitions that drive the generic CRUD screen for each collection.
export const servicesConfig = {
  collection: "services", title: "Services", singular: "service",
  description: "Everything listed here appears in the Services section of your website.",
  primaryKey: "title", secondaryKey: "short_description",
  blank: { title: "", short_description: "", icon: "Briefcase", featured: false, published: true, sort_order: 99 },
  fields: [
    { key: "title", label: "Title" },
    { key: "short_description", label: "Short description", type: "textarea" },
    { key: "icon", label: "Icon", type: "icon" },
    { key: "sort_order", label: "Display order", type: "number", hint: "Lower numbers appear first." },
    { key: "featured", label: "Highlight", type: "checkbox", toggleLabel: "Show “Popular” badge" },
    { key: "published", label: "Visibility", type: "checkbox", toggleLabel: "Visible on website" }
  ]
};

export const testimonialsConfig = {
  collection: "testimonials", title: "Testimonials", singular: "testimonial",
  description: "Client reviews shown in the “Client stories” section.",
  primaryKey: "name", secondaryKey: "quote",
  blank: { name: "", role: "", quote: "", rating: 5, published: true, sort_order: 99 },
  fields: [
    { key: "name", label: "Client name" },
    { key: "role", label: "Role / company", required: false },
    { key: "quote", label: "Review", type: "textarea" },
    { key: "rating", label: "Rating", type: "rating" },
    { key: "sort_order", label: "Display order", type: "number" },
    { key: "published", label: "Visibility", type: "checkbox", toggleLabel: "Visible on website" }
  ]
};

export const faqsConfig = {
  collection: "faqs", title: "FAQs", singular: "FAQ",
  description: "Questions and answers shown in the FAQ accordion.",
  primaryKey: "question", secondaryKey: "answer",
  blank: { question: "", answer: "", published: true, sort_order: 99 },
  fields: [
    { key: "question", label: "Question" },
    { key: "answer", label: "Answer", type: "textarea" },
    { key: "sort_order", label: "Display order", type: "number" },
    { key: "published", label: "Visibility", type: "checkbox", toggleLabel: "Visible on website" }
  ]
};
