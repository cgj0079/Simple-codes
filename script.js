const button = document.getElementById('copyButton');
const codeToCopy = document.getElementById('codeToCopy').innerText;
button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(codeToCopy);
    alert('코드가 클립보드에 복사되었습니다!');
  } catch (err) {
    alert('복사 실패: ' + err);
  }
});
