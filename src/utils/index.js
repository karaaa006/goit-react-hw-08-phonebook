export const isInclude = (name, list) => {
  return list.some(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
};
