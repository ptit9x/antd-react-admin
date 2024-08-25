function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    return undefined;
  }
}

function convertJsonToFormData<T extends object>(object: T) {
  const formData = new FormData();
  Object.entries(object).forEach(([key, value]) => formData.append(key, value));
  return formData;
}

export { parseJSON, convertJsonToFormData };
