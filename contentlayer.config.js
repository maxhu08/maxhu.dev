import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: doc => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: doc => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    technologies: {
      type: "string",
      required: true
    },
    demoLink: {
      type: "string",
      required: false
    },
    codeLink: {
      type: "string",
      required: false
    }
  },
  computedFields
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Project]
});
