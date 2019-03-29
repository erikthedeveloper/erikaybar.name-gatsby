import slugify from 'slug'

export function tagToPath(tag) {
  return `/tags/${slugify(tag)}`
}
