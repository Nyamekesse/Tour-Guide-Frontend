const USER_LOCAL_STORAGE_KEY = "travel_advisor";
export function getStoredUser() {
  const storedUser = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
}

export function setStoredUser(user) {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser() {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}
export function preprocessForChart(data) {
  const sentimentCounts = data.reduce((counts, item) => {
    counts[item.sentiment] = (counts[item.sentiment] || 0) + 1;
    return counts;
  }, {});
  return sentimentCounts;
}
