export default function idValidator(userId) {
  const idRegex = /^[a-z0-9-_]{4,20}$/g;
  if (idRegex.test(userId)) return true;
  return false;
}
