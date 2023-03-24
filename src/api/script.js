export function getFilteredItems(dkJobs, text) {
  if (!text) {
    return dkJobs;
  }
  return (
    dkJobs &&
    dkJobs.filter((e) => {
      const title = e.title.toLowerCase();
      const createdAt = e.createdAt.toLowerCase();
      const keywords = e.keywords.map((k) => k.toLowerCase());

      return (
        title.includes(text) ||
        createdAt.includes(text) ||
        keywords.some((k) => k.includes(text))
      );
    })
  );
}

export function displayedAt(item) {
  const milliSeconds = new Date() - new Date(item.createdAt);
  const seconds = milliSeconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (Math.floor(days) === 0) return Math.floor(days);
  if (days < 3) {
    return Math.floor(days);
  } else {
    return item.createdAt;
  }
}
