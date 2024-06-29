export const createPagination = (
  currentPage: number,
  totalPages: number,
  visiblePages = 5
) => {
  const pagination = [];

  // Добавляем первую страницу всегда
  pagination.push(1);

  // Рассчитываем начальную и конечную страницы
  let startPage = Math.max(2, currentPage - Math.floor(visiblePages / 2));
  let endPage = Math.min(
    totalPages - 1,
    currentPage + Math.floor(visiblePages / 2)
  );

  // Корректируем начальную и конечную страницы, если они выходят за границы
  if (currentPage <= Math.floor(visiblePages / 2)) {
    endPage = Math.min(totalPages - 1, visiblePages);
  }

  if (currentPage > totalPages - Math.floor(visiblePages / 2)) {
    startPage = Math.max(2, totalPages - visiblePages + 1);
  }

  // Добавляем точки перед начальной страницей, если она не рядом с первой страницей
  if (startPage > 2) {
    pagination.push("...");
  }

  // Добавляем страницы между первой и последней
  for (let i = startPage; i <= endPage; i++) {
    pagination.push(i);
  }

  // Добавляем точки после конечной страницы, если она не рядом с последней страницей
  if (endPage < totalPages - 1) {
    pagination.push("...");
  }

  // Добавляем последнюю страницу, если она больше 1
  if (totalPages > 1) {
    pagination.push(totalPages);
  }

  return pagination;
};
