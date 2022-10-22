export function parseFilters (filters) {
  let result = {}
  filters.split('&').forEach(element => {
    const [field, value] = element.split('=')
    result[field] = value
  });
  return result
}