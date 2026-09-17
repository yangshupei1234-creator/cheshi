const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  result.textContent = `测试成功：${new Date().toISOString()}`;
});
