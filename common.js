// 변수할당

const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

//도큐먼트에 mousemove 이벤트리스너를 등록 한 뒤에 콜백함수 등록
document.addEventListener('mousemove', (event) => {
  //event가 발생할 때 항상 event 오브젝트가 전달됨
  //   console.log(`${event.clientX}, ${event.clientY}`);

  // 변수할당
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x}, ${y}`);

  // 수직수평선 위치변경
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  // 이미지 위치변경
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  // 텍스트 위치변경
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;

  // 텍스트 값 표시
  tag.innerHTML = `${x}px, ${y}px`;
});
