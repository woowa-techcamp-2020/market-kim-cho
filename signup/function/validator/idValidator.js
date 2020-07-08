export default function idValidator(userId) {
  if (typeof userId !== "string") return false;

  const idRegex = /^[a-z0-9-_]{4,20}$/g;
  if (idRegex.test(userId)) return true;
  return false;
}
