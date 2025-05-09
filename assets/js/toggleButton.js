function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeTextLight.style.display = isDark ? 'none' : 'inline';
  themeTextDark.style.display = isDark ? 'inline' : 'none';
  document.querySelector('.toggle-circle').style.transform = isDark ? 'translateX(45px)' : 'translateX(0)';
}
