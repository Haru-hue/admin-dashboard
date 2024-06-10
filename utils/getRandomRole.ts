export default function assignRandomRole() {
  const roles = ["admin", "user"];
  // Randomly select 0 or 1
  const randomIndex = Math.floor(Math.random() * roles.length);
  return roles[randomIndex];
}
