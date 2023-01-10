interface ExperienceDataType {
  title: string;
  date: string;
  details: string[];
}

export const ExperienceData: ExperienceDataType[] = [
  {
    title: '인터넷 | 와이파이',
    date: 'Algorithm _ 1',
    details: [
      '본 플랫폼은 Django REST API를 통해서 인공지능을 제공하고 있습니다.', '반드시 인터넷(WIFI)을 연결해주세요!',
    ],
  },
  {
    title: '반응형 웹 | 모바일',
    date: 'Algorithm _ 2',
    details: [
      '현재 사용하시는 기기는 무엇입니까? PC? 모바일?', '본 플랫폼은 어떤 기기와도 호환할 수 있습니다!',
    ],
  },
  {
    title: '갤러리 | 카메라 | 업로드',
    date: 'Algorithm _ 3',
    details: [
      '견적서 사진이 준비되셨습니까?', '해당 파일을 전송시켜주십시오!',
    ],
  },
  {
    title: '인공지능 | 데이터 분류중',
    date: 'Algorithm _ 4',
    details: [
      '서버에서 인공지능 모델이 사진을 감지합니다!', '학습된 알고리즘에 따라 종류를 분류합니다!', '결과를 문자열로 변환해 반환합니다!',
    ],
  },
  {
    title: '결과 확인 | 성능 검증',
    date: 'Algorithm _ 5',
    details: [
      '견적서를 발행한 업체와 일치합니까?', '인공지능의 정확도를 평가해주세요!',
    ],
  },
];
