export const setEndDate = date => {
  localStorage.setItem('end_date', date);
};

export const getEndDate = () => localStorage.getItem('end_date') || null;

export const clearEndDate = () => localStorage.removeItem('end_date');