export const setDate = (whichDate, date) => {
  localStorage.setItem(`${whichDate}_date`, date);
};

export const getDate = whichDate => localStorage.getItem(`${whichDate}_date`) || null;

export const clearDate = whichDate => localStorage.removeItem(`${whichDate}_date`);