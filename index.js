// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "띵똥~ 안녕 재리마? 재리미의 하나뿐인 사랑 오빠야! " },
  { "number": 2, "message": "오늘은 재리미가 좀 더 행복한 하루를 보내길 바라는 마음으로" },
  { "number": 3, "message": "오직 재리미만을 위한 재리미마스 어드벤트 캘린더를 만들어 봤오!" },
  { "number": 4, "message": "더 멋있게 만들고 싶었는데 시간이 부족했다 헿" },
  { "number": 5, "message": "그래도 예쁘게 봐줘! 헿" },
  { "number": 6, "message": "오빠의 어드벤트 이벤트는 18일부터였으니깐 18일 전까진 편지라고 생각하고 읽어줘!" },
  { "number": 7, "message": "지난 한달동안 재리미마스를 준비하면서 오빠는 참 행복했어^^" },
  { "number": 8, "message": "그 동안 재리미한테 해주고 싶었던 선물을 맘껏 준비할 수 있어서ㅎㅎ" },
  { "number": 9, "message": "재리미가 선물을 열어보고 좋아할 모습이 눈에 그려져서" },
  { "number": 10, "message": "매일 매일이 오빠도 모르게 미소 지어가며 준비했다구 > <" },
  { "number": 11, "message": "이렇게 추운 12월에 재리미처럼 따뜻하고 아름다운 사람이 태어난 건 정말 축복이얌!" },
  { "number": 12, "message": "오빠는 그 축복을 낚아 챈 행운아고 음하하하하하" },
  { "number": 13, "message": "다시 한번 오빠랑 만나줘서 고맙다고 이야기하고 싶어!" },
  { "number": 14, "message": "종교가 없는 오빠한테는 우리 김여신 재리미가 종교야!" },
  { "number": 15, "message": "그래서 오빠는 매년 크리스마스가 아닌 재리미마스를 기다리고 준비할거야" },
  { "number": 16, "message": "울 재리미가 자신이 얼마나 소중하고 중요한 존재인지 알 수 있게 말이야!" },
  { "number": 17, "message": "그래서 자신을 더 사랑할 수 있는 생일이 되게 해줄거야!" },
  { "number": 18, "message": "18일, 재리미마스까지 D-8 오빠의 이벤트가 시작한 날! 재리미한테 미리 준 가방과 지갑을 뽑으며 아쉬워하던 날!" },
  { "number": 19, "message": "19일, 재리미마스까지 D-7 재리미가 좋아하는 수선화를 함께 만든 날" },
  { "number": 20, "message": "20일, 재리미마스까지 D-6 재리미가 좋아하는 스노우볼과 함께 진짜 눈이 펑펑 내린 날" },
  { "number": 21, "message": "21일, 재리미마스까지 D-5 행운의 펌키니 향수와 함께 울 부모님 잘 보고 온 날" },
  { "number": 22, "message": "22일, 재리미마스까지 D-4 업그레이드 된 오늘도 재리미 뽑은 날" },
  { "number": 23, "message": "23일, 재리미마스까지 D-3 오늘의 추천은 초록색 모자랄까?" },
  { "number": 24, "message": "24일, 재리미마스까지 D-2 오늘은 재리미가 궁금해 하던 그거 뽑아봐! 내일은 손편지와 케이크 그리고 마지막 선물이 준비되어있당" }
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // 상위 div의 class 번호를 찾아서 image url에 사용합니다
    const imageUrl = `image/card/card-${index + 1}.png`;

    // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
    const doorDiv = document.querySelector(`.day-${index + 1}`)
    const backDiv = doorDiv.querySelector(`.back`);

    const style = window.getComputedStyle(backDiv);
    const pTag = backDiv.querySelector('p')
    const text = modalMessageList[index]['message']

    // showModal 함수를 호출하여 모달을 표시합니다.
    showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  });
});