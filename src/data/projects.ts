import type { StackIcon } from "./stackIcons";
export type StackKey = StackIcon["key"];

export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  team: "개인" | "팀";
  stacks: StackKey[];
  links: { demo?: string; github?: string; youtube?: string; blog?: string };
};

export const projects: Project[] = [
  {
    slug: "boardque-app",
    title: "보드게임 추천 플랫폼 보드큐(Boardque)",
    period: "2025.07 - 2025.08",
    summary:
      "장르 · 인원 · 플레이시간 · 연령 · 난이도를 입력해 추천을 받고, 검색 → 추천 → 리뷰/좋아요로 이어지는 흐름을 제공하는 서비스",
    team: "팀",
    stacks: ["nextjs", "typescript", "axios", "zustand", "tailwind", "vercel"],
    links: {
      github: "https://github.com/main-10-2team/boardgame-frontend",
      youtube: "https://youtu.be/AETJ4Dd3emQ",
    },
  },
  {
    slug: "lms-admin",
    title: "통합 교육 플랫폼(LMS) 어드민 웹",
    period: "2025.06 - 2025.07",
    summary: "교육기관 운영자를 위한 LMS 어드민 웹",
    team: "팀",
    stacks: ["react", "typescript", "axios", "zustand", "tailwind"],
    links: {
      github: "https://github.com/OZ-Coding-School/oz_externship_fe_01_team4",
    },
  },
  {
    slug: "movie-list",
    title: "영화 목록 웹페이지",
    period: "2025.05",
    summary: "회원가입이 가능한 영화 조회 웹",
    team: "개인",
    stacks: ["react", "javascript", "tailwind", "supabase"],
    links: {
      github: "https://github.com/idubusomuch/movie_list_project",
      demo: "https://movie-list-project-1.vercel.app/",
    },
  },
  {
    slug: "weather-list",
    title: "날씨 조회 웹페이지",
    period: "2025.04",
    summary:
      "날씨 API를 이용해 현재 위치 정보를 허용받아 내 지역의 날씨 정보를 조회하는 웹사이트",
    team: "개인",
    stacks: ["react", "javascript", "styledcomponents"],
    links: {
      github: "https://github.com/idubusomuch/weather-app",
      blog: "https://hydeveloper.tistory.com/204",
    },
  },
  {
    slug: "calculator",
    title: "계산기 프로그램",
    period: "2025.04",
    summary: "간단한 계산기 기능을 구현한 웹 애플리케이션",
    team: "개인",
    stacks: ["java", "css", "javascript", "mysql"],
    links: {
      github: "https://github.com/idubusomuch/fe_10_calculator",
      demo: "https://idubusomuch.github.io/fe_10_calculator/",
    },
  },
  {
    slug: "zoo-reservation",
    title: "동물원 예약 사이트",
    period: "2022.05",
    summary: "동물원 예약, 취소, 회원가입이 가능한 웹페이지",
    team: "개인",
    stacks: ["java", "css", "javascript", "mysql"],
    links: {
      youtube: "https://www.youtube.com/watch?v=3iFZAXxcVgk",
    },
  },
  {
    slug: "jusungsystem",
    title: "주성시스템 웹페이지",
    period: "2021.07",
    summary: "현장 실습때 제작한 주성시스템 회사 웹페이지",
    team: "개인",
    stacks: ["html", "css", "javascript"],
    links: {
      demo: "http://www.jusungsys.com/home/main",
    },
  },
];
