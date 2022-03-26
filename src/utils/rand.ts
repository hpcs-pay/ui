export const rand = (length: number = 5): string => {
  let val = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    val += characters.charAt(Math.floor(Math.random() * 36));
  }
  return val;
};
