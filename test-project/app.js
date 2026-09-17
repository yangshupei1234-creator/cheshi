const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  result.textContent = `GitHub 写入/修改测试成功：${new Date().toISOString()}`;
});
