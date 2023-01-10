interface LinkType {
  title: string;
  linkTo: string;
}

export const LinksData: LinkType[] = [
  {
    title: '메인화면',
    linkTo: '/',
  },
  {
    title: '알고리즘',
    linkTo: '/experience',
  },
  {
    title: '기술 스택',
    linkTo: '/skills',
  },
  {
    title: '학습용 데이터',
    linkTo: '/projects',
  },
  {
    title: '견적서 업로드',
    linkTo: '/contact',
  },
];
