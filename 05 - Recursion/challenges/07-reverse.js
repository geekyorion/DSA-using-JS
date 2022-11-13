// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const reverse = str => {
    if (!str.length) return '';
    return reverse(str.substring(1)) + str.substring(0, 1);
};
  
reverse('awesome');     // 'emosewa'
reverse('rithmschool'); // 'loohcsmhtir'
